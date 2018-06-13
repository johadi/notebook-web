// This file is used to server our static html file.
const express = require('express');
const path = require('path');
const compression = require('compression');
const favicon = require('serve-favicon');
const http = require('http');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('dist'));
// uncomment for favicon
// app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) console.error(err);

  console.info('app running on port', port);
});
