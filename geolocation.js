
var xgeo = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    xgeo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  xgeo.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      xgeo.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      xgeo.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      xgeo.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      xgeo.innerHTML = "An unknown error occurred."
      break;
  }
}
