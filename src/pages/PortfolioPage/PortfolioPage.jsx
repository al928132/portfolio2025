import React, { useRef, useState, useEffect } from 'react'
import './PortfolioPage.css'
import mywork_data from '../../assets/mywork_data'
import PythonRunner from '../../Components/PythonRunner/PythonRunner'

/* ── Single project card ─────────────────────────────────── */
const ProjectCard = ({ project, onOpen }) => {
    const cardRef = useRef(null);
    const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpotlight({ x, y, visible: true });
    };

    const handleMouseLeave = () => {
        setSpotlight(prev => ({ ...prev, visible: false }));
    };

    return (
        <div
            ref={cardRef}
            className="gallery-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpen(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
            aria-label={`View details for ${project.w_name}`}
        >
            <div className="gallery-frame">
                <div className="gallery-frame-mat">
                    <div className="gallery-img-wrapper">
                        {project.w_img ? (
                            <img src={project.w_img} alt={project.w_name} />
                        ) : (
                            <div className="gallery-img-placeholder">
                                <span>{project.w_name}</span>
                            </div>
                        )}
                        {spotlight.visible && (
                            <div
                                className="gallery-spotlight"
                                style={{
                                    background: `radial-gradient(circle 180px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)`
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <p className="gallery-caption">{project.w_name}</p>
        </div>
    );
};

/* ── Project modal overlay ───────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        if (!project) return;
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [project, onClose]);

    if (!project) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={project.w_name}>
            <div className="modal-panel">
                <button className="modal-back-btn" onClick={onClose} aria-label="Back to portfolio">
                    &larr; Back
                </button>

                <div className="modal-body">
                    <div className="modal-frame">
                        <div className="modal-mat">
                            {project.w_img ? (
                                <img src={project.w_img} alt={project.w_name} />
                            ) : (
                                <div className="modal-img-placeholder">
                                    <span>{project.w_name}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="modal-info">
                        <h2 className="modal-title">{project.w_name}</h2>
                        <p className="modal-desc">{project.w_desc}</p>

                        <div className="modal-tech">
                            <h3>Technologies Used</h3>
                            <div className="modal-tech-tags">
                                {project.w_tech.map((tech, i) => (
                                    <span key={i} className="modal-tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {project.w_link && project.w_link !== '#' && (
                            <a
                                href={project.w_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                View Live Project &rarr;
                            </a>
                        )}

                        {project.w_pdf && (
                            <a
                                href={project.w_pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                {project.w_pdf_label || "View PDF"} &rarr;
                            </a>
                        )}

                        {project.w_code && (
                            <PythonRunner code={project.w_code} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── Portfolio page with sections ────────────────────────── */
const PortfolioPage = () => {
    const [activeProject, setActiveProject] = useState(null);

    // Group projects by section, preserving insertion order
    const sections = mywork_data.reduce((acc, project) => {
        const key = project.w_section || 'Other';
        if (!acc[key]) acc[key] = [];
        acc[key].push(project);
        return acc;
    }, {});

    return (
        <div className="portfolio-page">
            <div className="portfolio-title">
                <h1>My Latest Work</h1>
                <p>Click on a project to learn more</p>
            </div>

            {Object.entries(sections).map(([sectionName, projects]) => (
                <section key={sectionName} className="portfolio-section">
                    <div className="portfolio-section-header">
                        <span className="portfolio-section-label">{sectionName}</span>
                        <hr className="portfolio-section-rule" />
                    </div>
                    <div className="gallery-wall">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.w_no}
                                project={project}
                                onOpen={setActiveProject}
                            />
                        ))}
                    </div>
                </section>
            ))}

            <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        </div>
    );
};

export default PortfolioPage;
