var admin = require("firebase-admin");

var serviceAccount = require("./med-vision.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
