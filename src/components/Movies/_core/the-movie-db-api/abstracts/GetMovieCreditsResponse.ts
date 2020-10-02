export type Actor = {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
};

export type CrewMember = {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string;
};

export type GetMovieCreditsResponse = {
    id: number;
    cast: Actor[];
    crew: CrewMember[];
};
