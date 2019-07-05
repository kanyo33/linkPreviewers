var express = require('express');
const router = express.Router();
let grabity = require("grabity");

router.post('/', sharedHandler);

async function sharedHandler(req, res, next) {
  
  const url1 = await req.body.value;
  console.log("What is happening",url1);
  const it = await grabity.grabIt(url1);
  console.log(it)
  res.json(it)
}

module.exports = router;