var Bear     = require('../models/bear');

exports.index = function(req, res) {
  Bear.find(function(err, bears) {
    if (err)
      res.send(err);

    res.json(bears);
  });
};

exports.saveBear = function(req, res) {
  var bear = new Bear();
  bear.name = req.body.name;

  bear.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Bear created!' });
  });
};

exports.getBear = function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {
    if (err)
      res.send(err);
    res.json(bear);
  });
};

exports.updateBear = function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {

    if (err)
      res.send(err);

    bear.name = req.body.name;
    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear updated!' });
    });

  });
};

exports.deleteBear = function(req, res) {
  Bear.remove({
    _id: req.params.bear_id
  }, function(err, bear) {
    if (err)
      res.send(err);

    res.json({ message: 'Successfully deleted' });
  });
};
