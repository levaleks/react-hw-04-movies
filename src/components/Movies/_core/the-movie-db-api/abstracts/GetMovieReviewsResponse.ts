export type Review = {
    author: string;
    content: string;
    id: string;
    url: string;
};

export type GetMovieReviewsResponse = {
    id: number;
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
};
