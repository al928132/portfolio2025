import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PortfolioPage.css'
import mywork_data from '../../assets/mywork_data'

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
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
            className={`gallery-card gallery-card-${project.w_no}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/project/${project.w_no}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.w_no}`)}
            aria-label={`View details for ${project.w_name}`}
        >
            <div className="gallery-frame">
                <div className="gallery-frame-mat">
                    <div className="gallery-img-wrapper">
                        <img src={project.w_img} alt={project.w_name} />
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

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <div className="portfolio-title">
                <h1>My Latest Work</h1>
                <p>Click on a project to learn more</p>
            </div>
            <div className="gallery-wall">
                {mywork_data.map((project) => (
                    <ProjectCard key={project.w_no} project={project} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;
