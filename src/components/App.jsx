import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import Home from 'pages/Home';

const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<div>Фильмы</div>} />
      </Route>
    </Routes>
  );
};
