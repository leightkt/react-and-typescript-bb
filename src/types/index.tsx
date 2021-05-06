export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    // origin: {
    //     name: string;
    //     url: string;
    // },
    origin: ILocation;
    // location: {
    //     name: string;
    //     url: string;
    // },
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ILocation {
    name: string;
    url: string;
}