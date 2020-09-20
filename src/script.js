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

// Format hours
function formatHours(timestamp) {
  let now = new Date(timestamp);
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes}`;
}

// Search city
function search(city) {
  let units = "metric";
  let apiKey = "edcd663668b8087c96e88fbd0856ea83";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let apiUrl = `${apiEndpoint}${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  let apiEndpointForecast = `https://api.openweathermap.org/data/2.5/forecast?q=`;
  let apiUrlForecast = `${apiEndpointForecast}${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlForecast).then(showForecast);
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
  let weatherIcon = response.data.weather[0].icon;
  let todayIcon = document.querySelector("#today-icon");
  todayIcon.setAttribute("src", `icons-ios/${weatherIcon}.png`);
  todayIcon.style.display = "inline";
}

// Show forecast
function showForecast(response) {
  console.log(response.data);

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col hour-box">
      <h4>
        ${formatHours(forecast.dt * 1000)}
      </h4>
      <img
        src="icons-ios/${forecast.weather[0].icon}.png"
        alt="${forecast.weather[0].description}"
        class="hour-icon"
      />
      <p>
        <span class="five-hour-high">${Math.round(
          forecast.main.temp_max
        )}°</span>
        &ThickSpace;
        <span class="five-hour-low">${Math.round(
          forecast.main.temp_min
        )}°</span>
      </p>
    </div>`;
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

// Change temp to fahrenheit
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

// Change temp to celsius
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
