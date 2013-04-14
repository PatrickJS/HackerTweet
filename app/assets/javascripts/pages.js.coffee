# jQuery ->
#   if $('body.pages.index').length
jQuery ($) ->
    $('time.timeago').timeago()

    $('#postTweet').on 'click', ->
      postTweet()
    $('#randomTweet').on 'click', ->
      randomTweet()
    $('#liveTweet').on 'click', ->
      if $(this).hasClass('btn-info')
        stopLive()
        $(this).button('toggle').removeClass('btn-info')
      else
        liveTweet()
        $(this).button('toggle').addClass('btn-info')

