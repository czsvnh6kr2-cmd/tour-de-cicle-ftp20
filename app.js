// Tour de Cicle Indoor - Chat v3
// Provas disponíveis: FTP Final, Montanha, Longa Distância 30k
// Contrarrelógio 10k: sem dados ainda
(function () {
  'use strict';

  const YOUTUBE_ID = '6Rz1mrWwvO0';
  const btnPlay    = document.getElementById('btn-play-video');
  const videoFrame = document.getElementById('video-frame');
  const unlockRow  = document.getElementById('unlock-row');
  const btnUnlock  = document.getElementById('btn-unlock');
  const stageChat  = document.getElementById('stage-chat');
  const chatLog    = document.getElementById('chat-log');
  const chatForm   = document.getElementById('chat-form');
  const chatInput  = document.getElementById('chat-input');
  const chips      = document.getElementById('suggestion-chips');

  btnPlay.addEventListener('click', function () {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + YOUTUBE_ID + '?autoplay=1&rel=0';
    iframe.title = 'Tour de Cicle';
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
        addMsg('bot', 'Olá! Sou o <strong>Cicle</strong>, mascote do Tour de Cicle Indoor. Posso te contar sobre os <strong>' + ATLETAS.length + ' atletas</strong>, rankings por prova, pontos individuais e de equipe.<br><br>⚠️ <em>Pontos parciais — Contrarrelógio 10k ainda não lançado.</em>');
      }
    }, 80);
  });

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
    setTimeout(function () { addMsg('bot', responder(q)); }, 220);
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
      const av  = document.createElement('div');
      av.className = 'msg-avatar';
      const bub = document.createElement('div');
      bub.className = 'msg bot';
      bub.innerHTML = html;
      row.appendChild(av);
      row.appendChild(bub);
      chatLog.appendChild(row);
    }
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // ── Utilitários ─────────────────────────────────────────────
  const NORM = s => (s||'').toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();

  function fmtT(s) { return s ? s.replace(/^00:/,'') : '—'; }

  function tbl(rows, headers) {
    let h = '<table><thead><tr>' + headers.map(x=>'<th>'+x+'</th>').join('') + '</tr></thead><tbody>';
    rows.forEach(r => {
      h += '<tr>' + r.map((c,i)=>{
        const num = i>0 && (typeof c==='number'||(typeof c==='string'&&/^\d/.test(c)&&!c.includes('<')));
        return '<td'+(num?' class="num"':'')+'>'+( c??'—')+'</td>';
      }).join('') + '</tr>';
    });
    return h + '</tbody></table>';
  }

  function pos(p) {
    if (!p) return '—';
    return '<span class="pos pos-'+(p===1?'1':'0')+'">'+p+'</span>';
  }

  const AVISO = '<br><br><small>⚠️ <em>Pontos parciais — Contrarrelógio 10k ainda não lançado.</em></small>';

  // ── Detecção de entidades ────────────────────────────────────

  // Categorias que têm sexo no nome não precisam de filtro adicional
  // MASTER e SUB-26 têm os dois sexos — dependem do campo 'categoria'
  const CATMAP = {
    'elite feminino' : 'ELITE FEMININO',
    'elite f'        : 'ELITE FEMININO',
    'elite masculino': 'ELITE MASCULINO',
    'elite m'        : 'ELITE MASCULINO',
    'pro feminino'   : 'PRO FEMININO',
    'pro f'          : 'PRO FEMININO',
    'pro masculino'  : 'PRO MASCULINO',
    'pro m'          : 'PRO MASCULINO',
    'master'         : 'MASTER',
    'sub 26'         : 'SUB-26',
    'sub26'          : 'SUB-26',
    'sub-26'         : 'SUB-26',
  };

  const ACMAP = {
    'aabb'      : 'AABB',
    'bt ns'     : 'BT NS',
    'btns'      : 'BT NS',
    'nova suica': 'BT NS',
    'bt tirol'  : 'BT TIROL',
    'tirol'     : 'BT TIROL',
    'pulse'     : 'PULSE',
  };

  const PROVAMAP = {
    'ftp final'    : 'ftp_final',
    'ftp'          : 'ftp_final',
    'montanha'     : 'montanha',
    'morro'        : 'montanha',
    'subida'       : 'montanha',
    'longa distancia': 'ld30k',
    'longa'        : 'ld30k',
    '30k'          : 'ld30k',
    'fundo'        : 'ld30k',
  };

  const PROVA_LABEL = {
    'ftp_final': 'FTP Final',
    'montanha' : 'Montanha',
    'ld30k'    : 'Longa Distância 30k',
  };

  // Categorias mistas (sem sexo no nome)
  const CAT_MISTA = ['MASTER', 'SUB-26'];

  function detCat(qn) {
    // Detectar na ordem mais longa primeiro para evitar "pro" capturar "pro feminino"
    const keys = Object.keys(CATMAP).sort((a,b) => b.length - a.length);
    for (const k of keys) if (qn.includes(k)) return CATMAP[k];
    return null;
  }

  function detAc(qn) {
    for (const [k,v] of Object.entries(ACMAP)) if (qn.includes(k)) return v;
    return null;
  }

  function detProva(qn) {
    const keys = Object.keys(PROVAMAP).sort((a,b) => b.length - a.length);
    for (const k of keys) if (qn.includes(k)) return PROVAMAP[k];
    return null;
  }

  // Detecta sexo explícito na query
  function detSexo(qn) {
    if (/(masculino|homem|homens|\bmasc\b|\bmasculinos\b)/.test(qn)) return 'Masculino';
    if (/(feminino|mulher|mulheres|\bfem\b|\bfemininas\b)/.test(qn)) return 'Feminino';
    return null;
  }

  // Filtra lista de atletas respeitando: categoria, sexo (quando fornecido),
  // e para categorias com sexo no nome ignora o parâmetro sexo (já está implícito)
  function filtrarAtletas(cat, sexo) {
    return ATLETAS.filter(a => {
      if (cat && a.equipe !== cat) return false;
      // Para Master e Sub-26 o sexo precisa ser filtrado separadamente
      if (sexo && CAT_MISTA.includes(cat)) {
        if (a.categoria !== sexo) return false;
      }
      return true;
    });
  }

  // Monta rótulo legível para o grupo
  function rotuloGrupo(cat, sexo) {
    if (!cat) return sexo || 'Geral';
    if (CAT_MISTA.includes(cat) && sexo) return cat + ' ' + sexo;
    return cat;
  }

  // ── Busca por nome ───────────────────────────────────────────
  function buscarAtleta(q) {
    const qn = NORM(q)
      .replace(/\b(dados|do|da|de|sobre|qual|quais|me|mostre|info|ficha|atleta|resultado|resultados|pontos|posicao|ranking)\b/g,' ')
      .replace(/\s+/g,' ').trim();
    const tokens = qn.split(' ').filter(t=>t.length>2);
    if (!tokens.length) return [];
    return ATLETAS.filter(a => tokens.every(t => NORM(a.atleta).includes(t)));
  }

  // ── Ficha individual ─────────────────────────────────────────
  function fichaAtleta(a) {
    let h = '<strong>'+a.atleta+'</strong> · '+a.academia+' · '+rotuloGrupo(a.equipe, a.categoria)+'<br><br>';
    h += '<strong>Resultados por prova:</strong>';
    h += tbl([
      ['FTP Final',           fmtT(a.ftp_final), a.pos_ftp      ? pos(a.pos_ftp)+'º'      : '—', a.pontos_ftp      ||'—'],
      ['Montanha',            fmtT(a.montanha),  a.pos_montanha ? pos(a.pos_montanha)+'º' : '—', a.pontos_montanha ||'—'],
      ['Longa Distância 30k', fmtT(a.ld30k),     a.pos_ld30k    ? pos(a.pos_ld30k)+'º'    : '—', a.pontos_ld30k    ||'—'],
      ['Contrarrelógio 10k',  '—',               '—',                                             '(sem dados ainda)'],
    ], ['Prova','Tempo','Pos. na categoria','Pontos']);
    h += '<br><strong>Tempo total:</strong> '+fmtT(a.tempo_total)
       + ' &nbsp;|&nbsp; <strong>Provas:</strong> '+a.provas
       + ' &nbsp;|&nbsp; <strong>Pontos:</strong> '+a.pontos_total;
    if (a.completo) {
      const tot = a.categoria==='Masculino' ? RANKING_GERAL_MASC.length : RANKING_GERAL_FEM.length;
      h += '<br><strong>Ranking geral ('+a.categoria+'):</strong> '+pos(a.pos_geral)+'º de '+tot;
      h += ' &nbsp;|&nbsp; <strong>Ranking '+rotuloGrupo(a.equipe,a.categoria)+':</strong> '+pos(a.pos_geral_categoria)+'º';
    } else {
      h += '<br><em>Sem ranking por tempo ('+a.provas+'/3 provas). Participa do ranking de pontos.</em>';
    }
    return h + AVISO;
  }

  // ── Ranking individual por prova ─────────────────────────────
  function rankingProva(cat, prova, sexo) {
    const campo_s = prova+'_s';
    const temDado = prova === 'ftp_final' ? a => a[campo_s] !== null && a[campo_s] !== undefined : a => a[campo_s] && a[campo_s] > 0;
    let lista = filtrarAtletas(cat, sexo).filter(temDado);
    lista.sort((a,b) => a[campo_s] - b[campo_s]);
    const rotulo = rotuloGrupo(cat, sexo);
    let h = '<strong>Ranking '+PROVA_LABEL[prova]+' · '+rotulo+'</strong> ('+lista.length+' atletas):<br>';
    h += tbl(lista.map((a,i) => [pos(i+1), a.atleta, a.academia, fmtT(a[prova]), PONTOS_RANKING[i]||'—']),
      ['Pos','Atleta','Academia','Tempo','Pontos']);
    return h;
  }

  // ── Ranking geral por tempo (apenas 3 provas) ────────────────
  function rankingGeralTempo(cat, sexo) {
    let lista = filtrarAtletas(cat, sexo).filter(a => a.completo);
    lista.sort((a,b) => a.tempo_total_s - b.tempo_total_s);
    const rotulo = cat ? rotuloGrupo(cat, sexo) : (sexo ? sexo+' · todas as categorias' : 'Geral');
    let h = '<strong>Ranking por tempo · '+rotulo+'</strong> · apenas atletas com 3 provas ('+lista.length+'):<br>';
    h += tbl(lista.map((a,i) => [pos(i+1), a.atleta, a.academia, a.equipe, fmtT(a.tempo_total)]),
      ['Pos','Atleta','Academia','Categoria','Tempo Total']);
    return h;
  }

  // ── Ranking de pontos individuais ────────────────────────────
  function rankingPontos(cat, sexo, ac) {
    let lista = filtrarAtletas(cat, sexo).filter(a => a.pontos_total > 0);
    if (ac) lista = lista.filter(a => a.academia === ac);
    lista.sort((a,b) => b.pontos_total - a.pontos_total);
    const rotulo = [ac, rotuloGrupo(cat,sexo)].filter(Boolean).join(' / ') || 'Geral';
    let h = '<strong>Ranking de pontos individuais · '+rotulo+'</strong>:<br>';
    h += tbl(lista.map((a,i) => [pos(i+1), a.atleta, a.academia, rotuloGrupo(a.equipe,a.categoria),
      a.pontos_ftp||'—', a.pontos_montanha||'—', a.pontos_ld30k||'—', '<strong>'+a.pontos_total+'</strong>']),
      ['Pos','Atleta','Academia','Categoria','FTP','Mont.','LD30k','Total']);
    return h + AVISO;
  }

  // ── Ranking de EQUIPES por prova numa categoria ──────────────
  function rankingEquipePorProva(cat, prova, sexo) {
    // Calcula em tempo real para respeitar filtro de sexo
    const campo_s = prova + '_s';
    const rotulo  = rotuloGrupo(cat, sexo);

    // Para categorias mistas com filtro de sexo, precisamos calcular na hora
    // Para as demais, podemos usar PONTOS_EQUIPE_CAT se não há filtro de sexo
    if (!sexo || !CAT_MISTA.includes(cat)) {
      const dados = (PONTOS_EQUIPE_CAT[cat]||{})[PROVA_LABEL[prova]];
      if (!dados) return 'Dados de equipe não disponíveis para '+rotulo+' / '+PROVA_LABEL[prova]+'.';
      const rows = Object.entries(dados)
        .filter(([,d]) => d.atletas && d.atletas.length)
        .sort((a,b) => (a[1].soma_s||9e9) - (b[1].soma_s||9e9));
      let h = '<strong>Ranking de equipes · '+PROVA_LABEL[prova]+' · '+rotulo+'</strong>:<br>';
      h += tbl(rows.map(([ac,d]) => [pos(d.posicao), ac, d.soma_str||'—', d.atletas.join(', '), d.pontos||'—']),
        ['Pos','Academia','Soma de tempo','Atletas','Pontos']);
      return h;
    }

    // Categoria mista com sexo especificado: calcular na hora
    const N = (cat==='MASTER'||cat==='SUB-26') ? 4 : 3;
    const grupos = {};
    filtrarAtletas(cat, sexo).forEach(a => {
      if (a[campo_s] && a[campo_s] > 0) {
        if (!grupos[a.academia]) grupos[a.academia] = [];
        grupos[a.academia].push({nome: a.atleta, t: a[campo_s]});
      }
    });

    const PONTOS = PONTOS_RANKING;
    const linhas = Object.entries(grupos).map(([ac, lista]) => {
      lista.sort((a,b)=>a.t-b.t);
      const top  = lista.slice(0, N);
      const soma = top.reduce((s,x)=>s+x.t, 0);
      const h = Math.floor(soma/3600), m = Math.floor((soma%3600)/60), s = soma%60;
      return { ac, soma, soma_str: `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`, atletas: top.map(x=>x.nome) };
    }).sort((a,b)=>a.soma-b.soma);

    linhas.forEach((l,i) => { l.pontos = PONTOS[i]||0; l.pos = i+1; });

    let h = '<strong>Ranking de equipes · '+PROVA_LABEL[prova]+' · '+rotulo+'</strong>:<br>';
    h += tbl(linhas.map(l => [pos(l.pos), l.ac, l.soma_str, l.atletas.join(', '), l.pontos]),
      ['Pos','Academia','Soma de tempo','Atletas','Pontos']);
    return h;
  }

  // ── Ranking geral de equipes (total de pontos) ───────────────
  function rankingEquipeTotal() {
    const ord = Object.entries(PONTOS_EQUIPE_TOTAL).sort((a,b)=>b[1]-a[1]);
    let h = '<strong>Ranking geral de equipes · soma de todas as provas e categorias</strong>:<br>';
    h += tbl(ord.map(([ac,pts],i) => [pos(i+1), ac, pts]), ['Pos','Academia','Pontos']);
    return h + AVISO;
  }

  // ── Motor principal ──────────────────────────────────────────
  function responder(q) {
    const qn    = NORM(q);
    const ac    = detAc(qn);
    const cat   = detCat(qn);
    const prova = detProva(qn);
    // Sexo: detectado explicitamente OU inferido pelo nome da categoria
    const sexoExplicito = detSexo(qn);
    const sexo = sexoExplicito ||
      (cat && cat.includes('FEMININO') ? 'Feminino' : cat && cat.includes('MASCULINO') ? 'Masculino' : null);

    // ── Saudações ─────────────────────────────────────────────
    if (/^(oi|ola|opa|bom dia|boa tarde|boa noite|hey|e ai)\b/.test(qn))
      return 'Oi! Sou o <strong>Cicle</strong>. Pergunte sobre atletas, rankings por prova ou pontos de equipe.' + AVISO;
    if (/(quem (e|eh) voce|seu nome|voce e o mascote)/.test(qn))
      return 'Sou o <strong>Cicle</strong>, mascote oficial do Tour de Cicle Indoor!';
    if (/^(obrigado|obrigada|valeu|brigado)\b/.test(qn))
      return 'Imagina! 🚴';

    // ── Contrarrelógio pedido explicitamente ──────────────────
    if (/(contrarrelogio|contra relogio|10k|cronometro)/.test(qn))
      return '⚠️ Os dados do <strong>Contrarrelógio 10k</strong> ainda não foram lançados. Assim que chegarem, atualizo o sistema.';

    // ── Quantos atletas ───────────────────────────────────────
    if (/quantos? atletas/.test(qn) && !ac && !cat)
      return '<strong>'+ATLETAS.length+' atletas</strong> no total. <strong>'
        +ATLETAS.filter(a=>a.completo).length+'</strong> completaram 3 provas e participam do ranking por tempo.';

    // ── Ranking total de equipes ──────────────────────────────
    if (/(ranking.*equip|pontos?.*equip|equip.*geral|placar.*equip|quem ganhou.*equip)/.test(qn) && !cat && !prova)
      return rankingEquipeTotal();

    // ── Ranking de EQUIPES por categoria e prova ─────────────
    // Detecta: "academia Elite Masculino", "equipes Pro Feminino montanha", "ranking por academia Sub-26 masculino"
    const pedidoEquipe = /(academia|equipe|equipes|times?|por time|por equipe|por academia)/.test(qn);
    if (pedidoEquipe && cat && prova)
      return rankingEquipePorProva(cat, prova, CAT_MISTA.includes(cat) ? sexo : null);

    // "ranking por academia Elite Masculino" sem prova → mostrar em todas as provas
    if (pedidoEquipe && cat && !prova) {
      return ['ftp_final','montanha','ld30k']
        .map(p => rankingEquipePorProva(cat, p, CAT_MISTA.includes(cat) ? sexo : null))
        .join('<br><br>');
    }

    // ── Ranking geral por tempo ───────────────────────────────
    if (/(ranking geral|classificacao geral|tempo total|geral por tempo|posicao geral|quem ganhou geral)/.test(qn)) {
      if (cat) return rankingGeralTempo(cat, CAT_MISTA.includes(cat) ? sexo : null);
      if (sexo) return rankingGeralTempo(null, sexo);
      return rankingGeralTempo(null,'Masculino') + '<br><br>' + rankingGeralTempo(null,'Feminino');
    }

    // ── Ranking de pontos individuais ─────────────────────────
    if (/(ranking.*pontos?|pontos?.*ranking|mais pontos?|pontuacao|classificacao.*pontos?)/.test(qn))
      return rankingPontos(cat, CAT_MISTA.includes(cat) ? sexo : null, ac);

    // ── Ranking individual por prova numa categoria ───────────
    if (cat && prova && !pedidoEquipe)
      return rankingProva(cat, prova, CAT_MISTA.includes(cat) ? sexo : null);

    // Ranking de prova sem categoria, com sexo detectado
    if (prova && !cat && sexo) {
      const cats = sexo==='Masculino'
        ? [['ELITE MASCULINO',null],['PRO MASCULINO',null],['MASTER','Masculino'],['SUB-26','Masculino']]
        : [['ELITE FEMININO',null], ['PRO FEMININO',null], ['MASTER','Feminino'], ['SUB-26','Feminino']];
      return cats.map(([c,s]) => rankingProva(c, prova, s)).join('<br><br>');
    }

    // ── Listagem de atletas por academia ──────────────────────
    if (ac && !cat && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = ATLETAS.filter(a=>a.academia===ac).sort((a,b)=>b.pontos_total-a.pontos_total);
      let h = '<strong>'+ac+'</strong> · '+lista.length+' atletas:<br>';
      h += tbl(lista.map(a=>[a.atleta, rotuloGrupo(a.equipe,a.categoria), a.provas, a.pontos_total||'0']),
        ['Atleta','Categoria','Provas','Pontos']);
      return h + AVISO;
    }

    // ── Listagem de atletas por categoria ─────────────────────
    if (cat && !ac && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = filtrarAtletas(cat, CAT_MISTA.includes(cat) ? sexo : null)
        .sort((a,b)=>b.pontos_total-a.pontos_total);
      let h = '<strong>'+rotuloGrupo(cat,sexo)+'</strong> · '+lista.length+' atletas:<br>';
      h += tbl(lista.map(a=>[a.atleta,a.academia,a.provas,a.pontos_total||'0']),['Atleta','Academia','Provas','Pontos']);
      return h + AVISO;
    }

    // ── Busca por nome de atleta ──────────────────────────────
    const hits = buscarAtleta(q);
    if (hits.length===1) return fichaAtleta(hits[0]);
    if (hits.length>1 && hits.length<=10) {
      let h = 'Encontrei <strong>'+hits.length+' atletas</strong>:<br>';
      h += tbl(hits.map(a=>[a.atleta,a.academia,rotuloGrupo(a.equipe,a.categoria),a.provas,a.pontos_total||'0']),
        ['Atleta','Academia','Categoria','Provas','Pontos']);
      return h;
    }

    // ── Só academia mencionada ────────────────────────────────
    if (ac && !cat) {
      const lista = ATLETAS.filter(a=>a.academia===ac);
      const comp  = lista.filter(a=>a.completo).length;
      const pts   = lista.reduce((s,a)=>s+a.pontos_total,0);
      const pteq  = PONTOS_EQUIPE_TOTAL[ac]||0;
      return '<strong>'+ac+'</strong>: '+lista.length+' atletas, '+comp+' com 3 provas completas.<br>'
        +'<strong>Pontos individuais:</strong> '+pts+' &nbsp;|&nbsp; <strong>Pontos de equipe:</strong> '+pteq
        +'<br><br>Para ver todos, pergunte "Liste os atletas da '+ac+'".' + AVISO;
    }

    // ── Só categoria mencionada → ranking por tempo ───────────
    if (cat && !ac)
      return rankingGeralTempo(cat, CAT_MISTA.includes(cat) ? sexo : null);

    return ajuda();
  }

  function ajuda() {
    return 'Não entendi. Tente:<br><br>'
      +'<strong>Atleta:</strong> "Omar Dantas", "Dados da Simone Ribeiro"<br>'
      +'<strong>Ranking por tempo:</strong> "Ranking geral masculino", "Ranking Elite Feminino", "Ranking Sub-26 masculino"<br>'
      +'<strong>Por prova:</strong> "Ranking montanha Elite Masculino", "Ranking 30k Master masculino"<br>'
      +'<strong>Por academia:</strong> "Ranking por academia Elite Masculino", "Equipes Sub-26 feminino montanha"<br>'
      +'<strong>Pontos:</strong> "Ranking de pontos Elite Masculino", "Pontos Master feminino"<br>'
      +'<strong>Equipes:</strong> "Ranking geral de equipes"';
  }
})();
