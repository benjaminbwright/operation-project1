/**
 * gets geolocation of the browser
 */




// convert miles to km for google
// 1 * 1609.34 = km
// location lat/long


// INITIAL LOCATION
const initialLocation = () => {
  // Checks for geolocation api 
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function (position) {
      const {
        latitude,
        longitude
      } = position.coords
      const startingPosition = {
        latitude,
        longitude
      }
      console.log(startingPosition)
      return startingPosition
    })
  } else {
    /* geolocation IS NOT available */
    console.error({
      message: "Unable to retrieve your location"
    })
  }
}


// Takes starting position 
// scans in an area
/**
 * {
 *  resturants = food/water,
 *  conviences stores = water/food
 *  hospitals/pharm/practices = meds
 * }
 */
// GETS NEW LOCATION




// AJAX CALL FOR AVAILABLE PLACES
const sanitizeData = (choice) => {
    const choiceOfLocations = []
    let newPosition = ''
    // takes choice
    // ajax call places api to populate the array
    // if (choice > 10) {slice it down to 10}
    // push all choice into locationsArray
 
    // create a random index to return 
    // randomizer(choiceOfLocations.length)

    // return choiceOfLocation[randomIndex] which is a new position
    // Returns an location object with lat and long
}

// sanitizeData()

// RANDOM NUMBER GENERATOR

// randomize a number 






























