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
    zoom: 14,
    center: cs1
  });
  var marker1 = new google.maps.Marker({
    position: cs1,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: cs2,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: cs3,
    map: map
  });
  var marker4 = new google.maps.Marker({
    position: cs4,
    map: map
  });

  var hiking1 = {lat: 37.785804, lng: -122.503377};

  var hikeMap = new google.maps.Map(document.getElementById('hike-map'), {
    zoom: 12,
    center: hiking1
  });
  var hikeMarker = new google.maps.Marker({
    position: hiking1,
    map: hikeMap
  });

}
