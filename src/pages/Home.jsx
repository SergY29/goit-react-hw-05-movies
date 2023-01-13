import { useEffect, useState } from 'react';
import { getTrending } from '../servises/services';
import { MovieItem, Main } from './Home.styled';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    async function trendingCatch() {
      try {
        const data = await getTrending();
        setTrendingList(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    trendingCatch();
  }, []);

  return (
    <Main>
      <h1>Trending today</h1>
      <ul>
        {trendingList &&
          trendingList.map(list => (
            <li key={list.id}>
              <MovieItem to={`${list.id}`}>
                {list.original_name ?? list.original_title}
              </MovieItem>
            </li>
          ))}
      </ul>
    </Main>
  );
};

export default Home;
