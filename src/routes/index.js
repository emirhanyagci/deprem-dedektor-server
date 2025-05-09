const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("api calisiyor kardesim");

  res.json({ message: 'API is working' });
});

router.get('/earthquake', (req, res) => {
  require("../index.js").io.emit("earthquake", "Deprem buyuklugu 5.6");
  res.json({ message: "Emited" })
});

module.exports = router;
