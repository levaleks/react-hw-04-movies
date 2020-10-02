import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SReviews } from './Reviews.sc';
import { theMovieDBAPI } from '../../../_core/the-movie-db-api/TheMovieDBAPI';
import { Review } from '../../../_core/the-movie-db-api/abstracts/GetMovieReviewsResponse';
import { ReviewCard } from './ReviewCard';

export const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>();
    const { movieId } = useParams<{ movieId: string }>();

    useEffect(() => {
        const getMovieReviews = async (): Promise<void> => {
            const { results } = await theMovieDBAPI.getMovieReviews(Number(movieId));

            setReviews(results);
        };

        getMovieReviews();
    }, [movieId]);

    return (
        <SReviews>
            {reviews && Boolean(reviews.length) && (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <ReviewCard authorName={author} review={content} />
                        </li>
                    ))}
                </ul>
            )}

            {reviews && !reviews.length && <p>We don&apos;t have any reviews for this movie.</p>}
        </SReviews>
    );
};
