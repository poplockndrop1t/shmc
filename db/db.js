const fbAdmin = require('firebase-admin');
const handicapData = require('./handicaps');
let serviceAccount = require('../secrets/shmc.json');

fbAdmin.initializeApp({
	credential: fbAdmin.credential.cert(serviceAccount),
	databaseURL: "https://shmc-9f46a.firebaseio.com"
});

let db = fbAdmin.firestore();

let docRef = db.collection('handicaps')
	.doc(handicapData['handicaps']['name'])
	.set(handicapData['handicaps'])

module.exports = {
	db: db
};