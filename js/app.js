(() => {
  "use strict";
  const S = window.SITE, P = S.perfil, root = document.documentElement;
  const $ = (s) => document.querySelector(s);

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
  const tags = (t) => (t && t.length ? h("ul", { class: "tags" }, t.map((x) => h("li", { text: x }))) : null);
  const grade = (ms) => (ms && ms.length ? h("div", { class: "grade" }, ms.map((m) => midia(m))) : null);

  /* Mídia: imagem, gif, video (arquivo) e youtube */
  function midia(m, capa) {
    const t = m.tipo || "imagem", alt = m.alt || m.legenda || "";
    let el;
    if (t === "youtube") {
      el = capa
        ? h("img", { src: `https://img.youtube.com/vi/${m.id}/hqdefault.jpg`, alt, loading: "lazy" })
        : h("iframe", { src: `https://www.youtube-nocookie.com/embed/${m.id}`, title: alt || "Vídeo", loading: "lazy", allowfullscreen: true, allow: "encrypted-media; picture-in-picture; fullscreen" });
    } else if (t === "video") {
      el = h("video", { src: m.src, poster: m.poster, playsinline: true, preload: "metadata", loop: capa, autoplay: capa, controls: !capa });
      el.muted = !!capa;
    } else el = h("img", { src: m.src, alt, loading: "lazy", decoding: "async" });
    el.addEventListener("error", () => el.replaceWith(vazio("Arquivo não encontrado", m.src)));
    const q = h("div", { class: ["quadro", !capa && t !== "imagem" && t !== "gif" ? "quadro--16x9" : "", capa && t === "youtube" ? "quadro--yt" : ""].join(" ") }, el);
    return capa ? q : h("figure", { class: "midia" }, q, m.legenda && h("figcaption", { text: m.legenda }));
  }

  /* Detalhe do projeto (janela) */
  const dlg = h("dialog", { class: "detalhe" });
  document.body.append(dlg);
  dlg.addEventListener("click", (e) => e.target === dlg && dlg.close());
  dlg.addEventListener("close", () => dlg.replaceChildren());
  function abrir(p) {
    const links = p.links || [];
    dlg.replaceChildren(h("div", { class: "detalhe__corpo" },
      h("button", { class: "fechar", type: "button", text: "Fechar", onclick: () => dlg.close() }),
      h("h3", { text: p.titulo }),
      tags(p.tags),
      [].concat(p.descricao || p.resumo).map((t) => h("p", { text: t })),
      links.length ? h("p", { class: "links" }, links.map((l) => h("a", { href: l.url, target: "_blank", rel: "noopener", text: l.rotulo }))) : null,
      (p.midia || []).map((m) => midia(m))));
    dlg.showModal();
  }

  function card(p) {
    const capa = (p.midia || [])[0];
    return h("article", { class: "projeto" + (p.destaque ? " projeto--destaque" : "") },
      h("div", { class: "projeto__midia" }, capa ? midia(capa, true) : vazio(p.titulo[0], null, "vazio--ini")),
      h("div", { class: "projeto__corpo" },
        h("h3", {}, h("button", { class: "projeto__abrir", type: "button", text: p.titulo, onclick: () => abrir(p) })),
        h("p", { text: p.resumo }),
        tags(p.tags)));
  }

  /* Tipos de seção: para criar um tipo novo, adicione uma função aqui */
  const R = {
    projetos: (s) => h("div", { class: "projetos" }, s.itens.map(card)),
    habilidades: (s) => h("div", {}, s.grupos.map((g) => h("div", { class: "grupo" }, h("h3", { text: g.nome }),
      h("ul", { class: "chips" }, g.itens.map((i) => {
        const o = typeof i === "string" ? { nome: i } : i;
        return h("li", { class: "chip", "data-forte": o.forte }, o.nome, o.nota && h("small", { text: o.nota }));
      }))))),
    educacao: (s) => h("ol", { class: "linha" }, s.itens.map((i) => h("li", { class: "linha__item", "data-atual": i.atual },
      h("p", { class: "linha__quando", text: i.periodo || (i.atual ? "Em andamento" : "") }),
      h("h3", { text: i.instituicao }),
      i.curso && h("p", { class: "linha__curso", text: i.curso }),
      i.descricao && h("p", { text: i.descricao }),
      grade(i.midia)))),
    texto: (s) => h("div", { class: "texto" }, [].concat(s.texto || []).map((t) => h("p", { text: t })), grade(s.midia)),
    galeria: (s) => grade(s.midia),
    contato: (s) => h("ul", { class: "contatos" }, s.itens.map((i) => h("li", {},
      h("a", { class: "contato", href: i.url, target: /^https?:/.test(i.url) ? "_blank" : null, rel: "noopener" },
        h("span", { class: "contato__nome", text: i.rotulo }), i.valor && h("span", { class: "contato__valor", text: i.valor })))))
  };

  /* Montagem da página */
  document.title = S.meta.titulo;
  const foto = h("img", { src: P.foto, alt: "Foto de " + P.nome });
  const fotoBox = h("div", { class: "foto" }, foto);
  foto.addEventListener("error", () => fotoBox.replaceChildren(h("span", { class: "foto__ini", "aria-hidden": "true", text: ini(P.nome) })));

  const main = $("#topo");
  main.append(h("section", { class: "hero wrap" }, fotoBox,
    h("div", { class: "hero__txt" }, h("h1", { text: P.nome }), h("p", { class: "hero__funcao", text: P.funcao }),
      h("h2", { class: "hero__sobre", text: "Sobre mim" }), P.sobre.map((t) => h("p", { text: t })))));

  S.secoes.forEach((s) => {
    if (!R[s.tipo]) return console.warn("Tipo de seção desconhecido:", s.tipo);
    s.id = s.id || s.tipo;
    main.append(h("section", { class: "secao wrap", id: s.id, "aria-labelledby": s.id + "-t" },
      h("div", { class: "secao__cab" }, h("h2", { id: s.id + "-t", text: s.titulo }), s.descricao && h("p", { text: s.descricao })),
      h("div", { class: "secao__corpo" }, R[s.tipo](s))));
  });

  $("#menu").append(...S.secoes.filter((s) => R[s.tipo] && s.menu !== false).map((s) => h("a", { href: "#" + s.id, text: s.menu || s.titulo })));
  $("#rodape").append(h("p", { text: `© ${new Date().getFullYear()} ${P.nome}` }));

  const bt = $("#tema");
  const rot = () => (bt.textContent = root.dataset.tema === "escuro" ? "Tema claro" : "Tema escuro");
  bt.addEventListener("click", () => {
    root.dataset.tema = root.dataset.tema === "escuro" ? "claro" : "escuro";
    try { localStorage.setItem("tema", root.dataset.tema); } catch (e) {}
    rot();
  });
  rot();
})();
