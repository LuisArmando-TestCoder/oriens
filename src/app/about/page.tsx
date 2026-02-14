import React from 'react';
import { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading/Heading';
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle';
import { SplitText } from '@/components/molecules/SplitText/SplitText';
import { ModernSlider } from '@/components/organisms/ModernSlider/ModernSlider';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: "Aba Oriens | Poética Orgánica & Creative Engineering",
  description:
    "Aba Oriens es el seudónimo de un autor contemporáneo cuya obra combina fisiología, mística y crítica cultural. Perfil de Luis Murillo Baltodano, Senior Creative Engineer especializado en gráficos por computadora y arte generativo.",
  keywords: [
    "Aba Oriens",
    "Luis Murillo Baltodano",
    "Poesía contemporánea",
    "Literatura experimental",
    "Creative Engineer",
    "Creative Coding",
    "WebGL",
    "Three.js",
    "Generative Art",
    "Costa Rica",
    "Escritura performativa",
  ],
  openGraph: {
    title: "Aba Oriens | Poética Orgánica & Creative Engineering",
    description:
      "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano. Fusión de literatura experimental y tecnología creativa.",
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
    description:
      "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano.",
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
            <ModernSlider
              images={[
                { src: "/1.jpeg", alt: "Aba Oriens visual 1" },
                { src: "/2.jpeg", alt: "Aba Oriens visual 2" },
                { src: "/3.jpeg", alt: "Aba Oriens visual 3" },
              ]}
            />
          </div>

          <p>
            <strong>Aba Oriens</strong> es el seudónimo de un autor contemporáneo
            en lengua española cuya obra se caracteriza por poética orgánica,
            corporal y ontológicamente violenta. Su escritura combina fisiología,
            mística y crítica cultural en composiciones fragmentarias fechadas
            con precisión cronológica. Su producción reciente está vinculada a
            recitales performativos en espacios culturales independientes.
          </p>
        </section>

        <section className={styles.section}>
          <Heading id="estilo" tag="h2">
            <SplitText id="estilo-text" delay={0.2}>
              Estilo
            </SplitText>
          </Heading>
          <p>La prosa de Oriens se distingue por:</p>
          <ul>
            <li>
              <strong>Anclaje temporal exacto</strong>: fechas, horas y minutos
              que funcionan como dispositivos de verosimilitud clínica.
            </li>
            <li>
              <strong>Léxico biomédico integrado a metáfora</strong>: términos
              como alvéolos, hipercapnia, transverso, yugular o micelio operan
              como estructura simbólica y no como ornamentación técnica.
            </li>
            <li>
              <strong>Enumeración barroca</strong>: acumulaciones de marcas
              comerciales, bebidas alcohólicas, especias, tecnologías digitales y
              referentes culturales.
            </li>
            <li>
              <strong>Fusión de erotismo y trauma</strong>: el cuerpo es
              simultáneamente altar, campo de batalla y laboratorio.
            </li>
            <li>
              <strong>Intertextualidad cultural</strong>: referencias a fenómenos
              contemporáneos como blockchain, OnlyFans, plataformas de apuestas
              en línea y cultura pop global, en tensión con imaginarios religiosos
              y filosóficos.
            </li>
          </ul>
          <p>
            Su escritura oscila entre poema en prosa, monólogo dramático y
            registro confesional.
          </p>
        </section>

        <section className={styles.section}>
          <Heading id="temas-recurrentes" tag="h2">
            <SplitText id="temas-recurrentes-text" delay={0.2}>
              Temas recurrentes
            </SplitText>
          </Heading>

          <div className={styles.topic}>
            <h3>1. El cuerpo como territorio metafísico</h3>
            <p>
              El cuerpo aparece como superficie de inscripción del deseo, culpa y
              violencia. Parto, asfixia, pelea y sacrificio son imágenes
              centrales.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>2. Respiración y deuda existencial</h3>
            <p>
              La respiración se convierte en símbolo económico y ontológico:
              vivir implica gasto, intercambio y desgaste irreversible.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>3. Mercado y trascendencia</h3>
            <p>
              Lógica del consumo y monetización digital se yuxtaponen con símbolos
              religiosos. Salvación es presentada como transacción.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>4. Violencia resignificada</h3>
            <p>
              Lucha física es reconfigurada como intimidad: clinch es abrazo,
              llave es protección, golpe es confirmación de presencia.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>5. Hambre y asfixia</h3>
            <p>
              Referencia a polilla Atlas Attacus, que carece de boca en fase
              adulta y muere tras reproducirse, funciona como alegoría de deseo
              sin posibilidad de nutrición.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <Heading id="estructura-tecnica" tag="h2">
            <SplitText id="estructura-tecnica-text" delay={0.2}>
              Estructura y técnica
            </SplitText>
          </Heading>
          <p>
            Obra se organiza en entradas fechadas, lo que produce tensión entre
            diario íntimo y documento clínico. Fragmentación no implica dispersión
            temática, sino reiteración obsesiva en espiral.
          </p>
          <p>
            Uso de segunda persona es frecuente y ambiguo: puede referirse a
            amante, entidad trascendente, lector o construcción psíquica.
          </p>
        </section>

        <section className={styles.section}>
          <Heading id="recepcion" tag="h2">
            <SplitText id="recepcion-text" delay={0.2}>
              Recepción y lectura crítica
            </SplitText>
          </Heading>
          <p>
            Crítica ha señalado en Oriens escritura de alta densidad imaginal y
            riesgo emocional. Se le asocia con tradición que integra mística
            corporal, existencialismo y estética postdigital.
          </p>
          <p>
            Algunos análisis apuntan a tendencia a saturación enumerativa y
            reiteración simbólica; otros destacan coherencia interna de universo
            poético.
          </p>
        </section>

        <section className={styles.section}>
          <Heading id="obra-destacada" tag="h2">
            <SplitText id="obra-destacada-text" delay={0.2}>
              Obra destacada
            </SplitText>
          </Heading>
          <ul>
            <li>
              <em>Sin anestesia</em> (2024–2026), ciclo de textos performativos
              presentados en recitales literarios, entre ellos en Casa de Cultura
              del Banco Popular, Escalante (febrero de 2026).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <Heading id="rasgos-distintivos" tag="h2">
            <SplitText id="rasgos-distintivos-text" delay={0.2}>
              Rasgos distintivos
            </SplitText>
          </Heading>
          <ul>
            <li>Escritura performativa diseñada para lectura en voz alta.</li>
            <li>Intensidad sostenida sin concesiones al sentimentalismo.</li>
            <li>Uso de terminología técnica como aparato metafísico.</li>
            <li>Construcción de teología del aire, hambre y absorción.</li>
          </ul>
          <p>
            Obra de Aba Oriens se inscribe en poética de exposición radical del
            cuerpo como prueba de existencia.
          </p>
        </section>

        <hr className={styles.divider} />

        <section className={styles.section} id="developer-profile">
          <Heading id="creative-engineer" tag="h2">
            <SplitText id="creative-engineer-text" delay={0.2}>
              Creative Engineer
            </SplitText>
          </Heading>

          <div className={styles.intro}>
            <p>
              <strong>Luis Murillo Baltodano</strong> (Senior Creative Engineer)
            </p>
            <p>
              Deeply interested in delivering clean experiences to all types of
              users when creating product, because its quality across all axes
              feels deeply personal.
            </p>
            <p>
              Regarding software development, fields I am most passionate about
              are computer graphics, generative art, automation, and optimization
              of day-to-day life.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Technical Stack</h3>
            <p>
              <strong>JavaScript/TypeScript</strong>: Used every single day
              server side and front-end, with different frameworks depending on
              project such as React, Next.js, Vue.js or bare JavaScript.
            </p>
            <p>
              <strong>Go (Golang)</strong>: Primary tool for web services and
              automation tools.
            </p>
            <p>
              <strong>Creative Coding</strong>: Three.js, A-Frame, P5.js and
              custom libraries when working with 2D and 3D graphics.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Philosophy</h3>
            <p>
              Open to use any tool, library, framework or methodology to build
              best product. We turn job-trapped founders into owners. Most people
              with great ideas get stuck in execution. We build leverage so you
              can focus on exploration.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Contact</h3>
            <p>Where to find me:</p>
            <ul>
              <li>
                <a
                  href="https://github.com/LuisArmando-TestCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/LuisArmando-TC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodePen
                </a>
              </li>
              <li>
                <a href="mailto:oriens@aiban.news">Email</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
