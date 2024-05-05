import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setWeatherData, setSelectedCity } from './redux/actions';
import { getCurrentWeather, getForecast } from "./api";
import './components/WeatherStyles.css';


const Weather = ({ weatherData, setWeatherData, selectedCity, setSelectedCity }) => {
    const [forecastData, setForecastData] = useState(null);
    const [forecastPeriod, setForecastPeriod] = useState('daily'); // daily or weekly

    useEffect(() => {
        getCurrentWeather(selectedCity)
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching current weather data:', error));
    }, [selectedCity, setWeatherData]);

    const handleForecastPeriodChange = (period) => {
        setForecastPeriod(period);
        getForecast(selectedCity, period)
            .then(data => setForecastData(data))
            .catch(error => console.error('Error fetching forecast data:', error));
    };

    const kelvinToCelsius = (temp) => {
        return (temp - 273.15).toFixed(2);
    };

    return (
        <div>
            <h2>Погода на данный момент времени</h2>
            {weatherData && (
                <div>
                    <p>Город: {weatherData.name}</p>
                    <p>Температура: {kelvinToCelsius(weatherData.main.temp)}°C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                </div>
            )}

            <div>
                <h2>Выберите режим вывода</h2>
                <div>
                    <button class="buttonFind" onClick={() => handleForecastPeriodChange('daily')}>Погода на день</button>
                    <button class="buttonFind" onClick={() => handleForecastPeriodChange('weekly')}>Погода на неделю</button>
                </div>
                {forecastData && (
                    <div>
                        {/* Render forecast data based on forecastPeriod */}
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    weatherData: state.weatherData,
    selectedCity: state.selectedCity,
});

export default connect(mapStateToProps, { setWeatherData, setSelectedCity })(Weather);
