# README

## SF Activity Connector

**Activities:**

* Coffee("need a boost?")

* Hiking("need to get moving?")

* Dinner/Drinks("out on the town")

* Pamper("treat yo' self")

* Movies/Theatre("catch a show")

* Points of Interest("be a tourist")




**Setting up Bower:**

Require gem:

```
gem 'bower-rails', '~> 0.11.0'
```


In bower.json

``` 
{
  "name": "activity-connector",
  "dependencies": {
    "jquery": "latest",
    "materialize": "latest",
    "d3": "latest",
    "underscore": "latest"
  }
}
```


Create a .bowerrc file:

```
{
  "directory": "vendor/assets/components"
}
```


In command line: 'bower install'


In the class application of config/application.rb:

```
config.assets.paths << Rails.root.join("vendor", "assets", "components")
```


In app/assets/javascripts/application.js:

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require materialize
//
// Bower packages
//= require d3
//= require underscore
//
```


In app/assets/stylesheets/application.css:

```
*= require materialize
```




**Weather API:**

In .gitignore:

```
.env
```

Add a file called .env to project root.

In .env, add secret keys/value (e.g. ``` KEY=837hsf7393&3873sjyi83 ``` ) Do 'git status' in the command line to make sure that .env is not being tracked and added to the repo. The key/values need to be transfered separately and entered in as environment variables when deployed to Heroku.

In Gemfile, include ``` gem 'dotenv-rails', :require => 'dotenv/rails-now' ``` and under development include ``` gem 'dotenv-rails' ```.

Under Bundler in config/application.rb: 
```
Dotenv::Railtie.load
```

Create weather concern and include HTTParty. Create instance variables from parsed json data.

Instantiate a new instance of the weather class in the controller.

In the view, include the instance variables.
