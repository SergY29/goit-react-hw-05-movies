import { useParams } from 'react-router-dom';

const Reviews = () => {
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
      <li>Reviews</li>
      <li>Reviews</li>
    </ul>
  );
};

export default Reviews;
