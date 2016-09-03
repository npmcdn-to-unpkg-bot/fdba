var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; </a>'
});

var map = L.map('map', {
  scrollWheelZoom: false,
  rotate: true
  }).setView([40.804406,-73.955380], 17);
  map.addLayer(layer);

var geojson;

function getColor(d) {
    return d > 0   ? '#0000cc' :
           d > 10  ? '#BD0026' :
           d > 20  ? '#E31A1C' :
           d > 30  ? '#FC4E2A' :
           d > 40  ? '#FD8D3C' :
           d > 70  ? '#FEB24C' :
           d > 90  ? '#FED976' :
                     '#FFEDA0';
  }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.OBJECTID),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.8
    };
  }

function mouseoverFunction(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.8
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    console.log(layer.feature.properties.OBJECTID);
    $('#infoWindow').html(layer.feature.properties.aCateg);
  }

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


function onEachFeature(feature, layer) {
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

  $.getJSON('data/data.geojson', function(data) {
    geojson = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  });
