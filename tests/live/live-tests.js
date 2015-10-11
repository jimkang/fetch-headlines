var test = require('tape');
var fetchHeadlines = require('../../fetch-headlines');
var isCool = require('iscool')();

test('Basic test', function basicTest(t) {
  var opts = {
    topic: 'computers',
    isCool: isCool
  };
  fetchHeadlines(opts, checkResults);

  function checkResults(error, headlines) {
    t.ok(!error, 'No error while getting headlines.');
    t.ok(headlines.length > 0, 'There is at least one headline.');
    headlines.forEach(checkHeadline);
    t.end();
  }

  function checkHeadline(headline) {
    t.equal(typeof headline, 'string', 'Headline is a string.');
    t.ok(headline.length > 0, 'Headline is not empty.');
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

  function checkHeadline(headline) {
    t.equal(typeof headline, 'string', 'Headline is a string.');
    t.ok(headline.length > 0, 'Headline is not empty.');
  }
});

