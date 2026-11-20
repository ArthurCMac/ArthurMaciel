/* ============================================================
   CONTEÚDO DO SITE: edite só este arquivo.
   IDIOMAS: qualquer texto pode ser uma string simples (igual nos
   dois idiomas) ou um par { pt: "...", en: "..." }.
   Listas de parágrafos aceitam um par por item ou um par inteiro:
     descricao: { pt: ["p1", "p2"], en: ["p1", "p2"] }
   Se faltar o "en", o site mostra o texto em português.

   CAMPOS DE UM PROJETO (todos opcionais, exceto titulo e resumo):
     selo, fatos[], links[], notas[], descricao, papel[], equipe[],
     desafio, resultado, aprendizados[], midia[], tags[]
   Sem nenhum dos campos de texto detalhado, usa-se "descricao".
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
    outroIdioma: { pt: "English", en: "Português" },
    apelido: { pt: "Meu perfil no {plataforma}: ", en: "My {plataforma} profile: " },
    descricao: { pt: "Descrição", en: "Description" },
    papel: { pt: "Minha participação", en: "My contribution" },
    equipe: { pt: "Contribuição da equipe", en: "Team contribution" },
    desafio: { pt: "Desafio e solução", en: "Challenge and solution" },
    resultado: { pt: "Resultado", en: "Result" },
    aprendizados: { pt: "Aprendizados", en: "Lessons learned" }
  },

  perfil: {
    nome: "Arthur Carneiro Maciel",
    funcao: { pt: "Desenvolvedor de jogos e estudante de Ciência da Computação", en: "Game developer and Computer Science student" },
    objetivo: {
      pt: "Busco estágio em desenvolvimento de jogos, com foco em Game Design e programação.",
      en: "Seeking an internship in game development, focused on game design and programming."
    },
    foto: "assets/images/photo.png", // coloque sua foto aqui
    sobre: [
      { pt: "Sou estudante de Ciência da Computação na UNIESP e busco uma oportunidade de estágio em desenvolvimento de jogos. Desenvolvo projetos com Unity/C# e Godot, com participação em game jams e experiências de colaboração em equipe.",
        en: "I am a Computer Science student at UNIESP seeking an internship opportunity in game development. I develop projects using Unity/C# and Godot, with experience participating in game jams and collaborating in team environments." },
      { pt: "Comecei a criar jogos aos 12 anos e venho aprofundando meus conhecimentos por meio de projetos práticos.",
        en: "I started creating games at the age of 12 and have been continuously expanding my knowledge through hands-on projects." }
    ],
    /* Dados para triagem de estágio. Tire os // e preencha o que fizer sentido: */
    infos: [
      // { rotulo: { pt: "Cidade", en: "Location" }, valor: "Cidade, UF" },
      // { rotulo: { pt: "Modalidade", en: "Work mode" }, valor: { pt: "Presencial, híbrido ou remoto", en: "On-site, hybrid or remote" } },
      // { rotulo: { pt: "Disponibilidade", en: "Availability" }, valor: { pt: "Meio período, a partir de ...", en: "Part-time, from ..." } },
    ],
    /* Botões da abertura. O currículo precisa estar em assets/docs/curriculo.pdf */
    acoes: [
      { rotulo: { pt: "Ver projetos", en: "View projects" }, url: "#projetos", principal: true },
      { rotulo: { pt: "Currículo (PDF)", en: "Resume (PDF)" }, url: "assets/docs/curriculo.pdf", download: true },
      { rotulo: "GitHub", url: "https://github.com/arthurcmac" },
      { rotulo: { pt: "Contato", en: "Contact" }, url: "#contato" }
    ],
    /* Liga seus nomes de usuário ao seu nome profissional */
    apelidos: [
      { plataforma: "itch.io", nome: "Gozinga", url: "https://gozinga.itch.io" }
    ]
  },

  secoes: [
    {
      tipo: "projetos",
      titulo: { pt: "Projetos", en: "Projects" },
      descricao: { pt: "Clique em um projeto para ver minha participação, os desafios e o resultado.", en: "Click a project to see my contribution, the challenges and the result." },
      itens: [
        {
          titulo: "Work Harder",
          resumo: { pt: "Um jogo incremental sobre carimbar papelada, feito em 11 dias na FelpoJam.", en: "An incremental game about stamping paperwork, made in 11 days for FelpoJam." },
          selo: { pt: "FelpoJam · 11 dias", en: "FelpoJam · 11 days" },
          fatos: [
            { pt: "Game jam com o streamer Felps como principal host", en: "Game jam hosted mainly by the streamer Felps" },
            { pt: "Equipe de 4 pessoas", en: "Team of 4" }
          ],
          descricao: [{
            pt: "Esse jogo foi desenvolvido durante a FelpoJam, uma Game Jam que teve como principal host Felps, um grande streamer brasileiro. Durante o evento, fui responsável pelo Game Design, pela prototipação e pela gestão da equipe. Essa experiência me ensinou bastante sobre o uso do GitHub para o versionamento do projeto, além de me proporcionar um aprendizado importante sobre colaboração e trabalho em equipe dentro de um prazo limitado.",
            en: "This game was made during FelpoJam, a game jam hosted mainly by Felps, a well-known Brazilian streamer. During the event, I was responsible for game design, prototyping and team management. The experience taught me a lot about using GitHub for version control, and gave me valuable lessons in collaboration and teamwork under a tight deadline."
          }],
          papel: [
            { pt: "Game Design e gestão da equipe.", en: "Game design and team management." },
            { pt: "Criei a mecânica base do clicker.", en: "I built the core clicker mechanic." },
            { pt: "Criei a base do sistema de upgrades.", en: "I built the foundation of the upgrade system" }
          ],
          equipe: [
            { pt: "Meu colega (), estava também responsável pela programação e ajudou a polir as mecânicas bases, adicionando mais conteúdo. Além disso, ficou responsável por fazer a cutscene.", en: "A programming teammate improved the upgrade system, added more content and made the cutscene." },
            { pt: "Minha Colega (), estava responsável pela a arte do jogo, desde da animação do player carimbando, até para a criação dos sprites 2D desenhados", en: "My teammate was responsible for the game's art, from the player's stamping animation to the creation of the 2D sprites." },
            { pt: "Meu colega (), ficou responsável pela música do jogo.", en: "My teammate was responsible for the game's music." },
          ],
          desafio: {
            pt: "O jogo era simples e quase sem dificuldade técnica, então o desafio foi manter o escopo pequeno e deixar espaço para polimento. Usei o que aprendi com os erros de escopo do Limpar e deixei os testes com jogadores guiarem o que melhorar.",
            en: "The game was simple and had little technical difficulty, so the challenge was keeping the scope small and leaving room for polish. I applied what I learned from the scope mistakes in Limpar and let playtests guide what to improve."
          },
          resultado: {
            pt: "Os Playtests levaram a mudanças concretas, como um upgrade que remove o tempo de espera entre cliques.",
            en: "Playtests led to concrete changes, such as an upgrade that removes the wait time between clicks."
          },
          aprendizados: [
            { pt: "O poder do playtesting: ver a reação dos jogadores mostrou onde polir o jogo.", en: "The power of playtesting: watching players react showed where to polish the game." },
            { pt: "Uso do GitHub para versionar o projeto em equipe.", en: "Using GitHub to version the project as a team." },
            { pt: "Controle de escopo.", en: "Scope control." }
          ],
          tags: ["Godot", "GDScript", "2D"],
          destaque: true,
          midia: [
            { tipo: "gif", src: "assets/gifs/WorkHarder-Menu.gif", legenda: "Menu" },
            { tipo: "video", src: "assets/videos/WorkHarder-Gameplay.mp4", legenda: "Gameplay" },
          ],
          links: [{ rotulo: { pt: "Jogar no itch.io", en: "Play on itch.io" }, url: "https://gozinga.itch.io/work-harder" }],
          
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
          selo: { pt: "26º em Criatividade · Scream Jam · 7 dias", en: "26th in Creativity · Scream Jam · 7 days" },
          fatos: [
            { pt: "Scream Jam · 7 dias", en: "Scream Jam · 7 days" },
            { pt: "316º lugar geral entre 930 jogos", en: "316th overall out of 930 games" }
          ],
          descricao: {
            pt: "Um dos primeiros jogos em que trabalhei em equipe e que concluí de verdade, feito para a Scream Jam. Esse jogo Me ensinou bastante sobre Escopo, Game Design, e colaboração em equipe.",
            en: "One of the first games I worked on as a team and truly finished, made for Scream Jam. This game taught me a lot about scope, game design, and team collaboration."
          },
          papel: [
            { pt: "Prototipação e Game Design.", en: "Prototyping and Game Design." },
            { pt: "Level Design.", en: "Level Design" },
            { pt: "Criação dos sprites.", en: "Sprite creation." },
            { pt: "Sound Design.", en: "Sound Design." },
          ],
          desafio: {
            pt: "O maior desafio foi o escopo. O jogo começou como uma experiência com uma história mais profunda, mas decidimos focar em uma jogabilidade mais arcade, inspirada em Slender. Cortar o escopo e enfrentar o scope creep foi o principal ensinamento técnico do projeto.",
            en: "The biggest challenge was scope. The game started as an experience with a deeper story, but we decided to focus on a more arcade gameplay inspired by Slender. Cutting scope and dealing with scope creep was the main technical lesson of the project."
          },
          resultado: {
            pt: "26º lugar na categoria Criatividade e 316º lugar geral entre 930 jogos. O jogo foi bem recebido na jam, e um participante chegou a gravar um vídeo jogando e publicá-lo no YouTube.",
            en: "26th place in the Creativity category and 316th overall out of 930 games. The game was well received in the jam, and a participant even recorded a video playing it and posted it on YouTube."
          },
          aprendizados: [
            { pt: "Acerto: o estilo de arte simples facilitou a entrega do jogo.", en: "What worked: the simple art style made it easier to deliver the game." },
            { pt: "Erro: ruas sem saída tiravam do jogador a chance de criar um plano de fuga e evadir o inimigo sem perder uma vida. Hoje evito becos sem saída no Level Design.", en: "Mistake: dead-end streets took away the player's chance to plan an escape and evade the enemy without losing a life. Now I avoid dead ends in level design." },
            { pt: "Erro: o cenário precisava de diferenças visuais entre as áreas, para o jogador saber se já passou por ali.", en: "Mistake: the scenery needed visual differences between areas, so players could tell whether they had already been there." },
            { pt: "Escopo e scope creep: o que aprendi aqui guiou o Work Harder.", en: "Scope and scope creep: what I learned here guided Work Harder." }
          ],
          tags: ["Godot", "GDScript", "2D"],
          midia: [
            { tipo: "gif", src: "assets/gifs/Limpar cutscene.gif", legenda: "Cutscene" },
            { tipo: "video", src: "assets/videos/LimparGameplay.mp4", legenda: "Gameplay" },
          ],
          links: [{ rotulo: { pt: "Jogar no itch.io", en: "Play on itch.io" }, url: "https://gozinga.itch.io/limpar" }
            // , { rotulo: { pt: "Vídeo de um participante no YouTube", en: "A participant's video on YouTube" }, url: "https://www.youtube.com/watch?v=..." }
          ],
          notas: [
            
            { pt: "Para a melhor experiência, baixe a versão executável: a versão web tem desempenho inferior.", en: "For the best experience, download the executable version: the web version performs worse." }
          ]
        },
      ]
    },
    {
      tipo: "habilidades",
      titulo: { pt: "Linguagens e ferramentas", en: "Languages and tools" },
      descricao: { pt: "Em destaque, onde tenho mais facilidade. As notas mostram onde usei cada tecnologia.", en: "Highlighted: where I am most comfortable. Notes show where I used each technology." },
      grupos: [
        { nome: { pt: "Linguagens", en: "Languages" }, itens: [
          { nome: "C#", forte: true, nota: "Unity" },
          { nome: "GDScript", forte: true, nota: "Godot" },
          "Java",
          "Python" ] },
        { nome: { pt: "Engines de jogos", en: "Game engines" }, itens: [
          { nome: "Unity", forte: true, nota: { pt: "protótipo de terror", en: "horror prototype" } },
          { nome: "Godot", forte: true, nota: "Work Harder, Limpar" },
          "Unreal Engine 5",
          "Game Maker Studio 2" ] },
        { nome: { pt: "Versionamento", en: "Version control" }, itens: [
          { nome: "GitHub", nota: { pt: "projetos em equipe", en: "team projects" } } ] },
        { nome: { pt: "Web (complementar)", en: "Web (supporting)" }, itens: [
          { nome: "HTML", nota: { pt: "básico", en: "basic" } }, { nome: "CSS", nota: { pt: "básico", en: "basic" } }, { nome: "JavaScript", nota: { pt: "básico", en: "basic" } },
          "React",
          { nome: "Node.js", nota: { pt: "ambiente de execução JS", en: "JS runtime" } },
          { nome: "npm", nota: { pt: "gerenciador de pacotes", en: "package manager" } } ] },
        { nome: "IDEs", itens: [ "VS Code", "Visual Studio", "IntelliJ" ] }
      ]
    },
    {
      tipo: "educacao",
      titulo: { pt: "Educação", en: "Education" },
      itens: [
        { instituicao: "Uniesp", curso: { pt: "Ciência da Computação", en: "Computer Science" },
          periodo: { pt: "2025 – 2029 (previsão de conclusão)", en: "2025 – 2029 (expected graduation)" }, atual: true },
        { instituicao: "Motiva", curso: { pt: "Colégio", en: "School" }, secundario: true }
        // campos opcionais: descricao: { pt: "...", en: "..." }, midia: [ ... ]
      ]
    },
    {
      tipo: "contato",
      titulo: { pt: "Contato", en: "Contact" },
      descricao: { pt: "Estou buscando estágio em desenvolvimento de jogos. Fale comigo por um destes canais!", en: "I am looking for a game development internship. Get in touch through any of these channels!" },
      itens: [
        { rotulo: "LinkedIn", valor: "linkedin.com/in/arthur-carneiro-maciel", url: "https://www.linkedin.com/in/arthur-carneiro-maciel/" },
        { rotulo: "Gmail", valor: "arthurcarmac@gmail.com", url: "mailto:arthurcarmac@gmail.com" },
        { rotulo: "GitHub", valor: "github.com/arthurcmac", url: "https://github.com/arthurcmac" },
        { rotulo: "itch.io", valor: "gozinga.itch.io", url: "https://gozinga.itch.io" },
        { rotulo: { pt: "Celular", en: "Phone" }, valor: "+55 (83) 9 9344-6500", url: "tel:+5583993446500" }
      ]
    }
  ]
};
