var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; </a>'
});

var map = L.map('map', {
  scrollWheelZoom: false,
  rotate: true
  }).setView([40.802245,-73.956313], 17);
  map.addLayer(layer);


  ////////////populate map with markers from sample data
  // for(i in data) {
  //   var title = data[i].title,  //value searched
  //     loc = data[i].loc,    //position found
  //     marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
  //   marker.bindPopup('title: '+ title );
  //   markersLayer.addLayer(marker);
  // }

  // L.control.search({
  //   layer: poiLayers,
  //   initial: false,
  //   propertyName: 'name',
  //   buildTip: function(text, val) {
  //     var type = val.layer.feature.properties.amenity;
  //     return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
  //   }
  // })
  // .addTo(map);

var geojson;


function getColor(d) {
    return d > 6  ? 'green' :
           d > 5  ? '#BD0026' :
           d > 4  ? '#E31A1C' :
           d > 3  ? '#FC4E2A' :
           d > 2  ? '#FD8D3C' :
           d > 1  ? '#FEB24C' :
           d > 0  ? '#FED976' :
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

