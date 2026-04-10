import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProjectDetailPage.css'
import mywork_data from '../../assets/mywork_data'
import PythonRunner from '../../Components/PythonRunner/PythonRunner'

const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = mywork_data.find(p => p.w_no === parseInt(id, 10));

    if (!project) {
        return (
            <div className="project-detail-notfound">
                <h2>Project not found.</h2>
                <button className="project-back-btn" onClick={() => navigate('/portfolio')}>
                    &larr; Back to Portfolio
                </button>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <button className="project-back-btn" onClick={() => navigate('/portfolio')}>
                &larr; Back to Portfolio
            </button>

            <div className="project-detail-content">
                <div className="project-detail-frame">
                    <div className="project-detail-mat">
                        <img src={project.w_img} alt={project.w_name} />
                    </div>
                </div>

                <div className="project-detail-info">
                    <h1 className="project-detail-name">{project.w_name}</h1>
                    <p className="project-detail-desc">{project.w_desc}</p>

                    <div className="project-detail-tech">
                        <h3>Technologies Used</h3>
                        <div className="project-tech-tags">
                            {project.w_tech.map((tech, i) => (
                                <span key={i} className="project-tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.w_link && project.w_link !== '#' && (
                        <a
                            href={project.w_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-detail-link"
                        >
                            View Live Project &rarr;
                        </a>
                    )}

                    {project.w_code && (
                        <PythonRunner code={project.w_code} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
