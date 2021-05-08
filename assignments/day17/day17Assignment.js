const { default: axios } = require("axios");

function getWorkhopDetailsAndSession(id) {
    
    let p1 = axios.get(`http://workshops-server.herokuapp.com/workshops/${id}`)
            .then(response =>{
                return response.data;
            }).catch( x => {
                console.log("error");
            });
    let p2 = axios.get(`http://workshops-server.herokuapp.com/workshops/${id}/sessions`)
            .then(response =>{
                return response.data;
            }).catch( x => {
                console.log("Erro");
            });

    Promise.all([p1,p2]).then( values => {
        console.log(values);
    });
}

getWorkhopDetailsAndSession(1);