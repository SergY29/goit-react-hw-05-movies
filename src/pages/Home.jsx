import { useEffect, useState } from 'react';
import { getTrending } from '../servises/services';

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
    <main>
      <h1>Trending today</h1>
      {trendingList &&
        trendingList.map(list => <li key={list.id}>{list.original_name}</li>)}
    </main>
  );
};

export default Home;
