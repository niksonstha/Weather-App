// const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=pokhara";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apikey}`);
//   var data = await response.json();
//   console.log(data);

//   console.log((document.querySelector(".city").innerHTMl = data.name));
//   //   document.querySelector(".temp").innerHTMl = data.main.temp;
//   //   document.querySelector(".humidity").innerHTMl = data.main.humidity;
//   //   document.querySelector(".wind").innerHTMl = data.wind.speed;
// }

// checkWeather();
const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const getWeather = (city) => {
  fetch(apiUrl + city + `&appid=${apikey}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.querySelector(".cityName").innerHTML = response.name;
      document.querySelector(".tempNum").innerHTML = response.main.temp;
    })
    .catch((err) => console.error(err));
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityName.value);
  console.log(cityName.value);
});
getWeather("kathmandu");
