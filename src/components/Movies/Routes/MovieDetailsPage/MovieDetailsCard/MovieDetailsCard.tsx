import React from 'react';
import { SMovieDetailsCard } from './MovieDetailsCard.sc';

export type MovieDetailsCard = {
    title: string;
    posterUrl: string;
    overview: string;
    genres: string;
};

export const MovieDetailsCard: React.FC<MovieDetailsCard> = ({ title, posterUrl, overview, genres }) => {
    return (
        <SMovieDetailsCard>
            <img src={posterUrl} alt={title} />

            <h2>{title}</h2>

            <h3>Overview</h3>

            <p>{overview}</p>

            <h3>Genres</h3>

            <p>{genres}</p>
        </SMovieDetailsCard>
    );
};
