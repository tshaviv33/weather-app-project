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

// Search city
function search(city) {
  let units = "metric";
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let apiUrl = `${apiEndpoint}${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

// Show current city, temperature, feels like, high, low, description, humidity, wind, and ICON
function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#today-temp-current").innerHTML = Math.round(
    celsiusTemperature
  );
  celsiusHi = response.data.main.temp_max;
  document.querySelector("#today-hi").innerHTML = Math.round(celsiusHi);
  celsiusLo = response.data.main.temp_min;
  document.querySelector("#today-lo").innerHTML = Math.round(celsiusLo);
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed * 3.6
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  if (response.data.weather[0].icon === "01d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud-moon",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-sun");
  } else if (response.data.weather[0].icon === "01n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-cloud-sun",
        "pe-7w-cloud-moon",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-moon");
  } else if (response.data.weather[0].icon === "02d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-moon",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud-sun");
  } else if (response.data.weather[0].icon === "02n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud-moon");
  } else if (response.data.weather[0].icon === "03d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud");
  } else if (response.data.weather[0].icon === "03n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud");
  } else if (response.data.weather[0].icon === "04d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-moon",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud-sun");
  } else if (response.data.weather[0].icon === "04n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-cloud-moon");
  } else if (response.data.weather[0].icon === "09d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-rain-alt");
  } else if (response.data.weather[0].icon === "09n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-rain-alt");
  } else if (response.data.weather[0].icon === "10d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document
      .querySelector("#today-icon")
      .classList.add("pe-7w-drizzle-alt-sun");
  } else if (response.data.weather[0].icon === "10n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document
      .querySelector("#today-icon")
      .classList.add("pe-7w-drizzle-alt-moon");
  } else if (response.data.weather[0].icon === "11d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-lightning");
  } else if (response.data.weather[0].icon === "11n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-lightning");
  } else if (response.data.weather[0].icon === "13d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-snow-alt");
  } else if (response.data.weather[0].icon === "13n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-fog-sun",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-snow-alt");
  } else if (response.data.weather[0].icon === "50d") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-moon"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-fog-sun");
  } else if (response.data.weather[0].icon === "50n") {
    document
      .querySelector("#today-icon")
      .classList.remove(
        "pe-7w-sun",
        "pe-7w-moon",
        "pe-7w-cloud-sun",
        "pe-7w-cloud",
        "pe-7w-cloud-moon",
        "pe-7w-rain-alt",
        "pe-7w-drizzle-alt-sun",
        "pe-7w-drizzle-alt-moon",
        "pe-7w-lightning",
        "pe-7w-snow-alt",
        "pe-7w-fog-sun"
      );
    document.querySelector("#today-icon").classList.add("pe-7w-fog-moon");
  }
}

// Get city
function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

// Show current location
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

// Get current location
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function changeToFahrenheit(event) {
  event.preventDefault();
  celciusButton.classList.remove("active");
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
}

function changeToCelcius(event) {
  event.preventDefault();
  fahrenheitButton.classList.remove("active");
  celciusButton.classList.add("active");
  let temperature = document.querySelector("#today-temp-current");
  temperature.innerHTML = Math.round(celsiusTemperature);
  let temperatureHi = document.querySelector("#today-hi");
  temperatureHi.innerHTML = Math.round(celsiusHi);
  let temperatureLo = document.querySelector("#today-lo");
  temperatureLo.innerHTML = Math.round(celsiusLo);
}

let celsiusTemperature = null;
let celsiusHi = null;
let celsiusLo = null;

let fahrenheitButton = document.querySelector("#fahrenheit-link");
fahrenheitButton.addEventListener("click", changeToFahrenheit);

let celciusButton = document.querySelector("#celcius-link");
celciusButton.addEventListener("click", changeToCelcius);

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", getCity);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentPosition);

showDayTime(new Date());

search("Tel Aviv");

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

 */
