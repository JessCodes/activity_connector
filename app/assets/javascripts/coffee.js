function initMap() {
  var cs1 = {lat: 37.776175, lng: -122.423220};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: cs1
  });
  var marker = new google.maps.Marker({
    position: cs1,
    map: map
  });
}