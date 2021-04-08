//appeler la librairie weather
let weather = require('weather-js');

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
   
    //console.log(JSON.stringify(result, null, 2));
    let temp = result[0].current.temperature;
    console.log("La température est de " + temp + " degré fahrenheit");
    let ciel = result[0].current.skytext;
    console.log("le ciel est " + ciel);
});