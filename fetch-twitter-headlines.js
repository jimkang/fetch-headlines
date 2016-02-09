var titleIsCool = require('./title-is-cool');
var _  = require('lodash');

function fetchTwitterHeadlines(topic, isCool, twit, done) {
  var twitOpts = {
    q: topic
  };
  var preloadedTitleIsCool = _.curry(titleIsCool)(isCool);

  twit.get('search/tweets', twitOpts, collectItems)

  function collectItems(error, searchResults, response) {
    debugger;
    if (error) {
      done(error);
    }
    else {
      debugger;
      var items = _.pluck(searchResults.statuses, 'text')
        .filter(preloadedTitleIsCool);
      done(error, items);
    }
  }
}

module.exports = fetchTwitterHeadlines;
