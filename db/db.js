const fbAdmin = require('firebase-admin');
const handicapData = require('./handicaps');
let serviceAccount = require('../secrets/shmc.json');

fbAdmin.initializeApp({
	credential: fbAdmin.credential.cert(serviceAccount),
	databaseURL: "https://shmc-9f46a.firebaseio.com"
});

let db = fbAdmin.firestore();

let docRef = db.collection('handicaps').doc(handicapData['1']['id']).set(handicapData['1']);

module.exports = {
	db: db
};