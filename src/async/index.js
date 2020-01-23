const fetchData = require('../utils/fetchData');
const API_URL = 'https://rickandmortyapi.com/api/character/';

const getData = async () => {
    try {
        const characters = await fetchData(API_URL);
        const character = await fetchData(`${API_URL}${characters.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(characters.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (err) {
        console.error(err);
    }
}

console.log('Before');
getData();
console.log('After');