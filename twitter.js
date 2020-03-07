var Twit = require('twit');

var config = require('./config')

var T = new Twit(config);

setInterval(tweetIt, 1000 * 60)

function tweetIt() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var mo= date.getMonth();
  var da = date.getDate();
  if ( h == /*SOME HOUR*/ && m == /*SOME MINUTE*/) {
    var r = Math.floor(Math.random()*100);
    if ( mo == /*SOME MONTH*/ && da == /*SOME DATE*/ ) {
      var tweet = {
        status: 'SOME TWEET'
      }
    } else {
      var tweet = {
        status: 'SOME TWEET'
      }
    }
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err,data,response) {
      if (err) {
        console.log("Oops");
      } else {
        console.log("Works");
      }
    //console.log(data)
    }
  }
}
