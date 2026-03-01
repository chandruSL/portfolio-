import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects({ data }) {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="projects">
            <div className="container">
                <div className={`section-header reveal ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
                    <span className="section-num">03 — Projects</span>
                    <h2 className="section-title">What I've Built</h2>
                    <div className="section-line" />
                </div>

                <div className="projects-grid">
                    {data.map((project, i) => (
                        <ProjectCard key={project.id} project={project} delay={i % 2} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, delay }) {
    const [ref, visible] = useScrollReveal();

    return (
        <div
            id={`project-${project.id}`}
            className={`project-card reveal reveal-delay-${delay + 1} ${visible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="project-card-header">
                <span className="project-id">#{String(project.id).padStart(2, '0')}</span>
                <span className="project-category">{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                    <li key={i}>
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                        {h}
                    </li>
                ))}
            </ul>

            <div className="project-stack">
                {project.tech_stack.map((tech) => (
                    <span className="stack-tag" key={tech}>{tech}</span>
                ))}
            </div>
        </div>
    );
}
