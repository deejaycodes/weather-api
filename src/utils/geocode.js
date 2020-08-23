const request = require('request')




const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVqaXRlY2giLCJhIjoiY2tkeG1ieWNxMTFlMDJ0b3N1MXBmOW1keiJ9.ydjTYFuBhmXnszTU7XJjng&limit=1'
    request({ url: geoUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect. Check your network!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to get location. Try another search!')

        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })

        }

    })

}

module.exports = geocode