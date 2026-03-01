import { ChevronRight, MapPin, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();
    const [ref, visible] = useScrollReveal();

    return (
        <section id="experience">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">04 — Experience</span>
                    <h2 className="section-title">Work History</h2>
                    <div className="section-line" />
                </div>

                <div className={`experience-timeline reveal ${visible ? 'visible' : ''}`} ref={ref}>
                    {data.map((exp, i) => (
                        <div className="exp-card" key={i} id={`exp-${i}`}>
                            <div className="exp-dot" />
                            <div className="exp-header">
                                <div>
                                    <div className="exp-role">{exp.role}</div>
                                    <div className="exp-company-row">
                                        <span className="exp-company">{exp.company}</span>
                                    </div>
                                </div>
                                <div className="exp-meta">
                                    <span className="exp-duration">{exp.duration}</span>
                                    <span className="exp-location">
                                        <MapPin size={10} strokeWidth={2} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                            <ul className="exp-responsibilities">
                                {exp.responsibilities.map((resp, j) => (
                                    <li key={j}>
                                        <ChevronRight size={14} strokeWidth={2.5} />
                                        {resp}
                                    </li>
                                ))}
                            </ul>

                            {exp.certificate && (
                                <a
                                    href={exp.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-cert-link"
                                >
                                    <ExternalLink size={12} strokeWidth={2.5} />
                                    View Certificate
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
