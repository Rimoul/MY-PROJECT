/* // Get references to the buttons
const lightsBtn = document.getElementById('lights');
const darksBtn = document.getElementById('darks');
const container = document.querySelector('.container');

// Event listener for light theme button
lightsBtn.addEventListener('click', () => {
  // Add 'light-mode' class to the container
  container.classList.add('light-mode');
  // Remove 'dark-mode' class from the container
  container.classList.remove('dark-mode');
});

// Event listener for dark theme button
darksBtn.addEventListener('click', () => {
  // Add 'dark-mode' class to the container
  container.classList.add('dark-mode');
  // Remove 'light-mode' class from the container
  container.classList.remove('light-mode');
});

 */

import { formatTimestamp } from "../new/converter.js";


const keys = ['w7pOdpcYi2pueQHxyVgtXqAQrYKKuMzX',
'o2tSPnmbN7Dr5vzpuG0S5ASlcvYTxAvy',
'1kRVhnEkw3rZUzJzB5ZwayEkq0DSfPcc',
'4G8awGzOj67c94zyS5ZPr0VD6shiJdpL',
'r4eYXSYDEV0lC5giWdHYrhM9IoMQLfb2']




// Get references to the input and button elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


// Function to perform the search
function performSearch() {
    const loc = searchInput.value;

    // Clear the input field
    searchInput.value = "";

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${loc}&apikey=${keys[2]}`, options)
        .then(response => response.json())
        .then(response => {
            giveWeatherData(response);
           /*  positionEl.innerText = response.location.name;
            temperatureEl.innerText = response.data.values.temperature + '°C';
            humidityEl.innerText = response.data.values.humidity + '%';
            windSpeedEl.innerText = response.data.values.windSpeed + ' m/s';
            cloudCoverEl.innerText = response.data.values.cloudCover + '%';
            visibilityEl.innerText = response.data.values.visibility + ' km'; */

        })
        .catch(err => console.error(err));
}

// Event listener for clicking the search button
searchButton.addEventListener('click', function(event) {
    performSearch();
});

// Event listener for pressing the Enter key in the search input field
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});
    
  





const weekdayEl = document.getElementById("weekday");
const theDateEl = document.getElementById("theDate");
const theLocEl = document.getElementById("theLoc");
const livTempEl = document.getElementById("livTemp");
const dewEl = document.getElementById("dew");
const presureEl = document.getElementById("presure");

const preciEl  = document.getElementById("preci");
const humiEl = document.getElementById("humi");
const  windyEl = document.getElementById("windy");







const nextDay1El = document.getElementById("nextDay1");
const nextDayDate1El = document.getElementById("nextDayDate1");
const nextempMax1El = document.getElementById("nextempMax1");
const nextempMin1El = document.getElementById("nextempMin1");
const nextDayHumi1El = document.getElementById("nextDayHumi1");
const air1El = document.getElementById("air1");

const nextDay2El = document.getElementById("nextDay2");
const nextDayDate2El = document.getElementById("nextDayDate2");
const nextempMax2El = document.getElementById("nextempMax2");
const nextempMin2El = document.getElementById("nextempMin2");
const nextDayHumi2El = document.getElementById("nextDayHumi2");
const air2El = document.getElementById("air2");

const nextDay3El = document.getElementById("nextDay3");
const nextDayDate3El = document.getElementById("nextDayDate3");
const nextempMax3El = document.getElementById("nextempMax3");
const nextempMin3El = document.getElementById("nextempMin3");
const nextDayHumi3El = document.getElementById("nextDayHumi3");
const air3El = document.getElementById("air3");

const nextDay4El = document.getElementById("nextDay4");
const nextDayDate4El = document.getElementById("nextDayDate4");
const nextempMax4El = document.getElementById("nextempMax4");
const nextempMin4El = document.getElementById("nextempMin4");
const nextDayHumi4El = document.getElementById("nextDayHumi4");
const air4El = document.getElementById("air4");

const nextDay5El = document.getElementById("nextDay5");
const nextDayDate5El = document.getElementById("nextDayDate5");
const nextempMax5El = document.getElementById("nextempMax5");
const nextempMin5El = document.getElementById("nextempMin5");
const nextDayHumi5El = document.getElementById("nextDayHumi5");
const air5El = document.getElementById("air5");
const riseTimeEl = document.getElementById("riseTime");
const setTimeEl = document.getElementById("setTime");











/* nextDay1El.innerText = "hello";
air1El.innerText = "hello";
nextDay2El.innerText = "hello";
air2El.innerText = "hello";
nextDay3El.innerText = "hello";
air3El.innerText = "hello";
nextDay4El.innerText = "hello";
air4El.innerText = "hello";

 */












function giveWeatherData(dataIsHere){
        const locData = dataIsHere.location;
        const weatData = dataIsHere.timelines.daily;
        let thisDay = weatData[0]
        let [weekday, itsDate] = formatTimestamp(thisDay.time);
        let theValue = thisDay.values;

        weekdayEl.innerText = `Today, ${weekday}`;
        theDateEl.innerText = itsDate;
        theLocEl.innerText = locData.name;
        livTempEl.innerText = dataIsHere.timelines.minutely[0].values.temperature;
        dewEl.innerText = theValue.dewPointMax;
        presureEl.innerText = theValue.pressureSurfaceLevelMax;
        
        preciEl.innerText = theValue.precipitationProbabilityMax;
        humiEl.innerText = theValue.humidityMax;
        windyEl.innerText = theValue.windSpeedMax;
        
        setTimeEl.innerText = theValue.moonsetTime.substring(11, 16);
        riseTimeEl.innerText = theValue.moonriseTime.substring(11, 16);

/*         console.log(dataIsHere);
 */        nextDay1El.innerText = "Today";
        nextDayDate1El.innerText = itsDate.split(',')[0];
        nextempMax1El.innerText = theValue.temperatureMax;
        nextempMin1El.innerText = theValue.temperatureMin;
        nextDayHumi1El.innerText = theValue.humidityMax;
        air1El.innerText = theValue.pressureSurfaceLevelMax;
        






        let dailyData = dataIsHere.timelines.daily[1];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        console.log(theValue);
        

   
        
        dailyData = dataIsHere.timelines.daily[2];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        console.log(theValue);
        


        
        dailyData = dataIsHere.timelines.daily[3];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        console.log(theValue);
        


        





        dailyData = dataIsHere.timelines.daily[1];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        nextDay2El.innerText = weekday.substring(0, 3);
        nextDayDate2El.innerText = itsDate.split(',')[0];
       nextempMax2El.innerText = theValue.temperatureMax;
        nextempMin2El.innerText = theValue.temperatureMin;
        nextDayHumi2El.innerText = theValue.humidityMax;
        air2El.innerText = theValue.pressureSurfaceLevelMax;

        dailyData = dataIsHere.timelines.daily[2];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        nextDay3El.innerText = weekday.substring(0, 3);
        nextDayDate3El.innerText = itsDate.split(',')[0];
        nextempMax3El.innerText = theValue.temperatureMax;
        nextempMin3El.innerText = theValue.temperatureMin;
        nextDayHumi3El.innerText = theValue.humidityMax;
        air3El.innerText = theValue.pressureSurfaceLevelMax;
        

        dailyData = dataIsHere.timelines.daily[3];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        nextDay4El.innerText = weekday.substring(0, 3);
         nextDayDate4El.innerText = itsDate.split(',')[0];
        nextempMax4El.inerText = theValue.temperatureMax;
        nextempMin4El.innerText = theValue.temperatureMin;
        nextDayHumi4El.innerText = theValue.humidityMax;
        air4El.innerText = theValue.pressureSurfaceLevelMax;
        

    dailyData = dataIsHere.timelines.daily[4];
        [weekday, itsDate] = formatTimestamp(dailyData.time);
        theValue = dailyData.values;
        nextDay5El.innerText = weekday.substring(0, 3);     
        nextDayDate5El.innerText = itsDate.split(',')[0];
        nextempMax5El.innerText = theValue.temperatureMax;
        nextempMin5El.innerText = theValue.temperatureMin;
        nextDayHumi5El.innerText = theValue.humidityMax;
        air1El.innerText = theValue.pressureSurfaceLevelMax;




        
        
        
        var map = L.map('map').setView([0, 0], 2);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        var marker;
        
        var latitude = locData.lat; // Example latitude
        var longitude = locData.lon; // Example longitude
        var initialLocation = [latitude, longitude];
        
        marker = L.marker(initialLocation).addTo(map);
        
        map.setView(initialLocation, 5);
    






        
       

        

        
}

    
    









  /*     
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
    windGustEl = response.data.values. windGust
    
    
    
    latEl = response.data.location.lat
    lonEl = response.data.location.lon
    typedEl = response.data.location.postcode */

