import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../servises/services';

const MovieDetails = () => {
  const [movieInformation, setMovieInformation] = useState(null);
  const { id } = useParams();

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
    <main>
      <div>
        {movieInformation && (
          <div key={movieInformation.id}>
            <img
              src={`https://image.tmdb.org/t/p/w400${movieInformation.poster_path}`}
              alt=""
            />
            <p>About: {movieInformation.overview}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MovieDetails;
