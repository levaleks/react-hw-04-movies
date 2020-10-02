import React, { useEffect, useState } from 'react';
import { useParams, Switch, Route, useRouteMatch, useHistory, NavLink } from 'react-router-dom';
import { SBackButton, SDetailsNav, SMovieDetailsPage } from './MovieDetailsPage.sc';
import { theMovieDBAPI } from '../../_core/the-movie-db-api/TheMovieDBAPI';
import { GetMovieDetailsResponse } from '../../_core/the-movie-db-api/abstracts/GetMovieDetailsResponse';
import { MovieDetailsCard } from './MovieDetailsCard/MovieDetailsCard';
import { Reviews } from './Reviews';
import { Cast } from './Cast';

export const MovieDetailsPage: React.FC = () => {
    const history = useHistory();
    const [movieDetails, setMovieDetails] = useState<GetMovieDetailsResponse>();
    const { movieId } = useParams<{ movieId: string }>();
    const { path, url } = useRouteMatch();

    useEffect(() => {
        const getMovieDetails = async (): Promise<void> => {
            const details = await theMovieDBAPI.getMovieDetails(Number(movieId));

            setMovieDetails(details);
        };

        getMovieDetails();
    }, [movieId]);

    return (
        <SMovieDetailsPage>
            <SBackButton type="button" onClick={(): void => history.goBack()}>
                ← Back
            </SBackButton>

            {movieDetails && (
                <MovieDetailsCard
                    title={movieDetails.title || movieDetails.original_title}
                    posterUrl={`${process.env.REACT_APP_TMDB_IMG_URL}/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
                    overview={movieDetails.overview}
                    genres={movieDetails.genres.map(({ name }) => name).join(', ')}
                />
            )}

            <SDetailsNav>
                <li>
                    <NavLink to={`${url}/cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                </li>
            </SDetailsNav>

            <Switch>
                <Route path={`${path}/cast`}>
                    <Cast />
                </Route>
                <Route path={`${path}/reviews`}>
                    <Reviews />
                </Route>
            </Switch>
        </SMovieDetailsPage>
    );
};
