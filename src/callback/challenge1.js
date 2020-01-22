let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
                callback(error);
            }
        }
    }
}