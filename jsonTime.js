var strftime = require('strftime');

function jsonTime(time) {
  var date = new Date(time);
  var timezoneOffset = date.getTimezoneOffset() * 60;

  if(isNaN(date.getTime()))
    return {
      unix: null,
      natural: null
    };

  if(time.toString().length === 10 && typeof time === 'number') {
    time = (time + timezoneOffset) * 1000;
  }

  date = new Date(time);

  return {
    unix: Math.floor(date.getTime() / 1000) - timezoneOffset,
    natural: strftime('%B %d, %Y', date)
  };
}

exports.jsonTime = jsonTime;