// reducers.js

import { SET_WEATHER_DATA, SET_SELECTED_CITY } from './actions';

const initialState = {
    weatherData: null,
    selectedCity: 'Moscow', // Значение по умолчанию
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload,
            };
        case SET_SELECTED_CITY:
            return {
                ...state,
                selectedCity: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;
