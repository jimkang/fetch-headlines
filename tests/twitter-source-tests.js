var test = require('tape');
var callNextTick = require('call-next-tick');
var fetchHeadlines = require('../fetch-headlines');
var isCool = require('iscool')();

test('Twitter test', function twitterTest(t) {
  var mockTwitterResult = {
    statuses: [
      {
        text: "Smidgeo is best."
      },
      {
        text: "SmallCat Labs is the most best."
      }
    ]
  };
  
  var mockTwit = {
    get: function mockGet(path, params, done) {
      t.ok(params.q, 'Query provided to Twit.');
      callNextTick(done, null, mockTwitterResult, {});
    }
  };

  var opts = {
    topic: 'computers',
    isCool: isCool,
    source: 'twitter',
    twit: mockTwit
  };

  fetchHeadlines(opts, checkResults);

  function checkResults(error, headlines) {
    // console.log(headlines);
    t.ok(!error, 'No error while getting headlines.');
    t.equal(headlines.length, 2, 'There are two headlines.');
    headlines.forEach(checkHeadline);
    t.end();
  }

  function checkHeadline(item) {
    // console.log(item);
    t.equal(typeof item, 'string', 'Headline is a string.');
    t.ok(item.length > 0, 'Headline is not empty.');
  }
});
