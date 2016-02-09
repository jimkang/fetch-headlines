var FeedParser = require('feedparser');
var request = require('request');
var titleIsCool = require('./title-is-cool');

function fetchNewsHeadlines(topic, isCool, done) {
  var items = [];
  var req = request('https://news.google.com/news?q=' + topic + '&output=rss');
  var feedparser = new FeedParser();

  req.on('error', passBackError);
  req.on('response', pipeResponseToFeedParser);

  feedparser.on('error', passBackError);
  feedparser.on('readable', collectItems);
  feedparser.on('end', passBackItems);

  function collectItems() {
    var stream = this;
    var item;

    while ((item = stream.read())) {
      if (item && item.title && titleIsCool(isCool, item.title)) {
        items.push(trimSiteFromTitle(item.title));
      }
    }
  }

  function pipeResponseToFeedParser(res) {
    var stream = this;
   
    if (res.statusCode !== 200) {
      done(new Error('Bad status code'));
    }
    else {
      stream.pipe(feedparser);
    }
  }

  function passBackError(error) {
    done(error);
  }

  function passBackItems() {
    done(null, items);
  }
}

function trimSiteFromTitle(title) {
  var parts = title.split(' - ');
  if (parts.length < 2) {
    return title;
  }
  else {
    return parts.slice(0, parts.length - 1).join(' - ');
  }
}

module.exports = fetchNewsHeadlines;
