import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SCast } from './Cast.sc';
import { theMovieDBAPI } from '../../../_core/the-movie-db-api/TheMovieDBAPI';
import { Actor } from '../../../_core/the-movie-db-api/abstracts/GetMovieCreditsResponse';
import { ActorCard } from './ActorCard';

export const Cast: React.FC = () => {
    const [cast, setCast] = useState<Actor[]>();
    const { movieId } = useParams<{ movieId: string }>();

    useEffect(() => {
        const getMovieCredits = async (): Promise<void> => {
            const data = await theMovieDBAPI.getMovieCredits(Number(movieId));

            setCast(data.cast);
        };

        getMovieCredits();
    }, [movieId]);

    return (
        <SCast>
            {cast && (
                <ul>
                    {cast.map(({ id, name, character, profile_path: profilePath }) => (
                        <li key={id}>
                            <ActorCard
                                photoUrl={`${process.env.REACT_APP_TMDB_IMG_URL}/t/p/w138_and_h175_face${profilePath}`}
                                name={name}
                                character={character}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </SCast>
    );
};
