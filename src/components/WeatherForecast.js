// WeatherForecast.js
import React from 'react';

const WeatherForecast = ({ forecastData }) => {
    return (
        <div>
            <h3>Прогноз погоды</h3>
            {forecastData && forecastData.map((forecast, index) => (
                <div key={index}>
                    {/* Display forecast information */}
                </div>
            ))}
        </div>
    );
};

export default WeatherForecast;
