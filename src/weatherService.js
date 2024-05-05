import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const API_KEY = '8dbc221482a18e9ea33762e4a36b208d';

export const getCurrentWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    return from(ajax.getJSON(url)).pipe(
        map((response) => response),
        catchError((error) => {
            console.error('Error fetching weather data:', error);
            throw error;
        })
    );
};
