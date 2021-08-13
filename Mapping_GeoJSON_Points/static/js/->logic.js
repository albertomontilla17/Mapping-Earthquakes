// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level. LA
// let map = L.map("mapid").setView([36.1733, -120.1794], 7);

//                                                         SF
let map = L.map('mapid').setView([30, 30], 2);

  // We create a tile layer that will be the background of our map.
let streets =  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our "graymap" tile layer to the map
streets.addTo(map) 

// Add marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);


// Adding circle instead of marker
// let marker = L.circleMarker([34.0522, -118.2437], {
  //   radius: 100,
  //   color: "black",
  //   fillColor: '#ffffa1'
  // }).addTo(map);

// Get data from cities.js

// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString + "</h3>")
//   .addTo(map);
// });

// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000,
//     color: "yellow",
//     fillColor: "#ff8g00",
//     lineWidth: 4
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Skill Drill

// let line = [
//   [37.6213, -122.3790],
//   [30.2026, -97.6681],
//   [25.7965, -80.2756],
//   [43.6873, -79.6216],
//   [40.6413, -73.7781]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "blue",
//   lineWidth: 4,
//   opacity: 0.2,
//   dashOffset: ""
// }).addTo(map);

// Add GeoJSON data.

// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<hr>" + "</hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country);
//   }

// }).addTo(map);


// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<hr>" + "</hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
//   }
// }).addTo(map);



// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/albertomontilla17/Mapping-Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<hr>" + "</hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>")
  }
}).addTo(map);
});