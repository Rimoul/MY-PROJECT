import { formatTimestamp } from './converter.js';

const keys = [
  "w7pOdpcYi2pueQHxyVgtXqAQrYKKuMzX",
  "o2tSPnmbN7Dr5vzpuG0S5ASlcvYTxAvy",
  "1kRVhnEkw3rZUzJzB5ZwayEkq0DSfPcc",
  "4G8awGzOj67c94zyS5ZPr0VD6shiJdpL",
  "r4eYXSYDEV0lC5giWdHYrhM9IoMQLfb2",
];

// Function to get user location when the page loads
document.addEventListener("DOMContentLoaded", function () {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getAddress(latitude, longitude);
}

function getAddress(latitude, longitude) {
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(response => response.json())
    .then(data => {
      const country = data.address.country;
      const city = data.address.city || data.address.town || data.address.village;
      const postcode = data.address.postcode;

      // Fetch weather data
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${keys[2]}`, options)
        .then(response => response.json())
        .then(response => {
          giveMeForecast(response, country, city, postcode);
        })
        .catch(err => console.error(err));
    })
    .catch(error => {
      console.error("Error fetching address:", error);
    });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

const weekdayEl = document.getElementById("weekday");
const theDateEl = document.getElementById("theDate");
const theLocEl = document.getElementById("theLoc");
const livTempEl = document.getElementById("livTemp");

const preciEl = document.getElementById("preci");
const humiEl = document.getElementById("humi");
const windyEl = document.getElementById("windy");

const nextDay1El = document.getElementById("nextDay1");
const nextDayTemp1El = document.getElementById("nextDayTemp1");
const nextDay2El = document.getElementById("nextDay2");
const nextDayTemp2El = document.getElementById("nextDayTemp2");
const nextDay3El = document.getElementById("nextDay3");
const nextDayTemp3El = document.getElementById("nextDayTemp3");
const nextDay4El = document.getElementById("nextDay4");
const nextDayTemp4El = document.getElementById("nextDayTemp4");

function giveMeForecast(response, country, city, postcode) {
  let dailyData = response.timelines.daily[0];
  let [weekday, itsDate] = formatTimestamp(dailyData.time);
  let maxTemp = Math.ceil(dailyData.values.temperatureMax);
  weekdayEl.innerText = `Today, ${weekday}`;
  theDateEl.innerText = itsDate;
  theLocEl.innerText = `${postcode}, ${city}`;
  livTempEl.innerText = `${maxTemp}°C`;
  preciEl.innerText = `${dailyData.values.precipitationProbabilityMax} %`;
  humiEl.innerText = `${dailyData.values.humidityMax} %`;
  windyEl.innerText = `${dailyData.values.windSpeedMax} m/s`;

  dailyData = response.timelines.daily[1];
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  maxTemp = Math.ceil(dailyData.values.temperatureMax);
  nextDay1El.innerText = weekday.slice(0, 3);
  nextDayTemp1El.innerText = `${maxTemp}°C`;

  dailyData = response.timelines.daily[2];
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  maxTemp = Math.ceil(dailyData.values.temperatureMax);
  nextDay2El.innerText = weekday.slice(0, 3);
  nextDayTemp2El.innerText = `${maxTemp}°C`;

  dailyData = response.timelines.daily[3];
  maxTemp = Math.ceil(dailyData.values.temperatureMax);
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  nextDay3El.innerText = weekday.slice(0, 3);
  nextDayTemp3El.innerText = `${maxTemp}°C`;

  dailyData = response.timelines.daily[4];
  maxTemp = Math.ceil(dailyData.values.temperatureMax);
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  nextDay4El.innerText = weekday.slice(0, 3);
  nextDayTemp4El.innerText = `${maxTemp}°C`;
}
