// Add console.log to check to see if our code is working
console.log("working");

// Set type of map based on Mapbox

// let tileType - "dark-v10"

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([39.828175, -98.5795], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.621734619, -122.383125305],//SFO
  [30.18999924, -97.668663992],//AUS
  [43.679370880, -79.629409790],//Toronto
  [40.647289276, -73.786773682]//JFK
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
   color: "blue",
   opacity: 0.5,
   weight: 4,
   line: "dashed"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);