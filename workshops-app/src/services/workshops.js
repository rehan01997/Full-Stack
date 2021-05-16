import axios from 'axios';

export const fetchWorkshops = () => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops` )
                .then( response => response.data )
};