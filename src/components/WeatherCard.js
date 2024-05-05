import React from 'react';

const WeatherCard = ({ city, temperature, description }) => {
    return (
        <div className="weather-card">
            <h3>{city}</h3>
            <p>Temperature: {temperature}°C</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default WeatherCard;
