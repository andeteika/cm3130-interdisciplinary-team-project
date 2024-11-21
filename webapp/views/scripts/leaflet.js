//Map initialisation
var map = L.map('map').setView([55, -3], 6);
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

let nhsArray = returnMarkers();

var overlayMaps = {
    "Ayrshire Placements": nhsArray[0],
    "Borders Placements" : nhsArray[1],
    "Dumfries Placements": nhsArray[2],
    "Fife Placements"    : nhsArray[3],
    "Grampian Placements": nhsArray[4],
    "Morray Placements"  : nhsArray[5],
    "Greater Glasgow Placements": nhsArray[6],
    "Highlands Placements": nhsArray[7],
    "Lanarkshire Placements": nhsArray[8],
    "Lothian Placements" : nhsArray[9],
    "Shetland Placements": nhsArray[10],
    "Tayside Placements" : nhsArray[11],
    "Western Isles Placements": nhsArray[12],
    "Non-NHS Placements" : nhsArray[13],
    "Tayside Residence"  : nhsArray[14],
    "Shetland Residence" : nhsArray[15],
    "Highlands Residence": nhsArray[16],
    "Morray Residence"   : nhsArray[17],
    "Grampian Residence" : nhsArray[18],
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