import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

export default function Achievements({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="achievements">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">06 — Achievements</span>
                    <h2 className="section-title">Milestones</h2>
                    <div className="section-line" />
                </div>

                <div className="achievements-list">
                    {data.map((item, i) => (
                        <AchievementCard key={i} item={item} delay={i % 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AchievementCard({ item, delay }) {
    const [ref, visible] = useScrollReveal();

    return (
        <div
            className={`achievement-card reveal reveal-delay-${delay + 1} ${visible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="achievement-year">{item.year}</div>
            <div className="achievement-info">
                <div className="achievement-event">{item.event}</div>
                <div className="achievement-org">{item.organization}</div>
                <div className="achievement-desc">{item.description}</div>

                {item.certificate && (
                    <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-cert-link"
                    >
                        <ExternalLink size={12} strokeWidth={2.5} />
                        View Certificate
                    </a>
                )}
            </div>
            <div className="achievement-role-badge">{item.role}</div>
        </div>
    );
}
