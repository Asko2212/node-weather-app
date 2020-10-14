const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url =`http://api.weatherstack.com/current?access_key=c56cc31e2720f92366f8549d61a7c03d&query=${latitude},${longitude}`
   
    request({url, json: true}, (error,{body}) => {
        if (error) {
            callback('Nemoguće konektovati na bazu vremenske prognoze!', undefined)
        }else if(body.error) {
            callback('Lokaciju nije moguće pronaći na vremenskoj prognozi. Pokušajte ponovo.', undefined)
        }else {
           callback(undefined, `Trenutna temperatura je ${body.current.temperature}°C, o osjećaj je kao ${body.current.feelslike}°C.`);
        }

    })
};




module.exports = forecast