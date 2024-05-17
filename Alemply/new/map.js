var map = L.map("map").setView([51.505, -0.09], 13); // Default center (London)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  language: "en", // Set language to English
}).addTo(map);

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Center the map on the user's location
      map.setView([pos.lat, pos.lng], 13);

      // Create a marker at the user's location
      L.marker([pos.lat, pos.lng]).addTo(map).bindPopup("Your location");

      // Add a zoom in and zoom out button to the map
      const zoomInButton = L.easyButton(
        "<strong>+</strong>",
        function (btn, map) {
          map.zoomIn();
        }
      ).addTo(map);
      const zoomOutButton = L.easyButton(
        "<strong>-</strong>",
        function (btn, map) {
          map.zoomOut();
        }
      ).addTo(map);
    },
    () => {
      console.error("Error: The Geolocation service failed.");
    }
  );
} else {
  // Browser doesn't support Geolocation
  console.error("Error: Your browser doesn't support geolocation.");
}


