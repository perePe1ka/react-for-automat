import React, { useState } from 'react';

const CitySelector = ({ onCityChange }) => {
    const [selectedCity, setSelectedCity] = useState('Moscow');

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        onCityChange(event.target.value);
    };

    return (
        <select value={selectedCity} onChange={handleChange}>
            <option value="Moscow">Moscow</option>
            <option value="London">London</option>
            <option value="Berlin">Berlin</option>
        </select>
    );
};

export default CitySelector;
