import axios from 'axios';

export const fetchImage = async (searchImage, page = 1) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const autKey = '21724467-4ce0638ba06e77e7c079dfe7e';

  const response = await axios.get(
    `/?image_type=photo&orientation=horizontal&q=${searchImage}&page=${page}&per_page=12&key=${autKey}`,
  );
  const images = response.data.hits;
  return images;
};
