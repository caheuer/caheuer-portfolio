import Technology from '../interfaces/technology';
import Project from '../interfaces/project';

import technologiesData from './technologies.json';
import projectsData from './projects.json';

const technologies: Technology[] = technologiesData;
const projects: Project[] = projectsData;

export function getTechnologies(): Technology[] {
    return technologies;
}

export function getTechnology(id: string): Technology | undefined {
    return getTechnologies().find(technology => technology.id === id);
}

export function getProjects(): Project[] {
    return projects.map(project => {

        // Convert technology IDs to technology objects
        project.technologies = project.technologies?.map(technologyId => {
            if (typeof technologyId === 'string') {
                const technology = getTechnology(technologyId as string);
                if (technology) {
                    return technology;
                }
            }
            return technologyId;
        });

        return project;
    });
}

export function getProject(id: string): Project | undefined {
    return getProjects().find(project => project.id === id);
}
