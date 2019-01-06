const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
  console.log(`I am listening on port #${port}`);
});