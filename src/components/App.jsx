import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('./MovieDetails1'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
