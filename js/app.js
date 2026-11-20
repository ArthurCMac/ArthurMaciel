(() => {
  "use strict";
  const S = window.SITE, P = S.perfil, root = document.documentElement;
  const $ = (s) => document.querySelector(s);
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Idioma: o salvo, senão o do navegador (pt ou en) */
  let lang = store.get("idioma");
  if (lang !== "pt" && lang !== "en") lang = (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";

  /* Texto traduzível: string simples ou { pt: "...", en: "..." } */
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v) && ("pt" in v || "en" in v) ? (v[lang] ?? v.pt ?? v.en) : v);
  const list = (v) => [].concat(L(v) ?? []).map(L);
  const tem = (v) => !!(v && list(v).length);
  const u = (k) => L(S.ui[k]);
  const ext = (url) => /^https?:/.test(url);

  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "text") el.textContent = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    el.append(...kids.flat().filter((k) => k != null && k !== false));
    return el;
  };
  const ini = (n) => n.split(/\s+/).filter(Boolean).filter((_, i, a) => i === 0 || i === a.length - 1).map((w) => w[0]).join("").toUpperCase();
  const vazio = (txt, src, cls = "") => h("div", { class: "vazio " + cls }, h("span", { text: txt }), src && h("code", { text: src }));
  const tags = (t) => (t && t.length ? h("ul", { class: "tags" }, t.map((x) => h("li", { text: L(x) }))) : null);
  const grade = (ms) => (ms && ms.length ? h("div", { class: "grade" }, ms.map((m) => midia(m))) : null);
  const paras = (v) => list(v).map((t) => h("p", { text: t }));
  const pontos = (v) => h("ul", { class: "pontos" }, list(v).map((t) => h("li", { text: t })));
  const bloco = (k, corpo) => h("section", { class: "bloco" }, h("h4", { text: u(k) }), corpo);
  const btn = (a, principal) => h("a", { class: "btn" + (principal ? " btn--principal" : ""), href: a.url, target: ext(a.url) ? "_blank" : null, rel: ext(a.url) ? "noopener" : null, download: a.download ? true : null, text: L(a.rotulo) });

  /* Mídia: imagem, gif, video (arquivo) e youtube */
  function midia(m, capa) {
    const t = m.tipo || "imagem", leg = L(m.legenda), alt = L(m.alt) || leg || "";
    let el;
    if (t === "youtube") {
      el = capa
        ? h("img", { src: `https://img.youtube.com/vi/${m.id}/hqdefault.jpg`, alt, loading: "lazy" })
        : h("iframe", { src: `https://www.youtube-nocookie.com/embed/${m.id}`, title: alt || u("video"), loading: "lazy", allowfullscreen: true, allow: "encrypted-media; picture-in-picture; fullscreen" });
    } else if (t === "video") {
      el = h("video", { src: m.src, poster: m.poster, playsinline: true, preload: "metadata", loop: capa, autoplay: capa, controls: !capa });
      el.muted = !!capa;
    } else el = h("img", { src: m.src, alt, loading: "lazy", decoding: "async" });
    el.addEventListener("error", () => el.replaceWith(vazio(u("naoEncontrado"), m.src)));
    const q = h("div", { class: ["quadro", !capa && t !== "imagem" && t !== "gif" ? "quadro--16x9" : "", capa && t === "youtube" ? "quadro--yt" : ""].join(" ") }, el);
    return capa ? q : h("figure", { class: "midia" }, q, leg && h("figcaption", { text: leg }));
  }

  /* Detalhe do projeto (janela) */
  const dlg = h("dialog", { class: "detalhe" });
  document.body.append(dlg);
  dlg.addEventListener("click", (e) => e.target === dlg && dlg.close());
  dlg.addEventListener("close", () => dlg.replaceChildren());
  const SEC = [["descricao", paras], ["papel", pontos], ["equipe", pontos], ["desafio", paras], ["resultado", paras], ["aprendizados", pontos]];
  function abrir(p) {
    const links = p.links || [], estruturado = SEC.some(([k]) => tem(p[k]));
    dlg.replaceChildren(h("div", { class: "detalhe__corpo" },
      h("button", { class: "fechar", type: "button", text: u("fechar"), onclick: () => dlg.close() }),
      h("h3", { text: L(p.titulo) }),
      p.selo && h("p", { class: "selo", text: L(p.selo) }),
      tags(p.tags),
      tem(p.fatos) && h("ul", { class: "fatos" }, list(p.fatos).map((t) => h("li", { text: t }))),
      links.length ? h("p", { class: "links" }, links.map((l, i) => btn(l, i === 0))) : null,
      list(p.notas).map((t) => h("p", { class: "nota", text: t })),
      estruturado ? SEC.map(([k, fn]) => tem(p[k]) && bloco(k, fn(p[k]))) : paras(p.descricao || p.resumo),
      (p.midia || []).map((m) => midia(m))));
    dlg.showModal();
  }

  function card(p) {
    const capa = (p.midia || [])[0], titulo = L(p.titulo);
    return h("article", { class: "projeto" + (p.destaque ? " projeto--destaque" : "") },
      h("div", { class: "projeto__midia" }, capa ? midia(capa, true) : vazio(titulo[0], null, "vazio--ini")),
      h("div", { class: "projeto__corpo" },
        p.selo && h("p", { class: "selo", text: L(p.selo) }),
        h("h3", {}, h("button", { class: "projeto__abrir", type: "button", text: titulo, onclick: () => abrir(p) })),
        h("p", { text: L(p.resumo) }),
        tags(p.tags)));
  }

  /* Tipos de seção: para criar um tipo novo, adicione uma função aqui */
  const R = {
    projetos: (s) => h("div", { class: "projetos" }, s.itens.map(card)),
    habilidades: (s) => h("div", {}, s.grupos.map((g) => h("div", { class: "grupo" }, h("h3", { text: L(g.nome) }),
      h("ul", { class: "chips" }, g.itens.map((i) => {
        const o = typeof i === "string" ? { nome: i } : i;
        return h("li", { class: "chip", "data-forte": o.forte }, L(o.nome), L(o.nota) && h("small", { text: L(o.nota) }));
      }))))),
    educacao: (s) => h("ol", { class: "linha" }, s.itens.map((i) => h("li", { class: "linha__item", "data-atual": i.atual, "data-sec": i.secundario },
      h("p", { class: "linha__quando", text: [L(i.periodo), i.atual && u("andamento")].filter(Boolean).join(" · ") }),
      h("h3", { text: L(i.instituicao) }),
      i.curso && h("p", { class: "linha__curso", text: L(i.curso) }),
      i.descricao && h("p", { text: L(i.descricao) }),
      grade(i.midia)))),
    texto: (s) => h("div", { class: "texto" }, list(s.texto).map((t) => h("p", { text: t })), grade(s.midia)),
    galeria: (s) => grade(s.midia),
    contato: (s) => h("ul", { class: "contatos" }, s.itens.map((i) => h("li", {},
      h("a", { class: "contato", href: i.url, target: ext(i.url) ? "_blank" : null, rel: "noopener" },
        h("span", { class: "contato__nome", text: L(i.rotulo) }), i.valor && h("span", { class: "contato__valor", text: L(i.valor) })))))
  };

  /* Montagem da página (roda de novo ao trocar de idioma) */
  const main = $("#topo"), bt = $("#tema"), bl = $("#idioma");
  S.secoes.forEach((s) => (s.id = s.id || s.tipo));

  function render() {
    root.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = L(S.meta.titulo);
    if (dlg.open) dlg.close();

    const foto = h("img", { src: P.foto, alt: u("fotoDe") + P.nome });
    const fotoBox = h("div", { class: "foto" }, foto);
    foto.addEventListener("error", () => fotoBox.replaceChildren(h("span", { class: "foto__ini", "aria-hidden": "true", text: ini(P.nome) })));

    const infos = P.infos || [];
    const secoes = S.secoes.filter((s) => R[s.tipo] || console.warn("Tipo de seção desconhecido:", s.tipo));
    main.replaceChildren(
      h("section", { class: "hero wrap" }, fotoBox,
        h("div", { class: "hero__txt" },
          h("h1", { text: P.nome }),
          h("p", { class: "hero__funcao", text: L(P.funcao) }),
          P.objetivo && h("p", { class: "objetivo", text: L(P.objetivo) }),
          h("h2", { class: "hero__sobre", text: u("sobre") }),
          list(P.sobre).map((t) => h("p", { text: t })),
          infos.length ? h("dl", { class: "infos" }, infos.flatMap((i) => [h("dt", { text: L(i.rotulo) }), h("dd", { text: L(i.valor) })])) : null,
          (P.acoes || []).length ? h("div", { class: "cta" }, P.acoes.map((a) => btn(a, a.principal))) : null,
          (P.apelidos || []).map((a) => h("p", { class: "apelido" }, u("apelido").replace("{plataforma}", a.plataforma),
            h("a", { href: a.url, target: "_blank", rel: "noopener", text: a.nome }))))),
      ...secoes.map((s) => h("section", { class: "secao wrap", id: s.id, "aria-labelledby": s.id + "-t" },
        h("div", { class: "secao__cab" }, h("h2", { id: s.id + "-t", text: L(s.titulo) }), s.descricao && h("p", { text: L(s.descricao) })),
        h("div", { class: "secao__corpo" }, R[s.tipo](s)))));

    const menu = $("#menu");
    menu.setAttribute("aria-label", u("secoes"));
    menu.replaceChildren(...secoes.filter((s) => s.menu !== false).map((s) => h("a", { href: "#" + s.id, text: L(s.menu) || L(s.titulo) })));
    $("#rodape").replaceChildren(h("p", { text: `© ${new Date().getFullYear()} ${P.nome}` }));

    bl.textContent = u("outroIdioma");
    bl.lang = lang === "pt" ? "en" : "pt";
    bt.textContent = root.dataset.tema === "escuro" ? u("temaClaro") : u("temaEscuro");
  }

  bl.addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    store.set("idioma", lang);
    render();
  });
  bt.addEventListener("click", () => {
    root.dataset.tema = root.dataset.tema === "escuro" ? "claro" : "escuro";
    store.set("tema", root.dataset.tema);
    bt.textContent = root.dataset.tema === "escuro" ? u("temaClaro") : u("temaEscuro");
  });
  render();
})();
