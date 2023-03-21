export interface Actor {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: Date;
    deathday: null;
    gender: string;
    image: Image;
    updated: number;
}


interface Country {
    name: string;
    code: string;
    timezone: string;
}

interface Image {
    medium: string;
    original: string;
}
