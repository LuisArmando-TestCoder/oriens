'use client'
import React, { useState } from 'react';
import { Heading } from '@/components/atoms/Heading/Heading';
import { VideoTitle } from '@/components/atoms/VideoTitle/VideoTitle';
import { SplitText } from '@/components/molecules/SplitText/SplitText';
import { ModernSlider } from '@/components/organisms/ModernSlider/ModernSlider';
import { ModernModal } from '@/components/molecules/ModernModal/ModernModal';
import { siteContent } from '@/content/siteContent';
import styles from './About.module.scss';

export const About = () => {
  const { about } = siteContent;
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className={styles.about}>
      <ModernModal 
        isOpen={!!modalImage} 
        onClose={() => setModalImage(null)} 
        image={modalImage} 
      />
      <VideoTitle text={`${about.title}`} pushToRead offset={100} />
      <div className={styles.container}>
        
        <div className={styles.intro}>
            <div className={styles.sliderContainer}>
                <ModernSlider 
                    images={about.images}
                    onImageClick={setModalImage}
                 />
            </div>

            <p><strong>{about.title}</strong> {about.intro.replace(`${about.title} `, '')}</p>
        </div>

        {about.sections.map((section) => (
            <div key={section.id} className={styles.section}>
                <Heading id={section.id} tag="h2">
                    <SplitText id={`${section.id}-text`} delay={0.2}>{section.title}</SplitText>
                </Heading>
                {section.content && <p>{section.content}</p>}
                {section.items && (
                    <ul>
                        {section.items.map((item, i) => {
                            const parts = item.split(':');
                            if (parts.length > 1) {
                                return (
                                    <li key={i}>
                                        <strong>{parts[0]}</strong>: {parts.slice(1).join(':')}
                                    </li>
                                );
                            }
                            return <li key={i}>{item}</li>;
                        })}
                    </ul>
                )}
                {section.topics && section.topics.map((topic, i) => (
                    <div key={i} className={styles.topic}>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </div>
                ))}
                {section.paragraphs && section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                {section.footer && <p>{section.footer}</p>}
            </div>
        ))}

        <hr className={styles.divider} />

        <div className={styles.part2}>
             <p><strong>{about.title}</strong> {about.part2.intro.replace(`${about.title} `, '')}</p>

             <Heading id="obras-destacadas-2" tag="h2">
                <SplitText id="obras-destacadas-2-text" delay={0.2}>Obras destacadas</SplitText>
             </Heading>
             {about.part2.works.map((work, i) => (
                <div key={i} className={styles.work}>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                </div>
             ))}

             {about.part2.sections.map((section) => (
                <React.Fragment key={section.id}>
                    <Heading id={section.id} tag="h2">
                        <SplitText id={`${section.id}-text`} delay={0.2}>{section.title}</SplitText>
                    </Heading>
                    
                    {section.subsections ? (
                        section.subsections.map((sub, i) => (
                            <React.Fragment key={i}>
                                <h3>{sub.title}</h3>
                                <p>{sub.content}</p>
                                {sub.items && (
                                    <ul>
                                        {sub.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))
                    ) : null}

                    {section.topics ? (
                        section.topics.map((topic, i) => (
                            <div key={i} className={styles.topic}>
                                <h3>{topic.title}</h3>
                                <p>{topic.description}</p>
                            </div>
                        ))
                    ) : null}

                    {section.items ? (
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : null}

                    {section.footer && <p>{section.footer}</p>}
                </React.Fragment>
             ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.section} id={about.developer.id}>
            <Heading id="creative-engineer" tag="h2">
                <SplitText id="creative-engineer-text" delay={0.2}>{about.developer.title}</SplitText>
            </Heading>
            <div className={styles.intro}>
                <p><strong>{about.developer.name}</strong> ({about.developer.role})</p>
                {about.developer.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            <div className={styles.topic}>
                <h3>{about.developer.stack.title}</h3>
                {about.developer.stack.items.map((item, i) => (
                    <p key={i}><strong>{item.label}</strong>: {item.description}</p>
                ))}
            </div>

            <div className={styles.topic}>
                <h3>{about.developer.philosophy.title}</h3>
                <p>{about.developer.philosophy.content}</p>
            </div>

            <div className={styles.topic}>
                <h3>{about.developer.contact.title}</h3>
                <p>Dónde encontrarme:</p>
                <ul>
                    {about.developer.contact.links.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
