import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setWeatherData } from './redux/actions';
import { getCurrentWeather } from "./api";
// eslint-disable-next-line
import { Observable } from 'rxjs';

const Weather = ({ weatherData, setWeatherData }) => {
    const city = 'Moscow';

    useEffect(() => {
        const subscription = getCurrentWeather(city).subscribe({
            next: (data) => {
                setWeatherData(data);
            },
            error: (error) => {
                console.error('Error fetching weather data:', error);
            },
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [city, setWeatherData]);

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
