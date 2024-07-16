const admin = require('firebase-admin');
const serviceAccount = require('D:\GitHub Repos\EBuddy Technical Test\backend-repo');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;