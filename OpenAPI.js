const inputValue = document.querySelector('.input-city');
const submit = document.querySelector('.button');
const cityName = document.getElementById('City');
const weatherValue = document.getElementById('Weather');
const weatherType = document.getElementById('WeatherType');

submit.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=f14c4e5875d9a84bf34c126d6f6844ec')
        .then(response => response.json())
        .then(json => {
            let weatherCal = json.main.temp - 273.15
            const fernhite = parseInt(weatherCal);
            weatherValue.innerText = fernhite;
            cityName.innerText = json.name;
            weatherType.innerText = json.weather[0].main
            var iconcode = json.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById('wicon').src = iconurl;
           
        });

})
