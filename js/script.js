var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; </a>'
});

var map = L.map('map', {
  scrollWheelZoom: false,
  rotate: true
  }).setView([40.802400,-73.957016], 18);
  map.addLayer(layer);


var geojson;


function getColor(d) {
    return d > 6  ? '#5C935C' :
           d > 5  ? '#BDBDBD' :
           d > 4  ? '#4A7CA8' :
           d > 3  ? '#8AB0AB' :
           d > 2  ? '#C8C6AF' :
           d > 1  ? '#D8A692' :
           d > 0  ? '#DE8883' :
                     '#FFEDA0';
  }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.Value),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.9
    };
  }

function mouseoverFunction(e) {
    var layer = e.target;

    // layer.bindPopup(layer.feature.properties.Organization,{offset:new L.Point(0,0)})
    //         .openPopup();

    layer.setStyle({
        weight: 1,
        color: '#fff',
        dashArray: '',
        fillOpacity: 0.6
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    // console.log(layer.feature.properties.OBJECTID);
    $('#infoWindow').html(layer.feature.properties.Organization);
  }

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


function onEachFeature(feature, layer) {
    var popup = "<h5>" + feature.properties.Organization + "</h5>"  + feature.properties.Address + "<br>" + feature.properties.Phone + "<br>" + feature.properties.Web;
    layer.bindPopup(popup);


    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
}



var panOptions = {
  animate: true,
  duration: 1.5
}

var pan1 = [40.807540,-73.953073];
var pan2 = [40.805461,-73.954661];
var pan3 = [40.802895,-73.956206];
var pan4 = [40.800913,-73.957794];

  $(".myButton").click(function() {
    if($(this).attr('id') == 'one' ) {
       
      map.panTo(pan1, panOptions);
    } 
      
    else 
      if 

    ($(this).attr('id') == 'three' ) {
      map.panTo(pan2, panOptions);
    } 

    else 
      if 

    ($(this).attr('id') == 'two' ) {
      map.panTo(pan3, panOptions);
    } 


    else {

      map.panTo(pan4, panOptions);
    }
  });





var bizmarker = {
  radius: 8,
  fillColor: "#bbb",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

  $.getJSON('data/biz.geojson', function(Biz) {
    // $.each(Biz, function(key, value) {
    //   $(#bizdrop).append('<li><a href="#" >'+value.feature.properties.Organization+'</a></li>')
    // })}

    geojson = L.geoJson(Biz, {
      style: style,
      onEachFeature: onEachFeature,
      pointTolayer: function (feature, latlng) {
        return L.circleMarker(latlng, bizmarker);
      }
    }).addTo(map);
  });



  

  // var bizlayer = L.geoJson().addTo(map);
  // bizlayer.addData(Bizdata);

  // Bizdata.forEach(function(element) {
  //   var marker = L.marker(layer.feature.properties.coordinates).addTo(map);
  //   marker.bindPopup(layer.feature.properties.aCateg)

  // });

