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
    return d > 100   ? '#0000cc' :
           d > 90  ? '#BD0026' :
           d > 80  ? '#E31A1C' :
           d > 70  ? '#FC4E2A' :
           d > 60  ? '#FD8D3C' :
           d > 50  ? '#FEB24C' :
           d > 40  ? '#FED976' :
                     '#FFEDA0';
  }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.OBJECTID),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.9
    };
  }

function mouseoverFunction(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: '#fff',
        dashArray: '',
        fillOpacity: 0.6
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
    var popup = "Test111" + feature.geometry.type + "<br>" + ", test again";
    layer.bindPopup(popup);

    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}

var bizmarker = {
  radius: 8,
  fillColor: "#bbb",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

  $.getJSON('data/data.geojson', function(Biz) {
    geojson = L.geoJson(Biz, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);
  });


// L.geoJson([biz], {
//   style: style,
//   onEachFeature: onEachFeature,
//   pointToLayer: function (feature, latlng) {
//     return L.circleMarker(latlng, {
//       radius: 8,
//       fillColor: "#000",
//       color: "#000",
//       weight: 1,
//       opacity: 1,
//       fillOpacity: 0.8
//     });
//   }
// }).addTo(map);
  

  // var bizlayer = L.geoJson().addTo(map);
  // bizlayer.addData(Bizdata);

  // Bizdata.forEach(function(element) {
  //   var marker = L.marker(layer.feature.properties.coordinates).addTo(map);
  //   marker.bindPopup(layer.feature.properties.aCateg)

  // });

