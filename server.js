const express = require('express');
const app = express();

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
