let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API_URL = 'https://rickandmortyapi.com/api/character/';

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = (evt) => {
        // Para saber si la conexión se completó, donde 4 es completado
        if (xhttp.readyState === 4) {
            // Verifico si la petición fue realizada
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error =  new Error(`Error: ${url}`);
                return callback(error);
            }
        }
    }
    xhttp.send();
}

// Callback hell
fetchData(API_URL, (err1, data1) => {
    if (err1) return console.error(err1);
    fetchData(API_URL + data1.results[0].id, (err2, data2) => {
        if (err2) return console.error(err2);
        fetchData(data2.origin.url, (err3, data3) => {
            if (err3) return console.error(err3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});