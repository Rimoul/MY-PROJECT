import {formatTimestamp} from './converter.js';

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
    .then((response) => response.json())
    .then((data) => {
      /* const addressDiv = document.getElementById("address");
            const countryDiv = document.getElementById("country");
            const cityDiv = document.getElementById("city");
            const postcodeDiv = document.getElementById("postcode");
    
            addressDiv.textContent = `Full Address: ${data.display_name}`;
            countryDiv.textContent = `Country: ${data.address.country}`;
            cityDiv.textContent = `City: ${data.address.city || data.address.town || data.address.village}`;
            postcodeDiv.textContent = `Postal Code: ${data.address.postcode}`; */
            const country = data.address.country;
            const city = `${data.address.city || data.address.town || data.address.vi0lage}`;
            const loc = data.address.postcode;

      //live Weather Data Code
/*       const options = {method: "GET",headers: { accept: "application/json" },};

      fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${loc}&apikey=${keys[0]}`,options)
        .then((response) => response.json())
        .then((response) => {
          // Example usage:
          console.log(response);
          giveMeLive(response,country,city,loc);
        })
        .catch((err) => console.error(err)); */
      //live Weather Data Code

      //Forcat Data Code
        const options2 = {method: 'GET', headers: {accept: 'application/json'}};
        fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${loc}&apikey=${keys[1]}`, options2)
        .then(response => response.json())
        .then((response) => {
          // Example usage:
          console.log(response);
          giveMeForcast(response,country,city,loc);
        })
        .catch((err) => console.error(err));
              
      //Forcat Data Code

    })
    .catch((error) => {
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


const preciEl  = document.getElementById("preci");
const humiEl = document.getElementById("humi");
const  windyEl = document.getElementById("windy");


const nextDay1El = document.getElementById("nextDay1");
const nextDayTemp1El = document.getElementById("nextDayTemp1");
const nextDay2El = document.getElementById("nextDay2");
const nextDayTemp2El = document.getElementById("nextDayTemp2");
const nextDay3El = document.getElementById("nextDay3");
const nextDayTemp3El = document.getElementById("nextDayTemp3");
const nextDay4El = document.getElementById("nextDay4");
const nextDayTemp4El = document.getElementById("nextDayTemp4");






/* function giveMeLive(response,country,city,pincode){
  const [weekday, itsDate] = formatTimestamp(response.data.time);
  const maxTemp = Math.ceil(response.data.values.temperature);
  console.log(weekday); // Print weekday
  console.log(itsDate); // Print formatted date

 
} */


function giveMeForcast(response,country,city,pincode){
  let dailyData = response.timelines.daily[0];
  let [weekday, itsDate] = formatTimestamp(dailyData.time);
  let maxTemp =  Math.ceil(dailyData.values.temperatureMax);
  weekdayEl.innerText = `Today, ${weekday}`;
  theDateEl.innerText = itsDate;
  theLocEl.innerText = `${pincode},${city}`;
  livTempEl.innerText = `${maxTemp}°C`;
  preciEl.innerText = `${dailyData.values.precipitationProbabilityMax} %`;
  humiEl.innerText = `${dailyData.values.humidityMax} %`;
  windyEl.innerText = `${dailyData.values.windSpeedMax} m/s`;

  dailyData = response.timelines.daily[1];
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  maxTemp =  Math.ceil(dailyData.values.temperatureMax);
  nextDay1El.innerText = weekday.slice(0,3);
  nextDayTemp1El.innerText = `${maxTemp}°C`;
  
  dailyData = response.timelines.daily[2];
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  maxTemp =  Math.ceil(dailyData.values.temperatureMax);
  nextDay2El.innerText = weekday.slice(0,3);
  nextDayTemp2El.innerText = `${maxTemp}°C`;
  
  dailyData = response.timelines.daily[3];
  maxTemp =  Math.ceil(dailyData.values.temperatureMax);
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  nextDay3El.innerText = weekday.slice(0,3);
  nextDayTemp3El.innerText = `${maxTemp}°C`;
  
  dailyData = response.timelines.daily[4];
  maxTemp =  Math.ceil(dailyData.values.temperatureMax);
  [weekday, itsDate] = formatTimestamp(dailyData.time);
  nextDay4El.innerText = weekday.slice(0,3);
  nextDayTemp4El.innerText = `${maxTemp}°C`;
  
}





/*
positionEl.innerText = response.location.name;
temperatureEl.innerText = response.data.values.temperature + '°C';
humidityEl.innerText = response.data.values.humidity + '%';
windSpeedEl.innerText = response.data.values.windSpeed + ' m/s';
cloudCoverEl.innerText = response.data.values.cloudCover + '%';
visibilityEl.innerText = response.data.values.visibility + ' km';
cloudBaseEl = response.data.values.cloudBase
cloudCeilingEl  = response.data.values.cloudCeiling 
dewPointEl = response.data.values.dewPoint
freezingRainIntensityEl = response.data.values.freezingRainIntensity
precipitationProbabilityEl = response.data.values.precipitationProbability
pressureSurfaceLevelEl = response.data.values. pressureSurfaceLevel
rainIntensityEl = response.data.values. rainIntensity
sleetIntensityEl = response.data.values. sleetIntensity
snowIntensityEl = response.data.values. snowIntensity
temperatureApparentEl = response.data.values. temperatureApparent
uvHealthConcernEl = response.data.values.uvHealthConcern
uvIndexEl = response.data.values. uvIndex
weatherCodeEl = response.data.values.weatherCode
windDirectionEl = response.data.values.windDirection
windGustEl = response.data.values. windGust */