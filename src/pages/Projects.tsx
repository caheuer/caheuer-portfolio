import "./Projects.css";

import { useMemo } from "react";
import { getProjects } from "../data/data";
// import { Link } from "react-router-dom";

export default function Projects() {
    const projects = useMemo(() => getProjects(), []);

    return <div className="project-list">
        {projects.map(project => <div key={project.id} className="project-card">
            {project.media?.length && <div>
                {
                    project.media[0].endsWith('.webm')
                        ? <video className="project-image" autoPlay loop muted playsInline>
                            <source src={project.media[0]} type="video/webm" />
                        </video>
                        : <img className="project-image" src={project.media[0]} alt={project.name} />
                }
            </div>}
            <div>
                <div className="project-name">{project.name}</div>
                <div className="project-tagline">{project.tagline}</div>
                <div className="project-organization">{project.organization}</div>
                <div className="project-date">{new Date(project.publishedYear, project.publishedMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                <div className="project-technologies">
                    {
                        project.technologies?.map(technology => !technology || typeof technology === 'string'
                            ? <div key={technology} className="project-technology">{technology}</div>
                            : <a key={technology.id} className="project-technology" href={technology.link}>{technology.name}</a>)
                    }
                </div>
                <div className="project-description">{project.shortDescription}</div>
                <div className="link-btns">
                    {/* <Link to={`/projects/${project.id}`} className="link-btn">Details</Link> */}
                    {project.links?.website && <a className="link-btn" href={project.links.website}>Open</a>}
                    {project.links?.itchio && <a className="link-btn" href={project.links.itchio}>Itch.io</a>}
                    {project.links?.github && <a className="link-btn" href={project.links.github}>GitHub</a>}
                </div>
            </div>
        </div>)}
    </div>;
}