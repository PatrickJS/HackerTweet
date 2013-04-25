class PagesController < ApplicationController

  def index

  end

  def pusher(message)
    Pusher['tweet'].trigger('new_message', {message: message})
  end


end
