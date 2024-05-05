// WeatherForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity } from '../redux/actions';
import './WeatherFormCss.css';


const WeatherForm = ({ setSelectedCity }) => {
    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedCity(city);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={handleCityChange} placeholder="Напишите город" />
            <button type="submit" class="buttonFind">Найти</button>
        </form>
    );
};

export default connect(null, { setSelectedCity })(WeatherForm);