import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SHomePage } from './HomePage.sc';
import { theMovieDBAPI } from '../../_core/the-movie-db-api/TheMovieDBAPI';
import { GetTrendingResult } from '../../_core/the-movie-db-api/abstracts/GetTrendingResponse';

export const HomePage: React.FC = () => {
    const [trends, setTrends] = useState<GetTrendingResult[]>();

    useEffect(() => {
        const getTrending = async (): Promise<void> => {
            const { results } = await theMovieDBAPI.getTrending();

            setTrends(results);
        };

        getTrending();
    }, []);

    return (
        <SHomePage>
            <h2>Trending today</h2>

            {trends && (
                <ul>
                    {trends.map(({ id, title, original_title: originalTitle, name }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`}>{title || name || originalTitle}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </SHomePage>
    );
};
