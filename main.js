const apiKey = "ce0838e05efae694db58d909e00c923e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function weatherApp(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C" ;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+"KMPH" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png" 
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png" 
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png" 
    }
    else if(data.weather[0].main == "Dizzle"){
        weatherIcon.src="images/dizzle.png" 
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png" 
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="images/snow.png" 
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
    
    
    console.log(data) 
}

searchBtn.addEventListener("click",()=>{
    weatherApp(searchBox.value);
})
