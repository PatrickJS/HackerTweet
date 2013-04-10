class PagesController < ApplicationController

  def index

  end

  def pusher(message)
    Pusher['activity'].trigger('message', {message: message})
  end


end
