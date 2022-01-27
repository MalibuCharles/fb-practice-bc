// import our restaurants
const { require } = require('yargs');
const restaurants = require('./restaurants.json');

console.log(restaurants[0].name)


// import a set of tools to talk to firebase and firestore
const {initializeAp, applicationDefault, cert} = require('firebase-admin/app');
const {getFirestore, Timestamp, Fieldvalue} = require('firebase-admi/firestore');


// connect to Firestore
const credentials = require('./restaurants.json');
/// create a collection called "restaurants"

// add each restaurants