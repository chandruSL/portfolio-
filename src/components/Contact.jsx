import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();
    const [ref, visible] = useScrollReveal();

    const contactLinks = [
        { icon: <Mail size={15} strokeWidth={2} />, label: 'Email', value: data.email, href: `mailto:${data.email}` },
        { icon: <Phone size={15} strokeWidth={2} />, label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
        { icon: <Linkedin size={15} strokeWidth={2} />, label: 'LinkedIn', value: 'linkedin.com/in/chandru-sl', href: data.linkedin, external: true },
        { icon: <Github size={15} strokeWidth={2} />, label: 'GitHub', value: 'github.com/chandruSL', href: data.github, external: true },
    ];

    return (
        <section id="contact">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">07 — Contact</span>
                    <h2 className="section-title">{data.heading}</h2>
                    <div className="section-line" />
                </div>

                <div className={`contact-wrapper reveal ${visible ? 'visible' : ''}`} ref={ref}>
                    <div className="contact-left">
                        <p className="contact-subtext">{data.subtext}</p>
                        <div className="contact-links">
                            {contactLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="contact-link"
                                    id={`contact-link-${i}`}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                >
                                    <div className="contact-link-icon">{link.icon}</div>
                                    <div>
                                        <div className="contact-link-label">{link.label}</div>
                                        <div className="contact-link-value">{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="contact-card">
                            <div className="contact-card-title">Ready to collaborate?</div>
                            <div className="contact-card-sub">// let's build something intelligent together</div>
                            <div className="contact-btn-group">
                                <a
                                    href={`mailto:${data.email}`}
                                    id="contact-email-btn"
                                    className="contact-btn contact-btn-primary"
                                >
                                    <Send size={14} strokeWidth={2.5} />
                                    Send an Email
                                </a>
                                <a
                                    href={data.linkedin}
                                    id="contact-linkedin-btn"
                                    className="contact-btn contact-btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={14} strokeWidth={2} />
                                    Connect on LinkedIn
                                </a>
                                <a
                                    href={data.github}
                                    id="contact-github-btn"
                                    className="contact-btn contact-btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={14} strokeWidth={2} />
                                    View GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
