import Technology from "./technology";

export default interface Project {
    id: string;
    name: string;
    tagline: string;
    publishedMonth: number;
    publishedYear: number;
    organization: string;
    shortDescription: string;
    description: string;
    media?: string[];
    technologies?: TechnologyOrString[];
    links?: {
        website?: string;
        github?: string;
        itchio?: string;
    };
}

export type TechnologyOrString = Technology | string;