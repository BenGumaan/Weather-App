'use strict'

export const weekDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

/**
 * 
 * @param {Number} dateUnix Unix date in seconds
 * @param {Number} timezone Timezone shift from UTC in seconds
 * @returns {String} Date String. format: "Monday 1, Apr" 
 */
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000); // JavaScript stores Dates as milliseconds since January 01, 1970. So, we multiply by 1000 to get the current date.
    const weekDayName = weekDayNames[date.getUTCDay()]; // getUTCDay() returns the day of the week in the specified date according to universal time
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {Number} timeUnix Unix date in seconds
 * @param {Number} timezone Timezone shift from UTC in seconds
 * @returns {String} Time String. format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {Number} timeUnix Unix date in seconds
 * @param {Number} timezone Timezone shift from UTC in seconds
 * @returns {String} Time String. format: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}