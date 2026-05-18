// ============================================================
// Tour de Cicle Indoor - Etapa FTP 20'
// Lógica do site: vídeo obrigatório, chat com busca em PT-BR
// ============================================================

(function () {
  'use strict';

  // ---------- ETAPA 1: Vídeo obrigatório ----------
  const YOUTUBE_ID = '6Rz1mrWwvO0';
  const btnPlay = document.getElementById('btn-play-video');
  const videoFrame = document.getElementById('video-frame');
  const unlockRow = document.getElementById('unlock-row');
  const btnUnlock = document.getElementById('btn-unlock');
  const stageChat = document.getElementById('stage-chat');

  btnPlay.addEventListener('click', function () {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
    iframe.title = 'Tour de Cicle - Vídeo da Etapa';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    videoFrame.innerHTML = '';
    videoFrame.appendChild(iframe);
    unlockRow.hidden = false;
    unlockRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  btnUnlock.addEventListener('click', function () {
    stageChat.hidden = false;
    setTimeout(function () {
      stageChat.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('chat-input').focus();
      // Mensagem inicial do Cicle, apenas na primeira abertura
      if (!chatLog.dataset.welcomed) {
        chatLog.dataset.welcomed = '1';
        addMsg('bot', 'Bem-vindo à etapa <strong>FTP 20 minutos</strong> do Tour de Cicle Indoor! Sou o <strong>Cicle</strong>. Me pergunte qualquer coisa sobre os atletas, academias ou rankings da etapa.');
      }
    }, 80);
  });

  // ---------- ETAPA 2: Chat ----------
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatLog = document.getElementById('chat-log');
  const chips = document.getElementById('suggestion-chips');

  chips.addEventListener('click', function (e) {
    const b = e.target.closest('.chip');
    if (!b) return;
    chatInput.value = b.dataset.q;
    chatForm.requestSubmit();
  });

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (!q) return;
    addMsg('user', q);
    chatInput.value = '';
    setTimeout(function () {
      const resp = responder(q);
      addMsg('bot', resp);
      chatLog.scrollTop = chatLog.scrollHeight;
    }, 220);
  });

  function addMsg(role, html) {
    if (role === 'user') {
      const el = document.createElement('div');
      el.className = 'msg user';
      el.textContent = html;
      chatLog.appendChild(el);
    } else {
      const row = document.createElement('div');
      row.className = 'msg-row';
      const avatar = document.createElement('div');
      avatar.className = 'msg-avatar';
      avatar.setAttribute('aria-label', 'Cicle');
      const bubble = document.createElement('div');
      bubble.className = 'msg bot';
      bubble.innerHTML = html;
      row.appendChild(avatar);
      row.appendChild(bubble);
      chatLog.appendChild(row);
    }
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // ============================================================
  // MOTOR DE BUSCA
  // ============================================================

  const NORM = function (s) {
    return (s || '').toString()
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // ---------- Dicionário de academias e categorias ----------
  const ACADEMIAS = {
    'aabb': 'AABB',
    'bt ns': 'BT NS', 'btns': 'BT NS', 'bt n s': 'BT NS', 'nova suica': 'BT NS', 'bt nova suica': 'BT NS',
    'bt tirol': 'BT TIROL', 'tirol': 'BT TIROL', 'bttirol': 'BT TIROL',
    'pulse': 'PULSE'
  };

  const CATEGORIAS = {
    'elite feminino': 'ELITE FEMININO', 'elite f': 'ELITE FEMININO',
    'elite masculino': 'ELITE MASCULINO', 'elite m': 'ELITE MASCULINO',
    'master': 'MASTER',
    'pro feminino': 'PRO FEMININO', 'pro f': 'PRO FEMININO',
    'pro masculino': 'PRO MASCULINO', 'pro m': 'PRO MASCULINO',
    'sub 26': 'SUB-26', 'sub26': 'SUB-26', 'sub-26': 'SUB-26'
  };

  function detectarAcademia(qn) {
    for (const k of Object.keys(ACADEMIAS)) {
      if (qn.includes(k)) return ACADEMIAS[k];
    }
    return null;
  }

  function detectarCategoria(qn) {
    for (const k of Object.keys(CATEGORIAS)) {
      if (qn.includes(k)) return CATEGORIAS[k];
    }
    return null;
  }

  // ---------- Helpers ----------
  function tabelaAtletas(lista, colunas) {
    if (!lista.length) return '<em>Nenhum atleta encontrado.</em>';
    colunas = colunas || ['atleta', 'academia', 'equipe', 'ftp20', 'peso', 'ftpr'];
    const labels = {
      atleta: 'Atleta', academia: 'Academia', equipe: 'Categoria',
      categoria: 'Sexo', ftp20: 'FTP 20', peso: 'Peso (kg)', ftpr: 'FTPr'
    };
    let h = '<table><thead><tr>';
    colunas.forEach(c => h += `<th>${labels[c] || c}</th>`);
    h += '</tr></thead><tbody>';
    lista.forEach(a => {
      h += '<tr>';
      colunas.forEach(c => {
        const v = a[c];
        const num = (typeof v === 'number');
        h += `<td${num ? ' class="num"' : ''}>${formatVal(c, v)}</td>`;
      });
      h += '</tr>';
    });
    h += '</tbody></table>';
    return h;
  }

  function formatVal(col, v) {
    if (v === null || v === undefined || v === '') return '—';
    if (col === 'ftpr') return Number(v).toFixed(2);
    if (col === 'peso') return Number(v).toFixed(1);
    if (col === 'ftp20') return Math.round(Number(v));
    return v;
  }

  // ---------- Pontuação por academia (somando categorias) ----------
  // Regra: em cada categoria, soma o FTPr de todos atletas de cada academia,
  // depois ordena. 1º = 25 pts, 2º = 20, 3º = 17, 4º = 15, 5º = 13.
  function rankingGeralPontos() {
    const cats = Array.from(new Set(ATLETAS.map(a => a.equipe)));
    const pontos = {};
    ATLETAS.forEach(a => { pontos[a.academia] = 0; });

    const detalhes = {};

    cats.forEach(cat => {
      const porAc = {};
      ATLETAS.filter(a => a.equipe === cat).forEach(a => {
        if (!porAc[a.academia]) porAc[a.academia] = 0;
        porAc[a.academia] += (a.ftpr || 0);
      });
      const ord = Object.entries(porAc).sort((a, b) => b[1] - a[1]);
      ord.forEach(([ac, soma], i) => {
        const p = PONTOS_RANKING[i] || 0;
        pontos[ac] = (pontos[ac] || 0) + p;
        if (!detalhes[ac]) detalhes[ac] = [];
        detalhes[ac].push({ cat: cat, soma: soma, posicao: i + 1, pontos: p });
      });
    });

    const ranking = Object.entries(pontos)
      .map(([ac, pts]) => ({ academia: ac, pontos: pts, detalhes: detalhes[ac] }))
      .sort((a, b) => b.pontos - a.pontos);

    return ranking;
  }

  // ---------- Intents ----------
  function responder(q) {
    const qn = NORM(q);

    // 1) Saudações
    if (/^(oi|ola|opa|bom dia|boa tarde|boa noite|hey|hello|e ai|tudo bem)\b/.test(qn)) {
      return 'Oi! Aqui é o Cicle. Posso te ajudar a encontrar qualquer informação dos 78 atletas da etapa FTP 20. Pergunte por nome, academia, categoria, peso, FTP ou FTPr. Se preferir, clique numa das sugestões aí em cima.';
    }

    // 1.1) Quem é você
    if (/(quem (e|eh) voce|quem e voce|qual seu nome|como voce se chama|voce e (o )?mascote|voce e (um|uma)? ?(robo|ia))/.test(qn)) {
      return 'Sou o <strong>Cicle</strong>, mascote oficial do Tour de Cicle Indoor. Conheço cada atleta dessa etapa de cor. É só perguntar.';
    }

    // 1.2) Agradecimentos
    if (/^(obrigado|obrigada|valeu|brigado|brigada|thanks|tks)\b/.test(qn)) {
      return 'Imagina! Pode continuar perguntando o quanto quiser. 🚴';
    }

    // 2) Ranking geral / pontuação / etapa
    if (/(ranking geral|geral da etapa|pontos? da etapa|pontuacao geral|placar geral|quem ganhou a etapa|vencedor da etapa|resultado geral)/.test(qn)) {
      const r = rankingGeralPontos();
      let h = '<strong>Ranking geral da etapa</strong> (soma de pontos por academia, considerando o FTPr somado em cada categoria):<br><br>';
      h += '<table><thead><tr><th>Pos</th><th>Academia</th><th>Pontos</th></tr></thead><tbody>';
      r.forEach((row, i) => {
        h += `<tr><td><span class="pos pos-${i+1}">${i+1}</span></td><td><strong>${row.academia}</strong></td><td class="num">${row.pontos}</td></tr>`;
      });
      h += '</tbody></table>';
      return h;
    }

    // 3) Quantos atletas por academia
    if (/quantos? atletas.*(cada academia|por academia|tem cada)/.test(qn) || /atletas por academia/.test(qn)) {
      const cont = {};
      ATLETAS.forEach(a => { cont[a.academia] = (cont[a.academia] || 0) + 1; });
      let h = '<strong>Atletas por academia:</strong><table><thead><tr><th>Academia</th><th>Atletas</th></tr></thead><tbody>';
      Object.entries(cont).sort((a, b) => b[1] - a[1]).forEach(([ac, n]) => {
        h += `<tr><td><strong>${ac}</strong></td><td class="num">${n}</td></tr>`;
      });
      h += '</tbody></table>';
      return h;
    }

    // 4) Quantos atletas por categoria
    if (/quantos? atletas.*(cada categoria|por categoria)/.test(qn) || /atletas por categoria/.test(qn)) {
      const cont = {};
      ATLETAS.forEach(a => { cont[a.equipe] = (cont[a.equipe] || 0) + 1; });
      let h = '<strong>Atletas por categoria:</strong><table><thead><tr><th>Categoria</th><th>Atletas</th></tr></thead><tbody>';
      Object.entries(cont).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => {
        h += `<tr><td><strong>${c}</strong></td><td class="num">${n}</td></tr>`;
      });
      h += '</tbody></table>';
      return h;
    }

    // 5) Quantos atletas total
    if (/quantos? atletas/.test(qn) && !detectarAcademia(qn) && !detectarCategoria(qn)) {
      return `<strong>${ATLETAS.length} atletas</strong> participaram da etapa, distribuídos entre 4 academias e 6 categorias.`;
    }

    const academia = detectarAcademia(qn);
    const categoria = detectarCategoria(qn);

    // 6) Quantos atletas tem a academia X
    if (/quantos? atletas/.test(qn) && academia) {
      const n = ATLETAS.filter(a => a.academia === academia).length;
      return `A academia <strong>${academia}</strong> tem <strong>${n} atletas</strong> nesta etapa.`;
    }

    // 7) Quantos atletas tem a categoria X
    if (/quantos? atletas/.test(qn) && categoria) {
      const n = ATLETAS.filter(a => a.equipe === categoria).length;
      return `A categoria <strong>${categoria}</strong> tem <strong>${n} atletas</strong>.`;
    }

    // 8) Maior / menor / top FTP ou FTPr (com filtros de academia/categoria)
    const buscaMaior = /(maior|melhor|top|primeiro|1o|1º|vencedor|campeao|ganhou)/.test(qn);
    const buscaMenor = /(menor|pior|ultimo|ultima|menos)/.test(qn);
    const eFTPr = /(ftpr|ftp r|ftp\/peso|relativo|por peso|wkg|w\/kg)/.test(qn);
    const eFTP = /ftp\b/.test(qn) && !eFTPr;
    const ePeso = /\bpeso\b/.test(qn);

    if ((buscaMaior || buscaMenor) && (eFTP || eFTPr || ePeso)) {
      let lista = ATLETAS.slice();
      if (academia) lista = lista.filter(a => a.academia === academia);
      if (categoria) lista = lista.filter(a => a.equipe === categoria);
      if (!lista.length) return 'Nenhum atleta nesse filtro.';

      const campo = eFTPr ? 'ftpr' : (ePeso ? 'peso' : 'ftp20');
      lista.sort((a, b) => (b[campo] || 0) - (a[campo] || 0));
      if (buscaMenor) lista.reverse();

      const top = lista.slice(0, 5);
      const filtro = [academia, categoria].filter(Boolean).join(' / ') || 'geral';
      const labelCampo = eFTPr ? 'FTPr' : (ePeso ? 'Peso' : 'FTP 20');
      const direcao = buscaMenor ? 'menor' : 'maior';
      let h = `<strong>${direcao.toUpperCase()} ${labelCampo}</strong> · ${filtro}:<br>`;
      h += tabelaAtletas(top, ['atleta', 'academia', 'equipe', campo]);
      return h;
    }

    // 9) Ranking ordenado de uma categoria por FTP ou FTPr
    if (/(ranking|classificacao|colocacao|posicao|ordem|melhores|piores)/.test(qn) && (categoria || academia)) {
      let lista = ATLETAS.slice();
      if (academia) lista = lista.filter(a => a.academia === academia);
      if (categoria) lista = lista.filter(a => a.equipe === categoria);
      const campo = eFTP ? 'ftp20' : 'ftpr';
      lista.sort((a, b) => (b[campo] || 0) - (a[campo] || 0));
      const filtro = [academia, categoria].filter(Boolean).join(' / ');
      const labelCampo = campo === 'ftpr' ? 'FTPr' : 'FTP 20';
      let h = `<strong>Ranking por ${labelCampo}</strong> · ${filtro}:<br>`;
      h += tabelaAtletas(lista, ['atleta', 'academia', 'equipe', campo]);
      return h;
    }

    // 10) Peso médio ou FTP médio (categoria ou academia)
    if (/(media|medio|media de)/.test(qn) && (categoria || academia)) {
      let lista = ATLETAS.slice();
      if (academia) lista = lista.filter(a => a.academia === academia);
      if (categoria) lista = lista.filter(a => a.equipe === categoria);
      const filtro = [academia, categoria].filter(Boolean).join(' / ');
      if (!lista.length) return 'Nenhum atleta nesse filtro.';
      const avg = (campo) => (lista.reduce((s, a) => s + (a[campo] || 0), 0) / lista.length);
      let h = `<strong>Médias · ${filtro}</strong> (${lista.length} atletas):<table><tbody>`;
      if (/peso/.test(qn)) h += `<tr><td><strong>Peso</strong></td><td class="num">${avg('peso').toFixed(1)} kg</td></tr>`;
      if (/ftp/.test(qn) || !/peso/.test(qn)) {
        h += `<tr><td><strong>FTP 20</strong></td><td class="num">${avg('ftp20').toFixed(1)} W</td></tr>`;
        h += `<tr><td><strong>FTPr</strong></td><td class="num">${avg('ftpr').toFixed(2)} W/kg</td></tr>`;
      }
      h += '</tbody></table>';
      return h;
    }

    // 11) Lista de atletas de uma academia
    if (/(liste|lista|mostre|mostra|quais|todos)/.test(qn) && academia && !categoria) {
      const lista = ATLETAS.filter(a => a.academia === academia);
      let h = `<strong>${lista.length} atletas da ${academia}:</strong>`;
      h += tabelaAtletas(lista.sort((a, b) => b.ftpr - a.ftpr), ['atleta', 'equipe', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 12) Lista de atletas de uma categoria
    if (/(liste|lista|mostre|mostra|quais|todos)/.test(qn) && categoria && !academia) {
      const lista = ATLETAS.filter(a => a.equipe === categoria);
      let h = `<strong>${lista.length} atletas da categoria ${categoria}:</strong>`;
      h += tabelaAtletas(lista.sort((a, b) => b.ftpr - a.ftpr), ['atleta', 'academia', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 13) Atletas de academia + categoria
    if (academia && categoria) {
      const lista = ATLETAS.filter(a => a.academia === academia && a.equipe === categoria);
      let h = `<strong>${academia} · ${categoria}</strong> (${lista.length} atletas):`;
      h += tabelaAtletas(lista.sort((a, b) => b.ftpr - a.ftpr), ['atleta', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 14) Soma de FTPr por academia em uma categoria (replica imagem que o usuário enviou)
    if (/(soma|somatorio|total).*(ftpr|ftp r|categoria)/.test(qn) && categoria) {
      const porAc = {};
      ATLETAS.filter(a => a.equipe === categoria).forEach(a => {
        porAc[a.academia] = (porAc[a.academia] || 0) + a.ftpr;
      });
      const ord = Object.entries(porAc).sort((a, b) => b[1] - a[1]);
      let h = `<strong>Soma de FTPr · ${categoria}</strong>:<table><thead><tr><th>Pos</th><th>Academia</th><th>Soma FTPr</th><th>Pontos</th></tr></thead><tbody>`;
      ord.forEach(([ac, s], i) => {
        h += `<tr><td><span class="pos pos-${i+1}">${i+1}</span></td><td><strong>${ac}</strong></td><td class="num">${s.toFixed(2)}</td><td class="num">${PONTOS_RANKING[i] || 0}</td></tr>`;
      });
      h += '</tbody></table>';
      return h;
    }

    // 15) Busca por nome de atleta
    const matchPorNome = buscarPorNome(q);
    if (matchPorNome && matchPorNome.length === 1) {
      return fichaAtleta(matchPorNome[0]);
    }
    if (matchPorNome && matchPorNome.length > 1 && matchPorNome.length <= 12) {
      let h = `Encontrei <strong>${matchPorNome.length} atletas</strong> que combinam:`;
      h += tabelaAtletas(matchPorNome, ['atleta', 'academia', 'equipe', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 16) Só com categoria
    if (categoria && !academia) {
      const lista = ATLETAS.filter(a => a.equipe === categoria).sort((a, b) => b.ftpr - a.ftpr);
      let h = `<strong>Categoria ${categoria}</strong> (${lista.length} atletas, ordenados por FTPr):`;
      h += tabelaAtletas(lista, ['atleta', 'academia', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 17) Só com academia
    if (academia && !categoria) {
      const lista = ATLETAS.filter(a => a.academia === academia).sort((a, b) => b.ftpr - a.ftpr);
      let h = `<strong>Academia ${academia}</strong> (${lista.length} atletas, ordenados por FTPr):`;
      h += tabelaAtletas(lista, ['atleta', 'equipe', 'ftp20', 'peso', 'ftpr']);
      return h;
    }

    // 18) Não entendi: tentar busca livre
    const tokens = qn.split(' ').filter(t => t.length > 2);
    if (tokens.length) {
      const hits = ATLETAS.filter(a => {
        const blob = NORM([a.atleta, a.academia, a.equipe, a.categoria].join(' '));
        return tokens.every(t => blob.includes(t));
      });
      if (hits.length === 1) return fichaAtleta(hits[0]);
      if (hits.length > 0 && hits.length <= 15) {
        let h = `Encontrei <strong>${hits.length} resultados</strong>:`;
        h += tabelaAtletas(hits, ['atleta', 'academia', 'equipe', 'ftp20', 'peso', 'ftpr']);
        return h;
      }
    }

    return ajudaPadrao();
  }

  function buscarPorNome(q) {
    const qn = NORM(q);
    // Tira palavras-comando comuns
    const limpa = qn.replace(/\b(dados|do|da|de|sobre|qual|quais|me|mostre|mostra|info|informacoes|ficha|atleta|peso|ftp|ftpr|categoria|academia)\b/g, ' ').replace(/\s+/g, ' ').trim();
    if (!limpa) return null;
    const tokens = limpa.split(' ').filter(t => t.length > 2);
    if (!tokens.length) return null;

    const hits = ATLETAS.filter(a => {
      const nome = NORM(a.atleta);
      return tokens.every(t => nome.includes(t));
    });
    return hits;
  }

  function fichaAtleta(a) {
    // Calcular posição na categoria por FTPr
    const mesma = ATLETAS.filter(x => x.equipe === a.equipe).sort((x, y) => y.ftpr - x.ftpr);
    const pos = mesma.findIndex(x => x.atleta === a.atleta) + 1;
    return `<strong>${a.atleta}</strong><table><tbody>
      <tr><td><strong>Academia</strong></td><td>${a.academia}</td></tr>
      <tr><td><strong>Categoria</strong></td><td>${a.equipe}</td></tr>
      <tr><td><strong>Sexo</strong></td><td>${a.categoria}</td></tr>
      <tr><td><strong>FTP 20</strong></td><td class="num">${Math.round(a.ftp20)} W</td></tr>
      <tr><td><strong>Peso</strong></td><td class="num">${a.peso.toFixed(1)} kg</td></tr>
      <tr><td><strong>FTPr</strong></td><td class="num">${a.ftpr.toFixed(2)} W/kg</td></tr>
      <tr><td><strong>Posição na categoria (FTPr)</strong></td><td><span class="pos pos-${pos === 1 ? 1 : 0}">${pos}</span> de ${mesma.length}</td></tr>
    </tbody></table>`;
  }

  function ajudaPadrao() {
    return `Não peguei o que você quis dizer. Tenta um destes formatos comigo:<br><br>
      <strong>Por atleta:</strong> "Dados da Simone Ribeiro", "Bruno Cabral"<br>
      <strong>Por academia:</strong> "Liste os atletas da BT NS", "Quantos atletas tem a PULSE"<br>
      <strong>Por categoria:</strong> "Ranking da Elite Masculino", "Quem teve o maior FTP da Pro Feminino"<br>
      <strong>Por métrica:</strong> "Maior FTPr da Master", "Peso médio do Sub-26"<br>
      <strong>Geral:</strong> "Ranking geral da etapa", "Atletas por academia"`;
  }

})();
