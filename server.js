const express = require('express');
const app = express();

class Util {
  static getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  static getRandomLetter() {
    return String.fromCharCode(this.getRandomBetween(97, 122));
  }

  static getRandomString(length) {
    let getLetter;
    let string = '';
    // loop {{length}} number of times and add either a number or letter to the return string
    for (let i = 0; i < length; i++) {
      getLetter = Boolean(this.getRandomBetween(0, 1));
      if (getLetter) {
        string += this.getRandomLetter();
      } else {
        string += this.getRandomBetween(0, 9);
      }
    }
    return string;
  }
}

console.log(Util.getRandomString(7))

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Url shortener microservice')
})

app.get('/:originalURL', (request, response) => {
  const originalURL = request.params.originalURL;
  if (originalURL) {
    console.log(originalURL);
  };

  response.send({ originalURL });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
