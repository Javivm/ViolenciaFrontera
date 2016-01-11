//Maps
function initialize() {

  var centroDelMapa = new google.maps.LatLng(31.790278, -106.423333);
  var mapOptions = {
    zoom: 6,
    center: centroDelMapa,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  map.set("styles", [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]);

  var uspolice = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 0,
    fillColor:"#2d7bb9",
    fillOpacity: 1,
    scale: 9,
  };
  var mxpolice = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 0,
    fillColor:"#191919",
    fillOpacity: 1,
    scale: 9,
  };

  var narc = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 0,
    fillColor:"#c62626",
    fillOpacity: 1,
    scale: 9,
  };

  var borderpatrol = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 0,
    fillColor:"#3da307",
    fillOpacity: 1,
    scale: 9,
  };

  var other = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 0,
    fillColor:"#eab02f",
    fillOpacity: 1,
    scale: 9,
  };

  

  //---------PARTE GENERADA--------//
    
  var locacionEvento8 = new google.maps.LatLng(31.761878, -106.485022);

  var locacionEvento8Marker = new google.maps.Marker({
      position: locacionEvento8,
      map: map,
      title:"Evento8",
      icon: borderpatrol
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Prueba1</h1>'+
      '<div id=bodyContent>'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento8 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento8Marker.addListener('click', function() {
    infoEvento8.open(map, locacionEvento8Marker);
  });


  
  var locacionEvento9 = new google.maps.LatLng(32.514947, -117.038247);

  var locacionEvento9Marker = new google.maps.Marker({
      position: locacionEvento9,
      map: map,
      title:"Evento9",
      icon: narc
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Los Hochos</h1>'+
      '<div id=bodyContent>'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento9 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento9Marker.addListener('click', function() {
    infoEvento9.open(map, locacionEvento9Marker);
  });


  
  var locacionEvento10 = new google.maps.LatLng(29.548969, -104.416809);

  var locacionEvento10Marker = new google.maps.Marker({
      position: locacionEvento10,
      map: map,
      title:"Evento10",
      icon: mxpolice
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Muerte de Chinos</h1>'+
      '<div id=bodyContent>'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento10 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento10Marker.addListener('click', function() {
    infoEvento10.open(map, locacionEvento10Marker);
  });


  
  var locacionEvento11 = new google.maps.LatLng(31.461761, -110.704422);

  var locacionEvento11Marker = new google.maps.Marker({
      position: locacionEvento11,
      map: map,
      title:"Evento11",
      icon: other
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Caen los pollos</h1>'+
      '<div id=bodyContent>'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento11 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento11Marker.addListener('click', function() {
    infoEvento11.open(map, locacionEvento11Marker);
  });


  

  //---------FIN PARTE GENERADA--------//
    
    google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);