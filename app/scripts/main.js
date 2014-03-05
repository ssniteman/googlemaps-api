function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(34.8272504, -82.3614572),
      zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);