import { useState } from 'react';
import { getSearchMovie } from '../servises/services';
import { useSearchParams } from 'react-router-dom';
import { MovieItem } from './Movies.styled';

const Movies = () => {
  // const [search, setSearch] = useState('');
  const [filmList, setFilmList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  const handleChange = event => {
    const normalizeValue = event.target.value.toLowerCase();
    setSearchParams(normalizeValue !== '' ? { query: normalizeValue } : {});
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Enter words to search for');
      return;
    }
    imagesCatch(search);
  };

  async function imagesCatch(search) {
    try {
      const data = await getSearchMovie(search);
      if (data.data.total_results === 0) {
        alert(`Sorry! We didn't find anything, change your request`);
        return;
      }
      setFilmList(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies and films"
          name="search"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filmList &&
          filmList.map(film => (
            <li key={film.id}>
              <MovieItem to={`${film.id}`}>
                {film.original_name ?? film.original_title}
              </MovieItem>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
