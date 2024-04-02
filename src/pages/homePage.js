'use strict'

import { USER_INTERFACE_ID, SEARCH_BUTTON_ATTRIBUTE } from '../constants.js';
import { createSearchBarElement } from '../views/searchBar.js';
import { createWeatherContainerElement } from '../views/weatherContainer.js';
import { createWeatherTempElement } from '../views/weatherTemp.js';
import { createWeatherDetailsElement } from '../views/weatherDetails.js';
import { createWeatherForecastElement } from '../views/weatherForecast.js';
import { createHourlyForecastElement } from '../views/hourlyForecast.js';
import { createErrorMsgElement } from '../views/errorMessage.js';
import { fetchData, url } from "../api.js";

const userInterface = document.getElementById(USER_INTERFACE_ID);
const weatherContainer = createWeatherContainerElement();
const weatherForecast = createWeatherForecastElement();

export const initHomePage = () => {
    
    userInterface.innerHTML = '';
    
    const searchBarElement = createSearchBarElement();
    userInterface.append(searchBarElement, weatherContainer);

    document
    .querySelector(`[${SEARCH_BUTTON_ATTRIBUTE}]`)
    .addEventListener('click', startSearch);

};

const startSearch = () => {

    const city = document.querySelector('[data-search-field]').value;

    weatherContainer.innerHTML = '';

    if (city === '')
        return;
        
        /**
         * CURRENT WEATHER SECTION
         */
        fetchData(url.currentWeather(city), function (currentWeather) {

            if (currentWeather.cod === '404') {
                userInterface.style.height = 'auto';
                const errorMessage = createErrorMsgElement();
                errorMessage.style.display = 'block';
                errorMessage.classList.add('fadeIn');
                weatherContainer.appendChild(errorMessage);
                return;
            }
    
            const {
                weather,
                dt: dateUnix,
                main: { temp, temp_min, temp_max, humidity },
                wind: { speed },
                timezone,
            } = currentWeather;

            const [{ description, icon }] = weather;

            const weatherBox = createWeatherTempElement(icon, temp, description, dateUnix, timezone);
            const weatherDetails = createWeatherDetailsElement(humidity, speed, temp_max, temp_min);
            weatherContainer.append(weatherBox, weatherDetails, weatherForecast);
            
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            weatherForecast.classList.add('fadeIn');

            /**
             * HOURLY FORECAST SECTION
             */
            fetchData(url.forecast(city), function (forecast) {
                const {
                    list : forecastList,
                    city: { timezone }
                } = forecast;

                
                weatherForecast.querySelector("[data-hourly-forecast]").innerHTML = "";

                for (const [index, data] of forecastList.entries()) {
                    if (index > 3) break;

                    const {
                        dt: dateTimeUnix,
                        main: { temp },
                        weather,
                    } = data
    
                    const [{ icon }] = weather
                    
                    const hourlyForecast = createHourlyForecastElement(dateTimeUnix, timezone, icon, temp);
                    weatherForecast.querySelector("[data-hourly-forecast]").append(hourlyForecast);
                }
            });
        });        

};