import axios from 'axios';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherData = async (city: string) => {
  console.log(VITE_API_KEY + ' ' + VITE_BASE_URL);

  try {
    const response = await axios.get(`${VITE_BASE_URL}/current.json`, {
      params: {
        key: VITE_API_KEY,
        q: city,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
