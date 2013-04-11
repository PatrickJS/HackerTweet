var refreshIntervalID = []

var randomTweet = function() {
  var $tweet = $('<div class="newTweet"></div>');
  var tweet = streams.home[(streams.home.length - 1)];
  var twitterUser = tweet.user
  var twitterTime = tweet.created_at
  $tweet.text('@' + twitterUser + ': ' + tweet.message);
  $tweet.prependTo($('#twitter'));
};

var liveTweet = function(startTime) {
  randomTweet();
  var startTime = loopTime || 1000
  var loopTime = startTime * Math.round(Math.random()*10)
  console.log("Live Tweets: [on]/off");
  refreshIntervalID.push(setInterval(function() {
    var loopTime = startTime * Math.random()*20
    randomTweet();
    scheduleNextTweet()
    console.log("Loop time " + loopTime + " milliseconds");
  }, loopTime))
  var recentID = refreshIntervalID.length - 1;
  console.log("Start liveTweet ID:" + refreshIntervalID[recentID]);
  return refreshIntervalID;
};

var stopLive = function() {
  if (refreshIntervalID.length) {
    for (var i = 0; i < refreshIntervalID.length; i++) {
      console.log("Stop liveTweet ID:" + refreshIntervalID[i]);
      clearInterval(refreshIntervalID[i])
    };
    refreshIntervalID = []
    console.log("Live Tweets: on/[off]");
  }
}

var postTweet = function() {
  var hasMessage = $('#new_message').val()
  var tweetUser = $('#tweetUser').val() || "me"
  if (hasMessage) {
    var $tweet = $('<div class="newTweet"></div>');
    var tweetMessage = $('#new_message').val();
    $tweet.text('@' + tweetUser + ': ' + tweetMessage);
    $tweet.prependTo($('#twitter'));
    $('#new_message').val(null)
  }
};
