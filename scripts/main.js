//Maps entro
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
    
    var locacionEvento5 = new google.maps.LatLng(31.690364, -106.424548);

    var locacionEvento5Marker = new google.maps.Marker({
        position: locacionEvento5,
        map: map,
        title:"Evento5",
        icon: other
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Se les caen los pollos</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Otros</b></div><div><b>Los Polleros de Molcahete</b></div><div><b>Lugar: MÈxico, Chiuahua, Ciudad Juarez</b></div><div><b>2015-12-21</b></div>'+
        '<p>Se cayeron los polleros con sus pollos<div><a href="./comptext.php?id=5">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento5 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento5Marker.addListener('click', function() {
      infoEvento5.open(map, locacionEvento5Marker);
    });


    
    var locacionEvento6 = new google.maps.LatLng(32.715738, -117.161084);

    var locacionEvento6Marker = new google.maps.Marker({
        position: locacionEvento6,
        map: map,
        title:"Evento6",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Whoop</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Border Patrol</b></div><div><b>TheyTookOurJobs</b></div><div><b>Lugar: Estados Unidos, California, San Diego</b></div><div><b>2015-12-11</b></div>'+
        '<p>tey took our jobs<div><a href="./comptext.php?id=6">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento6 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento6Marker.addListener('click', function() {
      infoEvento6.open(map, locacionEvento6Marker);
    });


    
    var locacionEvento11 = new google.maps.LatLng(31.858897, -112.840576);

    var locacionEvento11Marker = new google.maps.Marker({
        position: locacionEvento11,
        map: map,
        title:"Evento11",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">FBI drug bust</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>FBI </b></div><div><b>Lugar: Estados Unidos, Sonora, Sonorita</b></div><div><b>2015-12-10</b></div>'+
        '<p>Cacharon la droga<div><a href="./comptext.php?id=11">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento11 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento11Marker.addListener('click', function() {
      infoEvento11.open(map, locacionEvento11Marker);
    });


    
    var locacionEvento12 = new google.maps.LatLng(27.530567, -99.480324);

    var locacionEvento12Marker = new google.maps.Marker({
        position: locacionEvento12,
        map: map,
        title:"Evento12",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lared Turbo Enfierrado</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Border Patrol</b></div><div><b>- </b></div><div><b>Lugar: Estados Unidos, Texas, Laredo</b></div><div><b>0000-00-00</b></div>'+
        '<p>Paso esto y esto y chale<div><a href="./comptext.php?id=12">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento12 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento12Marker.addListener('click', function() {
      infoEvento12.open(map, locacionEvento12Marker);
    });


    
    var locacionEvento13 = new google.maps.LatLng(32.559546, -116.633606);

    var locacionEvento13Marker = new google.maps.Marker({
        position: locacionEvento13,
        map: map,
        title:"Evento13",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Los Hochos</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Border Patrol</b></div><div><b>Winnies</b></div><div><b>Lugar: MÈxico, Baja California, Tecate</b></div><div><b>2015-12-15</b></div>'+
        '<p>Oscar Mayer hiso salchichas a 23 personas<div><a href="./comptext.php?id=13">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento13 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento13Marker.addListener('click', function() {
      infoEvento13.open(map, locacionEvento13Marker);
    });


    
    var locacionEvento18 = new google.maps.LatLng(32.776664, -96.796988);

    var locacionEvento18Marker = new google.maps.Marker({
        position: locacionEvento18,
        map: map,
        title:"Evento18",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba </h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Border Patrol</b></div><div><b>Texas Longhorns</b></div><div><b>Lugar: Estados Unidos, Texas, Dallas</b></div><div><b>2015-12-15</b></div>'+
        '<p>Resumen<div><a href="./comptext.php?id=18">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento18 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento18Marker.addListener('click', function() {
      infoEvento18.open(map, locacionEvento18Marker);
    });


    
    var locacionEvento21 = new google.maps.LatLng(33.448377, -112.074037);

    var locacionEvento21Marker = new google.maps.Marker({
        position: locacionEvento21,
        map: map,
        title:"Evento21",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jorge</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>Pheonix</b></div><div><b>Lugar: Estados Unidos, Arizona, Pheonix</b></div><div><b>0000-00-00</b></div>'+
        '<p>Resumen de l anoticia<div><a href="./comptext.php?id=21">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento21 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento21Marker.addListener('click', function() {
      infoEvento21.open(map, locacionEvento21Marker);
    });


    
    var locacionEvento26 = new google.maps.LatLng(999.999999, 432.000000);

    var locacionEvento26Marker = new google.maps.Marker({
        position: locacionEvento26,
        map: map,
        title:"Evento26",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lanix</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>a</b></div><div><b>Lugar: MÈxico, Baja California, 213</b></div><div><b>0000-00-00</b></div>'+
        '<p>dascsdac<div><a href="./comptext.php?id=26">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento26 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento26Marker.addListener('click', function() {
      infoEvento26.open(map, locacionEvento26Marker);
    });


    
    var locacionEvento27 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento27Marker = new google.maps.Marker({
        position: locacionEvento27,
        map: map,
        title:"Evento27",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=27">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento27 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento27Marker.addListener('click', function() {
      infoEvento27.open(map, locacionEvento27Marker);
    });


    
    var locacionEvento28 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento28Marker = new google.maps.Marker({
        position: locacionEvento28,
        map: map,
        title:"Evento28",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=28">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento28 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento28Marker.addListener('click', function() {
      infoEvento28.open(map, locacionEvento28Marker);
    });


    
    var locacionEvento30 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento30Marker = new google.maps.Marker({
        position: locacionEvento30,
        map: map,
        title:"Evento30",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=30">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento30 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento30Marker.addListener('click', function() {
      infoEvento30.open(map, locacionEvento30Marker);
    });


    
    var locacionEvento31 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento31Marker = new google.maps.Marker({
        position: locacionEvento31,
        map: map,
        title:"Evento31",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=31">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento31 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento31Marker.addListener('click', function() {
      infoEvento31.open(map, locacionEvento31Marker);
    });


    
    var locacionEvento32 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento32Marker = new google.maps.Marker({
        position: locacionEvento32,
        map: map,
        title:"Evento32",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=32">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento32 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento32Marker.addListener('click', function() {
      infoEvento32.open(map, locacionEvento32Marker);
    });


    
    var locacionEvento33 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento33Marker = new google.maps.Marker({
        position: locacionEvento33,
        map: map,
        title:"Evento33",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=33">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento33 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento33Marker.addListener('click', function() {
      infoEvento33.open(map, locacionEvento33Marker);
    });


    
    var locacionEvento34 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento34Marker = new google.maps.Marker({
        position: locacionEvento34,
        map: map,
        title:"Evento34",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=34">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento34 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento34Marker.addListener('click', function() {
      infoEvento34.open(map, locacionEvento34Marker);
    });


    
    var locacionEvento35 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento35Marker = new google.maps.Marker({
        position: locacionEvento35,
        map: map,
        title:"Evento35",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=35">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento35 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento35Marker.addListener('click', function() {
      infoEvento35.open(map, locacionEvento35Marker);
    });


    
    var locacionEvento36 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento36Marker = new google.maps.Marker({
        position: locacionEvento36,
        map: map,
        title:"Evento36",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=36">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento36 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento36Marker.addListener('click', function() {
      infoEvento36.open(map, locacionEvento36Marker);
    });


    
    var locacionEvento37 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento37Marker = new google.maps.Marker({
        position: locacionEvento37,
        map: map,
        title:"Evento37",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=37">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento37 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento37Marker.addListener('click', function() {
      infoEvento37.open(map, locacionEvento37Marker);
    });


    
    var locacionEvento38 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento38Marker = new google.maps.Marker({
        position: locacionEvento38,
        map: map,
        title:"Evento38",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=38">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento38 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento38Marker.addListener('click', function() {
      infoEvento38.open(map, locacionEvento38Marker);
    });


    
    var locacionEvento39 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento39Marker = new google.maps.Marker({
        position: locacionEvento39,
        map: map,
        title:"Evento39",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=39">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento39 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento39Marker.addListener('click', function() {
      infoEvento39.open(map, locacionEvento39Marker);
    });


    
    var locacionEvento40 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento40Marker = new google.maps.Marker({
        position: locacionEvento40,
        map: map,
        title:"Evento40",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=40">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento40 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento40Marker.addListener('click', function() {
      infoEvento40.open(map, locacionEvento40Marker);
    });


    
    var locacionEvento41 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento41Marker = new google.maps.Marker({
        position: locacionEvento41,
        map: map,
        title:"Evento41",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=41">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento41 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento41Marker.addListener('click', function() {
      infoEvento41.open(map, locacionEvento41Marker);
    });


    
    var locacionEvento42 = new google.maps.LatLng(999.999999, 999.999999);

    var locacionEvento42Marker = new google.maps.Marker({
        position: locacionEvento42,
        map: map,
        title:"Evento42",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hola mUndo 32</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: MÈxico, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
        '<p>sadc asd <div><a href="./comptext.php?id=42">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento42 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento42Marker.addListener('click', function() {
      infoEvento42.open(map, locacionEvento42Marker);
    });


    
    var locacionEvento43 = new google.maps.LatLng(9.000000, 9.000000);

    var locacionEvento43Marker = new google.maps.Marker({
        position: locacionEvento43,
        map: map,
        title:"Evento43",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba<Crea</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>asdf</b></div><div><b>Lugar: MÈxico, Baja California, fas</b></div><div><b>2001-01-01</b></div>'+
        '<p>afasdf<div><a href="./comptext.php?id=43">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento43 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento43Marker.addListener('click', function() {
      infoEvento43.open(map, locacionEvento43Marker);
    });


    
    var locacionEvento44 = new google.maps.LatLng(9.000000, 9.000000);

    var locacionEvento44Marker = new google.maps.Marker({
        position: locacionEvento44,
        map: map,
        title:"Evento44",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba<Crea</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>asdf</b></div><div><b>Lugar: MÈxico, Baja California, fas</b></div><div><b>2001-01-01</b></div>'+
        '<p>afasdf<div><a href="./comptext.php?id=44">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento44 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento44Marker.addListener('click', function() {
      infoEvento44.open(map, locacionEvento44Marker);
    });


    
    var locacionEvento45 = new google.maps.LatLng(29.760427, -95.369803);

    var locacionEvento45Marker = new google.maps.Marker({
        position: locacionEvento45,
        map: map,
        title:"Evento45",
        icon: narc
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Dani No se</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Narco</b></div><div><b>No</b></div><div><b>Lugar: Estados Unidos, Texas, Houston</b></div><div><b>2016-10-10</b></div>'+
        '<p>La austrica fue reportada<div><a href="./comptext.php?id=45">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento45 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento45Marker.addListener('click', function() {
      infoEvento45.open(map, locacionEvento45Marker);
    });


    
    var locacionEvento46 = new google.maps.LatLng(32.524947, -117.048247);

    var locacionEvento46Marker = new google.maps.Marker({
        position: locacionEvento46,
        map: map,
        title:"Evento46",
        icon: narc
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Holi</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Narco</b></div><div><b>Antrax</b></div><div><b>Lugar: MÈxico, Baja California, Tijuana</b></div><div><b>2016-03-09</b></div>'+
        '<p>Peque√±o abstract de la noticia<div><a href="./comptext.php?id=46">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento46 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento46Marker.addListener('click', function() {
      infoEvento46.open(map, locacionEvento46Marker);
    });


    
    var locacionEvento48 = new google.maps.LatLng(28.632996, -106.069100);

    var locacionEvento48Marker = new google.maps.Marker({
        position: locacionEvento48,
        map: map,
        title:"Evento48",
        icon: narc
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jorge Paredes</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Narco</b></div><div><b>Los Jorgys</b></div><div><b>Lugar: MÈxico, Chihuahua, kjsadb</b></div><div><b>2016-03-14</b></div>'+
        '<p>khdfbsvdskdflfskljbfjn<div><a href="./comptext.php?id=48">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento48 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento48Marker.addListener('click', function() {
      infoEvento48.open(map, locacionEvento48Marker);
    });


    
    var locacionEvento55 = new google.maps.LatLng(29.072967, -110.955919);

    var locacionEvento55Marker = new google.maps.Marker({
        position: locacionEvento55,
        map: map,
        title:"Evento55",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba </h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Polic√≠a MX</b></div><div><b></b></div><div><b>Lugar: MÈxico, Sonora, Hermosillo</b></div><div><b>2016-03-22</b></div>'+
        '<p>alsdnc<div><a href="./comptext.php?id=55">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento55 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento55Marker.addListener('click', function() {
      infoEvento55.open(map, locacionEvento55Marker);
    });


    
    var locacionEvento56 = new google.maps.LatLng(32.568584, -116.634697);

    var locacionEvento56Marker = new google.maps.Marker({
        position: locacionEvento56,
        map: map,
        title:"Evento56",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">El Yesco al atque</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Polic√≠a MX</b></div><div><b></b></div><div><b>Lugar: Estados Unidos, Baja California, Tijuana</b></div><div><b>0000-00-00</b></div>'+
        '<p>El yesco ataca de nuevo<div><a href="./comptext.php?id=56">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento56 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento56Marker.addListener('click', function() {
      infoEvento56.open(map, locacionEvento56Marker);
    });


    
    var locacionEvento57 = new google.maps.LatLng(32.568584, -116.634697);

    var locacionEvento57Marker = new google.maps.Marker({
        position: locacionEvento57,
        map: map,
        title:"Evento57",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Yesco</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Polic√≠a MX</b></div><div><b></b></div><div><b>Lugar: MÈxico, Baja California, Tecate</b></div><div><b>0000-00-00</b></div>'+
        '<p>El yesco mata banda<div><a href="./comptext.php?id=57">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento57 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento57Marker.addListener('click', function() {
      infoEvento57.open(map, locacionEvento57Marker);
    });


    
    var locacionEvento58 = new google.maps.LatLng(32.568584, -116.634697);

    var locacionEvento58Marker = new google.maps.Marker({
        position: locacionEvento58,
        map: map,
        title:"Evento58",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Yesco</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Polic√≠a MX</b></div><div><b></b></div><div><b>Lugar: MÈxico, Baja California, Tecate</b></div><div><b>0000-00-00</b></div>'+
        '<p>El yesco mata banda<div><a href="./comptext.php?id=58">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento58 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento58Marker.addListener('click', function() {
      infoEvento58.open(map, locacionEvento58Marker);
    });


    
    var locacionEvento59 = new google.maps.LatLng(32.568584, -116.634697);

    var locacionEvento59Marker = new google.maps.Marker({
        position: locacionEvento59,
        map: map,
        title:"Evento59",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Yesco</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Polic√≠a MX</b></div><div><b></b></div><div><b>Lugar: MÈxico, California, Tecate</b></div><div><b>0000-00-00</b></div>'+
        '<p>El yesco mata banda<div><a href="./comptext.php?id=59">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento59 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento59Marker.addListener('click', function() {
      infoEvento59.open(map, locacionEvento59Marker);
    });


    

    //---------FIN PARTE GENERADA--------//
      
       google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);