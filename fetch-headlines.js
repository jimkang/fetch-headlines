var fetchNewsHeadlines = require('./fetch-news-headlines');
var fetchTwitterHeadlines = require('./fetch-twitter-headlines');

function fetchHeadlines(opts, done) {
  var topic;
  var isCool;
  var source;
  var twit;

  if (opts) {
    topic = opts.topic;
    isCool = opts.isCool;
    source = opts.source;
    twit = opts.twit;
  }

  if (!topic) {
    topic = '';
  }

  if (source === 'twitter') {
    fetchTwitterHeadlines(topic, isCool, twit, done);
  }
  else {
    fetchNewsHeadlines(topic, isCool, done);
  }
}

module.exports = fetchHeadlines;
