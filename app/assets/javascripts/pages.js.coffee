# jQuery ->
#   return unless $('body.pages.index').length
toggle = false
$("#randomTweet").on "click", ->
  randomTweet()
$("#postTweet").on "click", ->
  postTweet()
$('#liveTweet').on "click", ->
  if toggle == true
    stopLive()
    toggle = false
    $(this).button('toggle')
  else
    liveTweet()
    toggle = true
    $(this).button('toggle')

