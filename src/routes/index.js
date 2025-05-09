const express = require('express');
const router = express.Router();
const io = require("../index").io
router.get('/', (req, res) => {
  console.log("api calisiyor kardesim");

  res.json({ message: 'API is working' });
});

router.get('/earthquake', (req, res) => {
  io.emit("earthquake", "Deprem buyuklugu 5.6")
});

module.exports = router;
