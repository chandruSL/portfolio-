import { useState, useEffect } from 'react';

const navLinks = [
    { label: '01 About', href: '#about' },
    { label: '02 Skills', href: '#skills' },
    { label: '03 Projects', href: '#projects' },
    { label: '04 Experience', href: '#experience' },
    { label: '05 Certificates', href: '#certifications' },
    { label: '06 Achievements', href: '#achievements' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
                        Portfolio<span>.</span>
                    </div>
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="nav-cta"
                                onClick={(e) => handleNavClick(e, '#contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button
                        id="hamburger-btn"
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                            07 Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
