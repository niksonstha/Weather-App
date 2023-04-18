const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weathericon = document.querySelector(".weather-icon");

const getWeather = (city) => {
  fetch(apiUrl + city + `&appid=${apikey}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.querySelector(".cityName").innerHTML = response.name;
      document.querySelector(".tempNum").innerHTML = response.main.temp;
      document.querySelector(".humidity-value").innerHTML =
        response.main.humidity + "%";
      document.querySelector(".wind-value").innerHTML =
        response.wind.speed + "km/h";

      if (response.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
      } else if (response.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
      } else if (response.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
      } else if (response.weather[0].main == "Humidity") {
        weathericon.src = "images/humidity.png";
      } else if (response.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
      } else if (response.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
      } else if (response.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
      } else if (response.weather[0].main == "Wind") {
        weathericon.src = "images/wind.png";
      } else if (response.weather[0].main == "Haze") {
        weathericon.src = "images/haze.png";
      }
    })
    .catch((err) => console.error(err));
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityName.value);
  console.log(cityName.value);
});
getWeather("kathmandu");
