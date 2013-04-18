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
    $('#twitterTweet').on 'click', (e) ->
      e.preventDefault()
      e.stopPropagation()


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
