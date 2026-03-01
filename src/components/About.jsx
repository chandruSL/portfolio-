import { MapPin, GraduationCap, Mail, Phone, Github, Linkedin, Languages } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const getDetails = (data) => [
    { icon: <MapPin size={14} strokeWidth={2} />, label: 'Location', value: data.location },
    { icon: <GraduationCap size={14} strokeWidth={2} />, label: 'Degree', value: data.degree },
    { icon: <Mail size={14} strokeWidth={2} />, label: 'Email', value: <a href={`mailto:${data.email}`}>{data.email}</a> },
    { icon: <Phone size={14} strokeWidth={2} />, label: 'Phone', value: <a href={`tel:${data.phone}`}>{data.phone}</a> },
    { icon: <Github size={14} strokeWidth={2} />, label: 'GitHub', value: <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github.replace('https://', '')}</a> },
    { icon: <Linkedin size={14} strokeWidth={2} />, label: 'LinkedIn', value: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin.replace('https://', '')}</a> },
    { icon: <Languages size={14} strokeWidth={2} />, label: 'Languages', value: data.languages },
];

export default function About({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();
    const [ref, visible] = useScrollReveal();

    return (
        <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">01 — About</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line" />
                </div>

                <div
                    className={`about-content reveal ${visible ? 'visible' : ''}`}
                    ref={ref}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'start' }}
                >
                    {/* LEFT Column: My Story */}
                    <div>
                        <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>My Story</h3>
                        <div className="about-bio" style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8' }}>
                            {data.bio.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT Column: What I Do */}
                    <div>
                        <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>What I Do</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
                            <div>
                                <strong style={{ color: 'var(--text-primary)', display: 'inline-block', marginBottom: '4px', fontSize: '16px' }}>AI & Machine Learning:</strong>
                                <br />Building robust ML pipelines that cut estimation errors and optimize real-world processes, including constraint-solving algorithms.
                            </div>
                            <div>
                                <strong style={{ color: 'var(--text-primary)', display: 'inline-block', marginBottom: '4px', fontSize: '16px' }}>UI/UX Design:</strong>
                                <br />Focusing on crafting pixel-perfect, accessible, and user-centric interfaces utilizing principles of human-computer interaction.
                            </div>
                            <div>
                                <strong style={{ color: 'var(--text-primary)', display: 'inline-block', marginBottom: '4px', fontSize: '16px' }}>Data Analysis:</strong>
                                <br />Transforming complex datasets into actionable insights to drive informed business decisions and solutions.
                            </div>
                            <div>
                                <strong style={{ color: 'var(--text-primary)', display: 'inline-block', marginBottom: '4px', fontSize: '16px' }}>Backend Development:</strong>
                                <br />Developing robust backend scalable solutions utilizing Python, Flask, SQL, and algorithm optimization heuristics.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
