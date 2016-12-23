class IndexController < ApplicationController
  def index
  	@weather = Weather.new
  end
end