class Weather
	include HTTParty
	# base_uri 'api.openweathermap.org/data/2.5/forecast/daily?'
	# default_params APPID: ENV['OWM_key']

	attr_reader :temp, :description , :icon

	def initialize
		sf_forecast
	end 

	def sf_forecast
		@response = self.class.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=sanfrancisco&mode=json&units=imperial&cnt=7&APPID=#{ENV['OWM_key']}")
		parse_weather_json
	end 

	def parse_weather_json
		p @temp = @response['list'][0]['temp']['day']
		p @description = @response['list'][0]['weather'][0]['description']
		p @icon = @response['list'][0]['weather'][0]['icon']
	end
end 