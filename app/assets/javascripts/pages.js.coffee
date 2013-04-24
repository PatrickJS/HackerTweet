jQuery ->
    $.each streams.users, (user) ->
      getJSONP(user)
    iphone.init()
    $tweetStream.on 'click','a.user', clickNames
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
      createTweet.prependTo($tweetStream).animate({height:"toggle", opacity:"toggle"},'fast')
      $('#new_message').val('')
      tweetIndex++
    $('#randomTweet').on 'click', ->
      generateRandomTweet()
      tweet = streams.home[tweetIndex]
      createTweet = htmlTweet(tweet).hide()
      createTweet.prependTo($tweetStream).animate({height:"toggle", opacity:"toggle"},'fast')
      tweetIndex++
    $('#liveTweet').on 'click', ->
      if $(this).hasClass 'btn-info'
        stopLiveTweets()
        $(this).button('toggle').removeClass('btn-info')
      else
        liveTweets()
        $(this).button('toggle').addClass('btn-info')
    $('#clearTweets').on 'click', clearTweets
    $('body').append '<div id="banner"><a href="http://hackreactor.com/" target="_blank">Built at HackReactor</a></div></a>'
