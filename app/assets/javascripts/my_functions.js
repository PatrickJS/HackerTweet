var $tweetStream = $('#twitter, #twitterTweet'),
    visitor = "me",
    tweetIndex = 0, // streams.home[tweetIndex];
    liveTweetID = 0,
    visitor = 'visitor',
    pusher = new Pusher('4e695c8a13da46530407'), // uses your API KEY
    channel = pusher.subscribe('tweet');
    streams.twitter = {};
Pusher.log = function(message) {
  if (window.console && window.console.log) {
    window.console.log(message);
  }
};
var getJSONP = function(user) {
  return $.get('https://api.twitter.com/1/users/show.json?screen_name=' + user +'&size=bigger&include_entities=true',
      function(data) {
        streams.twitter[user] = data;
        console.log('success AJAX for ' + user);
      }, "jsonp" );
};
var createUserStream = function(user) {
  if (!streams.users.hasOwnProperty(user)) {
    streams.users[user] = [];
    window.users = Object.keys(streams.users);
    console.log(user + ' added to streams.users and users');
    getJSONP(user);
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
    avatar_url = (streams.twitter[tweet.user].profile_image_url_https).replace('_normal', '_bigger');
  }
  $("time.timeago").timeago();
  var $tweet = $(
    '<div class="newTweet">' +
      '<a href="https://twitter.com/' + tweet.user + '/" target="_blank">' +
      '<img class="pull-left avatar" src="' + avatar_url + '"></a>' +
      '<a class="user" datausers="' + tweet.user + '" href="">' +
      '<small>@</small>' + tweet.user + '</a>:' +
      '<br />' + tweet.message + ' <br />' +
      '<small><time class="timeago" datetime="'+ tweet.created_at.toISOString() + '">' + humanTime(tweet.created_at) + '</time></small>' +
    '</div>'
    );
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
  if (liveTweetID === 0) { console.warn("Live Tweets: [on]/off"); }
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
  var speed = (tweetIndex > 30) ? 'slow' : 'fast';
  $tweetStream.animate({'height': '0px'}, speed, function() {
    console.log(speed);
    $(this).html('').removeAttr('style');
    if (iphone.status == 'unlock') {
      $('#twitter').show();
    }
  });
  tweetIndex = 0;
  streams.home = [];
  $.each(streams.users, function(user) {
    streams.users[user] = [];
  });
  console.warn("clear out all tweets");
};
