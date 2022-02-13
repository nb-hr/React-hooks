const express = require('express');
const path = require('path');
const app = express();
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const port = 3000;

app.use(express.static(DIST_DIR));
app.use(express.json());

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});