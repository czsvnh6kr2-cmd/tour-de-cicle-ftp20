// Tour de Cicle Indoor — Chat v5 (dataset final)
(function () {
  'use strict';

  const YOUTUBE_ID = '6Rz1mrWwvO0';
  const btnPlay   = document.getElementById('btn-play-video');
  const videoFrame= document.getElementById('video-frame');
  const unlockRow = document.getElementById('unlock-row');
  const btnUnlock = document.getElementById('btn-unlock');
  const stageChat = document.getElementById('stage-chat');
  const chatLog   = document.getElementById('chat-log');
  const chatForm  = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chips     = document.getElementById('suggestion-chips');

  btnPlay.addEventListener('click', function () {
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube.com/embed/'+YOUTUBE_ID+'?autoplay=1&rel=0';
    f.title = 'Tour de Cicle'; f.allowFullscreen = true;
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    videoFrame.innerHTML = ''; videoFrame.appendChild(f);
    unlockRow.hidden = false;
    unlockRow.scrollIntoView({behavior:'smooth',block:'center'});
  });

  btnUnlock.addEventListener('click', function () {
    stageChat.hidden = false;
    setTimeout(function () {
      stageChat.scrollIntoView({behavior:'smooth',block:'start'});
      chatInput.focus();
      if (!chatLog.dataset.welcomed) {
        chatLog.dataset.welcomed = '1';
        addMsg('bot', bemVindo());
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
      el.className = 'msg user'; el.textContent = html;
      chatLog.appendChild(el);
    } else {
      const row = document.createElement('div'); row.className = 'msg-row';
      const av  = document.createElement('div'); av.className  = 'msg-avatar';
      const bub = document.createElement('div'); bub.className = 'msg bot';
      bub.innerHTML = html;
      row.appendChild(av); row.appendChild(bub);
      chatLog.appendChild(row);
    }
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // ── Utilitários ──────────────────────────────────────────────
  const N = s => (s||'').toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();

  function fmtT(s) { return s ? s.replace(/^00:/,'') : '—'; }

  function tbl(rows, heads) {
    let h = '<table><thead><tr>'+heads.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>';
    rows.forEach(r => {
      h += '<tr>'+r.map((c,i)=>{
        const num = i>0&&(typeof c==='number'||(typeof c==='string'&&/^\d/.test(c)&&!/</.test(c)));
        return '<td'+(num?' class="num"':'')+'>'+( c??'—')+'</td>';
      }).join('')+'</tr>';
    });
    return h+'</tbody></table>';
  }

  function pos(p) {
    if (!p && p!==0) return '—';
    const medals = {1:'🥇',2:'🥈',3:'🥉'};
    return medals[p]
      ? '<span class="pos pos-1">'+medals[p]+' '+p+'</span>'
      : '<span class="pos pos-0">'+p+'</span>';
  }

  const AVISO = '<br><br><small>⚠️ <em>Pontos parciais — dados em atualização. Notou algo errado? <a href="https://wa.me/5531998207556" target="_blank" style="color:#25D366;font-weight:700">WhatsApp (31) 99820-7556</a></em></small>';

  // ── Detecção de entidades ────────────────────────────────────
  const CATMAP = {
    'elite feminino':'ELITE FEMININO','elite fem':'ELITE FEMININO','elite f ':'ELITE FEMININO',
    'elite masculino':'ELITE MASCULINO','elite masc':'ELITE MASCULINO','elite m ':'ELITE MASCULINO',
    'pro feminino':'PRO FEMININO','pro fem':'PRO FEMININO',
    'pro masculino':'PRO MASCULINO','pro masc':'PRO MASCULINO',
    'master feminino':'MASTER FEMININO','master fem':'MASTER FEMININO',
    'master masculino':'MASTER MASCULINO','master masc':'MASTER MASCULINO',
    'sub 26 feminino':'SUB-26 FEMININO','sub26 feminino':'SUB-26 FEMININO','sub 26 fem':'SUB-26 FEMININO',
    'sub 26 masculino':'SUB-26 MASCULINO','sub26 masculino':'SUB-26 MASCULINO','sub 26 masc':'SUB-26 MASCULINO',
    'master':'MASTER','sub 26':'SUB-26','sub26':'SUB-26','sub-26':'SUB-26',
  };
  const ACMAP = {
    'aabb':'AABB','bt ns':'BT NS','btns':'BT NS','nova suica':'BT NS',
    'bt tirol':'BT TIROL','tirol':'BT TIROL','pulse':'PULSE',
  };
  const PROVAMAP = {
    'ftp final':'ftp_final','ftp':'ftp_final',
    'montanha':'montanha','morro':'montanha','subida':'montanha',
    'longa distancia':'ld30k','longa':'ld30k','30k':'ld30k','fundo':'ld30k',
    'contrarrelogio':'cr10k','contra relogio':'cr10k','10k':'cr10k','cronometro':'cr10k',
  };

  function detCat(qn) {
    const keys = Object.keys(CATMAP).sort((a,b)=>b.length-a.length);
    for (const k of keys) if (qn.includes(k)) return CATMAP[k];
    return null;
  }
  function detAc(qn) {
    for (const [k,v] of Object.entries(ACMAP)) if (qn.includes(k)) return v;
    return null;
  }
  function detProva(qn) {
    const keys = Object.keys(PROVAMAP).sort((a,b)=>b.length-a.length);
    for (const k of keys) if (qn.includes(k)) return PROVAMAP[k];
    return null;
  }
  function detSexo(qn) {
    if (/(masculino|homem|homens|\bmasc\b)/.test(qn)) return 'Masculino';
    if (/(feminino|mulher|mulheres|\bfem\b)/.test(qn)) return 'Feminino';
    return null;
  }

  // Normaliza cat para lookup em pontos_cat (adiciona sexo quando necessário)
  function catKey(cat, sexo) {
    if (['MASTER','SUB-26'].includes(cat)) {
      if (sexo==='Feminino') return cat+' FEMININO';
      if (sexo==='Masculino') return cat+' MASCULINO';
    }
    return cat;
  }

  // ── Busca por nome ───────────────────────────────────────────
  function buscarAtleta(q) {
    const qn = N(q).replace(/\b(dados|do|da|de|sobre|qual|me|mostre|info|ficha|atleta|resultado|posicao|ranking|pontos|tempo)\b/g,' ').replace(/\s+/g,' ').trim();
    const tokens = qn.split(' ').filter(t=>t.length>2);
    if (!tokens.length) return [];
    return DADOS.tempos.filter(a => tokens.every(t => N(a.nome).includes(t)));
  }

  // ── Ficha completa do atleta ─────────────────────────────────
  function fichaAtleta(a) {
    const equipe = a.equipe.includes('MASTER')||a.equipe.includes('SUB-26')
      ? a.equipe+' '+a.categoria.toUpperCase() : a.equipe;
    const catK = catKey(a.equipe, a.categoria);

    // Posição por tempo (só elegíveis 4 provas)
    let posTempo = null, totalTempo = 0;
    if (a.ranking_tempo) {
      const grupo = DADOS.tempos.filter(x => x.equipe===a.equipe && x.categoria===a.categoria && x.ranking_tempo);
      grupo.sort((x,y)=>x.tempo_total_s-y.tempo_total_s);
      posTempo = grupo.findIndex(x=>x.nome===a.nome)+1;
      totalTempo = grupo.length;
    }

    // Posição por pontos na categoria
    const catPontos = DADOS.pontos_cat[catK]||[];
    const ptEntry = catPontos.find(x=>N(x.atleta)===N(a.nome));

    let h = '<strong>'+a.nome+'</strong> · '+a.academia+' · '+equipe+'<br><br>';
    h += '<strong>Tempos por prova:</strong>';
    h += tbl([
      ['FTP Final',          fmtT(a.ftp_final)],
      ['Contrarrelógio 10k', fmtT(a.cr10k)],
      ['Montanha',           fmtT(a.montanha)],
      ['Longa Distância 30k',fmtT(a.ld30k)],
      ['Tempo Total',        '<strong>'+fmtT(a.tempo_total)+'</strong>'],
    ],['Prova','Tempo']);

    h += '<br>';
    if (a.ranking_tempo && posTempo) {
      h += '🏁 <strong>Ranking por tempo ('+equipe+'):</strong> '+pos(posTempo)+'º de '+totalTempo+'<br>';
    } else {
      h += '<em>Não elegível para ranking por tempo ('+a.provas+'/4 provas completadas).</em><br>';
    }
    if (ptEntry) {
      h += '🏆 <strong>Pontos na categoria ('+catK+'):</strong> '+pos(ptEntry.pos)+'º com '+ptEntry.pts+' pts';
    }

    // Posição no ranking geral por pontos
    const geralFem = DADOS.ranking_geral_fem.find(x=>N(x.atleta)===N(a.nome));
    const geralMasc= DADOS.ranking_geral_masc.find(x=>N(x.atleta)===N(a.nome));
    if (geralFem)  h += '<br>🌟 <strong>Ranking geral feminino:</strong> '+pos(geralFem.pos)+'º com '+geralFem.pts+' pts';
    if (geralMasc) h += '<br>🌟 <strong>Ranking geral masculino:</strong> '+pos(geralMasc.pos)+'º com '+geralMasc.pts+' pts';

    return h + AVISO;
  }

  // ── Rankings de pontos por categoria ────────────────────────
  function rankingPontosCat(catK) {
    const lista = DADOS.pontos_cat[catK];
    if (!lista) return 'Categoria não encontrada: '+catK;
    let h = '<strong>Ranking de pontos · '+catK+'</strong> ('+lista.length+' atletas):<br>';
    h += tbl(lista.map(a=>[pos(a.pos),a.atleta,a.pts]),['Pos','Atleta','Pontos']);
    return h + AVISO;
  }

  // ── Rankings gerais por pontos ───────────────────────────────
  function rankingGeralPontos(sexo) {
    const lista = sexo==='Feminino' ? DADOS.ranking_geral_fem : DADOS.ranking_geral_masc;
    const label = sexo==='Feminino' ? 'Feminino' : 'Masculino';
    let h = '<strong>Ranking geral '+label+' por pontos</strong> (todas as categorias):<br>';
    h += tbl(lista.map(a=>[pos(a.pos),a.atleta,a.pts]),['Pos','Atleta','Pontos']);
    return h + AVISO;
  }

  // ── Rankings por tempo ───────────────────────────────────────
  function rankingTempo(equipe, sexo) {
    let lista = DADOS.tempos.filter(a => a.ranking_tempo);
    if (equipe) lista = lista.filter(a => a.equipe===equipe);
    if (sexo)   lista = lista.filter(a => a.categoria===sexo);
    lista.sort((a,b)=>a.tempo_total_s-b.tempo_total_s);
    const label = equipe ? (sexo ? equipe+' '+sexo.toUpperCase() : equipe) : ('Geral '+sexo);
    let h = '<strong>Ranking por tempo · '+label+'</strong> · apenas atletas com 4 provas ('+lista.length+'):<br>';
    h += tbl(lista.map((a,i)=>[pos(i+1),a.nome,a.academia,a.equipe,fmtT(a.tempo_total)]),
      ['Pos','Atleta','Academia','Categoria','Tempo Total']);
    return h;
  }

  // ── Tempo de uma prova específica (ranking) ──────────────────
  function rankingProva(equipe, prova, sexo) {
    const campo = prova+'_s';
    const label_prova = {ftp_final:'FTP Final',montanha:'Montanha',ld30k:'Longa Distância 30k',cr10k:'Contrarrelógio 10k'};
    let lista = DADOS.tempos.filter(a => a[campo]!==null && a[campo]!==undefined);
    if (equipe) lista = lista.filter(a=>a.equipe===equipe);
    if (sexo)   lista = lista.filter(a=>a.categoria===sexo);
    if (prova!=='ftp_final') lista = lista.filter(a=>a[campo]>0);
    lista.sort((a,b)=>a[campo]-b[campo]);
    const label = [equipe, sexo].filter(Boolean).join(' ');
    let h = '<strong>Ranking '+label_prova[prova]+' · '+label+'</strong> ('+lista.length+' atletas):<br>';
    h += tbl(lista.map((a,i)=>[pos(i+1),a.nome,a.academia,fmtT(a[prova])]),['Pos','Atleta','Academia','Tempo']);
    return h;
  }

  // ── Equipes por categoria ────────────────────────────────────
  function rankingEquipeCat(cat) {
    // MASTER e SUB-26 não têm sexo separado nas equipes
    const key = cat.replace(' FEMININO','').replace(' MASCULINO','');
    const lista = DADOS.equipes_cat[key];
    if (!lista) return 'Dados de equipe não encontrados para '+cat;
    let h = '<strong>Ranking de equipes · '+key+'</strong> <small>(tabela oficial)</small>:<br>';
    h += tbl(lista.map(a=>[pos(a.pos),a.academia,a.cr10k,a.ld30k,a.ftp,a.montanha,'<strong>'+a.total+'</strong>']),
      ['Pos','Academia','10k','30k','FTP','Mont.','Total']);
    return h;
  }

  // ── Equipes geral ────────────────────────────────────────────
  function rankingEquipeGeral() {
    let h = '<strong>Ranking geral de equipes</strong> <small>(tabela oficial)</small>:<br>';
    h += tbl(DADOS.equipes_geral.map(a=>[pos(a.pos),a.academia,a.cr10k,a.ld30k,a.ftp,a.montanha,'<strong>'+a.total+'</strong>']),
      ['Pos','Academia','10k','30k','FTP','Mont.','Total Geral']);
    return h;
  }

  // ── Atletas de uma academia ──────────────────────────────────
  function listarAcademia(ac) {
    const lista = DADOS.tempos.filter(a=>a.academia===ac).sort((a,b)=>{
      if (a.equipe<b.equipe) return -1; if (a.equipe>b.equipe) return 1; return 0;
    });
    let h = '<strong>'+ac+'</strong> · '+lista.length+' atletas:<br>';
    h += tbl(lista.map(a=>[a.nome,a.equipe,a.categoria,a.provas,fmtT(a.tempo_total)]),
      ['Atleta','Categoria','Sexo','Provas','Tempo Total']);
    return h;
  }

  // ── Atletas de uma categoria ─────────────────────────────────
  function listarCategoria(equipe, sexo) {
    let lista = DADOS.tempos.filter(a=>a.equipe===equipe);
    if (sexo) lista = lista.filter(a=>a.categoria===sexo);
    lista.sort((a,b)=>a.nome.localeCompare(b.nome));
    const label = sexo ? equipe+' '+sexo : equipe;
    let h = '<strong>'+label+'</strong> · '+lista.length+' atletas:<br>';
    h += tbl(lista.map(a=>[a.nome,a.academia,a.provas,fmtT(a.tempo_total)]),['Atleta','Academia','Provas','Tempo Total']);
    return h;
  }

  // ── Mensagem de boas-vindas com instrução ────────────────────
  function bemVindo() {
    return 'Olá! Sou o <strong>Cicle</strong>, mascote do Tour de Cicle Indoor. Posso responder sobre:<br><br>'
      +'<strong>🏅 Pontos individuais por categoria</strong><br>'
      +'"Ranking Elite Masculino" · "Pontos Pro Feminino" · "Classificação Master Feminino"<br><br>'
      +'<strong>🌟 Ranking geral por pontos</strong><br>'
      +'"Ranking geral feminino" · "Ranking geral masculino"<br><br>'
      +'<strong>🏁 Ranking por tempo</strong><br>'
      +'"Ranking por tempo Elite Feminino" · "Ranking geral por tempo masculino"<br><br>'
      +'<strong>⏱️ Tempo por prova</strong><br>'
      +'"Ranking montanha Elite Masculino" · "Ranking FTP Sub-26 masculino" · "Ranking 30k Pro Feminino" · "Ranking 10k Master"<br><br>'
      +'<strong>🏆 Ranking de equipes</strong><br>'
      +'"Ranking de equipes" · "Equipes Elite Masculino" · "Equipes Pro Feminino"<br><br>'
      +'<strong>👤 Atleta específico</strong><br>'
      +'"Dados do Omar Dantas" · "Simone Ribeiro" · "Resultados do Lucas Eurípides"<br><br>'
      +'<strong>🏫 Por academia</strong><br>'
      +'"Atletas da BT NS" · "Atletas da AABB" · "Atletas da PULSE" · "Atletas da BT TIROL"'
      + AVISO;
  }

  // ── Instrução / Ajuda ────────────────────────────────────────
  function ajuda() {
    return '<strong>O que posso te responder:</strong><br><br>'
      +'<strong>Pontos por categoria:</strong><br>'
      +'→ "Ranking Elite Feminino" · "Pontos Pro Masculino" · "Classificação Sub-26 Masculino"<br>'
      +'→ "Ranking Master Feminino" · "Pontos Elite Masculino"<br><br>'
      +'<strong>Ranking geral por pontos:</strong><br>'
      +'→ "Ranking geral feminino" · "Ranking geral masculino"<br><br>'
      +'<strong>Ranking por tempo (4 provas):</strong><br>'
      +'→ "Ranking por tempo Elite Feminino" · "Ranking por tempo Pro Masculino"<br>'
      +'→ "Ranking geral por tempo masculino" · "Ranking geral por tempo feminino"<br><br>'
      +'<strong>Prova específica:</strong><br>'
      +'→ "Ranking FTP Elite Masculino" · "Ranking montanha Pro Feminino"<br>'
      +'→ "Ranking 30k Sub-26 Masculino" · "Ranking 10k Master Feminino"<br><br>'
      +'<strong>Equipes:</strong><br>'
      +'→ "Ranking de equipes" · "Equipes Elite Masculino" · "Equipes Sub-26"<br><br>'
      +'<strong>Atleta:</strong><br>'
      +'→ "Dados do Sergio Torralba" · "Omar Dantas" · "Tempo da Simone Ribeiro"<br><br>'
      +'<strong>Academia:</strong><br>'
      +'→ "Atletas da BT NS" · "Atletas da AABB" · "Liste a PULSE"';
  }

  // ── Motor principal ──────────────────────────────────────────
  function responder(q) {
    const qn = N(q);
    const cat   = detCat(qn);
    const ac    = detAc(qn);
    const prova = detProva(qn);
    const sexo  = detSexo(qn);

    // Saudações
    if (/^(oi|ola|opa|bom dia|boa tarde|boa noite|hey|e ai)\b/.test(qn))
      return bemVindo();
    if (/(quem (e|eh) voce|seu nome|voce e o mascote)/.test(qn))
      return 'Sou o <strong>Cicle</strong>, mascote oficial do Tour de Cicle Indoor! Digite "ajuda" para ver tudo que posso responder.';
    if (/^(obrigado|obrigada|valeu|brigado)\b/.test(qn))
      return 'Imagina! 🚴 Qualquer dúvida é só perguntar.';
    if (/^(ajuda|help|o que voce (sabe|pode|faz)|o que posso|quais rankings|menu)\b/.test(qn))
      return ajuda();

    // Ranking geral de equipes
    if (/(ranking.*equip|equip.*geral|pontos.*equip|placar.*equip|quem ganhou|campeao.*equip)/.test(qn) && !cat)
      return rankingEquipeGeral();

    // Equipes por categoria
    if (/(equip|academia|por equipe|por academia|times?|campeao)/.test(qn) && cat)
      return rankingEquipeCat(cat);

    // Ranking geral por pontos
    if (/(ranking geral|classificacao geral|pontos? geral|geral.*pontos?)/.test(qn)) {
      if (sexo) return rankingGeralPontos(sexo);
      return rankingGeralPontos('Feminino')+'<br><br>'+rankingGeralPontos('Masculino');
    }

    // Ranking por tempo geral
    if (/(ranking.*tempo|tempo.*ranking|classificacao.*tempo|geral.*tempo|tempo.*geral)/.test(qn) && !cat) {
      if (sexo) return rankingTempo(null, sexo);
      return rankingTempo(null,'Feminino')+'<br><br>'+rankingTempo(null,'Masculino');
    }

    // Ranking por tempo de categoria
    if (/(ranking.*tempo|tempo.*ranking|classificacao.*tempo|posicao.*tempo)/.test(qn) && cat) {
      const isMista = ['MASTER','SUB-26'].includes(cat);
      return rankingTempo(cat, isMista ? sexo : null);
    }

    // Ranking prova específica
    if (prova && cat) {
      const isMista = ['MASTER','SUB-26'].includes(cat);
      return rankingProva(cat, prova, isMista ? sexo : null);
    }
    if (prova && !cat && sexo) {
      const cats = sexo==='Masculino'
        ? [['ELITE MASCULINO',null],['PRO MASCULINO',null],['MASTER','Masculino'],['SUB-26','Masculino']]
        : [['ELITE FEMININO',null], ['PRO FEMININO',null], ['MASTER','Feminino'], ['SUB-26','Feminino']];
      return cats.map(([c,s])=>rankingProva(c,prova,s)).join('<br><br>');
    }

    // Ranking pontos por categoria
    if (cat && /(ranking|pontos?|classificacao|posicao|resultado)/.test(qn)) {
      const isMista = ['MASTER','SUB-26'].includes(cat);
      const key = isMista ? catKey(cat, sexo) : cat;
      if (key && DADOS.pontos_cat[key]) return rankingPontosCat(key);
      if (isMista && !sexo) {
        return rankingPontosCat(cat+' FEMININO')+'<br><br>'+rankingPontosCat(cat+' MASCULINO');
      }
    }

    // Só categoria mencionada → ranking por tempo
    if (cat && !ac && !prova) {
      const isMista = ['MASTER','SUB-26'].includes(cat);
      const key = isMista ? catKey(cat, sexo) : cat;
      if (key && DADOS.pontos_cat[key]) return rankingPontosCat(key);
      if (isMista && !sexo)
        return rankingPontosCat(cat+' FEMININO')+'<br><br>'+rankingPontosCat(cat+' MASCULINO');
      return rankingTempo(cat, null);
    }

    // Academia
    if (ac && /(liste|lista|mostre|todos|quais|atletas)/.test(qn))
      return listarAcademia(ac);
    if (ac && !cat)
      return listarAcademia(ac);

    // Busca por nome
    const hits = buscarAtleta(q);
    if (hits.length===1) return fichaAtleta(hits[0]);
    if (hits.length>1 && hits.length<=10) {
      let h = 'Encontrei <strong>'+hits.length+' atletas</strong>:<br>';
      h += tbl(hits.map(a=>[a.nome,a.academia,a.equipe,a.provas,fmtT(a.tempo_total)]),
        ['Atleta','Academia','Categoria','Provas','Tempo Total']);
      return h;
    }

    return ajuda();
  }
})();
