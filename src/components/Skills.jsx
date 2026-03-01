import { Code2, Database, Brain, Wrench, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryIcons = {
    'Frontend': <Code2 size={14} strokeWidth={2} />,
    'Backend & Databases': <Database size={14} strokeWidth={2} />,
    'AI / ML': <Brain size={14} strokeWidth={2} />,
    'DevOps & Tools': <Wrench size={14} strokeWidth={2} />,
    'Soft Skills': <Users size={14} strokeWidth={2} />,
};

export default function Skills({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();
    const categories = Object.entries(data);

    return (
        <section id="skills">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">02 — Skills</span>
                    <h2 className="section-title">What I've Known</h2>
                    <div className="section-line" />
                </div>

                <div className="skills-grid">
                    {categories.map(([category, tags], i) => (
                        <SkillCard key={category} category={category} tags={tags} delay={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ category, tags, delay }) {
    const [ref, visible] = useScrollReveal();
    const icon = categoryIcons[category] || <Code2 size={14} strokeWidth={2} />;

    return (
        <div
            className={`skill-card reveal reveal-delay-${Math.min(delay + 1, 5)} ${visible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="skill-card-header">
                {icon}
                <span className="skill-card-title">{category}</span>
            </div>
            <div className="skill-tags">
                {tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
}
