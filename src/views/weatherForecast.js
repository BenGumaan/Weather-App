
'use strict'

/**
 * Create the weather forcast
 * @returns {Element}
 */
export const createWeatherForecastElement = () => {
    const element = document.createElement('div');
    element.classList.add("weather-forecast")
    element.setAttribute("data-weather-forecast", "")
    element.innerHTML = String.raw `
        <p class="title">Forecast For 4 Hours</p>    
        <div class="hourly-forecast" data-hourly-forecast></div>
    `;

    return element;
};