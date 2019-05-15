const request=require('request');

const foreCast=(longitude,latitude,callback)=>{
  const url = "https://api.darksky.net/forecast/0eb5197fa3caabde9078187b3686a873/"+longitude+","+latitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
})
}

module.exports=foreCast
