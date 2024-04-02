
'use strict'

const APIKey = 'API_KEY'; // Assign your API key to this variable. 

/**
 * Fetch data from server
 * @param {String} URL API url
 * @param {Function} callback callback
 */

export const fetchData = async (URL, callback) => {

    try {
        const data = await fetch(`${URL}&appid=${APIKey}`);
        const result = await data.json();
        const weatherCondition = await callback(result);
        return weatherCondition;
    } catch (error) {
        console.log(error);
    }

}

export const url = {
    currentWeather(city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    },
    forecast(city) {
        return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`;
    }
}