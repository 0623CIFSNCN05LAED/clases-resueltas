const express = require('express');
const router = express.Router();
const apiRouter = require('./api/index')

router.use('/api', apiRouter )

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});



module.exports = router;
