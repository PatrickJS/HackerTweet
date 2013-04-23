var $tweetStream = $('#twitter,#twitterTweet'),
    visitor = "me",
    index = 0, // streams.home[index];
    liveTweetID = [];
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

var humanTime = function(time) {
  return $.timeago(time);
};
var clickNames = function(e) {
  e.preventDefault();
  var getData = $(this).data('users');
  console.log(getData);
};
var htmlTweet = function(tweet) {
  var avatar_url = '';
  if (streams.twitter[tweet.user]) {
    avatar_url = streams.twitter[tweet.user].profile_image_url;
  } else {
    avatar_url = 'https://si0.twimg.com/profile_images/1694210876/ysoserious_bigger.jpg';
  }
  $("time.timeago").timeago();
  var $tweet = $('<div class="newTweet"><img class="pull-left inline avatar" src="' + avatar_url + '"><a data-users="' + tweet.user + '" href=""><small>@</small>' + tweet.user + '</a>:<br />' + tweet.message + ' <br /><small><time class="timeago" datetime="'+ tweet.created_at.toISOString() + '">' + humanTime(tweet.created_at) + '</time></small></div>');
  return $tweet;
};
var liveTweets = function(loopTime) {
  loopTime = loopTime || 5000,
  loopTime = ~~(Math.random() * loopTime);
  generateRandomTweet();
  var tweet = streams.home[index],
      createTweet = htmlTweet(tweet).hide();
  createTweet.prependTo($tweetStream).slideDown('slow');
  index++;
  if (liveTweetID.length === 0) {
    console.log("Live Tweets: [on]/off");
  }
  liveTweetID.push(setTimeout(liveTweets, loopTime));
  console.log('Loop time: ' + loopTime + ' milliseconds');
};
var stopLiveTweets = function() {
  console.log("Stop liveTweet IDs: " + liveTweetID);
  for (var i = 0; i < liveTweetID.length; i++) {
    clearInterval(liveTweetID[i]);
  }
  liveTweetID = [];
  console.log("Live Tweets: on/[off]");
};


// var postTweet = function() {
//   var hasMessage = $('#new_message').val(),
//       twitterUser = $('#tweetUser').val() || "me";
//   if (hasMessage) {
//     var $tweet = $('<div class="newTweet"></div>'),
//         tweetMessage = $('#new_message').val(),
//         twitterTime = new Date(),
//         tweetTime = $('<br /><small><time class="timeago" title="'+ twitterTime + '"> '+ $.timeago(twitterTime) +'</time></small>'),
//         tweetUser = $('<b data-user="' + twitterUser + '">@' + twitterUser + '</b>: <br />');

//     $tweet.text(tweetMessage);
//     $tweet.prependTo($('#twitter')).append(tweetTime).prepend(tweetUser);
//     $('#new_message').val(null);
//   }
// };


// Dylan's timeline
// so .timelineLink is the class of <a>
      //       $(".timelineLink").on('click', function(e){
      //     e.preventDefault();
      //     // .attr('data-user'); == .data('user')
      //     var user = $(this).data('user');
      //     $('#bodyOfTweets').empty();
      //     for(var key in streams.users){
      //       if(key === user){
      //         $.each(streams.users[key], function(key, value){
      //           $('#bodyOfTweets').append('<div class="actualTweets">' + timePosted + '<a class="timelineLink" data-user="' + value.user + '">@' + value.user + '</a>: ' + value.message + '</div>');
      //         });
      //       }
      //     }
      // });
