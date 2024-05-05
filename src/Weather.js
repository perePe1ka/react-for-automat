import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setWeatherData } from './redux/actions';
import { getCurrentWeather } from "./api";

const Weather = ({ weatherData, setWeatherData }) => {
    const city = 'Moscow';

    const fetchData = useCallback(async () => {
        try {
            const data = await getCurrentWeather(city);
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }, [city, setWeatherData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <h2>Current Weather</h2>
            {weatherData && (
                <div>
                    <p>City: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    weatherData: state.weatherData,
});

export default connect(mapStateToProps, { setWeatherData })(Weather);
