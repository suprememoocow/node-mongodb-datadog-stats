var mongodb = require('mongodb');
var mongoDogStats = require('../lib/index');
var MongoClient = require('mongodb').MongoClient;

describe('mongo-datadog-stats', function() {
  var db;

  before(function(done) {
    db = null;

    mongoDogStats.install(mongodb);

    MongoClient.connect('mongodb://localhost:27017/test', function(err, returnedDb) {
      if (err) return done(err);
      db = returnedDb;
      done();
    });

  });


  it('should generate stats', function(done) {

    db.collection('t').insert({ a: 1, b: 2}, function(err) {
      if (err) return done(err);

      db.collection('t').findOne({}, function(err) {
        if(err) return done(err);

        // Give the stats a bit of time to send
        setTimeout(done, 20);
      });
    });
  });



});
