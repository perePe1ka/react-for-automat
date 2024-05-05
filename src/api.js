import axios from 'axios';

const API_KEY = '8dbc221482a18e9ea33762e4a36b208d';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

const getCurrentWeather = async (city) => {
    try {
        const response = await axios.get(baseURL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', 
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getCurrentWeather };
