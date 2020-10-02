import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SMoviesPage } from './MoviesPage.sc';
import { useQuery } from '../../../../helpers/useQuery';
import { theMovieDBAPI } from '../../_core/the-movie-db-api/TheMovieDBAPI';
import { Movie } from '../../_core/the-movie-db-api/abstracts/SearchResponse';

export const MoviesPage: React.FC = () => {
    const queryParams = useQuery();
    const history = useHistory();
    const [movies, setMovies] = useState<Movie[]>();
    const [inputVal, setInputVal] = useState('');
    const [[oldQuery, currentQuery], setQueries] = useState(['', '']);

    const pushQuery = (q: string): void => {
        history.push({ search: q ? `?query=${q}` : '' });
    };

    const handleSubmit = (e): void => {
        e.preventDefault();

        const oldQ = queryParams.get('query') ?? '';
        const newQ: string = e.target.query.value.trim().replace(/\s{2,}/g, ' ');

        if (oldQ !== newQ) pushQuery(newQ);
    };

    useEffect(() => {
        if (currentQuery) {
            const searchMovies = async (q: string): Promise<void> => {
                const data = await theMovieDBAPI.searchMovies({ query: q });

                setMovies(data.results);
            };

            searchMovies(currentQuery);
        }

        if (oldQuery && !currentQuery) {
            setMovies([]);
            setQueries(['', '']);
        }
    }, [oldQuery, currentQuery]);

    useEffect(() => {
        const newQ = queryParams.get('query') ?? '';

        if (newQ !== currentQuery) {
            setQueries([currentQuery, newQ]);
            setInputVal(newQ);
        }
    }, [queryParams, currentQuery]);

    return (
        <SMoviesPage>
            <form onSubmit={handleSubmit}>
                <input
                    name="query"
                    type="text"
                    autoComplete="off"
                    value={inputVal}
                    onChange={(e): void => setInputVal(e.target.value)}
                />

                <button type="submit">Search</button>
            </form>

            {movies && (
                <ul>
                    {movies.map(({ id, title, original_title: originalTitle }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`}>{title || originalTitle}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </SMoviesPage>
    );
};
