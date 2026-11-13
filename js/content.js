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
          titulo: "Work Harder",
          resumo: "Um jogo Incrimental Sobre Carimbar Papelada!",
          descricao: ["Esse jogo foi desenvolvido durante a FelpoJam, uma Game Jam que teve como principal host Felps, um grande streamer brasileiro. Durante o evento, fui responsável pelo Game Design, pela prototipação e pela gestão da equipe. Essa experiência me ensinou bastante sobre o uso do GitHub para o versionamento do projeto, além de me proporcionar um aprendizado importante sobre colaboração e trabalho em equipe dentro de um prazo limitado."],
          tags: ["Godot", "GDscript", "2D"],
          destaque: true,
          midia: [
             { tipo: "gif", src: "assets/gifs/WorkHarder-Menu.gif", legenda: "Menu" },
             { tipo: "video", src: "assets/videos/WorkHarder-Gameplay.mp4", legenda: "Gameplay" },
          ],
          links: [ { rotulo: "Página da Itch.io", url: "https://gozinga.itch.io/work-harder" } ]
        },
        {
          titulo: "Prototípo de Jogo de Terror",
          resumo: "Um prototípo com sprites próprias e um sistema de diálogo simples",
          descricao: ["Este jogo foi desenvolvido com o objetivo de colocar em prática os conhecimentos que adquiri após quatro meses estudando a Unity. O projeto conta com um sistema simples de ataque corpo a corpo (melee attack). Além disso, decidi implementar um sistema de diálogos para tornar a experiência mais imersiva. Apesar de possuir um estilo artístico minimalista, inspirado em FAITH: The Unholy Trinity, o jogo utiliza uma paleta predominantemente monocromática. Objetos e personagens importantes para a narrativa recebem cores próprias, permitindo que se destaquem visualmente em meio ao cenário. Uma das minhas maiores conquistas durante o desenvolvimento foi aprender a trabalhar com Shaders e efeitos de pós-processamento para reproduzir a estética de televisores antigos (CRT). Utilizei Shaders para recriar efeitos como as Scanlines, características das antigas televisões, contribuindo para transmitir ao jogo uma identidade visual retrô."],
          tags: ["Unity", "C#", "2D", "Shaders"], midia: [
            { tipo: "imagem", src: "assets/images/Horror-UnityView.png", legenda: "Game Unity Mode" }, 
            { tipo: "video", src: "assets/videos/Gameplay-Horror.mp4", legenda: "Gameplay" },], 
            links: []
        },
        {
          titulo: "Limpar",
          resumo: "Um jogo de terror onde tem que coletar peças para um robô!",
          descricao: ["Este jogo foi desenvolvido para a Scream Jam, alcançando o 26º lugar na categoria Criatividade. Além disso, entre 930 jogos participantes, conquistamos a 316ª posição no ranking geral. Como reconhecimento adicional, um dos participantes da Jam chegou a gravar um vídeo jogando nosso jogo e publicá-lo no YouTube! Durante o desenvolvimento, fui responsável pelo Game Design, pela prototipação, pelo Level Design, pela criação dos sprites e por parte do Sound Design. Essa experiência me ensinou sobre a complexidade de gerenciar uma equipe com um prazo limitado, além de reforçar a importância de um bom Level Design para garantir que o jogador consiga navegar pelo ambiente sem se perder ou se frustrar durante a experiência."],
          tags: ["Godot", "GDscript", "2D"], midia: [
            { tipo: "gif", src: "assets/gifs/Limpar cutscene.gif", legenda: "Cutscene" }, 
            
          ], links: [{ rotulo: "Página da Itch.io", url: "https://gozinga.itch.io/limpar" }]
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
          { nome: "C#", forte: true, nota: "" }, "Java", "Python" ] },
        { nome: "Front-end", itens: [
          { nome: "HTML", nota: "básico" }, { nome: "CSS", nota: "básico" }, { nome: "JavaScript", nota: "básico" },
          "React", "Node.js", "npm" ] },
        { nome: "Engines de jogos", itens: [
          { nome: "Unity", forte: true }, { nome: "Godot", forte: true }, "Unreal Engine 5",
          { nome: "Game Maker Studio 2", nota: "" } ] },
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
      descricao: "Interessado? Fale comigo por um destes canais!",
      itens: [
        { rotulo: "LinkedIn", valor: "linkedin.com/in/arthur-carneiro-maciel", url: "https://www.linkedin.com/in/arthur-carneiro-maciel/" },
        { rotulo: "Gmail", valor: "arthurcarmac@gmail.com", url: "mailto:arthurcarmac@gmail.com" }
        // , { rotulo: "GitHub", valor: "github.com/seu-usuario", url: "https://github.com/seu-usuario" }
      ]
    }
  ]
};
