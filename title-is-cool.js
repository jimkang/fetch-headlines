var _  = require('lodash');

function titleIsCool(isCool, title) {
  if (isCool) {
    var words = _.compact(title.split(/\W/));
    return words.every(isCool);
  }
  else {
    return true;
  }
}

module.exports = titleIsCool;
