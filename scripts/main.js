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
    
  var locacionEvento14 = new google.maps.LatLng(32.514947, -117.038247);

  var locacionEvento14Marker = new google.maps.Marker({
      position: locacionEvento14,
      map: map,
      title:"Evento14",
      icon: borderpatrol
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Hola</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Border Patrol</b></div><div><b>Cartel de Sonora</b></div><div><b>Lugar: Estados Unidos, Sonora, Tijuana</b></div><div><b>2015-12-09</b></div>'+
      '<p>Desaparecen Estudiantes<div><a href="./comptext.php?id=14">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento14 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento14Marker.addListener('click', function() {
    infoEvento14.open(map, locacionEvento14Marker);
  });


  
  var locacionEvento15 = new google.maps.LatLng(31.761878, -106.485022);

  var locacionEvento15Marker = new google.maps.Marker({
      position: locacionEvento15,
      map: map,
      title:"Evento15",
      icon: uspolice
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Police</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: US Police</b></div><div><b>Texas Patrol</b></div><div><b>Lugar: Estados Unidos, Texas, El Paso</b></div><div><b>2015-06-09</b></div>'+
      '<p>Matan a personas<div><a href="./comptext.php?id=15">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento15 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento15Marker.addListener('click', function() {
    infoEvento15.open(map, locacionEvento15Marker);
  });


  
  var locacionEvento16 = new google.maps.LatLng(29.297225, -110.330881);

  var locacionEvento16Marker = new google.maps.Marker({
      position: locacionEvento16,
      map: map,
      title:"Evento16",
      icon: narc
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Arrazando</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Narco</b></div><div><b>Zetas</b></div><div><b>Lugar: Mexico, Sonora, La Chingada</b></div><div><b>2015-12-10</b></div>'+
      '<p>Mueren por causas de la naturaleza las personas<div><a href="./comptext.php?id=16">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento16 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento16Marker.addListener('click', function() {
    infoEvento16.open(map, locacionEvento16Marker);
  });


  
  var locacionEvento17 = new google.maps.LatLng(28.632996, -106.069100);

  var locacionEvento17Marker = new google.maps.Marker({
      position: locacionEvento17,
      map: map,
      title:"Evento17",
      icon: other
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Desparacion de grupo de 20 migrantes en Yuma</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Otros</b></div><div><b>No Hay</b></div><div><b>Lugar: Estados Unidos, Arizona, Yuma</b></div><div><b>2015-12-15</b></div>'+
      '<p>Come Caca<div><a href="./comptext.php?id=17">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento17 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento17Marker.addListener('click', function() {
    infoEvento17.open(map, locacionEvento17Marker);
  });


  
  var locacionEvento19 = new google.maps.LatLng(34.048928, -111.093731);

  var locacionEvento19Marker = new google.maps.Marker({
      position: locacionEvento19,
      map: map,
      title:"Evento19",
      icon: borderpatrol
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Work</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Border Patrol</b></div><div><b>asjkdna</b></div><div><b>Lugar: Estados Unidos, Arizona, Kajnskjn</b></div><div><b>2015-06-09</b></div>'+
      '<p>asdknckjnasdñcnñldancjn<div><a href="./comptext.php?id=19">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento19 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento19Marker.addListener('click', function() {
    infoEvento19.open(map, locacionEvento19Marker);
  });


  
  var locacionEvento20 = new google.maps.LatLng(34.594215, -106.027679);

  var locacionEvento20Marker = new google.maps.Marker({
      position: locacionEvento20,
      map: map,
      title:"Evento20",
      icon: narc
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Q pedo Wey</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Narco</b></div><div><b>EL narquillo</b></div><div><b>Lugar: Estados Unidos, New Mexico, Willard</b></div><div><b>2016-02-04</b></div>'+
      '<p>Esto seria el resumen de la noticia<div><a href="./comptext.php?id=20">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento20 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento20Marker.addListener('click', function() {
    infoEvento20.open(map, locacionEvento20Marker);
  });


  
  var locacionEvento22 = new google.maps.LatLng(32.221743, -110.926479);

  var locacionEvento22Marker = new google.maps.Marker({
      position: locacionEvento22,
      map: map,
      title:"Evento22",
      icon: uspolice
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Prueba 12</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: US Police</b></div><div><b>Arizona Patrol</b></div><div><b>Lugar: Estados Unidos, Arizona, Tucson</b></div><div><b>2016-03-12</b></div>'+
      '<p>Resumen<div><a href="./comptext.php?id=22">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento22 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento22Marker.addListener('click', function() {
    infoEvento22.open(map, locacionEvento22Marker);
  });


  
  var locacionEvento23 = new google.maps.LatLng(27.242955, -100.125983);

  var locacionEvento23Marker = new google.maps.Marker({
      position: locacionEvento23,
      map: map,
      title:"Evento23",
      icon: narc
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Santo</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Narco</b></div><div><b>Los Chilorios</b></div><div><b>Lugar: Mexico, Nuevo Leon, Anahuac</b></div><div><b>2016-01-21</b></div>'+
      '<p>Terrible acontecimiento lamentable concecuencia de la mamada esta<div><a href="./comptext.php?id=23">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento23 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento23Marker.addListener('click', function() {
    infoEvento23.open(map, locacionEvento23Marker);
  });


  
  var locacionEvento24 = new google.maps.LatLng(34.048928, -111.093731);

  var locacionEvento24Marker = new google.maps.Marker({
      position: locacionEvento24,
      map: map,
      title:"Evento24",
      icon: mxpolice
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">hola muncies</h1>'+
      '<div id=bodyContent>'+
      '<div><b>Grupo: Polic�a MX</b></div><div><b></b></div><div><b>Lugar: Estados Unidos, Arizona, La caga</b></div><div><b>2015-12-08</b></div>'+
      '<p>asjkbcad<div><a href="./comptext.php?id=24">Noticia Completa</div>'+
      '</div>'+
      '</div>';

  var infoEvento24 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento24Marker.addListener('click', function() {
    infoEvento24.open(map, locacionEvento24Marker);
  });


  

  //---------FIN PARTE GENERADA--------//
    
    google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);