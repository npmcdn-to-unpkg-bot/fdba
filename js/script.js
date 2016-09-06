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

var tipm = {
  radius: 8,
  fillColor: "#bbb",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

<<<<<<< HEAD
=======

>>>>>>> origin/gh-pages
  var panOptions = {
    animate: true,
    duration: 2
  }

<<<<<<< HEAD
  var pan1 = [40.807540,-73.953073];
  var pan2 = [40.805461,-73.954661];
  var pan3 = [40.802895,-73.956206];
  var pan4 = [40.800913,-73.957794];

    $(".myButton").click(function() {
      if($(this).attr('id') == 'one' ) {
       
        map.panTo(pan1, panOptions);
=======
  var downtown = [40.706913,-73.987513];
  var midtown = [40.756880,-73.982899];
  var uptown = [40.793441, -73.954618];
  var queens = [40.756360, -73.907862];

    $(".myButton").click(function() {
      if($(this).attr('id') == 'one' ) {
        $(this).css('background-color','#453056');
        map.panTo('downtown', panOptions);
>>>>>>> origin/gh-pages
      } 
      
      else 
        if 

      ($(this).attr('id') == 'three' ) {
<<<<<<< HEAD
        map.panTo(pan2, panOptions);
=======
        map.panTo(uptown, panOptions);
>>>>>>> origin/gh-pages
      } 

      else 
        if 

      ($(this).attr('id') == 'two' ) {
<<<<<<< HEAD
        map.panTo(pan3, panOptions);
=======
        map.panTo(midtown, panOptions);
>>>>>>> origin/gh-pages
      } 


      else {

   
<<<<<<< HEAD
        map.panTo(pan4, panOptions);
=======
        map.panTo(queens, panOptions);
>>>>>>> origin/gh-pages
      }
    });


<<<<<<< HEAD
  $.getJSON('data/data.geojson', function(Biz) {
=======




  $.getJSON('data/biz.geojson', function(Biz) {
>>>>>>> origin/gh-pages
    geojson = L.geoJson(Biz, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, tipm);
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

