class IndexController < ApplicationController
  def index
  	@weather = Weather.new
  	@weather.temp
  	@weather.description
  	@weather.icon
  end
end