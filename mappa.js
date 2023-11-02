const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');
let overlay;

function setLayers(map) {
  const layers = [new ol.layer.Tile({source: new ol.source.OSM()})]; // crea un layer da Open Street Maps
  map.addLayer(new window.ol.layer.Group({layers})); // lo aggiunge alla mappa
}
function setCenter(map, lonlat) {
  const center = window.ol.proj.fromLonLat(lonlat);
  map.getView().setCenter(center); //fissa il centro della mappa su una certa coppia di coordinate
}
function setZoom(map, zoom) {
  map.getView().setZoom(zoom); // fissa il livello di zoom
}
function addMarker(map, point) {
  const feature = new ol.Feature({
         geometry: new ol.geom.Point(ol.proj.fromLonLat(point.lonlat))                
  });
  feature.name = point.name;  
  const layer = new ol.layer.Vector({
     source: new ol.source.Vector({
         features: [feature]
     }),
    style: new ol.style.Style({
        image: new ol.style.Icon({
        anchor: [0.5, 1],
        crossOrigin: 'anonymous',
        src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
        })
    })
  });  
  map.addLayer(layer);  
}

// crea un popup e gestisce l'apertura dell'overlay
function initOverlay(map, points) {
  overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
  map.addOverlay(overlay);
  closer.onclick = function() {
     overlay.setPosition(undefined);
     closer.blur();
     return false;
  };

   map.on('singleclick', function (event) {
       if (map.hasFeatureAtPixel(event.pixel) === true) { // se esiste un marker
         map.forEachFeatureAtPixel(event.pixel, (feature, layer) => { // lo recupera
           const coordinate = event.coordinate; // ne prende le coordinate
            content.innerHTML = feature.name; // cambia il testo del popup
            overlay.setPosition(coordinate); // e lo sposta sopra il marker
         })           
       } else {
           overlay.setPosition(undefined); // altrimenti lo nasconde
           closer.blur();
       }
   });

}

// create map
const map = new ol.Map({ target: document.querySelector('.map') });
setLayers(map);
setCenter(map, [9.2415, 45.4965]);
setZoom(map, 12);
addMarker(map, {lonlat: [9.2415, 45.4965], name: "Molinari"});
addMarker(map, {lonlat: [9.191926, 45.464098], name: "Duomo"});
initOverlay(map);


