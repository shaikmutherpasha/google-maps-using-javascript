function initMap() {

    var options = {
        zoom: 3,
        center: { lat: 28.033886, lng: 1.659626 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    var markers = [{
            coords: { lat: 37.09024, lng: -95.712891 },
            content: '<h3>Company Name</h3><p><b>Address: </b>Street 1 Lane,<br>Street 2 Lane<br>City Name, State, US.<br><b>Website: </b>www.website.com<br><b>Contact: </b>+9x-9xxx-8xxx-7x</p>'
        },
        {
            coords: { lat: 40.463667, lng: -3.74922 },
            content: '<h3>Company Name</h3><p><b>Address: </b>Street 1 Lane,<br>Street 2 Lane<br>City Name, State, Spain.<br><b>Website: </b>www.website.com<br><b>Contact: </b>+9x-9xxx-8xxx-7x</p>'
        },
        {
            coords: { lat: 56.130366, lng: -106.346771 },
            content: '<h3>Company Name</h3><p><b>Address: </b>Street 1 Lane,<br>Street 2 Lane<br>City Name, State, Canada.<br><b>Website: </b>www.website.com<br><b>Contact: </b>+9x-9xxx-8xxx-7x</p>'
        },
        {
            coords: { lat: 20.593684, lng: 78.96288 },
            content: '<h3>Company Name</h3><p><b>Address: </b>Street 1 Lane,<br>Street 2 Lane<br>City Name, State, India.<br><b>Website: </b>www.website.com<br><b>Contact: </b>+9x-9xxx-8xxx-7x</p>'
        }
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: 'map-marker.png'
        });


        if (props.content) {
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        }

    }

}
