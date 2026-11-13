/* ============================================================
   CONTEÚDO DO SITE: edite só este arquivo.
   - Para adicionar algo, copie um bloco { ... } e cole abaixo.
   - Para reordenar seções, mude a ordem dentro de "secoes".
   - Mídia (fotos, GIFs, vídeos) vai nas pastas assets/.
   Tipos de mídia aceitos:
     { tipo: "imagem",  src: "assets/images/foto.png", legenda: "..." }
     { tipo: "gif",     src: "assets/gifs/gameplay.gif" }
     { tipo: "video",   src: "assets/videos/demo.mp4" }
     { tipo: "youtube", id: "ID_DO_VIDEO" }
   ============================================================ */
window.SITE = {
  meta: { titulo: "Arthur Carneiro Maciel | Portfólio" },

  perfil: {
    nome: "Arthur Carneiro Maciel",
    funcao: "Desenvolvedor de jogos e estudante de Ciência da Computação",
    foto: "assets/images/foto.jpg", // coloque sua foto aqui
    sobre: [
      "Comecei a fazer jogos aos 12 anos, no Game Maker Studio 2. Hoje estudo Ciência da Computação na Uniesp e trabalho principalmente com Unity e C#.",
      "Também desenvolvo front-end com React e Node.js, e gosto de levar cada projeto do protótipo até algo jogável ou utilizável."
    ]
  },

  secoes: [
    {
      tipo: "projetos", titulo: "Projetos",
      descricao: "Clique em um projeto para ver detalhes, imagens e vídeos.",
      itens: [
        {
          titulo: "Bullet heaven em Unity",
          resumo: "Jogo de sobrevivência no estilo Vampire Survivors, feito em Unity com C#.",
          descricao: ["Escreva aqui mais detalhes: o que você fez, desafios, o que aprendeu."],
          tags: ["Unity", "C#", "Jogo 2D"],
          destaque: true,
          midia: [
            // { tipo: "gif", src: "assets/gifs/bullet-heaven.gif", legenda: "Gameplay" },
          ],
          links: [ /* { rotulo: "Código no GitHub", url: "https://github.com/..." } */ ]
        },
        {
          titulo: "Tower defense",
          resumo: "Jogo de tower defense desenvolvido na Unity 6.",
          tags: ["Unity 6", "C#"], midia: [], links: []
        },
        {
          titulo: "TaskFlow",
          resumo: "Gerenciador de tarefas em React feito em equipe na faculdade. Atuei no estado global com Context API.",
          tags: ["React", "JavaScript", "CSS"], midia: [], links: []
        },
        {
          titulo: "Editor de imagens com IA",
          resumo: "Editor de imagens no estilo Photoshop com geração de imagens por IA, desenvolvido em equipe.",
          tags: ["React", "Node.js", "JavaScript"], midia: [], links: []
        },
        {
          titulo: "API Voll Bank",
          resumo: "API REST em Java com Spring Boot, arquitetura em camadas, JPA e validações.",
          tags: ["Java", "Spring Boot", "SQL Server"], midia: [], links: []
        }
      ]
    },
    {
      tipo: "habilidades", titulo: "Linguagens e ferramentas",
      descricao: "Em destaque, onde tenho mais facilidade.",
      grupos: [
        { nome: "Linguagens", itens: [
          { nome: "C#", forte: true, nota: "uso na Unity" }, "Java", "Python" ] },
        { nome: "Front-end", itens: [
          { nome: "HTML", nota: "básico" }, { nome: "CSS", nota: "básico" }, { nome: "JavaScript", nota: "básico" },
          "React", "Node.js", "npm" ] },
        { nome: "Engines de jogos", itens: [
          { nome: "Unity", forte: true }, { nome: "Godot", forte: true }, "Unreal Engine 5",
          { nome: "Game Maker Studio 2", nota: "minha primeira, aos 12 anos" } ] },
        { nome: "IDEs", itens: [ "VS Code", "Visual Studio", "IntelliJ" ] }
      ]
    },
    {
      tipo: "educacao", titulo: "Educação",
      itens: [
        { instituicao: "Motiva", curso: "Colégio" },
        { instituicao: "Uniesp", curso: "Ciência da Computação", atual: true }
        // campos opcionais: periodo: "2020 a 2023", descricao: "...", midia: [ ... ]
      ]
    },

    /* EXEMPLOS DE SEÇÕES EXTRAS (tire os comentários para usar):
    { tipo: "texto", titulo: "Mais sobre mim", texto: ["Parágrafo 1", "Parágrafo 2"],
      midia: [ { tipo: "imagem", src: "assets/images/eu.jpg" } ] },
    { tipo: "galeria", titulo: "Galeria", midia: [
      { tipo: "gif", src: "assets/gifs/a.gif" }, { tipo: "youtube", id: "ID_DO_VIDEO" } ] },
    */

    {
      tipo: "contato", titulo: "Contato",
      descricao: "Fale comigo por um destes canais.",
      itens: [
        { rotulo: "LinkedIn", valor: "linkedin.com/in/seu-usuario", url: "https://www.linkedin.com/in/seu-usuario" },
        { rotulo: "Gmail", valor: "seuemail@gmail.com", url: "mailto:seuemail@gmail.com" }
        // , { rotulo: "GitHub", valor: "github.com/seu-usuario", url: "https://github.com/seu-usuario" }
      ]
    }
  ]
};
