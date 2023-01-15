import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();

  console.log(id);
  //   useEffect(() => {
  //     async function trendingCatch() {
  //       try {
  //         const data = await getTrending();
  //         setTrendingList(data.data.results);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     trendingCatch();
  //   }, []);

  return (
    <ul>
      <li>Cast</li>
      <li>Cast</li>
    </ul>
  );
};

export default Cast;
