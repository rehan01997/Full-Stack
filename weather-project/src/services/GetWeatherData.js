import axios from 'axios';

export const fetchWeatherData = () => {
    return axios.get( `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=d003290f97defdfbdcbeefd7491e1481` )
                .then( response => response.data )
};