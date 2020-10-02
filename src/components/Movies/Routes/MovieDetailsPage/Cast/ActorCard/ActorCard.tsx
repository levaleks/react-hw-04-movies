import React from 'react';
import { SActorCard } from './ActorCard.sc';

export type ActorCardProps = {
    photoUrl: string;
    name: string;
    character: string;
};

export const ActorCard: React.FC<ActorCardProps> = ({ photoUrl, name, character }) => {
    return (
        <SActorCard>
            <img src={photoUrl} alt={name} />
            <p>{name}</p>
            Сharacter: <span>{character}</span>
        </SActorCard>
    );
};
