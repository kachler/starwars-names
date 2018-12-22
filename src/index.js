const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random
};


function random(number) {
  if (number === undefined) {
    return getRandomItem();
  // eslint-disable-next-line no-else-return
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i += 1) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
