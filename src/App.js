import React from 'react';
import Weather from './Weather';
import WeatherForm from './components/WeatherForm'; // Один раз
import WeatherForecast from './components/WeatherForecast';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <WeatherForm /> {/* Используем компонент WeatherForm здесь */}
                <Weather />
                <WeatherForecast />
            </div>
        </Provider>
    );
}

export default App;
