import React from 'react';
import { SReviewCard } from './ReviewCard.sc';

export type ReviewCardProps = {
    authorName: string;
    review: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ authorName, review }) => {
    return (
        <SReviewCard>
            <h4>Author: {authorName}</h4>
            <p>{review}</p>
        </SReviewCard>
    );
};
