function initMap() {

  var options = {
    zoom: 4,
    center: { lat: 37.0902, lng: -95.7129 }
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 },
      map: map,
      icon: 'map-marker.png'
  });

  var infowindow = new google.maps.InfoWindow({
      content: '<h3>Company Name</h3><p><b>Address: </b>Street 1 Lane,<br>Street 2 Lane<br>City Name, State & Country.<br><b>Website: </b>www.website.com<br><b>Contact: </b>+9x-9xxx-8xxx-7x</p>'
  });

  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });
}
