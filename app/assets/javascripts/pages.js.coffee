# jQuery ->
#   if $('body.pages.index').length
jQuery ($) ->
    # $('time.timeago').timeago()
    $tweetStream.on 'click','a', clickNames
    $('#tweetUser').on 'blur', ->
      tweetUser = $(this).val()
      console.log tweetUser
      # streams.users.[value]
    $('#postTweet').on 'click', ->
      postTweet()
    $('#randomTweet').on 'click', ->
      generateRandomTweet()
      tweet = streams.home[index]
      createTweet = htmlTweet(tweet).hide()
      createTweet.prependTo($tweetStream).slideDown('fast')
      index++
    $('#liveTweet').on 'click', ->
      if $(this).hasClass 'btn-info'
        stopLiveTweets()
        $(this).button('toggle').removeClass('btn-info')
      else
        liveTweets()
        $(this).button('toggle').addClass('btn-info')
    # $('#languages .btn').on 'click', (e) ->
    #   console.log 'click', this, arguments
    #   element = $(e.currentTarget)
    #   e.preventDefault()
    #   $.ajax {
    #     url: element.attr('href')
    #     complete: (xhr, status) ->
    #       console.log 'complete', this, arguments
    #       $('#tweets').html xhr.responseText
    #   }
