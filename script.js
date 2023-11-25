let user_input = document.getElementById("search")
let hero_img = document.getElementById("hero-img")
let temp = document.getElementById("temp")
let city_name = document.getElementById("city")
let humidity = document.getElementById("humidity-value")
let wind = document.getElementById("wind")
let search_btn = document.getElementById("search-icon")
search_btn.addEventListener("click",()=>{
    let city = user_input.value
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '31411b5335msh261ba65ba38cabfp17816ajsnc632188b0e85',
		    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	    }
    };
    let p  = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options);
    p.then((response)=>{
        return response.json()
    })
    .then((value)=>{
        city_name.innerHTML = city
        temp.innerHTML = value.temp
        humidity.innerHTML = value.humidity + "%"
        wind.innerHTML = value.wind_speed
        console.log(value)
        if (value.cloud_pct < 40 && value.humidity > 80){
            hero_img.src = "images/drizzle.png"
        }
        else if(value.cloud_pct > 40 && value.temp < 15 ){
            hero_img.src = "images/mist.png"
        }
        else if(value.cloud_pct < 70 && value.temp > 15){
            hero_img.src = "images/clear.png"
        }
        else if(value.temp < 5 && value.feels_like < -5){
            hero_img.src = "images/snow.png"
        }
        else if(value.humidity > 90 && wind_speed > 5){
            hero_img.src = "images/rain.png"
        }
        else{
            hero_img.src = "images/clouds.png"
        }
        user_input.value = null
    })
    .catch((error)=>{
        console.log(error)
    })
})