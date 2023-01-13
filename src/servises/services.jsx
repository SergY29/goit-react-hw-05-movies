import axios from 'axios';

export const getTrending = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=22fa368820f7f9af3c30ea0e6b34461d&page=1'
  );
};

// ,
//     {
//       params: {
//         api_key: '22fa368820f7f9af3c30ea0e6b34461d',
//         page: 1,
//       },
//     }
