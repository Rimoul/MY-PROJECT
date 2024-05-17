var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var latitude = 22.44359588623047; // Example latitude
var longitude = 88.4326171875; // Example longitude

map.setView([latitude, longitude], 3);
