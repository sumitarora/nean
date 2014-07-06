var rest = require('restler');

exports.index = function(req, res){
  rest.get('http://google.com').on('complete', function(result) {
    if (result instanceof Error) {
      console.log('Error:', result.message);
      this.retry(5000); // try again after 5 sec
    } else {
      console.log(result);
    }
  });
  res.send('forum index');
};

exports.new = function(req, res){
  res.send('new forum');
};

exports.create = function(req, res){
  res.send('create forum');
};
