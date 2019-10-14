var map;
var service;
var infowindow;

// 40.7076864
// -73.9950592

function initialize() {
   
  // var locale = new google.maps.LatLng(-33.867, 151.195);
  let startingPosition

    // Checks for geolocation api 
  if ("geolocation" in navigator) {
    var locale
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function (position) {
      const {
        latitude,
        longitude
      } = position.coords
      
      startingPosition = {
        latitude,
        longitude
      }
      console.log(startingPosition)
      locale = new google.maps.LatLng(startingPosition.latitude, startingPosition.longitude)
      console.log(locale)
      map = new google.maps.Map(document.getElementById('map'), {
        center: locale,
        zoom: 15
      });

      var request = {
        location: locale,
        // can't use floats 1609.34 is the conversion for meters
        radius: '1609',
        //just need to add some dynamic choices
        type: ['restaurant']
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    })
  } else {
    /* geolocation IS NOT available */
    console.error({
      message: "Unable to retrieve your location"
    })
  }

  

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];

      // 
      // console.log(place)
      console.log(place.name)
      // console.log(place.geometry.location)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
      // createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


const newLocation = ((startPosition, playerDecision) => {

  switch (playerDecision) {
    case 'food':
      sanitizeData(playerDecision)
      break;
    case 'water':
      sanitizeData(playerDecision)
      break;
    case 'meds':
      sanitizeData(playerDecision)
      break;
    default:

  }

  // console.log('testing function')
})()

const randomizer = (numOfLocations) => {
  return Math.floor(Math.random() * Math.floor(numOfLocations));
}

