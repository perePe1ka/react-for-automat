import React, { useState } from 'react';
import Weather from './Weather';

import List from './components/List';
import TextInput from './components/TextInput';
import Heading from './components/Heading';
import Button from './components/Button';
import CitySelector from './components/CitySelector'; // Добавляем импорт

import store from './redux/store';
import { Provider } from "react-redux";

function App() {
    const [selectedCity, setSelectedCity] = useState('Moscow');

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    return (
        <Provider store={store}>
            <div className="App">
                <CitySelector onCityChange={handleCityChange} /> {}
                <Weather /> {}
                <List items={['Item 1', 'Item 2', 'Item 3']} />
                <TextInput value="" onChange={() => {}} />
                <Heading level={3}>Click the Button</Heading>
                <Button onClick={() => alert('Button clicked!')}>Click me</Button>
            </div>
        </Provider>
    );
}

export default App;
