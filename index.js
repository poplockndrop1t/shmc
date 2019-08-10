const express = require('express');
const bodyParser = require('body-parser');
const fbAdmin = require('firebase-admin');

let serviceAccount = require('some path to be added');

const app = express();
const port = process.env.PORT || 1337;

fbAdmin.initializeApp({
	credential: admin.credential.cert(serviceAccount);
});

let db = admin.firestore();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
  console.log(`I am listening on port #${port}`);
});