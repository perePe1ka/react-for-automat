// api.js

// Функция для получения текущей погоды по городу
export const getCurrentWeather = async (city) => {
    try {
        // Здесь должен быть ваш код для отправки запроса к API погоды
        // Например, с использованием fetch или axios
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dbc221482a18e9ea33762e4a36b208d`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching current weather data: ${error.message}`);
    }
};

// Функция для получения прогноза погоды по городу и периоду (daily или weekly)
export const getForecast = async (city, period) => {
    try {
        // Здесь должен быть ваш код для отправки запроса к API погоды
        // Например, с использованием fetch или axios
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=8dbc221482a18e9ea33762e4a36b208d`);
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        // Здесь может быть дополнительная обработка данных, чтобы вернуть только необходимую часть прогноза
        return data;
    } catch (error) {
        throw new Error(`Error fetching forecast data: ${error.message}`);
    }
};
