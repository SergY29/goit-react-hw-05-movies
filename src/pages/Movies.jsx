import { useState, useEffect } from 'react';
import { getSearchMovie } from '../servises/services';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieItem, Main, Form } from './Movies.styled';

const Movies = () => {
  const [searchInput, setSearch] = useState('');
  const [filmList, setFilmList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleChange = event => {
    const normalizeValue = event.target.value.toLowerCase();
    setSearch(event.target.value);
    setSearchParams(normalizeValue !== '' ? { query: normalizeValue } : {});
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Enter words to search for');
      return;
    }
    movieCatch(search);
    setSearch('');
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    movieCatch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function movieCatch(search) {
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
    <Main>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </Form>
      <ul>
        {filmList &&
          filmList.map(film => (
            <li key={film.id}>
              <MovieItem to={`${film.id}`} state={{ from: location }}>
                {film.original_name ?? film.original_title}
              </MovieItem>
            </li>
          ))}
      </ul>
    </Main>
  );
};

export default Movies;
