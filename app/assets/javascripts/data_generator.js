/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {}; //
streams.home = []; // home page storage array
streams.users = {}; // storage of users
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);  // storage of user names

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user; // get user
  streams.users[username].push(newTweet); // user stream
  streams.home.push(newTweet); // home page stream
};

// utility function for random array index
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]; // returns random array index
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
}; // outputs a string message

// generate random tweets on a random schedule
var generateRandomTweet = function(user){
  var tweet = {}; // creates {}
  tweet.user = user || randomElement(users); // users?? // is window.users // add ability to add user
  tweet.message = randomMessage(); // saves random string in {}
  tweet.created_at = new Date(); // saves current date in {}
  addTweet(tweet); // sends {} to addTweet to be stored in streams
};

// random generator 10 times
// for(var i = 0; i < 10; i++){
//   generateRandomTweet();
// }

var scheduleNextTweet = function(){
  generateRandomTweet(); // randomly being called \/
  setTimeout(scheduleNextTweet, Math.random() * 1500); // randomly call itself
};
// scheduleNextTweet(); // invoking function

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){ //  throw error
    throw new Error('set the global visitor property!');
  } // throw error
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};
