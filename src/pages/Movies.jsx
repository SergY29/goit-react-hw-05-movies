import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <main>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies and films"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
