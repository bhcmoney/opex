const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// TEST ZONE

// END TEST ZONE

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(require('./api'));

app.use('/api/healthcheck', (req, res) => {
  res.send({ status: 'OK' });
});

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist/index.html'))
);

app.listen(port, () => console.log(`Listening on port ${port}`));
