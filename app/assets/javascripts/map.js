function initMap() {
  
  /////////////////////////////////////////////
  //                cafe map                 //
  /////////////////////////////////////////////

  var cs1 = {lat: 37.776175, lng: -122.423220};
  var cs2 = {lat: 37.798641, lng: -122.407344};
  var cs3 = {lat: 37.763301, lng: -122.410755};
  var cs4 = {lat: 37.767019, lng: -122.421781};
  var cs5 = {lat: 37.752345, lng: -122.414309};
  var cs6 = {lat: 37.756439, lng: -122.421383};
  var cs7 = {lat: 37.776900, lng: -122.408637};
  var cs8 = {lat: 37.763162, lng: -122.465974};
  var cs9 = {lat: 37.796751, lng: -122.436629};
  var cs10 = {lat: 37.790770, lng: -122.402015};
  var map = new google.maps.Map(document.getElementById('coffee-map'), {
    zoom: 13,
    center: cs1
  });
  var csMarker1 = new google.maps.Marker({
    position: cs1,
    map: map
  });
  var csMarker2 = new google.maps.Marker({
    position: cs2,
    map: map
  });
  var csMarker3 = new google.maps.Marker({
    position: cs3,
    map: map
  });
  var csMarker4 = new google.maps.Marker({
    position: cs4,
    map: map
  });
  var csMarker5 = new google.maps.Marker({
    position: cs5,
    map: map
  });
  var csMarker6 = new google.maps.Marker({
    position: cs6,
    map: map
  });
  var csMarker7 = new google.maps.Marker({
    position: cs7,
    map: map
  });
  var csMarker8 = new google.maps.Marker({
    position: cs8,
    map: map
  });
  var csMarker9 = new google.maps.Marker({
    position: cs9,
    map: map
  });
  var csMarker10 = new google.maps.Marker({
    position: cs10,
    map: map
  });

  ///////////////////////////////////////////////
  //                 hike map                  //
  ///////////////////////////////////////////////

  var hike1 = {lat: 37.785804, lng: -122.503377};
  var hike2 = {lat: 37.759220, lng: -122.457230};
  var hike3 = {lat: 37.768641, lng: -122.475318};
  var hike4 = {lat: 37.741559, lng: -122.443185};
  var hike5 = {lat: 37.800008, lng: -122.479518};
  var hike6 = {lat: 37.765312, lng: -122.438585};
  var hike7 = {lat: 37.739265, lng: -122.454509};
  var hike8 = {lat: 37.768405, lng: -122.441415};
  var hike9 = {lat: 37.756408, lng: -122.471740};
  var hike10 = {lat: 37.746320, lng: -122.468838};

  var hikeMap = new google.maps.Map(document.getElementById('hike-map'), {
    zoom: 13,
    center: hike8
  });
  var hikeMarker1 = new google.maps.Marker({
    position: hike1,
    map: hikeMap
  });
  var hikeMarker2 = new google.maps.Marker({
    position: hike2,
    map: hikeMap
  });
  var hikeMarker3 = new google.maps.Marker({
    position: hike3,
    map: hikeMap
  });
  var hikeMarker4 = new google.maps.Marker({
    position: hike4,
    map: hikeMap
  });
  var hikeMarker5 = new google.maps.Marker({
    position: hike5,
    map: hikeMap
  });
  var hikeMarker6 = new google.maps.Marker({
    position: hike6,
    map: hikeMap
  });
  var hikeMarker7 = new google.maps.Marker({
    position: hike7,
    map: hikeMap
  });
  var hikeMarker8 = new google.maps.Marker({
    position: hike8,
    map: hikeMap
  });
  var hikeMarker9 = new google.maps.Marker({
    position: hike9,
    map: hikeMap
  });
  var hikeMarker10 = new google.maps.Marker({
    position: hike10,
    map: hikeMap
  });

  /////////////////////////////////////////////////
  //                dinner map                   //
  /////////////////////////////////////////////////

  var dinner1 = {lat: 37.774903, lng: -122.437474};
  var dinner2 = {lat: 37.756415, lng: -122.419180};
  var dinner3 = {lat: 37.768360, lng: -122.421768};
  var dinner4 = {lat: 37.749040, lng: -122.420157};
  var dinner5 = {lat: 37.806822, lng: -122.431773};
  var dinner6 = {lat: 37.764072, lng: -122.421699};
  var dinner7 = {lat: 37.751233, lng: -122.438257};
  var dinner8 = {lat: 37.765440, lng: -122.466208};
  var dinner9 = {lat: 37.774041, lng: -122.424244};
  var dinner10 = {lat: 37.782831, lng: -122.462555};

  var dinnerMap = new google.maps.Map(document.getElementById('dinner-map'), {
    zoom: 13,
    center: dinner1
  });
  var dinnerMarker1 = new google.maps.Marker({
    position: dinner1,
    map: dinnerMap
  });
  var dinnerMarker2 = new google.maps.Marker({
    position: dinner2,
    map: dinnerMap
  });
  var dinnerMarker3 = new google.maps.Marker({
    position: dinner3,
    map: dinnerMap
  });
  var dinnerMarker4 = new google.maps.Marker({
    position: dinner4,
    map: dinnerMap
  });
  var dinnerMarker5 = new google.maps.Marker({
    position: dinner5,
    map: dinnerMap
  });
  var dinnerMarker6 = new google.maps.Marker({
    position: dinner6,
    map: dinnerMap
  });
  var dinnerMarker7 = new google.maps.Marker({
    position: dinner7,
    map: dinnerMap
  });
  var dinnerMarker8 = new google.maps.Marker({
    position: dinner8,
    map: dinnerMap
  });
  var dinnerMarker9 = new google.maps.Marker({
    position: dinner9,
    map: dinnerMap
  });
  var dinnerMarker10 = new google.maps.Marker({
    position: dinner10,
    map: dinnerMap
  });

  /////////////////////////////////////////////////
  //                 pamper map                  //
  /////////////////////////////////////////////////

  var pamper1 = {lat: 37.801968, lng: -122.450005};
  var pamper2 = {lat: 37.788614, lng: -122.433542};
  var pamper3 = {lat: 37.786314, lng: -122.401322};
  var pamper4 = {lat: 37.797358, lng: -122.435773};
  var pamper5 = {lat: 37.791399, lng: -122.412086};
  var pamper6 = {lat: 37.793689, lng: -122.393299};
  var pamper7 = {lat: 37.784510, lng: -122.406709};
  var pamper8 = {lat: 37.784838, lng: -122.432496};
  var pamper9 = {lat: 37.786794, lng: -122.394229};
  var pamper10 = {lat: 37.781512, lng: -122.396465};

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

  ////////////////////////////////////////////
  //              tourist map               //
  ////////////////////////////////////////////

}
