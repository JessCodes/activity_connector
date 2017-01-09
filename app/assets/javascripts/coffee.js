function initMap() {
  var cs1 = {lat: 37.776175, lng: -122.423220};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: cs1
  });
  var marker = new google.maps.Marker({
    position: cs1,
    map: map
  });
}

  // var cs2 = {lat: 37.798641, lng: -122.407344};
  // var cs3 = {lat: 37.763301, lng: -122.410755};
  // var cs4 = {lat: 37.767019, lng: -122.421781};
  // var cs5 = {lat: 37.752345, lng: -122.414309};
  // var cs6 = {lat: 37.756439, lng: -122.421383};
  // var cs7 = {lat: 37.776900, lng: -122.408637};
  // var cs8 = {lat: 37.763162, lng: -122.465974};
  // var cs9 = {lat: 37.796751, lng: -122.436629};
  // var cs10 = {lat: 37.790770, lng: -122.402015};