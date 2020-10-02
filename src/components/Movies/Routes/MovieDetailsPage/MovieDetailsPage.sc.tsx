import styled from 'styled-components';

export const SMovieDetailsPage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SBackButton = styled.button`
    width: max-content;
    margin-bottom: 10px;
    background: none;
    border: 0;
    cursor: pointer;
`;

export const SDetailsNav = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;

    li {
        margin-right: 15px;

        &:last-child {
            margin-right: 0;
        }
    }

    a {
        text-decoration: none;

        &.active,
        &:hover {
            text-decoration: underline;
        }
    }
`;
