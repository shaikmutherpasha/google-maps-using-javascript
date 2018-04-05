function initMap() {

  var options = {
    zoom: 8,
    center: { lat: 17.385044, lng: 78.486671 }
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position: { lat: 17.447412, lng: 78.37623 },
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
