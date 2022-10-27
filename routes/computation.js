var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.cos() applied to ${x} is ${Math.cos(x)}`,
    value1: `math.asin() applied to ${x} is ${Math.asin(x)}` ,
    value2: `math.asinh() applied to ${x} is ${Math.asinh(x)}` });
  }
  else{

    for (let a in req.query) {

      res.render('computation', { value: `math.cos() applied to ${req.query[a]} is ${Math.cos(req.query[a])}`,
      value1: `math.asin() applied to ${req.query[a]} is ${Math.asin(req.query[a])}` ,
      value2: `math.asinh() applied to ${req.query[a]} is ${Math.asinh(req.query[a])}` })

    }
  }


});


module.exports = router;