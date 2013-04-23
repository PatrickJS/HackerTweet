jQuery ->
    iphone.init()
    $tweetStream.on 'click','a', clickNames
    $('#tweetUser').on 'blur', ->
      tweetUser = $(this).val() || "visitor"
      unless tweetUser == Object.keys(users)
        createUserStream(tweetUser)
    $('#new_message').on 'input', ->
      message = $(this).val()
      console.log message
      key_value = 140 - +message.length
      if key_value < 0
        value = 'style="color:red">' + key_value + ''
        $('#postTweet').attr("disabled", "disabled")
      else
        value = '>' + key_value + ''
        $('#postTweet').removeAttr('disabled')
      $('h6').html('<span ' + value + ' characters remaining</span>')
      # console.log(value + ' characters remaining')
    $('#postTweet').on 'click', ->
      user = $('#tweetUser').val() || "visitor"
      message = $('#new_message').val() || randomMessage()
      tweet = writeTweet(message,user)
      createTweet = htmlTweet(tweet).hide()
      createTweet.prependTo($tweetStream).fadeIn()
      index++
    $('#randomTweet').on 'click', ->
      generateRandomTweet()
      tweet = streams.home[index]
      createTweet = htmlTweet(tweet).hide()
      createTweet.prependTo($tweetStream).fadeIn('fast')
      index++
    $('#liveTweet').on 'click', ->
      if $(this).hasClass 'btn-info'
        stopLiveTweets()
        $(this).button('toggle').removeClass('btn-info')
      else
        liveTweets()
        $(this).button('toggle').addClass('btn-info')
    # $('body').append '<a href="http://hackreactor.com "><img style="position: absolute; bottom: 0; right: 0; border: 0;" src="http://i.imgur.com/x86kKmF.png alt="Built at Hack Reactor"></a>'
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
