/**
 * gets geolocation of the browser
 */

const getLocation = () => {
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
      return startingPosition
    })
  } else {
    /* geolocation IS NOT available */
    console.error({
      message: "Unable to retrieve your location"
    })
  }
}


const newLocation = (() => {
  console.log('testing function')
})()