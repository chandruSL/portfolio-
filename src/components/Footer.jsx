import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <p className="footer-copy">
                        © {year} <span>Chandru S L</span> · Crafted with React + Vite
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/chandruSL" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Github size={13} strokeWidth={2} /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/chandru-sl" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Linkedin size={13} strokeWidth={2} /> LinkedIn
                        </a>
                        <a href="mailto:chandruselvarsu@gmail.com"
                            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Mail size={13} strokeWidth={2} /> Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
