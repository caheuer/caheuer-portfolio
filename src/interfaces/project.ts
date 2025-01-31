import Technology from "./technology";

export default interface Project {
    id: string;
    name: string;
    publishedMonth: number;
    publishedYear: number;
    shortDescription: string;
    description: string;
    images?: string[];
    technologies?: TechnologyOrString[];
    links?: {
        website?: string;
        github?: string;
    };
}

export type TechnologyOrString = Technology | string;