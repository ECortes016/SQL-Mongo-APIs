var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  }
  );
})

.post('/setdata', async (req, res) => {
  console.log(req.body)
  res.end();
})

module.exports = router;
