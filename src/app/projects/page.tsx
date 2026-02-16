import React from 'react'
import { Metadata } from 'next'
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle'
import { SplitText } from '@/components/molecules/SplitText/SplitText'
import Link from 'next/link'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "Proyectos | Aba Oriens",
  description: "Portafolio de proyectos de ingeniería creativa y emprendimientos tecnológicos: AIBAN, Engagement AI y más.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.projects}>
      <VideoTitle text="PROYECTOS" pushToRead />
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>
            <SplitText id="project-aiban" delay={0.2}>
              AIBAN
            </SplitText>
          </h3>
          <p>Convertimos a fundadores atrapados en su trabajo en dueños. La mayoría de las personas con grandes ideas se quedan estancadas en la ejecución. Nosotros construimos el apalancamiento para que tú puedas concentrarte en la exploración.</p>
          <a href="https://aiban.news/" target="_blank" rel="noopener noreferrer">Visitar Sitio →</a>
        </div>
        
        <div className={styles.card}>
          <h3>
            <SplitText id="project-engagement" delay={0.2}>
              Engagement AI
            </SplitText>
          </h3>
          <p>Ayudamos a los dueños de negocios a hacer crecer sus empresas de una manera que los libere de la gestión diaria.</p>
          <a href="https://aiexecutions.com/" target="_blank" rel="noopener noreferrer">Visitar Sitio →</a>
        </div>

        <div className={styles.card}>
          <h3>
            <SplitText id="project-portfolio" delay={0.2}>
              Portafolio
            </SplitText>
          </h3>
          <p>Profundamente interesado en ofrecer experiencias limpias a todo tipo de usuarios al crear el producto, porque su calidad en todos los ejes se siente profundamente personal.</p>
          <a href="https://testcoder.netlify.app/" target="_blank" rel="noopener noreferrer">Visitar Sitio →</a>
        </div>

        <div className={styles.card}>
          <h3>
            <SplitText id="project-aba-oriens" delay={0.2}>
              Aba Oriens
            </SplitText>
          </h3>
          <div>
            <p>Obra literaria contemporánea caracterizada por una poética orgánica violenta.</p>
            <div className={styles.details}>
              <ul>
                <li><strong>Anclaje temporal</strong>: Fechas y horas como dispositivos de verosimilitud clínica.</li>
                <li><strong>Léxico biomédico</strong>: La fisiología integrada a la estructura simbólica.</li>
                <li><strong>Mística postdigital</strong>: Fusión de erotismo, trauma y crítica cultural.</li>
              </ul>
            </div>
          </div>
          <Link href="/poems">Explorar Obra →</Link>
        </div>
      </div>
    </main>
  )
}
