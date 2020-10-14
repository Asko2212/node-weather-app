const request = require('request')


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNrbzIyMTIiLCJhIjoiY2tnNW9vc2JoMHdnaDJxcGF0YWE2a3dxMyJ9.BSOSINrNlI89AiF1M1KVYQ&limit=1`
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Nemoguće konektovati na bazu lokacije!', undefined)
        } else if(body.features.length === 0) {
            callback('Nemoguće naći lokaciju. Pokušajte ponovo.', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0.].place_name
            })
        }
    })
}

module.exports = geocode;