var refreshIntervalID = [];

var humanTime = function(time) {
  return $.timeago(time);
};

var randomTweet = function() {
  var tweet = streams.home[(streams.home.length - 1)],
      twitterUser = tweet.user,
      twitterTime = tweet.created_at,
      $tweet = $('<div class="newTweet ' + twitterUser + '"></div>'),
      tweetUser = $('<b>@' + twitterUser + '</b>: <br />'),
      tweetTime = $('<br /><small><time class="timeago" title="'+ twitterTime + '"> ' + humanTime(twitterTime) + '</time></small>');
  $tweet.text(tweet.message);
  $tweet.prependTo($('#twitter')).append(tweetTime).prepend(tweetUser);
};

var liveTweet = function(startTime) {
  randomTweet();
  var startTime = startTime || 1000,
      loopTime = startTime * ~~(Math.random()*10); // Math.floor === ~~
  console.log("Live Tweets: [on]/off");
  refreshIntervalID.push(setInterval(function() {
    var loopTime = startTime * Math.random()*20;
    randomTweet();
    scheduleNextTweet();
    console.log("Loop time " + loopTime + " milliseconds");
  }, loopTime));
  var recentID = refreshIntervalID.length - 1;
  console.log("Start liveTweet ID:" + refreshIntervalID[recentID]);
  return refreshIntervalID;
};

var stopLive = function() {
  if (refreshIntervalID.length) {
    for (var i = 0; i < refreshIntervalID.length; i++) {
      console.log("Stop liveTweet ID:" + refreshIntervalID[i]);
      clearInterval(refreshIntervalID[i]);
    }
    refreshIntervalID = [];
    console.log("Live Tweets: on/[off]");
  }
};

var postTweet = function() {
  var hasMessage = $('#new_message').val(),
      twitterUser = $('#tweetUser').val() || "me";
  if (hasMessage) {
    var $tweet = $('<div class="newTweet"></div>'),
        tweetMessage = $('#new_message').val(),
        twitterTime = new Date(),
        tweetTime = $('<br /><small><time class="timeago" title="'+ twitterTime + '"> '+ $.timeago(twitterTime) +'</time></small>'),
        tweetUser = $('<b data-user="' + twitterUser + '">@' + twitterUser + '</b>: <br />');

    $tweet.text(tweetMessage);
    $tweet.prependTo($('#twitter')).append(tweetTime).prepend(tweetUser);
    $('#new_message').val(null);
  }
};


// Dylan's timeline
// so .timelineLink is the class of <a>
//             $(".timelineLink").on('click', function(e){
//           e.preventDefault();
//           // .attr('data-user'); == .data('user')
//           var user = $(this).data('user');
//           $('#bodyOfTweets').empty();
//           for(var key in streams.users){
//             if(key === user){
//               $.each(streams.users[key], function(key, value){
//                 $('#bodyOfTweets').append('<div class="actualTweets">' + timePosted + '<a class="timelineLink" data-user="' + value.user + '">@' + value.user + '</a>: ' + value.message + '</div>');
//               });
//             }
//           }
//       });
