
'use strict'

/**
 * Create the weather details
 * @returns {Element}
 */
export const createWeatherDetailsElement = (humidity, speed, temp_max, temp_min) => {
    const element = document.createElement('div');
    element.classList.add("weather-details")
    element.setAttribute("data-weather-details", "")
    element.innerHTML = String.raw `
        <div class="humidity">
        <i class="fa-solid fa-water"></i>
        <div class="text">
            <span>${humidity}%</span>
            <p>Humidity</p>
        </div>
        </div>
        <div class="wind">
            <i class="fa-solid fa-wind"></i>
            <div class="text">
                <span>${speed}Km/h</span>
                <p>Wind Speed</p>
            </div>
        </div>
        <div class="highLowTemp">
            <div class="text">
                <span class="high">
                    <i class="fa-solid fa-arrow-up"></i>
                    <p>H: ${temp_max}</p>
                </span>
                <span class="low">
                    <i class="fa-solid fa-arrow-down"></i>
                    <p>L: ${temp_min}</p>
                </span>
            </div>
        </div>
    `;

    return element;
};