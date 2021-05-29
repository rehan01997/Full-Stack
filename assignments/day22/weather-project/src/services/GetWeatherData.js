import axios from 'axios';

export const fetchWeatherData = (location) => {
    var addr = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=d003290f97defdfbdcbeefd7491e1481';
    return axios.get( addr )
                .then( response => response.data )
};