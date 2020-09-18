// Show current day + time
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

showDayTime(new Date());

// Default city on load
function search(city) {
  let units = "metric";
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let apiUrl = `${apiEndpoint}${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

search("Tel Aviv");

// Show real-time weather
function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#today-temp-span-current").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#today-hi").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#today-lo").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed * 3.6
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", getCity);

// Show Current Location weather
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentPosition);

// Show 5 day1
/* function showFiveDayOne(date) {
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

showFiveDayFive(new Date()); */

// Change temp to fahrenheit
/* function changeToFahrenheit() {
  let highFahrenheit = document.querySelector("#today-temp-span-high");
  let lowFahrenheit = document.querySelector("#today-temp-span-low");
  highFahrenheit.innerHTML = 86;
  lowFahrenheit.innerHTML = 78;
  let highFahrenheitOne = document.querySelector("#five-day-high-one");
  let lowFahrenheitOne = document.querySelector("#five-day-low-one");
  highFahrenheitOne.innerHTML = "88°";
  lowFahrenheitOne.innerHTML = "81°";
  let highFahrenheitTwo = document.querySelector("#five-day-high-two");
  let lowFahrenheitTwo = document.querySelector("#five-day-low-two");
  highFahrenheitTwo.innerHTML = "88°";
  lowFahrenheitTwo.innerHTML = "79°";
  let highFahrenheitThree = document.querySelector("#five-day-high-three");
  let lowFahrenheitThree = document.querySelector("#five-day-low-three");
  highFahrenheitThree.innerHTML = "88°";
  lowFahrenheitThree.innerHTML = "79°";
  let highFahrenheitFour = document.querySelector("#five-day-high-four");
  let lowFahrenheitFour = document.querySelector("#five-day-low-four");
  highFahrenheitFour.innerHTML = "90°";
  lowFahrenheitFour.innerHTML = "81°";
  let highFahrenheitFive = document.querySelector("#five-day-high-five");
  let lowFahrenheitFive = document.querySelector("#five-day-low-five");
  highFahrenheitFive.innerHTML = "90°";
  lowFahrenheitFive.innerHTML = "79°";
}

let fahrenheitButton = document.querySelector("#fahrenheit-link");
//fahrenheitButton.addEventListener("click", changeToFahrenheit);

// Change temp to celcius
function changeToCelcius() {
  let highCelcius = document.querySelector("#today-temp-span-high");
  let lowCelcius = document.querySelector("#today-temp-span-low");
  highCelcius.innerHTML = 30;
  lowCelcius.innerHTML = 26;
  let highCelciusOne = document.querySelector("#five-day-high-one");
  let lowCelciusOne = document.querySelector("#five-day-low-one");
  highCelciusOne.innerHTML = "31°";
  lowCelciusOne.innerHTML = "27°";
  let highCelciusTwo = document.querySelector("#five-day-high-two");
  let lowCelciusTwo = document.querySelector("#five-day-low-two");
  highCelciusTwo.innerHTML = "31°";
  lowCelciusTwo.innerHTML = "26°";
  let highCelciusThree = document.querySelector("#five-day-high-three");
  let lowCelciusThree = document.querySelector("#five-day-low-three");
  highCelciusThree.innerHTML = "31°";
  lowCelciusThree.innerHTML = "26°";
  let highCelciusFour = document.querySelector("#five-day-high-four");
  let lowCelciusFour = document.querySelector("#five-day-low-four");
  highCelciusFour.innerHTML = "32°";
  lowCelciusFour.innerHTML = "27°";
  let highCelciusFive = document.querySelector("#five-day-high-five");
  let lowCelciusFive = document.querySelector("#five-day-low-five");
  highCelciusFive.innerHTML = "32°";
  lowCelciusFive.innerHTML = "26°";
}

let celciusButton = document.querySelector("#celcius-link");
//celciusButton.addEventListener("click", changeToCelcius); */
