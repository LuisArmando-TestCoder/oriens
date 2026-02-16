export const siteContent = {
  metadata: {
    title: "Aba Oriens | Poética Orgánica e Ingeniería Creativa",
    description: "Aba Oriens es un autor contemporáneo cuya obra combina fisiología, mística y crítica cultural. Perfil de Luis Murillo Baltodano, Ingeniero Creativo Senior especializado en gráficos por computadora y arte generativo.",
    author: "Luis Murillo Baltodano",
    keywords: ["Aba Oriens", "Luis Murillo Baltodano", "Poesía contemporánea", "Literatura experimental", "Ingeniería Creativa", "Creative Coding", "WebGL", "Three.js", "Arte Generativo", "Costa Rica", "Escritura performativa"],
    og: {
      title: "Aba Oriens | Poética Orgánica e Ingeniería Creativa",
      description: "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano. Fusión de literatura experimental y tecnología creativa.",
      url: "https://oriens.aiban.news",
      image: "/1.jpeg",
    }
  },
  theme: {
    colors: {
      background: "#050505",
      foreground: "#ededed",
      primary: "#ff0055",
      secondary: "#00ffff",
      accent: "#ffae00",
    }
  },
  navigation: {
    links: [
      { label: "INICIO", href: "/" },
      { label: "PROYECTOS", href: "/projects" },
      { label: "POEMAS", href: "/poems" },
    ],
  },
  hero: {
    title: "ORIENS",
    subtitle: "Poética orgánica, corporal y violenta",
    cta: "EXPLORAR",
  },
  about: {
    title: "Aba Oriens",
    images: new Array(22).fill(0).map((_, i) => ({
      src: `/${i + 1}.jpg`,
      alt: `Foto ${i + 1}`,
    })),
    intro:
      "Aba Oriens es el seudónimo de un autor contemporáneo en lengua española cuya obra se caracteriza por una poética orgánica, corporal violenta. Su escritura combina fisiología, mística y crítica cultural en composiciones fragmentarias fechadas con precisión cronológica. Su producción reciente está vinculada a recitales performativos en espacios culturales independientes.",
    sections: [
      {
        id: "estilo",
        title: "Estilo",
        content: "La prosa de Oriens se distingue por:",
        items: [
          "Anclaje temporal exacto: fechas, horas y minutos que funcionan como dispositivos de verosimilitud clínica.",
          "Léxico biomédico integrado a la metáfora: términos como alvéolos, hipercapnia, transverso, yugular o micelio operan como estructura simbólica y no como ornamentación técnica.",
          "Enumeración barroca: acumulaciones de marcas comerciales, bebidas alcohólicas, especias, tecnologías digitales y referentes culturales.",
          "Fusión de erotismo y trauma: el cuerpo es simultáneamente altar, campo de batalla y laboratorio.",
          "Intertextualidad cultural: referencias a fenómenos contemporáneos como blockchain, OnlyFans, plataformas de apuestas en línea y cultura pop global, en tensión con imaginarios religiosos y filosóficos.",
        ],
        footer: "Su escritura oscila entre el poema en prosa, el monólogo dramático y el registro confesional.",
      },
      {
        id: "temas-recurrentes",
        title: "Temas recurrentes",
        topics: [
          {
            title: "1. El cuerpo como territorio metafísico",
            description: "El cuerpo aparece como superficie de inscripción del deseo, la culpa y la violencia. Parto, asfixia, pelea y sacrificio son imágenes centrales.",
          },
          {
            title: "2. Respiración y deuda existencial",
            description: "La respiración se convierte en símbolo económico y ontológico: vivir implica gasto, intercambio y desgaste irreversible.",
          },
          {
            title: "3. Mercado y trascendencia",
            description: "La lógica del consumo y la monetización digital se yuxtapone con símbolos religiosos. La salvación es presentada como transacción.",
          },
          {
            title: "4. Violencia resignificada",
            description: "La lucha física es reconfigurada como intimidad: el clinch es abrazo, la llave es protección, el golpe es confirmación de presencia.",
          },
          {
            title: "5. Hambre y asfixia",
            description: "La referencia a la polilla Atlas Attacus, que carece de boca en su fase adulta y muere tras reproducirse, funciona como alegoría de deseo sin posibilidad de nutrición.",
          },
        ],
      },
      {
        id: "estructura-tecnica",
        title: "Estructura y técnica",
        paragraphs: [
          "La obra se organiza en entradas fechadas, lo que produce una tensión entre diario íntimo y documento clínico. La fragmentación no implica dispersión temática, sino reiteración obsesiva en espiral.",
          "El uso de segunda persona es frecuente y ambiguo: puede referirse a una amante, a una entidad trascendente, al lector o a una construcción psíquica.",
        ],
      },
      {
        id: "recepcion",
        title: "Recepción y lectura crítica",
        paragraphs: [
          "La crítica ha señalado en Oriens una escritura de alta densidad imaginal y riesgo emocional. Se le asocia con una tradición que integra mística corporal, existencialismo y estética postdigital.",
          "Algunos análisis apuntan a una tendencia a la saturación enumerativa y a la reiteración simbólica, mientras que otros destacan la coherencia interna de su universo poético.",
        ],
      },
      {
        id: "obra-destacada",
        title: "Obra destacada",
        items: [
          "Sin anestesia (2024–2026), ciclo de textos performativos presentados en recitales literarios, entre ellos en la Centro Cultural e Histórico José Figueres Ferrer, Escalante (febrero de 2026).",
        ],
      },
      {
        id: "rasgos-distintivos",
        title: "Rasgos distintivos",
        items: [
          "Escritura performativa diseñada para lectura en voz alta.",
          "Intensidad sostenida sin concesiones al sentimentalismo.",
          "Uso de terminología técnica como aparato metafísico.",
          "Construcción de una teología del aire, el hambre y la absorción.",
        ],
        footer: "La obra de Aba Oriens se inscribe en una poética de la exposición radical del cuerpo como prueba de existencia.",
      },
    ],
    part2: {
      intro: "Aba Oriens es el seudónimo de un autor hispanohablante contemporáneo cuya obra se caracteriza por la apropiación estilística de voces literarias canónicas, la exploración explícita de la autodestrucción, la mística corporal y la crítica sistémica postindustrial. Su producción combina prosa poética, monólogo dramático, ensayo metafísico y ciencia ficción especulativa.",
      works: [
        {
          title: "Sin anestesia (2024–2026)",
          description: "Ciclo fragmentario fechado que articula erotismo, trauma, parto, violencia simbólica y crítica cultural. Concebido para lectura performativa.",
        },
        {
          title: "Conceptos (s.f.)",
          description: "Proyecto híbrido entre novela fragmentaria y manifiesto introspectivo. Explora identidad, disociación, suicidio, memoria familiar y amor como estructura de salvación.",
        },
        {
          title: "Una exploración literaria para encontrar mi voz mimada (Ahorita es la de ah DIVINA) (s.f.)",
          description: "Libro estructurado en doce capítulos titulados “Soy un poema de…”, donde el autor asume máquinas estilísticas asociadas a figuras como Emil Cioran, Sylvia Plath, Antonin Artaud, Dorothy Parker, Ana Istarú, Franz Kafka, Allen Ginsberg, Charles Baudelaire, Douglas Adams, Alejandra Pizarnik, Arthur Rimbaud y Delmira Agustini. El texto funciona como laboratorio de identidad y parodia reverencial.",
        },
      ],
      sections: [
        {
          id: "estructura-concepcion",
          title: "Estructura y concepción",
          subsections: [
            {
              title: "Arquitectura capitular por apropiación",
              content: "Cada capítulo adopta el tono, obsesiones y ritmos atribuidos a un autor específico, no como imitación formal estricta sino como absorción temática: nihilismo, suicidio performativo, violencia metafísica, ironía cínica, erotismo místico, burocracia distópica, delirio beat, decadentismo, sátira cósmica, lirismo existencial, renuncia a la poesía y erotismo sacrificial.",
            },
            {
              title: "Hibridación de géneros",
              content: "La obra alterna entre:",
              items: [
                "Narrativa autobiográfica ficcionalizada.",
                "Poema en prosa.",
                "Monólogo interior.",
                "Ensayo teológico.",
                "Ciencia ficción solar punk.",
                "Diálogo filosófico.",
              ],
            },
            {
              title: "Continuidad de personajes",
              content: "Figuras como Astra, Amalia, Luciano, Crío Errante y entidades como el “Gran Gestor” atraviesan distintos planos narrativos, articulando una mitología personal que oscila entre lo íntimo y lo cósmico.",
            },
          ],
        },
        {
          id: "temas-recurrentes-adicional",
          title: "Temas recurrentes (Adicional)",
          topics: [
            {
              title: "1. Suicidio como dramaturgia",
              description: "La repetición de intentos fallidos no se presenta como búsqueda de muerte sino como confrontación con la voluntad biológica de supervivencia. El cuerpo contradice al pensamiento.",
            },
            {
              title: "2. Disociación e identidad fracturada",
              description: "El “yo” se desdobla en múltiples voces internas, interlocutores imaginarios y alter egos. La identidad es presentada como collage literario.",
            },
            {
              title: "3. Crítica al capitalismo tardío",
              description: "Call centers, farmacéuticas, obsolescencia programada, monetización del sufrimiento y automatización aparecen como dispositivos de alienación.",
            },
            {
              title: "4. Amor como anclaje ontológico",
              description: "En contraste con el nihilismo, la relación amorosa se presenta como reorganización del sentido. La frase “hogar es el lugar del que ya no quieres huir” sintetiza esta tesis.",
            },
            {
              title: "5. Trascendencia tecnológica",
              description: "La estación Solar Punk Station, la eugenesia, el transhumanismo y las inteligencias artificiales configuran un escenario donde la humanidad se redefine fuera de la Tierra.",
            },
            {
              title: "6. Teología intuitiva",
              description: "El ensayo final desarrolla una imagen de Dios como jardinero austero, soberano sin deseo de dominio, cuestionado moralmente por el sufrimiento humano.",
            },
          ],
        },
        {
          id: "estilo-2",
          title: "Estilo",
          items: [
            "Léxico técnico integrado a la metáfora.",
            "Enumeraciones extensas de alta densidad sensorial.",
            "Alternancia entre español e inglés.",
            "Imágenes corporales explícitas.",
            "Ironía que coexiste con misticismo.",
            "Saturación emocional sostenida.",
          ],
          footer: "La prosa oscila entre el barroquismo acumulativo y el verso minimalista.",
        },
        {
          id: "rasgos-distintivos-2",
          title: "Rasgos distintivos",
          items: [
            "Uso sistemático de la máscara literaria como método de autoconstrucción.",
            "Reescritura del trauma mediante ciencia ficción especulativa.",
            "Erotización de la asfixia y del límite.",
            "Concepción del liderazgo divino como renuncia al poder.",
            "Declaración explícita de que la felicidad puede clausurar la literatura trágica.",
          ],
          footer: "La obra de Aba Oriens se inscribe en una tradición de escritura confesional radical que transforma el colapso psíquico en arquitectura simbólica y el amor en reorganización cosmológica.",
        },
      ],
    },
    developer: {
      id: "developer-profile",
      title: "Ingeniero Creativo",
      name: "Luis Murillo Baltodano",
      role: "Ingeniero Creativo Senior",
      bio: [
        "Profundamente interesado en ofrecer experiencias limpias a todo tipo de usuarios al crear el producto, porque su calidad en todos los ejes se siente profundamente personal.",
        "En cuanto al desarrollo de software, los campos que más me apasionan son los gráficos por computadora, el arte generativo, la automatización y la optimización de nuestra vida cotidiana.",
      ],
      stack: {
        title: "Stack Técnico",
        items: [
          {
            label: "JavaScript/TypeScript",
            description: "Utilizado todos los días (servidor y front-end), con diferentes frameworks dependiendo del proyecto (React, Next.js, Vue.js) o incluso JavaScript puro.",
          },
          {
            label: "Go (Golang)",
            description: "Mi mejor amigo cuando se trata de servicios web y/o herramientas de automatización.",
          },
          {
            label: "Creative Coding",
            description: "Three.js, A-Frame, P5.js y librerías personalizadas son las herramientas elegidas al trabajar con gráficos 2D y 3D.",
          },
        ],
      },
      philosophy: {
        title: "Filosofía",
        content: "Estoy abierto a usar cualquier herramienta (librería, framework, metodología) para obtener el mejor producto. Convertimos a fundadores atrapados en su trabajo en dueños. La mayoría de las personas con grandes ideas se quedan estancadas en la ejecución. Nosotros construimos el apalancamiento para que tú puedas concentrarte en la exploración.",
      },
      contact: {
        title: "Contacto",
        links: [
          { label: "GitHub", href: "https://github.com/LuisArmando-TestCoder" },
          { label: "CodePen", href: "https://codepen.io/LuisArmando-TC" },
          { label: "Email", href: "mailto:oriens@aiban.news" },
        ],
      },
    },
  },
  footer: {
    brand: "Aba Oriens",
    tagline: "Poética orgánica, corporal violenta.",
    identityKeywords: ["Cuerpo", "Mística", "Tecnología"],
    creativeEngineering: {
      title: "Ingeniería Creativa",
      text: "Ofreciendo experiencias limpias a través del código, el arte generativo y la automatización.",
      stack: ["TypeScript / JavaScript", "WebGL / Creative Coding", "Go / Automatización"],
    },
    projects: {
      title: "Proyectos",
      links: [
        { label: "AIBAN", href: "https://aiban.news/" },
        { label: "Engagement AI", href: "https://aiexecutions.com/" },
        { label: "Portafolio Legacy", href: "https://testcoder.netlify.app/" },
      ],
    },
    explore: {
      title: "Explorar",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Acerca de", href: "/about" },
        { label: "Poemas", href: "/poems" },
        { label: "Proyectos", href: "/projects" },
      ],
    },
    connect: {
      title: "Conectar",
      links: [
        { label: "GitHub", href: "https://github.com/LuisArmando-TestCoder" },
        { label: "CodePen", href: "https://codepen.io/LuisArmando-TC" },
        { label: "Email", href: "mailto:oriens@aiban.news" },
      ],
    },
    copyright: "Aba Oriens. Todos los derechos reservados.",
    credit: "Diseñado y construido por Luis Murillo",
  },
};
