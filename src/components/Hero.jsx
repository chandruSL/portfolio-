import { ArrowRight, Mail, MapPin, Download, Github, Linkedin, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ data }) {
    const [ref, visible] = useScrollReveal({ threshold: 0.05 });

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero">
            <div className="hero-bg-grid" />
            <div className="hero-bg-blob" />
            <div className="container">
                <div className={`hero-inner reveal ${visible ? 'visible' : ''}`} ref={ref}>

                    {/* LEFT: Text Content */}
                    <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h1 className="hero-name" style={{ fontSize: 'clamp(36px, 6vw, 64px)', marginBottom: '0', letterSpacing: '-0.02em', fontWeight: '800' }}>
                            Hi, I'm <span className="hero-name-accent">{data.name}</span>
                        </h1>

                        <h2 className="hero-title" style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text-primary)', fontWeight: '500', margin: '0 0 4px 0', letterSpacing: '-0.01em' }}>
                            {data.title}
                        </h2>

                        <div className="hero-location" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '8px' }}>
                            <MapPin size={16} strokeWidth={2} />
                            <span>Coimbatore, India</span>
                        </div>

                        <p className="hero-tagline" style={{ maxWidth: '640px', fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
                            {data.tagline}
                        </p>

                        <div className="hero-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                            <a
                                href="#contact"
                                className="hero-btn hero-btn-contact"
                                onClick={(e) => handleClick(e, '#contact')}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 28px', fontSize: '15px', fontWeight: '600', transition: 'all 0.3s ease' }}
                            >
                                <Mail size={16} strokeWidth={2.5} />
                                Get In Touch
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1FPNa_8ikuEL8869gCfw3WS4nPUGTKkEd/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-btn hero-btn-resume"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 28px', fontSize: '15px', fontWeight: '600', transition: 'all 0.3s ease' }}
                            >
                                <Download size={16} strokeWidth={2} />
                                View Resume
                            </a>
                        </div>

                        <div className="hero-bottom-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '500px', marginTop: 'auto' }}>
                            <div className="hero-socials" style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)' }}>
                                <a href="https://github.com/chandruSL" target="_blank" rel="noopener noreferrer" className="hover-accent"><Github size={20} /></a>
                                <a href="https://linkedin.com/in/chandru-sl" target="_blank" rel="noopener noreferrer" className="hover-accent"><Linkedin size={20} /></a>
                                <a href="#projects" className="hover-accent"><BookOpen size={20} /></a>
                                <a href="#contact" className="hover-accent"><Mail size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Profile Photo */}
                    <div className="hero-photo-wrap">
                        <div className="hero-photo-ring">
                            <div className="hero-photo-inner">
                                <img
                                    src="/profile.jpg"
                                    alt="Chandru S L — AI Developer & Full-Stack Engineer"
                                    loading="eager"
                                />
                            </div>
                        </div>
                        <div className="hero-photo-badge">
                            <span className="hero-photo-badge-dot" />
                            <span className="hero-photo-badge-text">Open to work</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
