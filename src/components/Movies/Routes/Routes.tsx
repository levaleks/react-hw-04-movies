import { Redirect, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Indicator from 'react-loader-spinner';

const LazyHomePage = lazy(() => import('./HomePage').then(({ HomePage }) => ({ default: HomePage })));

const LazyMoviesPage = lazy(() => import('./MoviesPage').then(({ MoviesPage }) => ({ default: MoviesPage })));

const LazyMovieDetailsPage = lazy(() =>
    import('./MovieDetailsPage').then(({ MovieDetailsPage }) => ({ default: MovieDetailsPage })),
);

export const LoaderIndicator: React.FC = () => (
    <Indicator type="ThreeDots" color="#CCCCCC" style={{ margin: '0 auto' }} height={40} width={40} />
);

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Suspense fallback={<LoaderIndicator />}>
                    <LazyHomePage />
                </Suspense>
            </Route>
            <Route exact path="/movies">
                <Suspense fallback={<LoaderIndicator />}>
                    <LazyMoviesPage />
                </Suspense>
            </Route>
            <Route path="/movies/:movieId">
                <Suspense fallback={<LoaderIndicator />}>
                    <LazyMovieDetailsPage />
                </Suspense>
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
