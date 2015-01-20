'use strict';

var wrapper = require('mongodb-perf-wrapper');

function createDogstatsClient() {
  var StatsD = require('node-dogstatsd').StatsD;
  var client = new StatsD('127.0.0.1', 8125);
  return client;
}

function install(mongodb, options) {
  if (!options) options = {};

  var statsClient = options.dogstatsClient || createDogstatsClient();
  var metric = options.metric || 'mongodb.client.query';

  wrapper.wrap(mongodb, function(collection, operation, timeMicroSeconds, query, responseErr) {
    var tags = ['coll:' + collection, 'op:' + operation];

    if (responseErr) {
      tags.push('error:1');
      statsClient.increment(metric + '.error', 1, tags);
    }

    statsClient.histogram(metric, timeMicroSeconds, tags);
  });

}

module.exports = {
  install: install
};

