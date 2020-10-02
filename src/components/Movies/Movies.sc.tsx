import styled from 'styled-components';

export const SMovies = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 30px auto 0;
`;

export const SNav = styled.nav`
    ul {
        display: flex;
        padding: 0 0 30px 0;
        margin: 0 0 30px 0;
        border-bottom: 1px solid #cccccc;
        list-style: none;

        li {
            margin-right: 15px;

            &:last-child {
                margin-right: 0;
            }

            a {
                text-decoration: none;

                &.active,
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
