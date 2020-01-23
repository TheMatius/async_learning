let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url);
        xhttp.onreadystatechange = () => {
            // Para saber si la conexión se completó, donde 4 es completado
            if (xhttp.readyState === 4) {
                // Verifico si la petición fue realizada
                (xhttp.status === 200) 
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error(`Error: ${url}`))
            }
        }
        xhttp.send();
    });
}

module.exports = fetchData;