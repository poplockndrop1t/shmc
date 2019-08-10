const fbAdmin = require('firebase-admin');

let serviceAccount = require('../secrets/shmc.json');

fbAdmin.initializeApp({
	credential: fbAdmin.credential.cert(serviceAccount),
	databaseURL: "https://shmc-9f46a.firebaseio.com"
});

let db = fbAdmin.firestore();

let docRef = db.collection('handicaps').doc('1');

let setAda = docRef.set({
  Handicap: 1,
  Black: 2,
  White: 2
});

module.exports = {
	db: db
};