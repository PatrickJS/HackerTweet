# jQuery ->
#   return unless $('body.pages.index').length
    $("#randomTweet").on "click", ->
      randomTweet()
    $("#postTweet").on "click", ->
      postTweet()
    $("#liveTweet").on "click", ->
      liveTweet()
      $(this).button "toggle"


