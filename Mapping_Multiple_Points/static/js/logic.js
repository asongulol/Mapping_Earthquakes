// Add console.log to check to see if our code is working
console.log("working");

// Set type of map based on Mapbox

// let tileType - "dark-v10"

// Create the map object with a  
// center = [34.05, -118.24] and zoom level = 14
let map = L.map("mapid").setView([37.0902, -95.7129], 4);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city 
//.bindPopup defines the popup text, .toLocaleString() creates thousands separator
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
		radius: city.population/100000,
		color: 'orange',
		fillColor: '#ffed83',
		fillOpacity: 0.5
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
// Add circle coordinates = [], line color = 
// circle vs circleMarker -> the radius is meters vs pixel meaning the size of the marker becomes bigger as you zoom out
// L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffed83',
//     fillOpacity: 0.5,
//     radius: 100
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);