//Imports marker data from markers.js
// import {majorArenas, majorMVPs, majorMedals } from './markers.js';

//Imports the API to call players related to their country
// import { getPlayersFromAPI } from './getPlayers.js';

//Map initialisation
var map = L.map('map').setView([40, 7], 3);
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap'
});
osm.addTo(map);

//Tiles

//backup tile
// var stadiaMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}.png', {
//     maxZoom: 19,
// 	attribution: '© Stadia Maps © OpenMapTiles © OpenStreetMap contributors'
// });

// Google Map Layer
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
googleStreets.addTo(map);

//Filter Controls

//Layers
var baseMaps = {
    "OpenStreetMap": osm,
    "Google": googleStreets,
};

//Toggleable Markers

//CHANGE THE NAMES HERE//CHANGE THE NAMES HERE//CHANGE THE NAMES HERE//CHANGE THE NAMES HERE//CHANGE THE NAMES HERE//CHANGE THE NAMES HERE
let majorArray = returnMarkers();

var overlayMaps = {
    "Major Venues": majorArray[0],
    "Major MVPs" : majorArray[1],
    "Major Medals": majorArray[2],
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//Import country outline data from countries.geojson
fetch('scripts/countries.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                fillColour: 'white',
                color: 'grey',
                weight: 1,
                opacity: 1,
                fillOpacity: 0
            },
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON:', error);
    });