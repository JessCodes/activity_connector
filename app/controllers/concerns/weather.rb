class Weather
	include HTTParty

	base_uri 'api.openweathermap.org/data/2.5/forecast/daily?'
	default_params APPID: OWM_key

	def sf_forecast
		self.class.get("q=sanfrancisco&mode=json&units=imperial&cnt=7") 
	end 
end 