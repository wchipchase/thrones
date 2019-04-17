import axios from 'axios';


// call to get the characters.json
const getCharacterData = () => axios.get('./db/characters.json');


export default { getCharacterData };
