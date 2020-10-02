import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import { SMovies, SNav } from './Movies.sc';
import { Routes } from './Routes';

export const Movies: React.FC = () => {
    return (
        <HashRouter>
            <SMovies>
                <SNav>
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </SNav>

                <Routes />
            </SMovies>
        </HashRouter>
    );
};
