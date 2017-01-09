class Weather
	include HTTParty
	# base_uri 'api.openweathermap.org/data/2.5/forecast/daily?'
	# default_params APPID: ENV['OWM_key']

	attr_reader :temp, :description , :icon, :dt, :response

	def initialize
		sf_forecast
	end 

	def sf_forecast
		@response = self.class.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=sanfrancisco&mode=json&units=imperial&cnt=7&APPID=#{ENV['OWM_key']}")
		parse_weather_json
	end 

	def parse_weather_json
		dt_arr = []
		@dt = response['list'].select { |day| dt_arr << day['dt'] }
		@dt = dt_arr
		# p @dt = @response['list'][0]['dt']

		temp_arr = []
		@temp = @response['list'].select { |temp| temp_arr << temp['temp']['day'] }
		@temp = temp_arr
		# @temp = @response['list'][0]['temp']['day']

		description_arr = []
		@description = @response['list'].select { |desc| description_arr << desc['weather'][0]['description'] }
		@description = description_arr
		# p @description = @response['list'][0]['weather'][0]['description']
		
		icon_arr = []
		@icon = @response['list'].select { |icon| icon_arr << icon['weather'][0]['icon'] }
		@icon = icon_arr
		# p @icon = @response['list'][0]['weather'][0]['icon']
	end

end 