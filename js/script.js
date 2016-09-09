var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; </a>'
});

var map = L.map('map', {
  scrollWheelZoom: false,
  rotate: true
  }).setView([40.802676,-73.956914], 18);
  map.addLayer(layer);


var geojson;


function getColor(d) {
    return d > 8  ? '#BEC2C3' : //9 vacant
           d > 7  ? '#C8C6AF' : //8 community facility
           d > 6  ? '#74A974' : //7 parks
           d > 5  ? '#FFEDA0' : //6 residential
           d > 4  ? '#4A7CA8' : //5 beauty & health
           d > 3  ? '#8AB0AB' : //4 retail
           d > 2  ? '#C8C6AF' : //3 services
           d > 1  ? '#D8A692' : //2 other food
           d > 0  ? '#DE8883' : //1 restaurants
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
// infow.forEach(function(i) {
//   var inf = L.marker(i.layer.feature.geometry.coordinates).addTo(map);
//   inf.bindPopup(i.layer.feature.properties.Organization)
// });


function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


function onEachFeature(feature, layer) {
    var popup = "<h5>" + feature.properties.Organization + '<br>' + '<h6>' + feature.properties.Category + '</h6>' + "</h5>"  + feature.properties.Address + "<br>" + feature.properties.Phone + "<br>" + feature.properties.Web;
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

  // $(".myButton").click(function() {
  //   if($(this).attr('id') == 'one' ) {
       
  //     map.panTo(pan1, panOptions);
  //   } 
      
  //   else 
  //     if 

  //   ($(this).attr('id') == 'three' ) {
  //     map.panTo(pan2, panOptions);
  //   } 

  //   else 
  //     if 

  //   ($(this).attr('id') == 'two' ) {
  //     map.panTo(pan3, panOptions);
  //   } 


  //   else {

  //     map.panTo(pan4, panOptions);
  //   }
  // });


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


var parking = L.icon({
  iconUrl: 'img/p.png',
  iconSize: [25,25],
  iconAnchor: [15,5]
});

var atrain = L.icon({
  iconUrl: 'img/a.png',
  iconSize: [25,25],
  iconAnchor: [15,5]
});

var ctrain = L.icon({
  iconUrl: 'img/c.png',
  iconSize: [25,25],
  iconAnchor: [15,5]
});

var btrain = L.icon({
  iconUrl: 'img/b.png',
  iconSize: [25,25],
  iconAnchor: [15,5]
});

var dtrain = L.icon({
  iconUrl: 'img/d.png',
  iconSize: [25,25],
  iconAnchor: [15,5]
});

var pa = [
  {
    name: "122nd St Parking",
    coord: [40.808421,-73.952140]
  },
  {
    name: "121st St Parking",
    coord: [40.807999,-73.953170]
  },
  {
    name: "118th E St Parking",
    coord: [40.805400,-73.953942]
  },
  {
    name: "118th W St Parking",
    coord: [40.806026,-73.955433]
  },
  {
    name: "115th St Parking",
    coord: [40.804077,-73.956206]
  },
]



var at = [
  {
    name: "125th Street A Train",
    coord: [40.810851,-73.952783]
  },
]

var bt = [
  {
    name: "125th Street B Train",
    coord: [40.810754,-73.952558]
  },
  {
    name: "116th Street B Train",
    coord: [40.803758,-73.955900]
  },
  {
    name: "110th Street B Train",
    coord: [40.800639,-73.958207]
  },
]

var ct = [
  {
    name: "125th Street C Train",
    coord: [40.810799,-73.952671]
  },
  {
    name: "116th Street C Train",
    coord: [40.803721,-73.955782]
  },
  {
    name: "110th Street C Train",
    coord: [40.800607,-73.958067]
  },
]

var dt = [
  {
    name: "125th Street D Train",
    coord: [40.810705,-73.952440]
  },
]

pa.forEach(function(p) {
  var mar = L.marker(p.coord, {icon: parking}).addTo(map);
  mar.bindPopup(p.name)
});

at.forEach(function(a) {
  var mar2 = L.marker(a.coord, {icon: atrain}).addTo(map);
  mar2.bindPopup(a.name)
});

bt.forEach(function(b) {
  var mar3 = L.marker(b.coord, {icon: btrain}).addTo(map);
  mar3.bindPopup(b.name)
});

ct.forEach(function(c) {
  var mar4 = L.marker(c.coord, {icon: ctrain}).addTo(map);
  mar4.bindPopup(c.name)
});

dt.forEach(function(d) {
  var mar5 = L.marker(d.coord, {icon: dtrain}).addTo(map);
  mar5.bindPopup(d.name)
});




$(document).ready(function(){
  var listIt = "";
    for (var i = 0; i < resta.features.length; i++){
      listIt += "<li><a href='#''>" +  resta.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + resta.features[i].properties.Address + "&nbsp;" + "| " + resta.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
    }
    $("#resta").html(listIt);

    $("#resta li").click(function(a){

          map.bindPopup(popup);

          // var popup2 = "<h5>" + feature.properties.Organization + '<br>' + '<h6>' + feature.properties.Category + '</h6>' + "</h5>"  + feature.properties.Address + "<br>" + feature.properties.Phone + "<br>" + feature.properties.Web;
          // a.bindPopup(popup2);

  // var selText = $(this).text();
  // $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
});


$(document).ready(function(){
  var listIt = "";
    for (var i = 0; i < otherf.features.length; i++){
      listIt += "<li><a href='#''>" +  otherf.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + otherf.features[i].properties.Address + "&nbsp;" + "| " + otherf.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
    }
    $("#otherf").html(listIt);

    $(".dropdown-menu li a").click(function(){
});
});

$(document).ready(function(){
  var listIt = "";
    for (var i = 0; i < services.features.length; i++){
      listIt += "<li><a href='#''>" +  services.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + services.features[i].properties.Address + "&nbsp;" + "| " + services.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
    }
    $("#services").html(listIt);

    $(".dropdown-menu li a").click(function(){
});
});

$(document).ready(function(){
  var listIt = "";
    for (var i = 0; i < retail.features.length; i++){
      listIt += "<li><a href='#''>" +  retail.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + retail.features[i].properties.Address + "&nbsp;" + "| " + retail.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
    }
    $("#retail").html(listIt);

    $(".dropdown-menu li a").click(function(){
});
});

$(document).ready(function(){
  var listIt = "";
    for (var i = 0; i < beauhea.features.length; i++){
      listIt += "<li><a href='#''>" +  beauhea.features[i].properties.Organization + "&nbsp;" + "<br>" + "<h6>" + beauhea.features[i].properties.Address + "&nbsp;" + "| " + beauhea.features[i].properties.Category + "</h6>" + "</a></li>" + "<li role=" + "separator" + " class=" + "divider" +"></li>";
    }
    $("#beauhea").html(listIt);

    $(".dropdown-menu li a").click(function(){
});
});
