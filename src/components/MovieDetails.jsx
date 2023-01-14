import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getDetailMovie } from '../servises/services';
import { Main } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInformation, setMovieInformation] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function trendingCatch() {
      try {
        const data = await getDetailMovie(id);
        console.log(data.data);
        setMovieInformation(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    trendingCatch();
  }, [id]);

  return (
    <Main>
      <div>
        {movieInformation && (
          <div key={movieInformation.id}>
            <Link to={backLinkHref}>Go back</Link>
            <img
              src={`https://image.tmdb.org/t/p/w400${movieInformation.poster_path}`}
              alt=""
            />
            <p>About: {movieInformation.overview}</p>
          </div>
        )}
      </div>
    </Main>
  );
};

export default MovieDetails;
