// actions.js

export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_SELECTED_CITY = 'SET_SELECTED_CITY';

export const setWeatherData = (data) => ({
    type: SET_WEATHER_DATA,
    payload: data,
});

export const setSelectedCity = (city) => ({
    type: SET_SELECTED_CITY,
    payload: city,
});
