var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser());

var port     = process.env.PORT || 8080;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

var forum     = require('./app/rest/forum');
var bear      = require('./app/rest/bear');

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/forum', forum.index);

router.get('/bears', bear.index);
router.post('/bears', bear.saveBear);
router.get('/bears/:bear_id', bear.getBear);
router.put('/bears/:bear_id', bear.updateBear);
router.delete('/bears/:bear_id', bear.deleteBear);


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
