/* ============================================================
   CONTEÚDO DO SITE: edite só este arquivo.
   IDIOMAS: qualquer texto pode ser uma string simples (igual nos
   dois idiomas) ou um par { pt: "...", en: "..." }.
   Listas de parágrafos aceitam um par por item ou um par inteiro:
     descricao: { pt: ["p1", "p2"], en: ["p1", "p2"] }
   Se faltar o "en", o site mostra o texto em português.
   ============================================================ */
window.SITE = {
  meta: { titulo: { pt: "Arthur Carneiro Maciel | Portfólio", en: "Arthur Carneiro Maciel | Portfolio" } },

  /* Textos fixos da interface */
  ui: {
    sobre: { pt: "Sobre mim", en: "About me" },
    fechar: { pt: "Fechar", en: "Close" },
    naoEncontrado: { pt: "Arquivo não encontrado", en: "File not found" },
    andamento: { pt: "Em andamento", en: "In progress" },
    fotoDe: { pt: "Foto de ", en: "Photo of " },
    secoes: { pt: "Seções", en: "Sections" },
    video: { pt: "Vídeo", en: "Video" },
    temaEscuro: { pt: "Tema escuro", en: "Dark theme" },
    temaClaro: { pt: "Tema claro", en: "Light theme" },
    outroIdioma: { pt: "English", en: "Português" }
  },

  perfil: {
    nome: "Arthur Carneiro Maciel",
    funcao: { pt: "Desenvolvedor de jogos e estudante de Ciência da Computação", en: "Game developer and Computer Science student" },
    foto: "assets/images/photo.png", // coloque sua foto aqui
    sobre: [
      { pt: "Sou estudante de Ciência da Computação na UNIESP e busco uma oportunidade de estágio em desenvolvimento de jogos. Desenvolvo projetos com Unity/C# e Godot, com participação em game jams e experiências de colaboração em equipe.",
        en: "I am a Computer Science student at UNIESP seeking an internship opportunity in game development. I develop projects using Unity/C# and Godot, with experience participating in game jams and collaborating in team environments." },
      { pt: "Comecei a criar jogos aos 12 anos e venho aprofundando meus conhecimentos por meio de projetos práticos.",
        en: "I started creating games at the age of 12 and have been continuously expanding my knowledge through hands-on projects." }
    ]
  },

  secoes: [
    {
      tipo: "projetos",
      titulo: { pt: "Projetos", en: "Projects" },
      descricao: { pt: "Clique em um projeto para ver detalhes, imagens e vídeos.", en: "Click a project to see details, images and videos." },
      itens: [
        {
          titulo: "Work Harder",
          resumo: { pt: "Um jogo incremental sobre carimbar papelada!", en: "An incremental game about stamping paperwork!" },
          descricao: [{
            pt: "Esse jogo foi desenvolvido durante a FelpoJam, uma Game Jam que teve como principal host Felps, um grande streamer brasileiro. Durante o evento, fui responsável pelo Game Design, pela prototipação e pela gestão da equipe. Essa experiência me ensinou bastante sobre o uso do GitHub para o versionamento do projeto, além de me proporcionar um aprendizado importante sobre colaboração e trabalho em equipe dentro de um prazo limitado.",
            en: "This game was made during FelpoJam, a game jam hosted mainly by Felps, a well-known Brazilian streamer. During the event, I was responsible for game design, prototyping and team management. The experience taught me a lot about using GitHub for version control, and gave me valuable lessons in collaboration and teamwork under a tight deadline."
          }],
          tags: ["Godot", "GDscript", "2D"],
          destaque: true,
          midia: [
            { tipo: "gif", src: "assets/gifs/WorkHarder-Menu.gif", legenda: "Menu" },
            { tipo: "video", src: "assets/videos/WorkHarder-Gameplay.mp4", legenda: "Gameplay" },
          ],
          links: [{ rotulo: { pt: "Página da Itch.io", en: "Itch.io page" }, url: "https://gozinga.itch.io/work-harder" }]
        },
        {
          titulo: { pt: "Protótipo de Jogo de Terror", en: "Horror Game Prototype" },
          resumo: { pt: "Um protótipo com sprites próprias e um sistema de diálogo simples", en: "A prototype with original sprites and a simple dialogue system" },
          descricao: [{
            pt: "Este jogo foi desenvolvido com o objetivo de colocar em prática os conhecimentos que adquiri após quatro meses estudando a Unity. O projeto conta com um sistema simples de ataque corpo a corpo (melee attack). Além disso, decidi implementar um sistema de diálogos para tornar a experiência mais imersiva. Apesar de possuir um estilo artístico minimalista, inspirado em FAITH: The Unholy Trinity, o jogo utiliza uma paleta predominantemente monocromática. Objetos e personagens importantes para a narrativa recebem cores próprias, permitindo que se destaquem visualmente em meio ao cenário. Uma das minhas maiores conquistas durante o desenvolvimento foi aprender a trabalhar com Shaders e efeitos de pós-processamento para reproduzir a estética de televisores antigos (CRT). Utilizei Shaders para recriar efeitos como as Scanlines, características das antigas televisões, contribuindo para transmitir ao jogo uma identidade visual retrô.",
            en: "I built this game to put into practice what I learned after four months studying Unity. It has a simple melee attack system, and I added a dialogue system to make the experience more immersive. Although the art style is minimalist and inspired by FAITH: The Unholy Trinity, the game uses a mostly monochrome palette. Objects and characters that matter to the story get their own colors, so they stand out against the scenery. One of my biggest achievements during development was learning to work with shaders and post-processing effects to reproduce the look of old CRT televisions. I used shaders to recreate effects such as scanlines, giving the game a retro visual identity."
          }],
          tags: ["Unity", "C#", "2D", "Shaders"],
          midia: [
            { tipo: "imagem", src: "assets/images/Horror-UnityView.png", legenda: { pt: "Game Unity Mode", en: "Unity editor view" } },
            { tipo: "video", src: "assets/videos/Gameplay-Horror.mp4", legenda: "Gameplay" },
          ],
          links: []
        },
        {
          titulo: "Limpar",
          resumo: { pt: "Um jogo de terror onde tem que coletar peças para um robô!", en: "A horror game where you collect parts for a robot!" },
          descricao: [{
            pt: "Este jogo foi desenvolvido para a Scream Jam, alcançando o 26º lugar na categoria Criatividade. Além disso, entre 930 jogos participantes, conquistamos a 316ª posição no ranking geral. Como reconhecimento adicional, um dos participantes da Jam chegou a gravar um vídeo jogando nosso jogo e publicá-lo no YouTube! Durante o desenvolvimento, fui responsável pelo Game Design, pela prototipação, pelo Level Design, pela criação dos sprites e por parte do Sound Design. Essa experiência me ensinou sobre a complexidade de gerenciar uma equipe com um prazo limitado, além de reforçar a importância de um bom Level Design para garantir que o jogador consiga navegar pelo ambiente sem se perder ou se frustrar durante a experiência.",
            en: "This game was made for Scream Jam, placing 26th in the Creativity category. Out of 930 participating games, we ranked 316th overall. As an extra recognition, one of the jam participants even recorded a video playing our game and posted it on YouTube! During development, I was responsible for game design, prototyping, level design, sprite creation and part of the sound design. The experience taught me about the complexity of managing a team on a tight deadline, and reinforced how important good level design is so players can navigate the environment without getting lost or frustrated."
          }],
          tags: ["Godot", "GDscript", "2D"],
          midia: [
            { tipo: "gif", src: "assets/gifs/Limpar cutscene.gif", legenda: "Cutscene" },
            { tipo: "video", src: "assets/videos/LimparGameplay.mp4", legenda: "Gameplay" },
          ],
          links: [{ rotulo: { pt: "Página da Itch.io", en: "Itch.io page" }, url: "https://gozinga.itch.io/limpar" }]
        },
        
      ]
    },
    {
      tipo: "habilidades",
      titulo: { pt: "Linguagens e ferramentas", en: "Languages and tools" },
      descricao: { pt: "Em destaque, onde tenho mais facilidade.", en: "Highlighted: where I am most comfortable." },
      grupos: [
        { nome: { pt: "Linguagens", en: "Languages" }, itens: [
          { nome: "C#", forte: true }, "Java", "Python" ] },
        { nome: "Front-end", itens: [
          { nome: "HTML", nota: { pt: "básico", en: "basic" } }, { nome: "CSS", nota: { pt: "básico", en: "basic" } }, { nome: "JavaScript", nota: { pt: "básico", en: "basic" } },
          "React", "Node.js", "npm" ] },
        { nome: { pt: "Engines de jogos", en: "Game engines" }, itens: [
          { nome: "Unity", forte: true }, { nome: "Godot", forte: true }, "Unreal Engine 5", "Game Maker Studio 2" ] },
        { nome: "IDEs", itens: [ "VS Code", "Visual Studio", "IntelliJ" ] }
      ]
    },
    {
      tipo: "educacao",
      titulo: { pt: "Educação", en: "Education" },
      itens: [
        { instituicao: "Motiva", curso: { pt: "Colégio", en: "School" } },
        { instituicao: "Uniesp", curso: { pt: "Ciência da Computação", en: "Computer Science" }, atual: true }
        // campos opcionais: periodo: "2020 a 2023", descricao: { pt: "...", en: "..." }, midia: [ ... ]
      ]
    },
    {
      tipo: "contato",
      titulo: { pt: "Contato", en: "Contact" },
      descricao: { pt: "Interessado? Fale comigo por um destes canais!", en: "Interested? Get in touch through any of these channels!" },
      itens: [
        { rotulo: "LinkedIn", valor: "linkedin.com/in/arthur-carneiro-maciel", url: "https://www.linkedin.com/in/arthur-carneiro-maciel/" },
        { rotulo: "Gmail", valor: "arthurcarmac@gmail.com", url: "mailto:arthurcarmac@gmail.com" },
        { rotulo: "Celular", valor: "+55 (83) 9 9344-6500", url: "tel:+5583993446500" }
      ]
    }
  ]
};