// Show current day and time
function showDayTime(date) {
  let now = new Date();
  let dayTime = document.querySelector("#day-time");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  dayTime.innerHTML = `${day} ${hour}:${minutes}`;
}

// Get city
function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  getCoordinates(city);
}

// Search city
function getCoordinates(city) {
  let units = "metric";
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let apiUrl = `${apiEndpoint}${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(sendCoordinates);
}

// Get current position
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// Show current position, input into urls
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(sendCoordinates);

  let apiForecastUrl = "https://api.openweathermap.org/data/2.5/onecall?";
  let forecastUrl = `${apiForecastUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(forecastUrl).then(showForecast);
}

// Send coordinates
function sendCoordinates(response) {
  let cityName = response.data.name;
  document.querySelector("h1").innerHTML = cityName;

  celsiusHi = response.data.main.temp_max;
  celsiusLo = response.data.main.temp_min;
  document.querySelector("#today-hi").innerHTML = Math.round(celsiusHi);
  document.querySelector("#today-lo").innerHTML = Math.round(celsiusLo);

  let latitude = response.data.coord.lat;
  let longitude = response.data.coord.lon;

  let units = "metric";
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&%20exclude=hourly,daily&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
  axios.get(apiUrl).then(showForecast);
}

// Show current weather
function showWeather(response) {
  celsiusTemperature = response.data.current.temp;
  document.querySelector("#today-temp-current").innerHTML = Math.round(
    celsiusTemperature
  );
  let description = response.data.current.weather[0].description;
  document.querySelector("#description").innerHTML = description;

  celsiusFeelsLike = response.data.current.feels_like;
  let feelsLike = Math.round(celsiusFeelsLike);
  document.querySelector("#feels-like").innerHTML = feelsLike;
  let humidity = response.data.current.humidity;
  document.querySelector("#humidity").innerHTML = humidity;
  let wind = Math.round(response.data.current.wind_speed);
  document.querySelector("#wind").innerHTML = wind;

  let weatherIcon = response.data.current.weather[0].icon;
  let todayIcon = document.querySelector("#today-icon");
  todayIcon.setAttribute("src", `icons-ios/${weatherIcon}.png`);
  todayIcon.style.display = "inline";
}

// Show forecast
function showForecast(response) {
  let weatherIconOne = response.data.daily[0].weather[0].icon;
  let forecastIconOne = document.querySelector("#day-icon-one");
  forecastIconOne.setAttribute("src", `icons-ios/${weatherIconOne}.png`);
  forecastIconOne.style.display = "inline";

  let weatherIconTwo = response.data.daily[1].weather[0].icon;
  let forecastIconTwo = document.querySelector("#day-icon-two");
  forecastIconTwo.setAttribute("src", `icons-ios/${weatherIconTwo}.png`);
  forecastIconTwo.style.display = "inline";

  let weatherIconThree = response.data.daily[2].weather[0].icon;
  let forecastIconThree = document.querySelector("#day-icon-three");
  forecastIconThree.setAttribute("src", `icons-ios/${weatherIconThree}.png`);
  forecastIconThree.style.display = "inline";

  let weatherIconFour = response.data.daily[3].weather[0].icon;
  let forecastIconFour = document.querySelector("#day-icon-four");
  forecastIconFour.setAttribute("src", `icons-ios/${weatherIconFour}.png`);
  forecastIconFour.style.display = "inline";

  let weatherIconFive = response.data.daily[4].weather[0].icon;
  let forecastIconFive = document.querySelector("#day-icon-five");
  forecastIconFive.setAttribute("src", `icons-ios/${weatherIconFive}.png`);
  forecastIconFive.style.display = "inline";

  celsiusDayHiOne = response.data.daily[0].temp.max;
  let dayHighOne = Math.round(celsiusDayHiOne);
  document.querySelector("#five-day-high-one").innerHTML = dayHighOne;
  celsiusDayHiTwo = response.data.daily[1].temp.max;
  let dayHighTwo = Math.round(celsiusDayHiTwo);
  document.querySelector("#five-day-high-two").innerHTML = dayHighTwo;
  celsiusDayHiThree = response.data.daily[2].temp.max;
  let dayHighThree = Math.round(celsiusDayHiThree);
  document.querySelector("#five-day-high-three").innerHTML = dayHighThree;
  celsiusDayHiFour = response.data.daily[3].temp.max;
  let dayHighFour = Math.round(celsiusDayHiFour);
  document.querySelector("#five-day-high-four").innerHTML = dayHighFour;
  celsiusDayHiFive = response.data.daily[4].temp.max;
  let dayHighFive = Math.round(celsiusDayHiFive);
  document.querySelector("#five-day-high-five").innerHTML = dayHighFive;

  celsiusDayLoOne = response.data.daily[0].temp.min;
  let dayLowOne = Math.round(celsiusDayLoOne);
  document.querySelector("#five-day-low-one").innerHTML = dayLowOne;
  celsiusDayLoTwo = response.data.daily[1].temp.min;
  let dayLowTwo = Math.round(celsiusDayLoTwo);
  document.querySelector("#five-day-low-two").innerHTML = dayLowTwo;
  celsiusDayLoThree = response.data.daily[2].temp.min;
  let dayLowThree = Math.round(celsiusDayLoThree);
  document.querySelector("#five-day-low-three").innerHTML = dayLowThree;
  celsiusDayLoFour = response.data.daily[3].temp.min;
  let dayLowFour = Math.round(celsiusDayLoFour);
  document.querySelector("#five-day-low-four").innerHTML = dayLowFour;
  celsiusDayLoFive = response.data.daily[4].temp.min;
  let dayLowFive = Math.round(celsiusDayLoFive);
  document.querySelector("#five-day-low-five").innerHTML = dayLowFive;
}

// Change temp to fahrenheit
function changeToFahrenheit(event) {
  event.preventDefault();
  celsiusButton.classList.remove("active");
  fahrenheitButton.classList.add("active");

  let temperature = document.querySelector("#today-temp-current");
  let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
  temperature.innerHTML = fahrenheitTemperature;

  let temperatureHi = document.querySelector("#today-hi");
  let fahrenheitTemperatureHi = Math.round((celsiusHi * 9) / 5 + 32);
  temperatureHi.innerHTML = fahrenheitTemperatureHi;
  let temperatureLo = document.querySelector("#today-lo");
  let fahrenheitTemperatureLo = Math.round((celsiusLo * 9) / 5 + 32);
  temperatureLo.innerHTML = fahrenheitTemperatureLo;

  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeFar = Math.round((celsiusFeelsLike * 9) / 5 + 32);
  feelsLike.innerHTML = feelsLikeFar;

  document.querySelector("#five-day-high-one").innerHTML = Math.round(
    (celsiusDayHiOne * 9) / 5 + 32
  );
  document.querySelector("#five-day-high-two").innerHTML = Math.round(
    (celsiusDayHiTwo * 9) / 5 + 32
  );
  document.querySelector("#five-day-high-three").innerHTML = Math.round(
    (celsiusDayHiThree * 9) / 5 + 32
  );
  document.querySelector("#five-day-high-four").innerHTML = Math.round(
    (celsiusDayHiFour * 9) / 5 + 32
  );
  document.querySelector("#five-day-high-five").innerHTML = Math.round(
    (celsiusDayHiFive * 9) / 5 + 32
  );

  document.querySelector("#five-day-low-one").innerHTML = Math.round(
    (celsiusDayLoOne * 9) / 5 + 32
  );
  document.querySelector("#five-day-low-two").innerHTML = Math.round(
    (celsiusDayLoTwo * 9) / 5 + 32
  );
  document.querySelector("#five-day-low-three").innerHTML = Math.round(
    (celsiusDayLoThree * 9) / 5 + 32
  );
  document.querySelector("#five-day-low-four").innerHTML = Math.round(
    (celsiusDayLoFour * 9) / 5 + 32
  );
  document.querySelector("#five-day-low-five").innerHTML = Math.round(
    (celsiusDayLoFive * 9) / 5 + 32
  );

  fahrenheitButton.removeEventListener("click", changeToFahrenheit);
  celsiusButton.addEventListener("click", changeToCelsius);
}

// Change temp to celsius
function changeToCelsius(event) {
  event.preventDefault();

  fahrenheitButton.classList.remove("active");
  celsiusButton.classList.add("active");

  let temperature = document.querySelector("#today-temp-current");
  celsiusTemperature = Math.round(celsiusTemperature);
  temperature.innerHTML = celsiusTemperature;

  let temperatureHi = document.querySelector("#today-hi");
  celsiusTemperatureHi = Math.round(celsiusHi);
  temperatureHi.innerHTML = celsiusTemperatureHi;
  let temperatureLo = document.querySelector("#today-lo");
  celsiusTemperatureLo = Math.round(celsiusLo);
  temperatureLo.innerHTML = celsiusTemperatureLo;

  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeCel = Math.round(celsiusFeelsLike);
  feelsLike.innerHTML = feelsLikeCel;

  document.querySelector("#five-day-high-one").innerHTML = Math.round(
    celsiusDayHiOne
  );
  document.querySelector("#five-day-high-two").innerHTML = Math.round(
    celsiusDayHiTwo
  );
  document.querySelector("#five-day-high-three").innerHTML = Math.round(
    celsiusDayHiThree
  );
  document.querySelector("#five-day-high-four").innerHTML = Math.round(
    celsiusDayHiFour
  );
  document.querySelector("#five-day-high-five").innerHTML = Math.round(
    celsiusDayHiFive
  );

  document.querySelector("#five-day-low-one").innerHTML = Math.round(
    celsiusDayLoOne
  );
  document.querySelector("#five-day-low-two").innerHTML = Math.round(
    celsiusDayLoTwo
  );
  document.querySelector("#five-day-low-three").innerHTML = Math.round(
    celsiusDayLoThree
  );
  document.querySelector("#five-day-low-four").innerHTML = Math.round(
    celsiusDayLoFour
  );
  document.querySelector("#five-day-low-five").innerHTML = Math.round(
    celsiusDayLoFive
  );

  celsiusButton.removeEventListener("click", changeToCelsius);
  fahrenheitButton.addEventListener("click", changeToFahrenheit);
}

let celsiusTemperature = null;
let celsiusHi = null;
let celsiusLo = null;
let celsiusFeelsLike = null;
let celsiusDayHiOne = null;
let celsiusDayLoOne = null;
let celsiusDayHiTwo = null;
let celsiusDayLoTwo = null;
let celsiusDayHiThree = null;
let celsiusDayLoThree = null;
let celsiusDayHiFour = null;
let celsiusDayLoFour = null;
let celsiusDayHiFive = null;
let celsiusDayLoFive = null;

let fahrenheitButton = document.querySelector("#fahrenheit-link");
fahrenheitButton.addEventListener("click", changeToFahrenheit);

let celsiusButton = document.querySelector("#celsius-link");
celsiusButton.addEventListener("click", changeToCelsius);

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", getCity);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentPosition);

showDayTime(new Date());

getCoordinates("Tel Aviv");

// Show 5 day1
function showFiveDayOne(date) {
  let now = new Date();
  let dayOne = document.querySelector("#day-one-title");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[(now.getDay() + 1) % 7];
  dayOne.innerHTML = day;
}

showFiveDayOne(new Date());

// Show 5 day2
function showFiveDayTwo(date) {
  let now = new Date();
  let dayTwo = document.querySelector("#day-two-title");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[(now.getDay() + 2) % 7];
  dayTwo.innerHTML = day;
}

showFiveDayTwo(new Date());

// Show 5 day3
function showFiveDayThree(date) {
  let now = new Date();
  let dayThree = document.querySelector("#day-three-title");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[(now.getDay() + 3) % 7];
  dayThree.innerHTML = day;
}

showFiveDayThree(new Date());

// Show 5 day4
function showFiveDayFour(date) {
  let now = new Date();
  let dayFour = document.querySelector("#day-four-title");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[(now.getDay() + 4) % 7];
  dayFour.innerHTML = day;
}

showFiveDayFour(new Date());

// Show 5 day5
function showFiveDayFive(date) {
  let now = new Date();
  let dayFive = document.querySelector("#day-five-title");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[(now.getDay() + 5) % 7];
  dayFive.innerHTML = day;
}

showFiveDayFive(new Date());
