/* Places object
  geometry
  icon???
  photos?
  ratings?
  price_level?
  vicinity
  types
*/
let map;
let service;
let infowindow;
let playerChoice;
// 40.7076864
// -73.9950592
// test
function initialize() {
   
  // var locale = new google.maps.LatLng(-33.867, 151.195);
  let startingPosition

    // Checks for geolocation api 
  if ("geolocation" in navigator) {
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
      updatePosition('hospital', startingPosition)
    })
  } else {
    /* geolocation IS NOT available */
    console.error({
      message: "Unable to retrieve your location"
    })
  }
}



const callback = (results, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    const randomLocations = []
    for (let i = 0; i < 10; i++) {
      
      
      // PUSH TO GAME OBJECT
      // location.nearbyResponse : [{}]


      const place = results[i];
      // let rNum = randomizer(3)
      randomLocations.push(results)
      console.log(place)
      console.log(place.name)
      // console.log(place.geometry.location)
      // console.log(place.geometry.location.lat())
      // console.log(place.geometry.location.lng())
    }
    return randomLocations
  }
}

const randomizer = (numOfLocations) => {
  return Math.floor(Math.random() * Math.floor(numOfLocations));
}


const updatePosition = (playerChoice, oldLocation) => {
  // returns new position

   let locale = new google.maps.LatLng(oldLocation.latitude, oldLocation.longitude)
   // console.log(locale)

   map = new google.maps.Map(document.getElementById('map'), {
     center: locale,
     zoom: 15,
     disableDefaultUI: true,
     styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
   });


  /**
   * Types 
   * drugstore 
   * convenience_store
   * restaurant
   * hospital
   * hotel to heal
   */

   const request = {
     location: locale,
     // can't use floats 1609.34 is the conversion for meters
     radius: '1609',
     //just need to add some dynamic choices
     type: [playerChoice]
   };

   service = new google.maps.places.PlacesService(map);
   service.nearbySearch(request, callback);
}



// UNUSED FUNCTIONS
// function createMarker(place) {
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function () {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }


// const newLocation = ((startPosition, playerDecision) => {

//   switch (playerDecision) {
//     case 'food':
//       sanitizeData(playerDecision)
//       break;
//     case 'water':
//       sanitizeData(playerDecision)
//       break;
//     case 'meds':
//       sanitizeData(playerDecision)
//       break;
//     default:

//   }
// })()

document.addEventListener("DOMContentLoaded", (event)=> {
  console.log("Dom loaded and parsed")
//   document.getElementById("utility").nextSibling += `<script async defer type="text/javascript"
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFj9lWkNT5V5MSwgUkJRF3yoCClPHO3eM&libraries=places&callback=initialize">
// </script>`
  let googleScript = document.createElement("script")
  googleScript.type = "text/javascript"
  googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${api_key}&libraries=places&callback=initialize`
  
  let a = $('script')[2]

  let parentT = a.parentNode

  parentT.insertBefore(googleScript, a)
})
