import React from 'react';
import { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading/Heading';
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle';
import { SplitText } from '@/components/molecules/SplitText/SplitText';
import { ModernSlider } from '@/components/organisms/ModernSlider/ModernSlider';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: "Aba Oriens | Neutrino Intrascendental y Arquitecto de Anomalías",
  description:
    "Aba Oriens es el seudónimo de un autor neurodivergente cuya obra explora la disociación, el duelo y la crítica al sistema. Perfil de Luis Murillo Baltodano, Ingeniero Creativo Senior.",
  keywords: [
    "Aba Oriens",
    "Luis Murillo Baltodano",
    "Poesía visceral",
    "Literatura neurodivergente",
    "Disociación",
    "Crítica al corporativismo",
    "Ingeniería Creativa",
    "Creative Coding",
    "WebGL",
    "Three.js",
    "Arte Generativo",
  ],
  openGraph: {
    title: "Aba Oriens | Poética Orgánica e Ingeniería Creativa",
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
    title: "Aba Oriens | Poética Orgánica e Ingeniería Creativa",
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
                { src: "/4.jpg", alt: "Aba Oriens visual 4" },
                { src: "/5.jpg", alt: "Aba Oriens visual 5" },
                { src: "/6.jpg", alt: "Aba Oriens visual 6" },
                { src: "/7.jpg", alt: "Aba Oriens visual 7" },
              ]}
            />
          </div>

          <p>
            <strong>Aba Oriens</strong> es un <em>neutrino intrascendental</em> perdido en la inmensidad. Su identidad se construye desde la <strong>neurodivergencia</strong> y una profunda introspección melancólica, utilizando la escritura como un dispositivo para procesar una realidad que a menudo le resulta ajena, abrumadora o fragmentada.
          </p>
          <p>
            Su obra es el registro de una anomalía: un ser que no fue diseñado para un propósito específico, sino para existir en su libre albedrío, oscilando entre el deseo de ser consumido por la realidad y la necesidad de aferrarse a sus propias cicatrices.
          </p>
        </section>

        <section className={styles.section}>
          <Heading id="identidad" tag="h2">
            <SplitText id="identidad-text" delay={0.2}>
              Identidad y Disociación
            </SplitText>
          </Heading>
          <p>La experiencia vital de Oriens está marcada por:</p>
          <ul>
            <li>
              <strong>Desconexión y Supervivencia</strong>: Estados de despersonalización y disociación utilizados como refugio ante la monotonía o el trauma.
            </li>
            <li>
              <strong>El Cuerpo como Espacio Ajeno</strong>: La observación de la anatomía propia y ajena como objetos extraños; una fragmentación donde el interior no es vacío, sino puro espacio.
            </li>
            <li>
              <strong>Sentir a través del dolor</strong>: La búsqueda de sensaciones físicas extremas para confirmar la existencia y salir de la duda de la irrealidad.
            </li>
            <li>
              <strong>Mentes Derruidas</strong>: Una lucha abierta contra la distimia, la atelofobia (miedo a no ser suficiente) y la depresión, utilizando el cinismo y el humor como máscaras.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <Heading id="vision-critica" tag="h2">
            <SplitText id="vision-critica-text" delay={0.2}>
              Perspectiva Crítica
            </SplitText>
          </Heading>
          <div className={styles.topic}>
            <h3>El Almacén de Humanos</h3>
            <p>
              Una visión mordaz del sistema corporativo contemporáneo, percibido como una "vorágine devoradora" que explota la individualidad bajo una falsa resiliencia. El trabajo de oficina como un almacén de sueños postergados.
            </p>
          </div>
          <div className={styles.topic}>
            <h3>Metástasis Humana</h3>
            <p>
              Reflexiones sobre la humanidad como una fuerza expansionista que consume la naturaleza sin control, abogando por una aceptación armoniosa de la muerte y los ciclos naturales frente a la resistencia inútil.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <Heading id="vinculos" tag="h2">
            <SplitText id="vinculos-text" delay={0.2}>
              Vínculos y Duelo
            </SplitText>
          </Heading>
          <p>
            La identidad de Aba Oriens está cimentada en sus pérdidas y en figuras pivotales:
          </p>
          <div className={styles.topic}>
            <h3>La Herencia de la Nana</h3>
            <p>
              Fuente de sabiduría, amor por la literatura y conexión con la belleza de lo ordinario. Su ausencia es el vacío primordial que el autor intenta llenar revisitando recuerdos y palabras.
            </p>
          </div>
          <div className={styles.topic}>
            <h3>Nostalgia de lo Perdido</h3>
            <p>
              Una personalidad anclada en la memoria y el sentimiento de abandono. Una búsqueda constante de personas y momentos que "estuvieron aquí", pero ya no se encuentran.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <Heading id="estilo-literario" tag="h2">
            <SplitText id="estilo-literario-text" delay={0.2}>
              Vocación y Estilo
            </SplitText>
          </Heading>
          <p>
            El autor se define esencialmente a través del acto de escribir, una tarea que consume su energía emocional y se manifiesta en:
          </p>
          <ul>
            <li>
              <strong>Ciencia Ficción Visceral</strong>: Una mezcla de distopía con poesía cruda, utilizando metáforas espaciales (agujeros negros, nebulosas, estaciones espaciales) para explorar la soledad.
            </li>
            <li>
              <strong>Verosimilitud Clínica</strong>: El uso de anclajes temporales exactos y léxico biomédico para otorgar una textura real a la disociación.
            </li>
            <li>
              <strong>La Anomalía como Bandera</strong>: La aceptación de ser un ser defectuoso y caótico que no busca encajar, sino testificar su paso por la inmensidad.
            </li>
          </ul>
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
              Ingeniero Creativo
            </SplitText>
          </Heading>

          <div className={styles.intro}>
            <p>
              <strong>Luis Murillo Baltodano</strong> (Ingeniero Creativo Senior)
            </p>
            <p>
              Especialista en convertir el caos técnico en interfaces armónicas. Su enfoque en la ingeniería creativa es una extensión de su necesidad de ordenar una realidad que a menudo se siente fragmentada.
            </p>
            <p>
              Apasionado por los gráficos por computadora, el arte generativo y la optimización de sistemas, busca crear herramientas que actúen como apalancamiento para la exploración humana.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Stack Técnico</h3>
            <p>
              <strong>JavaScript/TypeScript</strong>: Utilizado todos los días tanto en el
              servidor como en el front-end, con diferentes frameworks dependiendo del
              proyecto como React, Next.js, Vue.js o JavaScript puro.
            </p>
            <p>
              <strong>Go (Golang)</strong>: Herramienta principal para servicios web y
              herramientas de automatización.
            </p>
            <p>
              <strong>Creative Coding</strong>: Three.js, A-Frame, P5.js y
              librerías personalizadas al trabajar con gráficos 2D y 3D.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Filosofía</h3>
            <p>
              Abierto a usar cualquier herramienta, librería, framework o metodología para construir
              el mejor producto. Convertimos a fundadores atrapados en su trabajo en dueños. La mayoría de las personas
              con grandes ideas se quedan estancadas en la ejecución. Nosotros construimos el apalancamiento para que tú
              puedas concentrarte en la exploración.
            </p>
          </div>

          <div className={styles.topic}>
            <h3>Contacto</h3>
            <p>Dónde encontrarme:</p>
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
