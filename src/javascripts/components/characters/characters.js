import characterData from '../../helpers/data/characterData';

import util from '../../helpers/util';

let characters = [];

const domStringBuilder = () => {
  let domString = '';
  characters.forEach((char) => {
    domString += '<div>';
    domString += '<div class="img-holder">';
    domString += `<img src=${char.imageUrl} />`;
    domString += '</div>';
    domString += `<h2 class="char-name">${char.name}</h2>`;
    domString += '</div>';
  });
  util.printToDom('characters', domString);
};

const getData = () => {
  // If proper response, then return this
  characterData.getCharacterData()
    .then((response) => {
      // prints out the array
      const charactersArray = response.data.characters;
      characters = charactersArray;
      // Because data has returned successfully
      domStringBuilder();
    })
  // If wrong response, then return this
    .catch((error) => {
      console.error(error);
    });
};

export default { getData };
