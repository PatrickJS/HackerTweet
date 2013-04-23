# jQuery ->
#   if $('body.pages.index').length
jQuery ($) ->
    # $('time.timeago').timeago()
    $tweetStream.on 'click','a', clickNames
    $('#tweetUser').on 'blur', ->
      tweetUser = $(this).val()
      console.log tweetUser
      # streams.users[value]
    $('#new_message').on 'keyup keypress blur change paste input propertychange', ->
      key_value = 140 - +$(this).val().length # console.log($(this).val())
      if key_value < 0
        value = 'style="color:red">' + key_value + ''
        $('#postTweet').attr("disabled", "disabled")
      else
        value = '>' + key_value + ''
        $('#postTweet').removeAttr('disabled')
      $('h6').html('<span ' + value + ' characters remaining</span>')
      # console.log(value + ' characters remaining')
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
    # WIP highlight
    # $('#twitter div, #twitterTweet div').hover (->
    #   console.log('hi')
    # ), ->
    #   console.log('bye')
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
