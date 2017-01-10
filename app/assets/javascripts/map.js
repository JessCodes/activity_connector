function initMap() {
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

}
