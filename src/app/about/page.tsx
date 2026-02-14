import React from 'react';
import { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading/Heading';
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle';
import { SplitText } from '@/components/molecules/SplitText/SplitText';
import { ModernSlider } from '@/components/organisms/ModernSlider/ModernSlider';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: "Aba Oriens | Poética Orgánica & Creative Engineering",
  description: "Aba Oriens es un autor contemporáneo cuya obra combina fisiología, mística y crítica cultural. Perfil de Luis Murillo Baltodano, Senior Creative Engineer especializado en gráficos por computadora y arte generativo.",
  keywords: ["Aba Oriens", "Luis Murillo Baltodano", "Poesía contemporánea", "Literatura experimental", "Creative Engineer", "Creative Coding", "WebGL", "Three.js", "Generative Art", "Costa Rica", "Escritura performativa"],
  openGraph: {
    title: "Aba Oriens | Poética Orgánica & Creative Engineering",
    description: "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano. Fusión de literatura experimental y tecnología creativa.",
    url: "https://oriens.aiban.news/about",
    siteName: "Aba Oriens",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Aba Oriens Visual Identity",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aba Oriens | Poética Orgánica & Creative Engineering",
    description: "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano.",
    images: ["/1.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <VideoTitle text="Aba Oriens" pushToRead />
      <div className={styles.container}>
        
        <section className={styles.intro}>
            <div className={styles.sliderContainer}>
                 <ModernSlider images={[
                    { src: "/1.jpeg", alt: "Aba Oriens visual 1" },
                    { src: "/2.jpeg", alt: "Aba Oriens visual 2" },
                    { src: "/3.jpeg", alt: "Aba Oriens visual 3" }
                 ]} />
            </div>

            <p><strong>Aba Oriens</strong> es el seudónimo de un autor contemporáneo en lengua española cuya obra se caracteriza por una poética orgánica, corporal y ontológicamente violenta. Su escritura combina fisiología, mística y crítica cultural en composiciones fragmentarias fechadas con precisión cronológica. Su producción reciente está vinculada a recitales performativos en espacios culturales independientes.</p>
        </section>

        <section className={styles.section}>
            <Heading id="estilo" tag="h2">
                <SplitText id="estilo-text" delay={0.2}>Estilo</SplitText>
            </Heading>
            <p>La prosa de Oriens se distingue por:</p>
            <ul>
                <li><strong>Anclaje temporal exacto</strong>: fechas, horas y minutos que funcionan como dispositivos de verosimilitud clínica.</li>
                <li><strong>Léxico biomédico integrado a la metáfora</strong>: términos como alvéolos, hipercapnia, transverso, yugular o micelio operan como estructura simbólica y no como ornamentación técnica.</li>
                <li><strong>Enumeración barroca</strong>: acumulaciones de marcas comerciales, bebidas alcohólicas, especias, tecnologías digitales y referentes culturales.</li>
                <li><strong>Fusión de erotismo y trauma</strong>: el cuerpo es simultáneamente altar, campo de batalla y laboratorio.</li>
                <li><strong>Intertextualidad cultural</strong>: referencias a fenómenos contemporáneos como blockchain, OnlyFans, plataformas de apuestas en línea y cultura pop global, en tensión con imaginarios religiosos y filosóficos.</li>
            </ul>
            <p>Su escritura oscila entre el poema en prosa, el monólogo dramático y el registro confesional.</p>
        </section>

        <section className={styles.section}>
            <Heading id="temas-recurrentes" tag="h2">
                <SplitText id="temas-recurrentes-text" delay={0.2}>Temas recurrentes</SplitText>
            </Heading>
            
            <div className={styles.topic}>
                <h3>1. El cuerpo como territorio metafísico</h3>
                <p>El cuerpo aparece como superficie de inscripción del deseo, la culpa y la violencia. Parto, asfixia, pelea y sacrificio son imágenes centrales.</p>
            </div>

            <div className={styles.topic}>
                <h3>2. Respiración y deuda existencial</h3>
                <p>La respiración se convierte en símbolo económico y ontológico: vivir implica gasto, intercambio y desgaste irreversible.</p>
            </div>

            <div className={styles.topic}>
                <h3>3. Mercado y trascendencia</h3>
                <p>La lógica del consumo y la monetización digital se yuxtapone con símbolos religiosos. La salvación es presentada como transacción.</p>
            </div>

            <div className={styles.topic}>
                <h3>4. Violencia resignificada</h3>
                <p>La lucha física es reconfigurada como intimidad: el clinch es abrazo, la llave es protección, el golpe es confirmación de presencia.</p>
            </div>

            <div className={styles.topic}>
                <h3>5. Hambre y asfixia</h3>
                <p>La referencia a la polilla Atlas Attacus, que carece de boca en su fase adulta y muere tras reproducirse, funciona como alegoría de deseo sin posibilidad de nutrición.</p>
            </div>
        </section>

        <section className={styles.section}>
            <Heading id="estructura-tecnica" tag="h2">
                <SplitText id="estructura-tecnica-text" delay={0.2}>Estructura y técnica</SplitText>
            </Heading>
            <p>La obra se organiza en entradas fechadas, lo que produce una tensión entre diario íntimo y documento clínico. La fragmentación no implica dispersión temática, sino reiteración obsesiva en espiral.</p>
            <p>El uso de segunda persona es frecuente y ambiguo: puede referirse a una amante, a una entidad trascendente, al lector o a una construcción psíquica.</p>
        </section>

        <section className={styles.section}>
            <Heading id="recepcion" tag="h2">
                <SplitText id="recepcion-text" delay={0.2}>Recepción y lectura crítica</SplitText>
            </Heading>
            <p>La crítica ha señalado en Oriens una escritura de alta densidad imaginal y riesgo emocional. Se le asocia con una tradición que integra mística corporal, existencialismo y estética postdigital.</p>
            <p>Algunos análisis apuntan a una tendencia a la saturación enumerativa y a la reiteración simbólica, mientras que otros destacan la coherencia interna de su universo poético.</p>
        </section>

        <section className={styles.section}>
            <Heading id="obra-destacada" tag="h2">
                <SplitText id="obra-destacada-text" delay={0.2}>Obra destacada</SplitText>
            </Heading>
            <ul>
                <li><em>Sin anestesia</em> (2024–2026), ciclo de textos performativos presentados en recitales literarios, entre ellos en la Casa de Cultura del Banco Popular, Escalante (febrero de 2026).</li>
            </ul>
        </section>

        <section className={styles.section}>
             <Heading id="rasgos-distintivos" tag="h2">
                <SplitText id="rasgos-distintivos-text" delay={0.2}>Rasgos distintivos</SplitText>
             </Heading>
             <ul>
                <li>Escritura performativa diseñada para lectura en voz alta.</li>
                <li>Intensidad sostenida sin concesiones al sentimentalismo.</li>
                <li>Uso de terminología técnica como aparato metafísico.</li>
                <li>Construcción de una teología del aire, el hambre y la absorción.</li>
             </ul>
             <p>La obra de Aba Oriens se inscribe en una poética de la exposición radical del cuerpo como prueba de existencia.</p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.part2}>
             <p><strong>Aba Oriens</strong> es el seudónimo de un autor hispanohablante contemporáneo cuya obra se caracteriza por la apropiación estilística de voces literarias canónicas, la exploración explícita de la autodestrucción, la mística corporal y la crítica sistémica postindustrial. Su producción combina prosa poética, monólogo dramático, ensayo metafísico y ciencia ficción especulativa.</p>

             <Heading id="obras-destacadas-2" tag="h2">
                <SplitText id="obras-destacadas-2-text" delay={0.2}>Obras destacadas</SplitText>
             </Heading>
             <div className={styles.work}>
                <h3>Sin anestesia (2024–2026)</h3>
                <p>Ciclo fragmentario fechado que articula erotismo, trauma, parto, violencia simbólica y crítica cultural. Concebido para lectura performativa.</p>
             </div>
             
             <div className={styles.work}>
                <h3>C¿De dónde no quiero huir? nceptos (s.f.)</h3>
                <p>Proyecto híbrido entre novela fragmentaria y manifiesto introspectivo. Explora identidad, disociación, suicidio, memoria familiar y amor como estructura de salvación.</p>
             </div>

             <div className={styles.work}>
                <h3>Una exploración literaria para encontrar mi voz mimada (Ahorita es la de ah DIVINA) (s.f.)</h3>
                <p>Libro estructurado en doce capítulos titulados “Soy un poema de…”, donde el autor asume máscaras estilísticas asociadas a figuras como Emil Cioran, Sylvia Plath, Antonin Artaud, Dorothy Parker, Ana Istarú, Franz Kafka, Allen Ginsberg, Charles Baudelaire, Douglas Adams, Alejandra Pizarnik, Arthur Rimbaud y Delmira Agustini. El texto funciona como laboratorio de identidad y parodia reverencial.</p>
             </div>

             <Heading id="estructura-concepcion" tag="h2">
                <SplitText id="estructura-concepcion-text" delay={0.2}>Estructura y concepción</SplitText>
             </Heading>
             
             <h3>Arquitectura capitular por apropiación</h3>
             <p>Cada capítulo adopta el tono, obsesiones y ritmos atribuidos a un autor específico, no como imitación formal estricta sino como absorción temática: nihilismo, suicidio performativo, violencia metafísica, ironía cínica, erotismo místico, burocracia distópica, delirio beat, decadentismo, sátira cósmica, lirismo existencial, renuncia a la poesía y erotismo sacrificial.</p>

             <h3>Hibridación de géneros</h3>
             <p>La obra alterna entre:</p>
             <ul>
                <li>Narrativa autobiográfica ficcionalizada.</li>
                <li>Poema en prosa.</li>
                <li>Monólogo interior.</li>
                <li>Ensayo teológico.</li>
                <li>Ciencia ficción solar punk.</li>
                <li>Diálogo filosófico.</li>
             </ul>

             <h3>Continuidad de personajes</h3>
             <p>Figuras como Astra, Amalia, Luciano, Crío Errante y entidades como el “Gran Gestor” atraviesan distintos planos narrativos, articulando una mitología personal que oscila entre lo íntimo y lo cósmico.</p>

             <Heading id="temas-recurrentes-adicional" tag="h2">
                <SplitText id="temas-recurrentes-adicional-text" delay={0.2}>Temas recurrentes (Adicional)</SplitText>
             </Heading>
             
             <div className={styles.topic}>
                 <h3>1. Suicidio como dramaturgia</h3>
                 <p>La repetición de intentos fallidos no se presenta como búsqueda de muerte sino como confrontación con la voluntad biológica de supervivencia. El cuerpo contradice al pensamiento.</p>
             </div>
             
             <div className={styles.topic}>
                 <h3>2. Disociación e identidad fracturada</h3>
                 <p>El “yo” se desdobla en múltiples voces internas, interlocutores imaginarios y alter egos. La identidad es presentada como collage literario.</p>
             </div>
             
             <div className={styles.topic}>
                 <h3>3. Crítica al capitalismo tardío</h3>
                 <p>Call centers, farmacéuticas, obsolescencia programada, monetización del sufrimiento y automatización aparecen como dispositivos de alienación.</p>
             </div>
             
             <div className={styles.topic}>
                 <h3>4. Amor como anclaje ontológico</h3>
                 <p>En contraste con el nihilismo, la relación amorosa se presenta como reorganización del sentido. La frase “hogar es el lugar del que ya no quieres huir” sintetiza esta tesis.</p>
             </div>
             
             <div className={styles.topic}>
                 <h3>5. Trascendencia tecnológica</h3>
                 <p>La estación Solar Punk Station, la eugenesia, el transhumanismo y las inteligencias artificiales configuran un escenario donde la humanidad se redefine fuera de la Tierra.</p>
             </div>
             
             <div className={styles.topic}>
                 <h3>6. Teología intuitiva</h3>
                 <p>El ensayo final desarrolla una imagen de Dios como jardinero austero, soberano sin deseo de dominio, cuestionado moralmente por el sufrimiento humano.</p>
             </div>

             <Heading id="estilo-2" tag="h2">
                <SplitText id="estilo-2-text" delay={0.2}>Estilo</SplitText>
             </Heading>
             <ul>
                <li>Léxico técnico integrado a la metáfora.</li>
                <li>Enumeraciones extensas de alta densidad sensorial.</li>
                <li>Alternancia entre español e inglés.</li>
                <li>Imágenes corporales explícitas.</li>
                <li>Ironía que coexiste con misticismo.</li>
                <li>Saturación emocional sostenida.</li>
             </ul>
             <p>La prosa oscila entre el barroquismo acumulativo y el verso minimalista.</p>

             <Heading id="recepcion-critica-hipotetica" tag="h2">
                <SplitText id="recepcion-critica-hipotetica-text" delay={0.2}>Recepcion crítica (hipotética)</SplitText>
             </Heading>
             <p>La obra ha sido descrita como:</p>
             <ul>
                <li>“Autoficción cósmica con pulsión mística”.</li>
                <li>“Manual de disociación postdigital”.</li>
                <li>“Tratado erótico-existencial con estética de laboratorio”.</li>
             </ul>
             <p>Algunos análisis señalan tendencia a la sobreabundancia imaginal y repetición temática; otros destacan su coherencia simbólica y la construcción de una mitología propia reconocible.</p>

             <Heading id="rasgos-distintivos-2" tag="h2">
                <SplitText id="rasgos-distintivos-2-text" delay={0.2}>Rasgos distintivos</SplitText>
             </Heading>
             <ul>
                <li>Uso sistemático de la máscara literaria como método de autoconstrucción.</li>
                <li>Reescritura del trauma mediante ciencia ficción especulativa.</li>
                <li>Erotización de la asfixia y del límite.</li>
                <li>Concepción del liderazgo divino como renuncia al poder.</li>
                <li>Declaración explícita de que la felicidad puede clausurar la literatura trágica.</li>
             </ul>

             <p>La obra de Aba Oriens se inscribe en una tradición de escritura confesional radical que transforma el colapso psíquico en arquitectura simbólica y el amor en reorganización cosmológica.</p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section} id="developer-profile">
            <Heading id="creative-engineer" tag="h2">
                <SplitText id="creative-engineer-text" delay={0.2}>Creative Engineer</SplitText>
            </Heading>
            <div className={styles.intro}>
                <p><strong>Luis Murillo Baltodano</strong> (Senior Creative Engineer)</p>
                <p>Deeply interested in delivering clean experiences to all types of users when creating the product, because its quality in all axis feels deeply personal.</p>
                <p>Regarding software development, the fields I am most passionate about are computer graphics, generative art, automation, and optimization of our day-to-day life.</p>
            </div>

            <div className={styles.topic}>
                <h3>Technical Stack</h3>
                <p><strong>JavaScript/TypeScript</strong>: Used every single day (server side and front-end), with different frameworks depending on the project (React, Next.js, Vue.js) or even bare JavaScript.</p>
                <p><strong>Go (Golang)</strong>: My best friend when it comes to web services and/or automation tools.</p>
                <p><strong>Creative Coding</strong>: Three.js, A-Frame, P5.js, and custom libraries are the tools picked when working with 2D and 3D graphics.</p>
            </div>

            <div className={styles.topic}>
                <h3>Philosophy</h3>
                <p>I am open to use any tool (library, framework, methodology) to get the best product. We turn job-trapped founders into owners. Most people with great ideas get stuck in the execution. We build the leverage so you can focus on the exploration.</p>
            </div>

            <div className={styles.topic}>
                <h3>Contact</h3>
                <p>Where to find me:</p>
                <ul>
                    <li><a href="https://github.com/LuisArmando-TestCoder" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://codepen.io/LuisArmando-TC" target="_blank" rel="noopener noreferrer">CodePen</a></li>
                    <li><a href="mailto:oriens@aiban.news">Email</a></li>
                </ul>
            </div>
        </section>
      </div>
    </main>
  );
}
