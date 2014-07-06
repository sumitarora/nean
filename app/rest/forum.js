var rest = require('restler');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');
var _ = require('underscore')._;

exports.index = function(req, res){
  rest.get('https://api.github.com/repos/sumitarora/crime-alert/stats/contributors').on('complete', function(result) {
    if (result instanceof Error) {
      //console.log('Error:', result.message);
      this.retry(5000);
    } else {
      parseAndSaveStats(result);
    }
  });

  // var node = db.createNode({hello: 'world'});     // instantaneous, but...
  // node.save(function (err, node) {    // ...this is what actually persists.
  //     if (err) {
  //         console.err('Error saving new node to database:', err);
  //     } else {
  //         console.log('Node saved to database with id:', node.id);
  //     }
  // });

  res.send('forum index');
};

exports.new = function(req, res){
  res.send('new forum');
};

exports.create = function(req, res){
  res.send('create forum');
};


function parseAndSaveStats(result) {
  _.each(result, function(a){
    console.log('a');
  });
}
