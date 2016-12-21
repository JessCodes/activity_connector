class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # def weather
  #   Http::get.configure(API_KEY)
  #   weather_data = Http::get({url: "weather.com/today?lat=5656&long=fgfdghdfhg"})
  #   # handle timeout of api
  #   # retry
  #   # handle other errors and return something anyway
  #   render :partial => 'weather'
  # end
end
