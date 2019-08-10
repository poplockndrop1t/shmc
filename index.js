const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');

const app = express();
const port = process.env.PORT || 1337;

db.db.collection('handicaps').get()
	.then((snapshot) => {
	  snapshot.forEach((doc) => {
	    console.log(doc.id, '=>', doc.data());
	  });
	})
	.catch((err) => {
	  console.log('Error getting documents', err);
	});


app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
  console.log(`I am listening on port #${port}`);
});