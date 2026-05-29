// Tour de Cicle Indoor - Chat v2
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
        addMsg('bot', 'Olá! Sou o <strong>Cicle</strong>, mascote do Tour de Cicle Indoor. Posso te contar sobre os <strong>' + ATLETAS.length + ' atletas</strong>, rankings por prova, pontos individuais e de equipe. <br><br>⚠️ <em>Os pontos ainda não estão totalmente atualizados — os resultados do Contrarrelógio 10k ainda não foram lançados na planilha.</em>');
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
      const av = document.createElement('div');
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

  function fmtT(s) {
    if (!s) return '—';
    return s.replace(/^00:/,'');
  }

  function tbl(rows, headers) {
    let h = '<table><thead><tr>' + headers.map(x=>'<th>'+x+'</th>').join('') + '</tr></thead><tbody>';
    rows.forEach(r => {
      h += '<tr>' + r.map((c,i) => {
        const num = i > 0 && (typeof c === 'number' || (typeof c === 'string' && /^\d/.test(c)));
        return '<td'+(num?' class="num"':'')+'>'+( c ?? '—')+'</td>';
      }).join('') + '</tr>';
    });
    return h + '</tbody></table>';
  }

  function pos(p, cls) {
    if (!p) return '—';
    return '<span class="pos pos-'+(p===1?'1':'0')+'">'+p+'</span>';
  }

  const AVISO_PONTOS = '<br><br><small>⚠️ <em>Pontos parciais — Contrarrelógio 10k ainda não lançado.</em></small>';

  // ── Detecção de entidades ────────────────────────────────────
  const ACMAP  = {'aabb':'AABB','bt ns':'BT NS','btns':'BT NS','nova suica':'BT NS','bt tirol':'BT TIROL','tirol':'BT TIROL','pulse':'PULSE'};
  const CATMAP = {
    'elite feminino':'ELITE FEMININO','elite f':'ELITE FEMININO',
    'elite masculino':'ELITE MASCULINO','elite m':'ELITE MASCULINO',
    'pro feminino':'PRO FEMININO','pro f':'PRO FEMININO',
    'pro masculino':'PRO MASCULINO','pro m':'PRO MASCULINO',
    'master':'MASTER','sub 26':'SUB-26','sub26':'SUB-26','sub-26':'SUB-26'
  };
  const PROVAMAP = {
    'ftp':'ftp_final','ftp final':'ftp_final',
    'montanha':'montanha','morro':'montanha','subida':'montanha',
    'longa':'ld30k','30k':'ld30k','longa distancia':'ld30k','fundo':'ld30k'
  };
  const PROVA_LABEL = {'ftp_final':'FTP Final','montanha':'Montanha','ld30k':'Longa Distância 30k'};

  function detAc(qn)    { for(const [k,v] of Object.entries(ACMAP))   if(qn.includes(k)) return v; return null; }
  function detCat(qn)   { for(const [k,v] of Object.entries(CATMAP))  if(qn.includes(k)) return v; return null; }
  function detProva(qn) { for(const [k,v] of Object.entries(PROVAMAP)) if(qn.includes(k)) return v; return null; }
  function detSexo(qn)  {
    if(/(masculino|homem|homens|\bmasc\b)/.test(qn)) return 'Masculino';
    if(/(feminino|mulher|mulheres|\bfem\b)/.test(qn)) return 'Feminino';
    return null;
  }

  function buscarAtleta(q) {
    const qn = NORM(q).replace(/\b(dados|do|da|de|sobre|qual|quais|me|mostre|info|ficha|atleta|resultado|resultados|pontos|posicao|ranking)\b/g,' ').replace(/\s+/g,' ').trim();
    const tokens = qn.split(' ').filter(t=>t.length>2);
    if(!tokens.length) return [];
    return ATLETAS.filter(a => tokens.every(t => NORM(a.atleta).includes(t)));
  }

  // ── Ficha do atleta ──────────────────────────────────────────
  function fichaAtleta(a) {
    let h = '<strong>'+a.atleta+'</strong> · '+a.academia+' · '+a.equipe+'<br><br>';
    h += '<strong>Resultados por prova:</strong>';
    h += tbl([
      ['FTP Final',            fmtT(a.ftp_final),  a.pos_ftp       ? pos(a.pos_ftp)+'º na categ.'       : '—', a.pontos_ftp       || '—'],
      ['Montanha',             fmtT(a.montanha),   a.pos_montanha  ? pos(a.pos_montanha)+'º na categ.'  : '—', a.pontos_montanha  || '—'],
      ['Longa Distância 30k',  fmtT(a.ld30k),      a.pos_ld30k     ? pos(a.pos_ld30k)+'º na categ.'     : '—', a.pontos_ld30k     || '—'],
      ['Contrarrelógio 10k',   '—',                '—',                                                         '(ainda sem dados)'],
    ], ['Prova','Tempo','Posição','Pontos']);
    h += '<br><strong>Tempo total:</strong> '+fmtT(a.tempo_total)
       + ' &nbsp;|&nbsp; <strong>Provas:</strong> '+a.provas
       + ' &nbsp;|&nbsp; <strong>Pontos:</strong> '+a.pontos_total;
    if (a.completo) {
      const tot = a.categoria==='Masculino' ? RANKING_GERAL_MASC.length : RANKING_GERAL_FEM.length;
      h += '<br><strong>Ranking geral ('+a.categoria+', 3 provas):</strong> '+pos(a.pos_geral)+'º de '+tot;
      h += ' &nbsp;|&nbsp; <strong>Ranking '+a.equipe+':</strong> '+pos(a.pos_geral_categoria)+'º';
    } else {
      h += '<br><em>Não elegível para ranking geral por tempo ('+a.provas+'/3 provas). Participa do ranking de pontos.</em>';
    }
    h += AVISO_PONTOS;
    return h;
  }

  // ── Rankings ────────────────────────────────────────────────
  function rankingProva(cat, prova) {
    const campo_s = prova+'_s';
    const lista = ATLETAS.filter(a=>a.equipe===cat && a[campo_s]>0).sort((a,b)=>a[campo_s]-b[campo_s]);
    let h = '<strong>Ranking '+PROVA_LABEL[prova]+' · '+cat+'</strong> ('+lista.length+' atletas):<br>';
    h += tbl(lista.map((a,i)=>[pos(i+1),a.atleta,a.academia,fmtT(a[prova]),PONTOS_RANKING[i]||'—']),['Pos','Atleta','Academia','Tempo','Pontos']);
    return h;
  }

  function rankingGeralTempo(sexo, cat) {
    let lista;
    if (cat) {
      lista = ATLETAS.filter(a=>a.equipe===cat&&a.completo).sort((a,b)=>a.tempo_total_s-b.tempo_total_s);
    } else {
      lista = ATLETAS.filter(a=>a.completo&&a.categoria===sexo).sort((a,b)=>a.tempo_total_s-b.tempo_total_s);
    }
    const titulo = cat ? 'Ranking por tempo · '+cat : 'Ranking por tempo · '+sexo+' · todas as categorias';
    let h = '<strong>'+titulo+'</strong> · apenas atletas com 3 provas ('+lista.length+'):<br>';
    h += tbl(lista.map((a,i)=>[pos(i+1),a.atleta,a.academia,a.equipe,fmtT(a.tempo_total)]),['Pos','Atleta','Academia','Categoria','Tempo']);
    return h;
  }

  function rankingPontos(cat, academia) {
    let lista = ATLETAS.filter(a=>a.pontos_total>0);
    if (cat)     lista = lista.filter(a=>a.equipe===cat);
    if (academia) lista = lista.filter(a=>a.academia===academia);
    lista.sort((a,b)=>b.pontos_total-a.pontos_total);
    const filtro = [academia,cat].filter(Boolean).join(' / ')||'geral';
    let h = '<strong>Ranking de pontos individuais · '+filtro+'</strong>:<br>';
    h += tbl(lista.map((a,i)=>[pos(i+1),a.atleta,a.academia,a.equipe,a.pontos_ftp||'—',a.pontos_montanha||'—',a.pontos_ld30k||'—','<strong>'+a.pontos_total+'</strong>']),
      ['Pos','Atleta','Academia','Categoria','FTP','Mont.','LD30k','Total']);
    h += AVISO_PONTOS;
    return h;
  }

  function rankingEquipe(cat, prova) {
    const dados = (PONTOS_EQUIPE_CAT[cat]||{})[PROVA_LABEL[prova]];
    if (!dados) return 'Dados de equipe não disponíveis para '+cat+' / '+PROVA_LABEL[prova]+'.';
    const rows = Object.entries(dados)
      .filter(([,d])=>d.atletas&&d.atletas.length)
      .sort((a,b)=>(a[1].soma_s||9e9)-(b[1].soma_s||9e9));
    let h = '<strong>Equipes · '+PROVA_LABEL[prova]+' · '+cat+'</strong>:<br>';
    h += tbl(rows.map(([ac,d])=>[pos(d.posicao),ac,d.soma_str||'—',d.atletas.join(', '),d.pontos||'—']),['Pos','Academia','Soma','Atletas usados','Pontos']);
    return h;
  }

  function rankingEquipeTotal() {
    const ord = Object.entries(PONTOS_EQUIPE_TOTAL).sort((a,b)=>b[1]-a[1]);
    let h = '<strong>Ranking geral de equipes · soma de todas as provas e categorias</strong>:<br>';
    h += tbl(ord.map(([ac,pts],i)=>[pos(i+1),ac,pts]),['Pos','Academia','Pontos']);
    h += AVISO_PONTOS;
    return h;
  }

  // ── Motor principal ──────────────────────────────────────────
  function responder(q) {
    const qn = NORM(q);
    const ac    = detAc(qn);
    const cat   = detCat(qn);
    const prova = detProva(qn);
    const sexo  = detSexo(qn);

    // Saudações
    if (/^(oi|ola|opa|bom dia|boa tarde|boa noite|hey|e ai)\b/.test(qn))
      return 'Oi! Sou o <strong>Cicle</strong>. Pergunte sobre atletas, rankings por prova ou pontos de equipe.'+AVISO_PONTOS;
    if (/(quem (e|eh) voce|seu nome|voce e o mascote)/.test(qn))
      return 'Sou o <strong>Cicle</strong>, mascote oficial do Tour de Cicle Indoor!';
    if (/^(obrigado|obrigada|valeu|brigado)\b/.test(qn))
      return 'Imagina! 🚴';

    // Contrarrelógio explicitamente pedido
    if (/(contrarrelogio|contra relogio|10k|cronometro)/.test(qn))
      return '⚠️ Os dados do <strong>Contrarrelógio 10k</strong> ainda não foram lançados na planilha. Assim que forem inseridos, atualizo o sistema automaticamente.';

    // Pontos - aviso geral
    if (/(pontos? nao|pontos? errado|pontos? incorreto|pontos? desatualizado)/.test(qn))
      return AVISO_PONTOS.replace('<br><br>','')+'<br><br>Os pontos atuais consideram apenas as provas já lançadas: FTP Final, Montanha e Longa Distância 30k. O Contrarrelógio 10k ainda está pendente.';

    // Quantos atletas
    if (/quantos? atletas/.test(qn) && !ac && !cat)
      return '<strong>'+ATLETAS.length+' atletas</strong> no total. Destes, <strong>'+ATLETAS.filter(a=>a.completo).length+'</strong> completaram 3 provas e participam do ranking por tempo.';

    // Ranking equipes geral
    if (/(ranking.*equip|pontos?.*equip|equip.*geral|placar.*equip|quem ganhou.*equip)/.test(qn))
      return rankingEquipeTotal();

    // Ranking equipes por categoria+prova
    if (cat && prova && /(equip|time|academia|times)/.test(qn))
      return rankingEquipe(cat, prova);

    // Ranking geral por tempo
    if (/(ranking geral|classificacao geral|tempo total|geral por tempo|posicao geral|quem ganhou geral)/.test(qn)) {
      if (cat) return rankingGeralTempo(null, cat);
      const s = sexo || (/(masc|hom)/.test(qn)?'Masculino':/(fem|mulh)/.test(qn)?'Feminino':null);
      if (s) return rankingGeralTempo(s, null);
      return rankingGeralTempo('Masculino',null)+'<br><br>'+rankingGeralTempo('Feminino',null);
    }

    // Ranking pontos individuais
    if (/(ranking.*pontos?|pontos?.*ranking|mais pontos?|pontuacao|classificacao.*pontos?)/.test(qn))
      return rankingPontos(cat, ac);

    // Ranking individual por prova numa categoria
    if (cat && prova && !ac)
      return rankingProva(cat, prova);

    // Ranking prova sem categoria, com sexo
    if (prova && !cat && sexo) {
      const cats = sexo==='Masculino'
        ? ['ELITE MASCULINO','PRO MASCULINO','MASTER','SUB-26']
        : ['ELITE FEMININO','PRO FEMININO','MASTER','SUB-26'];
      return cats.map(c=>rankingProva(c,prova)).join('<br><br>');
    }

    // Lista academia
    if (ac && !cat && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = ATLETAS.filter(a=>a.academia===ac).sort((a,b)=>b.pontos_total-a.pontos_total);
      let h = '<strong>'+ac+'</strong> · '+lista.length+' atletas:<br>';
      h += tbl(lista.map(a=>[a.atleta,a.equipe,a.provas,a.pontos_total||'0']),['Atleta','Categoria','Provas','Pontos']);
      return h + AVISO_PONTOS;
    }

    // Lista categoria
    if (cat && !ac && /(liste|lista|mostre|todos|quais)/.test(qn)) {
      const lista = ATLETAS.filter(a=>a.equipe===cat).sort((a,b)=>b.pontos_total-a.pontos_total);
      let h = '<strong>'+cat+'</strong> · '+lista.length+' atletas:<br>';
      h += tbl(lista.map(a=>[a.atleta,a.academia,a.provas,a.pontos_total||'0']),['Atleta','Academia','Provas','Pontos']);
      return h + AVISO_PONTOS;
    }

    // Busca por nome
    const hits = buscarAtleta(q);
    if (hits.length===1) return fichaAtleta(hits[0]);
    if (hits.length>1&&hits.length<=10) {
      let h = 'Encontrei <strong>'+hits.length+' atletas</strong>:<br>';
      h += tbl(hits.map(a=>[a.atleta,a.academia,a.equipe,a.provas,a.pontos_total||'0']),['Atleta','Academia','Categoria','Provas','Pontos']);
      return h;
    }

    // Só academia
    if (ac && !cat) {
      const lista = ATLETAS.filter(a=>a.academia===ac);
      const comp = lista.filter(a=>a.completo).length;
      const pts  = lista.reduce((s,a)=>s+a.pontos_total,0);
      const pteq = PONTOS_EQUIPE_TOTAL[ac]||0;
      return '<strong>'+ac+'</strong>: '+lista.length+' atletas, '+comp+' elegíveis para ranking por tempo.<br>'
        +'<strong>Pontos individuais:</strong> '+pts+' &nbsp;|&nbsp; <strong>Pontos de equipe:</strong> '+pteq
        +'<br><br>Para ver todos, pergunte "Liste os atletas da '+ac+'".'
        + AVISO_PONTOS;
    }

    // Só categoria
    if (cat && !ac) return rankingGeralTempo(null, cat);

    return ajuda();
  }

  function ajuda() {
    return 'Não entendi. Tente:<br><br>'
      +'<strong>Atleta:</strong> "Omar Dantas", "Dados da Simone Ribeiro"<br>'
      +'<strong>Ranking por tempo:</strong> "Ranking geral masculino", "Ranking Elite Feminino"<br>'
      +'<strong>Por prova:</strong> "Ranking montanha Elite Masculino", "Ranking 30k Master"<br>'
      +'<strong>Pontos:</strong> "Ranking de pontos Elite Masculino"<br>'
      +'<strong>Equipes:</strong> "Ranking geral de equipes", "Equipes montanha Pro Feminino"<br>'
      +'<strong>Academia:</strong> "Liste atletas da AABB"';
  }
})();
