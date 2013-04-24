var $tweetStream = $('#twitter, #twitterTweet'),
    visitor = "me",
    tweetIndex = 0, // streams.home[tweetIndex];
    liveTweetID = 0,
    visitor = 'visitor';
    streams.twitter = {};

$.each(streams.users, function(user) {
  $.ajax({
    type: "GET",
    url: 'https://api.twitter.com/1/users/show.json?screen_name=' + user +'&size=bigger&include_entities=true',
    dataType: "jsonp",
    statusCode: {
      400: function() {
        console.log('error AJAX for ' + user);
      },
      200: function() {
      }
    },
    success: function(data){
      streams.twitter[user] = data;
      console.log('success AJAX for ' + user);
    },
    error: function(data){
      console.log('error AJAX for ' + user);
    }
  });
});
var createUserStream = function(user) {
  if (!streams.users.hasOwnProperty(user)) {
    streams.users[user] = [];
    visitor = user;
    window.users = Object.keys(streams.users);
    console.log(user + ' added to streams.users and users');
    $.ajax({
      type: "GET",
      url: 'https://api.twitter.com/1/users/show.json?screen_name=' + user +'&size=bigger&include_entities=true',
      dataType: "jsonp",
      statusCode: {
        400: function() {
          console.log('error AJAX for ' + user);
        },
        200: function() {
        }
      },
      success: function(data){
        streams.twitter[user] = data;
        console.log('success AJAX for ' + user);
      },
      error: function(data){
        console.log('error AJAX for ' + user);
      }
    });
  }
};
var humanTime = function(time) {
  return $.timeago(time);
};
var clickNames = function(e) {
  e.preventDefault();
  var getData = $(this).data('users');
  console.log(getData);
};
var htmlTweet = function(tweet) {
  var avatar_url = 'https://si0.twimg.com/profile_images/1694210876/ysoserious_bigger.jpg';
  if (streams.twitter[tweet.user]) {
    avatar_url = streams.twitter[tweet.user].profile_image_url_https;
  }
  $("time.timeago").timeago();
  var $tweet = $('<div class="newTweet"><a href="https://twitter.com/' + tweet.user + '/" target="_blank"><img class="pull-left avatar" src="' + avatar_url + '"></a><a class="user" data-users="' + tweet.user + '" href=""><small>@</small>' + tweet.user + '</a>:<br />' + tweet.message + ' <br /><small><time class="timeago" datetime="'+ tweet.created_at.toISOString() + '">' + humanTime(tweet.created_at) + '</time></small></div>');
  return $tweet;
};
var liveTweets = function(loopTime) {
  loopTime = loopTime || 10000,
  loopTime = ~~(Math.random() * loopTime);
  generateRandomTweet();
  var tweet = streams.home[tweetIndex],
      createTweet = htmlTweet(tweet).hide();
  createTweet.prependTo($tweetStream).animate({height:"toggle", opacity:"toggle"},'slow');
  tweetIndex++;
  if (liveTweetID === 0) {
    console.warn("Live Tweets: [on]/off");
  }
  liveTweetID = setTimeout(liveTweets, loopTime);
  console.log('Loop time: ' + loopTime + ' milliseconds');
};
var stopLiveTweets = function() {
  console.log("Stop liveTweet ID: " + liveTweetID);
  clearInterval(liveTweetID);
  liveTweetID = 0;
  console.warn("Live Tweets: on/[off]");
};
var clearTweets = function() {
  $tweetStream.animate({'height': '0px'}, 'fast',"linear", function() { $(this).html('').removeAttr('style'); });
  if (iphone.status == 'unlock') {
    $('#twitter').show();
  }
  tweetIndex = 0;
  streams.home = [];
  $.each(streams.users, function(user) {
    streams.users[user] = [];
  });
  console.warn("clear out all tweets");
};
