const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59b1c0552d0bc0fba0b745e61c7a75c2&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "Summary:\"" + body.current.weather_descriptions[0] + "\"" + ': It is currently ' + body.current.temperature + ' degree C. It feels like ' + body.current.feelslike + ' degree C with a windspeed of ' + body.current.wind_speed+' km/h.')
        }
    })
}

module.exports = forecast