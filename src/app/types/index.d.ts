export interface Projects {
    id:                  number;
    name:                string;
    images?:             Image[];
    tecnologies:         string[];
    description:         DescriptionClass ;
    coworker?:           Coworker;
    githubLink?:         string;
    defaultCredentials?: DefaultCredentials;
    liveLink?:           string;
}
export interface Coworker {
    name:     string;
    linkedin: string;
}

export interface DefaultCredentials {
    username: string;
    password: string;
}

export interface ImageWithCaption {
    src:     string;
    caption: string;
}

export interface DescriptionClass {
    presentacion: string;
    problema:     string;
    solucion:     string;
}
