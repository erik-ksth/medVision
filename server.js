const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

var admin = require("firebase-admin");

var serviceAccount = require("./med-vision.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)

});
