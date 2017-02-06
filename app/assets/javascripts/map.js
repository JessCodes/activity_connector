$(document).ready(function() {
  mapFunction();
  // $('#coffee-map').hide();
  // $('#hike-map').hide();
  // $('#dinner-map').hide();
  $('#pamper-map').hide();
  // $('#movie-map').hide();
  $('#tourist-map').hide();
  // $('#dinner-button').click(function(){
  //   $('#dinner-map').toggle();
  // });
});


var mapFunction = function() {

  /////////////////////////////////////////////
  //                coffee map                 //
  /////////////////////////////////////////////

  var cs1 = {lat: 37.776175, lng: -122.423220}; // Blue Bottle
  var cs2 = {lat: 37.798641, lng: -122.407344}; // Cafe Trieste
  var cs3 = {lat: 37.763301, lng: -122.410755}; // Coffee Bar
  var cs4 = {lat: 37.767019, lng: -122.421781}; // Fourbarrel Coffee
  var cs5 = {lat: 37.752345, lng: -122.414309}; // Philz Coffee
  var cs6 = {lat: 37.756439, lng: -122.421383}; // Ritual Coffee Roasters
  var cs7 = {lat: 37.776900, lng: -122.408637}; // Sightglass Coffee
  var cs8 = {lat: 37.763162, lng: -122.465974}; // Snowbird Coffee
  var cs9 = {lat: 37.796751, lng: -122.436629}; // Wrecking Ball Coffee Rosters
  var cs10 = {lat: 37.790770, lng: -122.402015}; // Workshop Cafe
  var map = new google.maps.Map(document.getElementById('coffee-map'), {
    zoom: 13,
    center: cs1
  });

  // Coffee Marker 1 (Blue Bottle)
  var coffeeString1 = '<h5>Blue Bottle</h5>'+
            '<p>315 Linden St, San Francisco, CA 94102</p>'+
            '(510) 653-3394'+
            '<p><a href="https://bluebottlecoffee.com/cafes/kiosk" " target="_blank">Blue Bottle Coffee</a></p>';
  var csWindow1 = new google.maps.InfoWindow({
    content: coffeeString1
  });
  var csMarker1 = new google.maps.Marker({
    position: cs1,
    map: map
  });
  csMarker1.addListener('click', function(){
    csWindow1.open(map, csMarker1);
  });

  // Coffee Marker 2 (Caffe Trieste)
  var coffeeString2 = '<h5>Caffe Trieste</h5>'+
            '<p>601 Vallejo St, San Francisco, CA 94133</p>'+
            '(415) 982-2605'+
            '<p><a href="http://coffee.caffetrieste.com/nbeach" " target="_blank">Caffe Trieste</a></p>';
  var csWindow2 = new google.maps.InfoWindow({
    content: coffeeString2
  });
  var csMarker2 = new google.maps.Marker({
    position: cs2,
    map: map
  });
  csMarker2.addListener('click', function(){
    csWindow2.open(map, csMarker2);
  });

  // Coffee Marker 3 (Coffee Bar)
  var coffeeString3 = '<h5>Coffee Bar</h5>'+
            '<p>1890 Bryant St, San Francisco, CA 94110</p>'+
            '(415) 551-8100'+
            '<p><a href="http://www.coffeebarsf.com/bryant-st" " target="_blank">Coffee Bar</a></p>';
  var csWindow3 = new google.maps.InfoWindow({
    content: coffeeString3
  });
  var csMarker3 = new google.maps.Marker({
    position: cs3,
    map: map
  });
  csMarker3.addListener('click', function(){
    csWindow3.open(map, csMarker3);
  });

  // Coffee Marker 4 (Fourbarrel Coffee)
  var coffeeString4 = '<h5>Fourbarrel Coffee</h5>'+
            '<p>375 Valencia St, San Francisco, CA 94103</p>'+
            '(415) 896-4289'+
            '<p><a href="http://www.fourbarrelcoffee.com/pages/about-us " " target="_blank">Fourbarrel Coffee</a></p>';
  var csWindow4 = new google.maps.InfoWindow({
    content: coffeeString4
  });
  var csMarker4 = new google.maps.Marker({
    position: cs4,
    map: map
  });
  csMarker4.addListener('click', function(){
    csWindow4.open(map, csMarker4);
  });

  // Coffee Marker 5 (Philz Coffee)
  var coffeeString5 = '<h5>Philz Coffee</h5>'+
            '<p>3101 24th St, San Francisco, CA 94110</p>'+
            '(415) 875-9370'+
            '<p><a href="http://www.philzcoffee.com/locations-sf" " target="_blank">Philz Coffee</a></p>';
  var csWindow5 = new google.maps.InfoWindow({
    content: coffeeString5
  });
  var csMarker5 = new google.maps.Marker({
    position: cs5,
    map: map
  });
  csMarker5.addListener('click', function(){
    csWindow5.open(map, csMarker5);
  });

  // Coffee Marker 6 (Ritual Coffee Roasters)
  var coffeeString6 = '<h5>Ritual Coffee Roasters</h5>'+
            '<p>1026 Valencia St, San Francisco, CA 94110</p>'+
            '(415) 641-1011'+
            '<p><a href="http://www.ritualroasters.com/" " target="_blank">Ritual Coffee Roasters</a></p>';
  var csWindow6 = new google.maps.InfoWindow({
    content: coffeeString6
  });
  var csMarker6 = new google.maps.Marker({
    position: cs6,
    map: map
  });
  csMarker6.addListener('click', function(){
    csWindow6.open(map, csMarker6);
  });

  // Coffee Marker 7 (Sightglass Coffee)
  var coffeeString7 = '<h5>Sightglass Coffee</h5>'+
            '<p>270 7th Street San Francisco, CA 94103</p>'+
            '(415) 861-1313'+
            '<p><a href="https://sightglasscoffee.com/visit/soma" " target="_blank">Sightglass Coffee</a></p>';
  var csWindow7 = new google.maps.InfoWindow({
    content: coffeeString7
  });
  var csMarker7 = new google.maps.Marker({
    position: cs7,
    map: map
  });
  csMarker7.addListener('click', function(){
    csWindow7.open(map, csMarker7);
  });

  // Coffee Marker 8 (Snowbird Coffee)
  var coffeeString8 = '<h5>Snowbird Coffee</h5>'+
            '<p>1352 9th Ave A, San Francisco, CA 94122</p>'+
            '(415) 573-7740'+
            '<p><a href="http://snowbirdcoffee.com/about.html" " target="_blank">Snowbird Coffee</a></p>';
  var csWindow8 = new google.maps.InfoWindow({
    content: coffeeString8
  });
  var csMarker8 = new google.maps.Marker({
    position: cs8,
    map: map
  });
  csMarker8.addListener('click', function(){
    csWindow8.open(map, csMarker8);
  });

  // Coffee Marker 9 (Wrecking Ball)
  var coffeeString9 = '<h5>Wrecking Ball</h5>'+
            '<p>2271 Union Street, San Francisco, CA 94123</p>'+
            '(415) 638-9227'+
            '<p><a href="http://www.wreckingballcoffee.com/pages/our-locations" " target="_blank">Wrecking Ball</a></p>';
  var csWindow9 = new google.maps.InfoWindow({
    content: coffeeString9
  });
  var csMarker9 = new google.maps.Marker({
    position: cs9,
    map: map
  });
  csMarker9.addListener('click', function(){
    csWindow9.open(map, csMarker9);
  });

  // Coffee Marker 10 (Workshop Cafe)
  var coffeeString10 = '<h5>Workshop Cafe</h5>'+
            '<p>180 Montgomery St #100, San Francisco, CA 94104</p>'+
            '(415) 322-1048'+
            '<p><a href="http://www.workshopcafe.com/" " target="_blank">Workshop Cafe</a></p>';
  var csWindow10 = new google.maps.InfoWindow({
    content: coffeeString10
  });
  var csMarker10 = new google.maps.Marker({
    position: cs10,
    map: map
  });
  csMarker10.addListener('click', function(){
    csWindow10.open(map, csMarker10);
  });

  ///////////////////////////////////////////////
  //                 hike map                  //
  ///////////////////////////////////////////////

  var hike1 = {lat: 37.785804, lng: -122.503377}; // Land's End
  var hike2 = {lat: 37.759220, lng: -122.457230}; // Mount Sutro
  var hike3 = {lat: 37.768641, lng: -122.475318}; // Strawberry Hill
  var hike4 = {lat: 37.741559, lng: -122.443185}; // Glen Canyon Park
  var hike5 = {lat: 37.800008, lng: -122.479518}; // Presidio
  var hike6 = {lat: 37.765312, lng: -122.438585}; // Corona Heights
  var hike7 = {lat: 37.739265, lng: -122.454509}; // Mt. Davidson
  var hike8 = {lat: 37.768405, lng: -122.441415}; // Buena Vista Park
  var hike9 = {lat: 37.756408, lng: -122.471740}; // Grandview Park
  var hike10 = {lat: 37.746320, lng: -122.468838}; // Hawk Hill Park
  var hikeMap = new google.maps.Map(document.getElementById('hike-map'), {
    zoom: 13,
    center: hike8
  });

  // Hike Pin 1
  var hikeString1 = '<h5>Land\'s End</h5>'+
            '<p><a href="https://www.nps.gov/goga/planyourvisit/landsend.htm" " target="_blank">Land\'s End Trails</a></p>';
  var hikewindow1 = new google.maps.InfoWindow({
    content: hikeString1
  })
  var hikeMarker1 = new google.maps.Marker({
    position: hike1,
    map: hikeMap
  });
  hikeMarker1.addListener('click', function(){
    hikewindow1.open(map, hikeMarker1);
  });

  // Hike Pin 2
  var hikeString2 = '<h5>Mount Sutro</h5>'+
            '<p><a href="https://mntsutro.com" " target="_blank">Mount Sutro Trails</a></p>';
  var hikewindow2 = new google.maps.InfoWindow({
    content: hikeString2
  })
  var hikeMarker2 = new google.maps.Marker({
    position: hike2,
    map: hikeMap
  });
  hikeMarker2.addListener('click', function(){
    hikewindow2.open(map, hikeMarker2);
  });

  // Hike Pin 3
  var hikeString3 = '<h5>Strawberry Hill</h5>'+
            '<p><a href="https://goldengatepark.com/strawberry-hill.html" " target="_blank">Strawberry Hill Hike</a></p>';
  var hikewindow3 = new google.maps.InfoWindow({
    content: hikeString3
  })
  var hikeMarker3 = new google.maps.Marker({
    position: hike3,
    map: hikeMap
  });
  hikeMarker3.addListener('click', function(){
    hikewindow3.open(map, hikeMarker3);
  });

  // Hike Pin 4
  var hikeString4 = '<h5>Glen Canyon Park</h5>'+
            '<p><a href="http://bahiker.com/sfhikes/glencanyon.html" " target="_blank">Glen Canyon Trails</a></p>';
  var hikewindow4 = new google.maps.InfoWindow({
    content: hikeString4
  })
  var hikeMarker4 = new google.maps.Marker({
    position: hike4,
    map: hikeMap
  });
  hikeMarker4.addListener('click', function(){
    hikewindow4.open(map, hikeMarker4);
  });

  // Hike Pin 5
  var hikeString5 = '<h5>Presidio</h5>'+
            '<p><a href="http://www.presidio.gov/Trails-internal/" " target="_blank">Presidio Trails</a></p>';
  var hikewindow5 = new google.maps.InfoWindow({
    content: hikeString5
  })
  var hikeMarker5 = new google.maps.Marker({
    position: hike5,
    map: hikeMap
  });
  hikeMarker5.addListener('click', function(){
    hikewindow5.open(map, hikeMarker5);
  });


  // Hike Pin 6
  var hikeString6 = '<h5>Corona Heights</h5>'+
            '<p><a href="http://www.alltrails.com/trail/us/california/corona-heights-trail" " target="_blank">Corona Height\'s Trails</a></p>';
  var hikewindow6 = new google.maps.InfoWindow({
    content: hikeString6
  })
  var hikeMarker6 = new google.maps.Marker({
    position: hike6,
    map: hikeMap
  });
  hikeMarker6.addListener('click', function(){
    hikewindow6.open(map, hikeMarker6);
  });

  // Hike Pin 7
  var hikeString7 = '<h5>Mt. Davidson</h5>'+
            '<p><a href="http://bahiker.com/sfhikes/davidson.html" " target="_blank">Mt. Davidson Trails</a></p>';
  var hikewindow7 = new google.maps.InfoWindow({
    content: hikeString7
  })
  var hikeMarker7 = new google.maps.Marker({
    position: hike7,
    map: hikeMap
  });
  hikeMarker7.addListener('click', function(){
    hikewindow7.open(map, hikeMarker7);
  });

  // Hike Pin 8
  var hikeString8 = '<h5>Buena Vista Park</h5>'+
            '<p><a href="http://sfrecpark.org/destination/buena-vista-park/" " target="_blank">Buena Vista Park Trails</a></p>';
  var hikewindow8 = new google.maps.InfoWindow({
    content: hikeString8
  })
  var hikeMarker8 = new google.maps.Marker({
    position: hike8,
    map: hikeMap
  });
  hikeMarker8.addListener('click', function(){
    hikewindow8.open(map, hikeMarker8);
  });

  // Hike Pin 9
  var hikeString9 = '<h5>Grandview Park</h5>'+
            '<p><a href="http://sfrecpark.org/destination/grand-view-park/" " target="_blank">Grandview Park Trails</a></p>';
  var hikewindow9 = new google.maps.InfoWindow({
    content: hikeString9
  })
  var hikeMarker9 = new google.maps.Marker({
    position: hike9,
    map: hikeMap
  });
  hikeMarker9.addListener('click', function(){
    hikewindow9.open(map, hikeMarker9);
  });

  // Hike Pin 10
  var hikeString10 = '<h5>Hawk Hill Park</h5>'+
            '<p><a href="http://www.parksconservancy.org/visit/park-sites/hawk-hill.html" " target="_blank">Hawk Hill Park</a></p>';
  var hikewindow10 = new google.maps.InfoWindow({
    content: hikeString5
  })
  var hikeMarker10 = new google.maps.Marker({
    position: hike10,
    map: hikeMap
  });
  hikeMarker10.addListener('click', function(){
    hikewindow10.open(map, hikeMarker10);
  });

  /////////////////////////////////////////////////
  //                dinner map                   //
  /////////////////////////////////////////////////

  var dinner1 = {lat: 37.774903, lng: -122.437474}; // NOPA
  var dinner2 = {lat: 37.756415, lng: -122.419180}; // Foreign Cinema
  var dinner3 = {lat: 37.768360, lng: -122.421768}; // Shizen
  var dinner4 = {lat: 37.749040, lng: -122.420157}; // Al's Place
  var dinner5 = {lat: 37.806822, lng: -122.431773}; // Greens Restaurant
  var dinner6 = {lat: 37.764072, lng: -122.421699}; // Locanda
  var dinner7 = {lat: 37.751233, lng: -122.438257}; // Firefly Restaurant
  var dinner8 = {lat: 37.765440, lng: -122.466208}; // Nopalito
  var dinner9 = {lat: 37.774041, lng: -122.424244}; // Straw
  var dinner10 = {lat: 37.782831, lng: -122.462555}; // Burma Superstar

  var dinnerMap = new google.maps.Map(document.getElementById('dinner-map'), {
    zoom: 13,
    center: dinner1
  });

  // Dinner Pin 1
  var dinnerString1 = '<h5>Nopa</h5>'+
            '<p>560 Divisadero St, San Francisco, CA 94117</p>'+
            '(415) 864-8643'+
            '<p><a href="nopasf.com" " target="_blank">Nopa</a></p>';
  var dinnerwindow1 = new google.maps.InfoWindow({
    content: dinnerString1
  })
  var dinnerMarker1 = new google.maps.Marker({
    position: dinner1,
    map: dinnerMap
  });
  dinnerMarker1.addListener('click', function(){
    dinnerwindow1.open(map, dinnerMarker1);
  });

  //Dinner Pin 2
  var dinnerString2 = '<h5>Foreign Cinema</h5>'+
            '<p>2534 Mission St, San Francisco, CA 94110</p>'+
            '(415) 648-7600'+
            '<p><a href="www.foreigncinema.com/" " target="_blank">Foreign Cinema</a></p>';
  var dinnerwindow2 = new google.maps.InfoWindow({
    content: dinnerString2
  })
  var dinnerMarker2 = new google.maps.Marker({
    position: dinner2,
    map: dinnerMap
  });
  dinnerMarker2.addListener('click', function(){
    dinnerwindow2.open(map, dinnerMarker2);
  });

  // Dinner Pin 3
  var dinnerString3 = '<h5>Shizen</h5>'+
            '<p>370 14th St, San Francisco, CA 94103</p>'+
            '(415) 678-5767'+
            '<p><a href="https://www.facebook.com/ShizenSF" " target="_blank">Shizen Vegan Sushi Bar & Izakaya</a></p>';
  var dinnerwindow3 = new google.maps.InfoWindow({
    content: dinnerString3
  })
  var dinnerMarker3 = new google.maps.Marker({
    position: dinner3,
    map: dinnerMap
  });

  dinnerMarker3.addListener('click', function(){
    dinnerwindow3.open(map, dinnerMarker3);
  });

  // Dinner Pin 4
  var dinnerString4 = '<h5>Al\'s Place</h5>'+
            '<p>1499 Valencia St, San Francisco, CA 94110</p>'+
            '(415) 416-6136'+
            '<p><a href="www.alsplacesf.com/" " target="_blank">Al\'s Place</a></p>';
  var dinnerwindow4 = new google.maps.InfoWindow({
    content: dinnerString4
  })
  var dinnerMarker4 = new google.maps.Marker({
    position: dinner4,
    map: dinnerMap
  });
  dinnerMarker4.addListener('click', function(){
    dinnerwindow4.open(map, dinnerMarker4);
  });

  // Dinner Pin 5
  var dinnerString5 = '<h5>Greens Restaurant</h5>'+
            '<p>Landmark Building A, Fort Mason Center, 2 Marina Blvd, San Francisco, CA 94123</p>'+
            '(415) 771-6222'+
            '<p><a href="greensrestaurant.com/" " target="_blank">Greens Restaurant</a></p>';
  var dinnerwindow5 = new google.maps.InfoWindow({
    content: dinnerString5
  })
  var dinnerMarker5 = new google.maps.Marker({
    position: dinner5,
    map: dinnerMap
  });
  dinnerMarker5.addListener('click', function(){
    dinnerwindow5.open(map, dinnerMarker5);
  });

  // Dinner Pin 6
  var dinnerString6 = '<h5>Locanda</h5>'+
            '<p>557 Valencia St, San Francisco, CA 94110</p>'+
            '(415) 863-6800'+
            '<p><a href="www.locandasf.com/" " target="_blank">Locanda</a></p>';
  var dinnerwindow6 = new google.maps.InfoWindow({
    content: dinnerString6
  })
  var dinnerMarker6 = new google.maps.Marker({
    position: dinner6,
    map: dinnerMap
  });
  dinnerMarker6.addListener('click', function(){
    dinnerwindow6.open(map, dinnerMarker6);
  });

  // Dinner Pin 7
  var dinnerString7 = '<h5>Firefly Restaurant</h5>'+
            '<p>4288 24th St, San Francisco, CA 94114</p>'+
            '(415) 821-7652'+
            '<p><a href="www.fireflysf.com/" " target="_blank">Firefly Restaurant</a></p>';
  var dinnerwindow7 = new google.maps.InfoWindow({
    content: dinnerString7
  })
  var dinnerMarker7 = new google.maps.Marker({
    position: dinner7,
    map: dinnerMap
  });
  dinnerMarker7.addListener('click', function(){
    dinnerwindow7.open(map, dinnerMarker7);
  });

  //Dinner Pin 8
  var dinnerString8 = '<h5>Nopalito</h5>'+
            '<p>1224 9th Ave, San Francisco, CA 94122</p>'+
            '(415) 233-9966'+
            '<p><a href="www.nopalitosf.com/" " target="_blank">Nopalito</a></p>';
  var dinnerwindow8 = new google.maps.InfoWindow({
    content: dinnerString8
  })
  var dinnerMarker8 = new google.maps.Marker({
    position: dinner8,
    map: dinnerMap
  });
  dinnerMarker8.addListener('click', function(){
    dinnerwindow8.open(map, dinnerMarker8);
  });
  
  // Dinner Pin 9
  var dinnerString9 = '<h5>Straw</h5>'+
            '<p>203 Octavia Blvd, San Francisco, CA 94102</p>'+
            '(415) 431-3663'+
            '<p><a href="www.strawsf.com" " target="_blank">Straw</a></p>';
  var dinnerwindow9 = new google.maps.InfoWindow({
    content: dinnerString9
  })
  var dinnerMarker9 = new google.maps.Marker({
    position: dinner9,
    map: dinnerMap
  });
  dinnerMarker9.addListener('click', function(){
    dinnerwindow9.open(map, dinnerMarker9);
  });

  // Dinner Pin 10
  var dinnerString10 = '<h5>Burma Superstar</h5>'+
            '<p>309 Clement St, San Francisco, CA 94118</p>'+
            '(415) 387-2147'+
            '<p><a href="www.burmasuperstar.com/" " target="_blank">Burma Superstar</a></p>';
  var dinnerwindow10 = new google.maps.InfoWindow({
    content: dinnerString10
  })
  var dinnerMarker10 = new google.maps.Marker({
    position: dinner10,
    map: dinnerMap
  });
  dinnerMarker10.addListener('click', function(){
    dinnerwindow10.open(map, dinnerMarker10);
  });


  /////////////////////////////////////////////////
  //                 pamper map                  //
  /////////////////////////////////////////////////

  var pamper1 = {lat: 37.801968, lng: -122.450005}; // Senspa
  var pamper2 = {lat: 37.788614, lng: -122.433542}; // International Orange
  var pamper3 = {lat: 37.786314, lng: -122.401322}; // Remède Spa
  var pamper4 = {lat: 37.797358, lng: -122.435773}; // Spa Radiance
  var pamper5 = {lat: 37.791399, lng: -122.412086}; // Nob Hill Spa
  var pamper6 = {lat: 37.793689, lng: -122.393299}; // Spa Vitale
  var pamper7 = {lat: 37.784510, lng: -122.406709}; // Burke Williams Day Spa
  var pamper8 = {lat: 37.784838, lng: -122.432496}; // Kabuki
  var pamper9 = {lat: 37.786794, lng: -122.394229}; // Cocoon Urban Day Spa
  var pamper10 = {lat: 37.781512, lng: -122.396465}; // Polished Nest

  var pamperMap = new google.maps.Map(document.getElementById('pamper-map'), {
    zoom: 14,
    center: pamper5
  });
  var pamperMarker1 = new google.maps.Marker({
    position: pamper1,
    map: pamperMap
  });
  var pamperMarker2 = new google.maps.Marker({
    position: pamper2,
    map: pamperMap
  });
  var pamperMarker3 = new google.maps.Marker({
    position: pamper3,
    map: pamperMap
  });
  var pamperMarker4 = new google.maps.Marker({
    position: pamper4,
    map: pamperMap
  });
  var pamperMarker5 = new google.maps.Marker({
    position: pamper5,
    map: pamperMap
  });
  var pamperMarker6 = new google.maps.Marker({
    position: pamper6,
    map: pamperMap
  });
  var pamperMarker7 = new google.maps.Marker({
    position: pamper7,
    map: pamperMap
  });
  var pamperMarker8 = new google.maps.Marker({
    position: pamper8,
    map: pamperMap
  });
  var pamperMarker9 = new google.maps.Marker({
    position: pamper9,
    map: pamperMap
  });
  var pamperMarker10 = new google.maps.Marker({
    position: pamper10,
    map: pamperMap
  });

  ////////////////////////////////////////////
  //               movie map                //
  ////////////////////////////////////////////

  var movie1 = {lat: 37.762033, lng: -122.434759};
  var movie2 = {lat: 37.794997, lng: -122.399435};
  var movie3 = {lat: 37.784983, lng: -122.432637};
  var movie4 = {lat: 37.764710, lng: -122.422408};
  var movie5 = {lat: 37.782366, lng: -122.482909};
  var movie6 = {lat: 37.756216, lng: -122.419191};
  var movie7 = {lat: 37.764859, lng: -122.418865};
  var movie8 = {lat: 37.784272, lng: -122.403159};
  var movie9 = {lat: 37.790472, lng: -122.434533};
  var movie10 = {lat: 37.786828, lng: -122.410628};

  var movieMap = new google.maps.Map(document.getElementById('movie-map'), {
    zoom: 13,
    center: movie3
  });
  var movieMarker1 = new google.maps.Marker({
    position: movie1,
    map: movieMap
  });
  var movieMarker2 = new google.maps.Marker({
    position: movie2,
    map: movieMap
  });
  var movieMarker3 = new google.maps.Marker({
    position: movie3,
    map: movieMap
  });
  var movieMarker4 = new google.maps.Marker({
    position: movie4,
    map: movieMap
  });
  var movieMarker5 = new google.maps.Marker({
    position: movie5,
    map: movieMap
  });
  var movieMarker6 = new google.maps.Marker({
    position: movie6,
    map: movieMap
  });
  var movieMarker7 = new google.maps.Marker({
    position: movie7,
    map: movieMap
  });
  var movieMarker8 = new google.maps.Marker({
    position: movie8,
    map: movieMap
  });
  var movieMarker9 = new google.maps.Marker({
    position: movie9,
    map: movieMap
  });
  var movieMarker10 = new google.maps.Marker({
    position: movie10,
    map: movieMap
  });

  ////////////////////////////////////////////
  //              tourist map               //
  ////////////////////////////////////////////

  var tourist1 = {lat: 37.826977, lng: -122.422956};
  var tourist2 = {lat: 37.810587, lng: -122.477107};
  var tourist3 = {lat: 37.769421, lng: -122.486214};
  var tourist4 = {lat: 37.769829, lng: -122.466105};
  var tourist5 = {lat: 37.785907, lng: -122.400800};
  var tourist6 = {lat: 37.755216, lng: -122.447863};
  var tourist7 = {lat: 37.801665, lng: -122.397348};
  var tourist8 = {lat: 37.802899, lng: -122.448774};
  var tourist9 = {lat: 37.778535, lng: -122.389483 };
  var tourist10 = {lat: 37.771516, lng: -122.468647};
  var tourist11 = {lat: 37.803907, lng: -122.464062};
  var tourist12 = {lat: 37.777615, lng: -122.420614};

  var touristMap = new google.maps.Map(document.getElementById('tourist-map'), {
    zoom: 13,
    center: tourist12
  });
  var touristMarker1 = new google.maps.Marker({
    position: tourist1,
    map: touristMap
  });
  var touristMarker2 = new google.maps.Marker({
    position: tourist2,
    map: touristMap
  });
  var touristMarker3 = new google.maps.Marker({
    position: tourist3,
    map: touristMap
  });
  var touristMarker4 = new google.maps.Marker({
    position: tourist4,
    map: touristMap
  });
  var touristMarker5 = new google.maps.Marker({
    position: tourist5,
    map: touristMap
  });
  var touristMarker6 = new google.maps.Marker({
    position: tourist6,
    map: touristMap
  });
  var touristMarker7 = new google.maps.Marker({
    position: tourist7,
    map: touristMap
  });
  var touristMarker8 = new google.maps.Marker({
    position: tourist8,
    map: touristMap
  });
  var touristMarker9 = new google.maps.Marker({
    position: tourist9,
    map: touristMap
  });
  var touristMarker10 = new google.maps.Marker({
    position: tourist10,
    map: touristMap
  });
  var touristMarker11 = new google.maps.Marker({
    position: tourist11,
    map: touristMap
  });
  var touristMarker12 = new google.maps.Marker({
    position: tourist12,
    map: touristMap
  });
}
