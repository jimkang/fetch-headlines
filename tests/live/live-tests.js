var test = require('tape');
var fetchHeadlines = require('../../fetch-headlines');
var isCool = require('iscool')();
var config = require('../../config.js');
var Twit = require('twit');

test('Basic test', function basicTest(t) {
  var opts = {
    topic: 'computers',
    isCool: isCool
  };
  fetchHeadlines(opts, checkResults);

  function checkResults(error, headlines) {
    // console.log(headlines);
    t.ok(!error, 'No error while getting headlines.');
    t.ok(headlines.length > 0, 'There is at least one headline.');
    headlines.forEach(checkHeadline);
    t.end();
  }

  function checkHeadline(item) {
    t.equal(typeof item, 'string', 'Headline is a string.');
    t.ok(item.length > 0, 'Headline is not empty.');
  }
});

test('No-topic test', function noTopicTest(t) {
  fetchHeadlines(null, checkResults);

  function checkResults(error, headlines) {
    t.ok(!error, 'No error while getting headlines.');
    t.ok(headlines.length > 0, 'There is at least one headline.');
    headlines.forEach(checkHeadline);
    t.end();
  }

  function checkHeadline(item) {
    t.equal(typeof item, 'string', 'Headline is a string.');
    t.ok(item.length > 0, 'Headline is not empty.');
  }
});

test('Twitter test', function twitterTest(t) {
  var twit = new Twit(config.twitter);
  var opts = {
    topic: 'computers',
    isCool: isCool,
    source: 'twitter',
    twit: twit
  };
  fetchHeadlines(opts, checkResults);

  function checkResults(error, headlines) {
    // console.log(headlines);
    t.ok(!error, 'No error while getting headlines.');
    t.ok(headlines.length > 0, 'There is at least one headline.');
    headlines.forEach(checkHeadline);
    t.end();
  }

  function checkHeadline(item) {
    t.equal(typeof item, 'string', 'Headline is a string.');
    t.ok(item.length > 0, 'Headline is not empty.');
  }
});
