import { ExternalLink, Award, Terminal, Cloud, Palette, GitBranch, FileText, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const issuerIcons = {
    'Atlassian': <GitBranch size={15} strokeWidth={2} />,
    'The Linux Foundation': <Terminal size={15} strokeWidth={2} />,
    'KodeKloud': <Cloud size={15} strokeWidth={2} />,
    'Google': <Palette size={15} strokeWidth={2} />,
    'Infosys Springboard': <ShieldCheck size={15} strokeWidth={2} />,
    'Patent Office, Government of India': <FileText size={15} strokeWidth={2} />,
};

export default function Certifications({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="certifications">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">05 — Certifications</span>
                    <h2 className="section-title">Certifications</h2>
                    <div className="section-line" />
                </div>

                <div className="cert-grid">
                    {data.map((cert, i) => (
                        <CertCard key={i} cert={cert} delay={i % 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertCard({ cert, delay }) {
    const [ref, visible] = useScrollReveal();
    const icon = issuerIcons[cert.issuer] || <Award size={15} strokeWidth={2} />;

    return (
        <div
            className={`cert-card reveal reveal-delay-${delay + 1} ${visible ? 'visible' : ''}`}
            ref={ref}
        >
            {cert.certificate && (
                <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-preview-box"
                    title="Click to view full screen certificate"
                >
                    {cert.certificate.toLowerCase().endsWith('.pdf') ? (
                        <iframe
                            src={`${cert.certificate}#view=FitH&scrollbar=0&toolbar=0&navpanes=0`}
                            className="cert-preview-media"
                            tabIndex={-1}
                            style={{ overflow: 'hidden' }}
                        />
                    ) : (
                        <img src={cert.certificate} className="cert-preview-media" alt="Certificate Preview" />
                    )}
                    <div className="cert-preview-overlay">
                        <span>
                            <ExternalLink size={16} strokeWidth={2} />
                            View Certificate
                        </span>
                    </div>
                </a>
            )}

            <div className="cert-content">
                <div className="cert-icon-wrap">{icon}</div>
                <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    {cert.date && <div className="cert-date">{cert.date}</div>}
                </div>
            </div>
        </div>
    );
}
