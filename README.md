# README

## SF Activity Connector

**Activities:**

* Hiking("need to get moving?")

* Pamper("treat yo' self")

* Coffee("want a pick me up?")

* Movies/Theatre("catch a show")

* Dinner/Drinks("out on the town")

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
//= require d3/d3
//= require underscore/underscore
//
```



