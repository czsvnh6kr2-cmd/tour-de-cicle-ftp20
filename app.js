// ============================================================
// Tour de Cicle Indoor - Chat inteligente
// ============================================================
(function () {
  'use strict';

  // ---------- ETAPA 1: Vídeo ----------
  const YOUTUBE_ID = '6Rz1mrWwvO0';
  const btnPlay = document.getElementById('btn-play-video');
  const videoFrame = document.getElementById('video-frame');
  const unlockRow = document.getElementById('unlock-row');
  const btnUnlock = document.getElementById('btn-unlock');
  const stageChat = document.getElementById('stage-chat');
  const chatLog = document.getElementById('chat-log');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chips = document.getElementById('suggestion-chips');

  btnPlay.addEventListener('click', function () {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
    iframe.title = 'Tour de Cicle - Vídeo da Etapa';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
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
      chatInput.focus();
      if (!chatLog.dataset.welcomed) {
        chatLog.dataset.welcomed = '1';
        addMsg('bot', 'Bem-vindo à competição <strong>Tour de Cicle Indoor</strong>! Sou o <strong>Cicle</strong>. Posso te contar sobre os ' + ATLETAS.length + ' atletas, rankings por prova, pontos individuais e de equipe. Pergunte à vontade!');
      }
    }, 80);
  });

  // ---------- ETAPA 2: Chat ----------
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
      addMsg('bot', responder(q));
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
  // UTILITÁRIOS
  // ============================================================
  const NORM = s => (s || '').toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

  function fmtTime(s) {
    if (!s) return '—';
    return s.replace(/^00:/, '');
  }

  function fmtPts(n) { return n > 0 ? n + ' pts' : '—'; }

  function tbl(rows, headers) {
    let h = '<table><thead><tr>' + headers.map(hh => `<th>${hh}</th>`).join('') + '</tr></thead><tbody>';
    rows.forEach(row => {
      h += '<tr>' + row.map((cell, i) => {
        const isNum = typeof cell === 'number' || (typeof cell === 'string' && /^\d/.test(cell) && i > 0);
        return `<td${isNum ? ' class="num"' : ''}>${cell ?? '—'}</td>`;
      }).join('') + '</tr>';
    });
    return h + '</tbody></table>';
  }

  function posTag(p) {
    if (!p) return '—';
    return `<span class="pos pos-${p === 1 ? 1 : 0}">${p}</span>`;
  }

  // ============================================================
  // DETECÇÃO DE ENTIDADES
  // ============================================================
  const ACMAP = {
    'aabb': 'AABB', 'bt ns': 'BT NS', 'btns': 'BT NS', 'nova suica': 'BT NS',
    'bt tirol': 'BT TIROL', 'tirol': 'BT TIROL', 'pulse': 'PULSE'
  };
  const CATMAP = {
    'elite feminino': 'ELITE FEMININO', 'elite f': 'ELITE FEMININO',
    'elite masculino': 'ELITE MASCULINO', 'elite m': 'ELITE MASCULINO',
    'pro feminino': 'PRO FEMININO', 'pro f': 'PRO FEMININO',
    'pro masculino': 'PRO MASCULINO', 'pro m': 'PRO MASCULINO',
    'master': 'MASTER', 'sub 26': 'SUB-26', 'sub26': 'SUB-26', 'sub-26': 'SUB-26'
  };
  const PROVAMAP = {
    'montanha': 'montanha', 'morro': 'montanha', 'subida': 'montanha',
    'contrarrelogio': 'cr10k', 'contrarrelgio': 'cr10k', 'cr': 'cr10k', '10k': 'cr10k', 'cronometro': 'cr10k',
    'longa': 'ld30k', '30k': 'ld30k', 'longa distancia': 'ld30k', 'fundo': 'ld30k'
  };

  function detectAcademia(qn) {
    for (const [k, v] of Object.entries(ACMAP)) if (qn.includes(k)) return v;
    return null;
  }
  function detectCat(qn) {
    for (const [k, v] of Object.entries(CATMAP)) if (qn.includes(k)) return v;
    return null;
  }
  function detectProva(qn) {
    for (const [k, v] of Object.entries(PROVAMAP)) if (qn.includes(k)) return v;
    return null;
  }
  function detectSexo(qn) {
    if (/\b(masculino|homem|homens|masc|men)\b/.test(qn)) return 'Masculino';
    if (/\b(feminino|mulher|mulheres|fem|women)\b/.test(qn)) return 'Feminino';
    return null;
  }

  function buscarAtleta(q) {
    const qn = NORM(q).replace(/\b(dados|do|da|de|sobre|qual|quais|me|mostre|mostra|info|informacoes|ficha|atleta|peso|ftp|categoria|academia|resultado|resultados)\b/g, ' ').replace(/\s+/g, ' ').trim();
    const tokens = qn.split(' ').filter(t => t.length > 2);
    if (!tokens.length) return [];
    return ATLETAS.filter(a => {
      const nome = NORM(a.atleta);
      return tokens.every(t => nome.includes(t));
    });
  }

  // ============================================================
  // FICHA DO ATLETA
  // ============================================================
  function fichaAtleta(a) {
    const provas_str = {
      montanha: fmtTime(a.montanha),
      cr10k: fmtTime(a.cr10k),
      ld30k: fmtTime(a.ld30k),
    };
    let h = `<strong>${a.atleta}</strong> · ${a.academia} · ${a.equipe}<br><br>`;

    // Resultados por prova
    h += '<strong>Resultados por prova:</strong>';
    h += tbl([
      ['Montanha', provas_str.montanha, a.pos_montanha ? posTag(a.pos_montanha) + ' na categoria' : '—', fmtPts(a.pontos_montanha)],
      ['Contrarrelógio 10k', provas_str.cr10k, a.pos_cr10k ? posTag(a.pos_cr10k) + ' na categoria' : '—', fmtPts(a.pontos_cr10k)],
      ['Longa Distância 30k', provas_str.ld30k, a.pos_ld30k ? posTag(a.pos_ld30k) + ' na categoria' : '—', fmtPts(a.pontos_ld30k)],
    ], ['Prova', 'Tempo', 'Posição', 'Pontos']);

    // Tempo total e ranking geral
    h += `<br><strong>Tempo total:</strong> ${fmtTime(a.tempo_total)} | <strong>Provas completadas:</strong> ${a.provas}<br>`;
    h += `<strong>Pontos acumulados:</strong> ${a.pontos_total} pts<br>`;

    if (a.completo) {
      h += `<strong>Ranking geral (${a.categoria}, 3 provas):</strong> ${posTag(a.pos_geral)} de ${a.categoria === 'Masculino' ? RANKING_GERAL_MASC.length : RANKING_GERAL_FEM.length}<br>`;
      h += `<strong>Ranking na categoria ${a.equipe}:</strong> ${posTag(a.pos_geral_categoria)}`;
    } else {
      h += `<em>Não elegível para ranking geral por tempo (${a.provas} de 3 provas completadas). Participa do ranking de pontos.</em>`;
    }
    return h;
  }

  // ============================================================
  // RANKING POR PROVA (atletas individuais numa categoria)
  // ============================================================
  function rankingProva(cat, prova) {
    const campo_s = prova + '_s';
    const campo = prova;
    let lista = ATLETAS.filter(a => a.equipe === cat && a[campo_s] && a[campo_s] > 0);
    lista.sort((a, b) => a[campo_s] - b[campo_s]);
    const provaLabel = { montanha: 'Montanha', cr10k: 'Contrarrelógio 10k', ld30k: 'Longa Distância 30k' }[prova];
    let h = `<strong>Ranking ${provaLabel} · ${cat}</strong> (${lista.length} atletas):<br>`;
    h += tbl(lista.map((a, i) => [posTag(i + 1), a.atleta, a.academia, fmtTime(a[campo]), fmtPts(i < PONTOS_RANKING.length ? PONTOS_RANKING[i] : 0)]), ['Pos', 'Atleta', 'Academia', 'Tempo', 'Pontos']);
    return h;
  }

  // ============================================================
  // RANKING GERAL POR TEMPO (3 provas completas)
  // ============================================================
  function rankingGeralTempo(sexo, cat) {
    let lista;
    if (cat) {
      lista = ATLETAS.filter(a => a.equipe === cat && a.completo);
    } else {
      lista = ATLETAS.filter(a => a.completo && a.categoria === sexo);
    }
    lista.sort((a, b) => a.tempo_total_s - b.tempo_total_s);
    const titulo = cat ? `Ranking geral · ${cat} · apenas 3 provas` : `Ranking geral · ${sexo} · todas as categorias`;
    let h = `<strong>${titulo}</strong> (${lista.length} atletas):<br>`;
    h += tbl(lista.map((a, i) => [posTag(i + 1), a.atleta, a.academia, a.equipe, fmtTime(a.tempo_total)]), ['Pos', 'Atleta', 'Academia', 'Categoria', 'Tempo Total']);
    return h;
  }

  // ============================================================
  // RANKING DE PONTOS INDIVIDUAIS
  // ============================================================
  function rankingPontos(cat, academia) {
    let lista = ATLETAS.slice();
    if (cat) lista = lista.filter(a => a.equipe === cat);
    if (academia) lista = lista.filter(a => a.academia === academia);
    lista = lista.filter(a => a.pontos_total > 0);
    lista.sort((a, b) => b.pontos_total - a.pontos_total);
    const filtro = [academia, cat].filter(Boolean).join(' / ') || 'geral';
    let h = `<strong>Ranking de pontos individuais · ${filtro}</strong>:<br>`;
    h += tbl(lista.map((a, i) => [posTag(i + 1), a.atleta, a.academia, a.equipe, a.pontos_montanha || '—', a.pontos_cr10k || '—', a.pontos_ld30k || '—', `<strong>${a.pontos_total}</strong>`]),
      ['Pos', 'Atleta', 'Academia', 'Categoria', 'Mont.', 'CR 10k', 'LD 30k', 'Total']);
    return h;
  }

  // ============================================================
  // PONTUAÇÃO DE EQUIPES
  // ============================================================
  function rankingEquipe(cat, prova) {
    if (!PONTOS_EQUIPE_CAT[cat]) return 'Categoria não encontrada.';
    const provaLabel = { montanha: 'Montanha', cr10k: 'Contrarrelógio 10k', ld30k: 'Longa Distância 30k' }[prova] || prova;
    const dados = PONTOS_EQUIPE_CAT[cat][provaLabel];
    if (!dados) return 'Dados de equipe não disponíveis.';
    const rows = Object.entries(dados)
      .filter(([, d]) => d.atletas && d.atletas.length)
      .sort((a, b) => (a[1].soma_s || 9999999) - (b[1].soma_s || 9999999));
    let h = `<strong>Equipes · ${provaLabel} · ${cat}</strong>:<br>`;
    h += tbl(rows.map(([ac, d]) => [posTag(d.posicao), ac, d.soma_str || '—', d.atletas.join(', '), fmtPts(d.pontos)]),
      ['Pos', 'Academia', 'Soma de Tempo', 'Atletas usados', 'Pontos']);
    return h;
  }

  function rankingEquipeTotal() {
    const ord = Object.entries(PONTOS_EQUIPE_TOTAL).sort((a, b) => b[1] - a[1]);
    let h = '<strong>Ranking geral de equipes · soma de pontos em todas as categorias e provas</strong>:<br>';
    h += tbl(ord.map(([ac, pts], i) => [posTag(i + 1), ac, pts]), ['Pos', 'Academia', 'Pontos']);
    return h;
  }

  // ============================================================
  // MOTOR DE RESPOSTA
  // ============================================================
  function responder(q) {
    const qn = NORM(q);
    const academia = detectAcademia(qn);
    const cat = detectCat(qn);
    const prova = detectProva(qn);
    const sexo = detectSexo(qn);

    // Saudações
    if (/^(oi|ola|opa|bom dia|boa tarde|boa noite|hey|e ai|tudo bem)\b/.test(qn))
      return 'Oi! Sou o Cicle. Pergunte sobre qualquer atleta, ranking, pontos ou resultado de prova.';
    if (/(quem (e|eh) voce|seu nome|como voce se chama|voce e o mascote)/.test(qn))
      return 'Sou o <strong>Cicle</strong>, mascote oficial do Tour de Cicle Indoor. Conheço cada atleta, cada tempo e cada ponto desta competição.';
    if (/^(obrigado|obrigada|valeu|brigado)\b/.test(qn))
      return 'Imagina! Pode continuar perguntando. 🚴';

    // Quantos atletas
    if (/quantos? atletas/.test(qn) && !academia && !cat)
      return `São <strong>${ATLETAS.length} atletas</strong> no total. Destes, <strong>${ATLETAS.filter(a => a.completo).length}</strong> completaram 3 provas e participam do ranking geral por tempo.`;

    // Ranking geral de equipes
    if (/(ranking geral.*equip|pontos? (das?|de) equip|equip.*geral|placar.*equip|classificacao.*equip|quem ganhou.*equip)/.test(qn))
      return rankingEquipeTotal();

    // Ranking geral individual por tempo
    if (/(ranking geral|classificacao geral|tempo total|geral por tempo|posicao geral|quem ganhou geral)/.test(qn)) {
      if (cat) return rankingGeralTempo(null, cat);
      const s = sexo || (/(masc|hom)/.test(qn) ? 'Masculino' : /(fem|mulh)/.test(qn) ? 'Feminino' : null);
      if (s) return rankingGeralTempo(s, null);
      return rankingGeralTempo('Masculino', null) + '<br><br>' + rankingGeralTempo('Feminino', null);
    }

    // Ranking de pontuação individual
    if (/(ranking.*pontos?|pontos?.*ranking|mais pontos?|pontuacao|classificacao.*pontos?)/.test(qn))
      return rankingPontos(cat, academia);

    // Ranking de equipe por categoria e prova
    if (academia === null && cat && prova && /(equip|time|academia|time)/.test(qn))
      return rankingEquipe(cat, prova);

    // Ranking individual por prova numa categoria
    if (cat && prova && !academia)
      return rankingProva(cat, prova);

    // Ranking de prova sem categoria (por sexo)
    if (prova && !cat && sexo) {
      const cats = sexo === 'Masculino'
        ? ['ELITE MASCULINO', 'PRO MASCULINO', 'MASTER', 'SUB-26']
        : ['ELITE FEMININO', 'PRO FEMININO', 'MASTER', 'SUB-26'];
      return cats.map(c => rankingProva(c, prova)).join('<br><br>');
    }

    // Todos os atletas de uma academia
    if (academia && !cat && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = ATLETAS.filter(a => a.academia === academia).sort((a, b) => b.pontos_total - a.pontos_total);
      let h = `<strong>${academia}</strong> · ${lista.length} atletas (ordenados por pontos):<br>`;
      h += tbl(lista.map(a => [a.atleta, a.equipe, a.provas, a.pontos_total || '0']),
        ['Atleta', 'Categoria', 'Provas', 'Pontos']);
      return h;
    }

    // Todos os atletas de uma categoria
    if (cat && !academia && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = ATLETAS.filter(a => a.equipe === cat).sort((a, b) => b.pontos_total - a.pontos_total);
      let h = `<strong>${cat}</strong> · ${lista.length} atletas:<br>`;
      h += tbl(lista.map(a => [a.atleta, a.academia, a.provas, a.pontos_total || '0']),
        ['Atleta', 'Academia', 'Provas', 'Pontos']);
      return h;
    }

    // Busca por nome de atleta
    const hits = buscarAtleta(q);
    if (hits.length === 1) return fichaAtleta(hits[0]);
    if (hits.length > 1 && hits.length <= 10) {
      let h = `Encontrei <strong>${hits.length} atletas</strong>:<br>`;
      h += tbl(hits.map(a => [a.atleta, a.academia, a.equipe, a.provas, a.pontos_total || '0']),
        ['Atleta', 'Academia', 'Categoria', 'Provas', 'Pontos']);
      return h;
    }

    // Só academia
    if (academia && !cat) {
      const lista = ATLETAS.filter(a => a.academia === academia);
      const completos = lista.filter(a => a.completo).length;
      const pts = lista.reduce((s, a) => s + a.pontos_total, 0);
      const ptseq = PONTOS_EQUIPE_TOTAL[academia] || 0;
      return `<strong>${academia}</strong>: ${lista.length} atletas, ${completos} elegíveis para ranking geral.<br><strong>Pontos individuais:</strong> ${pts} | <strong>Pontos de equipe:</strong> ${ptseq}<br><br>Para ver a lista completa, pergunte "Liste os atletas da ${academia}".`;
    }

    // Só categoria
    if (cat && !academia) return rankingGeralTempo(null, cat);

    return ajuda();
  }

  function ajuda() {
    return `Não entendi bem. Tenta assim:<br><br>
<strong>Atleta:</strong> "Dados do Omar Dantas", "Simone Ribeiro"<br>
<strong>Ranking geral:</strong> "Ranking geral masculino", "Ranking geral Elite Feminino"<br>
<strong>Por prova:</strong> "Ranking montanha Elite Masculino", "Ranking 30k Pro Feminino"<br>
<strong>Pontos:</strong> "Ranking de pontos Elite Masculino", "Pontos da BT NS"<br>
<strong>Equipes:</strong> "Ranking geral de equipes", "Equipes na Montanha Elite Masculino"<br>
<strong>Academia:</strong> "Liste atletas da AABB", "Quantos atletas tem a PULSE"`;
  }
})();
