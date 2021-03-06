const expect = require('chai').expect;
const starWars = require('./index');

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string');
      }
    });

    it('should contain Luke Skywalker', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random name from starWars.all', () => {
      const randomName = starWars.random();
      expect(starWars.all).to.include(randomName);
    });

    it('should return an array of random names if passed a number', () => {
      const randomName = starWars.random(3);
      expect(randomName).to.have.length(3);
      randomName.forEach((item) => {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
