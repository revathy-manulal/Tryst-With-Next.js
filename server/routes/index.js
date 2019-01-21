const express = require('express')
const router = express.Router();

router.get("/shows", (req, res) =>{
  res.end('We made it! again');
});

module.exports = router;