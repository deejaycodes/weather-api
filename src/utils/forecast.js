const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const forecastUrl = 'https://api.climacell.co/v3/weather/forecast/daily?lat= ' + latitude + '&lon= ' + longitude + '&location_id=Lagos&unit_system=si&start_time=now&fields=precipitation_accumulation%2Ctemp&apikey=0G91RLw0stO090W7RON9U7vkTO6UBDZ3'
    request({url:forecastUrl, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect. Network error!', undefined)
        }else if(response.statusCode!==200){
            callback('Location cannot be found. Try another search!')
        }else{
            callback(undefined, 'The temperature out there is ' + response.body[0].temp[1].max.value + ' ' + response.body[0].temp[1].max.units + ' very low' )
        }

    })

}

module.exports = forecast