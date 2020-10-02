import axios, { AxiosInstance } from 'axios';
import { MediaType, TimeWindow } from './abstracts/get-trending-request-options';
import { GetTrendingResponse } from './abstracts/GetTrendingResponse';
import { SearchParameters } from './abstracts/SearchParameters';
import { SearchResponse } from './abstracts/SearchResponse';
import { GetMovieDetailsParameters } from './abstracts/GetMovieDetailsParameters';
import { GetMovieDetailsResponse } from './abstracts/GetMovieDetailsResponse';
import { GetMovieCreditsResponse } from './abstracts/GetMovieCreditsResponse';
import { GetMovieReviewsParameters } from './abstracts/GetMovieReviewsParameters';
import { GetMovieReviewsResponse } from './abstracts/GetMovieReviewsResponse';

export class TheMovieDBAPI {
    constructor(private httpClient: AxiosInstance) {}

    async getTrending(mediaType: MediaType = 'all', timeWindow: TimeWindow = 'day'): Promise<GetTrendingResponse> {
        const { data } = await this.httpClient.get<GetTrendingResponse>(
            `${process.env.REACT_APP_TMDB_API_URL}/trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        );

        return data;
    }

    async searchMovies(searchParameters: SearchParameters): Promise<SearchResponse> {
        const searchParams = new URLSearchParams();

        Object.entries({ api_key: `${process.env.REACT_APP_TMDB_API_KEY}`, ...searchParameters }).forEach(
            ([key, value]) => {
                searchParams.append(key, String(value));
            },
        );

        const { data } = await this.httpClient.get<SearchResponse>(
            `${process.env.REACT_APP_TMDB_API_URL}/search/movie?${searchParams.toString()}`,
        );

        return data;
    }

    async getMovieDetails(movieId: number, params?: GetMovieDetailsParameters): Promise<GetMovieDetailsResponse> {
        const searchParams = new URLSearchParams();

        Object.entries({ api_key: `${process.env.REACT_APP_TMDB_API_KEY}`, ...params }).forEach(([key, value]) => {
            searchParams.append(key, String(value));
        });

        const { data } = await this.httpClient.get<GetMovieDetailsResponse>(
            `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}?${searchParams.toString()}`,
        );

        return data;
    }

    async getMovieCredits(movieId: number): Promise<GetMovieCreditsResponse> {
        const { data } = await this.httpClient.get<GetMovieCreditsResponse>(
            `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        );

        return data;
    }

    async getMovieReviews(movieId: number, params?: GetMovieReviewsParameters): Promise<GetMovieReviewsResponse> {
        const searchParams = new URLSearchParams();

        Object.entries({ api_key: `${process.env.REACT_APP_TMDB_API_KEY}`, ...params }).forEach(([key, value]) => {
            searchParams.append(key, String(value));
        });

        const { data } = await this.httpClient.get<GetMovieReviewsResponse>(
            `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}/reviews?${searchParams.toString()}`,
        );

        return data;
    }
}

const axiosInstance = axios.create();

export const theMovieDBAPI = new TheMovieDBAPI(axiosInstance);
