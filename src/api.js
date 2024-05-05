import { Observable } from 'rxjs';
import axios from 'axios';

const API_KEY = '8dbc221482a18e9ea33762e4a36b208d';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

const getCurrentWeather = (city) => {
    return new Observable((observer) => {
        axios.get(baseURL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        })
            .then((response) => {
                observer.next(response.data);
                observer.complete();
            })
            .catch((error) => {
                observer.error(error);
            });
    });
};

export { getCurrentWeather };
