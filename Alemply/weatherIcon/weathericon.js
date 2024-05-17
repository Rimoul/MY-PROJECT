  const weatherDes = {
  "0": "Unknown",
  "1000": "Clear, Sunny",
  "1100": "Mostly Clear",
  "1101": "Partly Cloudy",
  "1102": "Mostly Cloudy",
  "1001": "Cloudy",
  "2000": "Fog",
  "2100": "Light Fog",
  "4000": "Drizzle",
  "4001": "Rain",
  "4200": "Light Rain",
  "4201": "Heavy Rain",
  "5000": "Snow",
  "5001": "Flurries",
  "5100": "Light Snow",
  "5101": "Heavy Snow",
  "6000": "Freezing Drizzle",
  "6001": "Freezing Rain",
  "6200": "Light Freezing Rain",
  "6201": "Heavy Freezing Rain",
  "7000": "Ice Pellets",
  "7101": "Heavy Ice Pellets",
  "7102": "Light Ice Pellets",
  "8000": "Thunderstorm"
}




const livWeatherCode = '6000';

const sun = ["0", "1000"]; // Morning
const moon = ["0", "1000"]; // Night
const cloud = ["1100", "1101", "1102", "1001"];
const wind = ["2000", "2100"];
const lightRain = ["4000", "4200", "6000", "6200"];
const heavyRain = ["4001", "4201", "6001", "6201"];
const thunderstorm = '8000';
const snow = ["5000", "5001", "5100", "5101", "7000", "7101", "7102"];

let featherCode;
let livWeatherDes;

if (livWeatherCode == thunderstorm){
  featherCode = "cloud-lightning";
  livWeatherDes = weatherDes[livWeatherCode];
}
else if (sun.includes(livWeatherCode)) {
  console.log("sun");
}
else if (moon.includes(livWeatherCode)) {
  console.log("moon");
}
else if (cloud.includes(livWeatherCode)) {
  featherCode = "cloud";
  livWeatherDes = weatherDes[livWeatherCode];
}
else if (wind.includes(livWeatherCode)) {
  featherCode = "wind";
  livWeatherDes = weatherDes[livWeatherCode];
}
else if (lightRain.includes(livWeatherCode)) {
  featherCode = "cloud-drizzle";
  livWeatherDes = weatherDes[livWeatherCode];
}
else if (heavyRain.includes(livWeatherCode)) {
  featherCode = "cloud-rain";
  livWeatherDes = weatherDes[livWeatherCode];
}
else if (snow.includes(livWeatherCode)) {
  featherCode = "cloud-snow";
  livWeatherDes = weatherDes[livWeatherCode];
}
else{
  featherCode = "sun";
  livWeatherDes = weatherDes[livWeatherCode];
  console.log("anything else");
}


console.log(featherCode);
console.log(livWeatherDes);


// Select all SVG elements with the class 'weather-icon'
var svgElements = document.querySelectorAll('.weather-icon');

// Iterate over each SVG element
svgElements.forEach(function(svgElement) {
    // Change the value of data-feather attribute dynamically for each SVG element
    svgElement.setAttribute('data-feather', featherCode); // Change 'sun' to whatever value you want
    feather.replace();
});
