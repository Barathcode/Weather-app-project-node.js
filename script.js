let getWeather = async (city)=> {
    let weatherAPI='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=71905870ee2f7bac38a965430863b5d2&units=metric';
    let weatherObj = await fetch(weatherAPI);
    let response = weatherObj.json();
    return response 
}

async function callWeather (){
    try{
        let response = await getWeather('ooty');
        console.log(response); //before it executes means it shows error
        console.log('country: ', response['sys']['country']);
        console.log("city: ",response['name']);
        console.log("Temperature: ",response.main.temp);
        console.log("Description: ",response.weather[0].description);
        console.log("wind speed: ",response.wind.speed);
        console.log('The weather information has been retrived successfully.')
    }catch(err){
        console.log(err)
    }
}  
callWeather();
