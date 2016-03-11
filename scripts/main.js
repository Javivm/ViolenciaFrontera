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
    
    var locacionEvento4 = new google.maps.LatLng(31.761878, -106.485022);

    var locacionEvento4Marker = new google.maps.Marker({
        position: locacionEvento4,
        map: map,
        title:"Evento4",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Se hechan unos tacos</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Policía MX</b></div><div><b>Policia Judicial</b></div><div><b>Lugar: Estados Unidos, Texas, El Paso</b></div><div><b>2015-12-08</b></div>'+
        '<p>Desidieron hacer posole tradicional<div><a href="./comptext.php?id=4">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento4 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento4Marker.addListener('click', function() {
      infoEvento4.open(map, locacionEvento4Marker);
    });


    
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
        '<div><b>Grupo: Otros</b></div><div><b>Los Polleros de Molcahete</b></div><div><b>Lugar: México, Chiuahua, Ciudad Juarez</b></div><div><b>2015-12-21</b></div>'+
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


    
    var locacionEvento9 = new google.maps.LatLng(31.305542, -110.933762);

    var locacionEvento9Marker = new google.maps.Marker({
        position: locacionEvento9,
        map: map,
        title:"Evento9",
        icon: mxpolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba Color</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Policía MX</b></div><div><b>Policia Judicial</b></div><div><b>Lugar: Estados Unidos, Sonora, Heroica Nogales</b></div><div><b>2015-12-11</b></div>'+
        '<p>si sirve it is going to ba mazing<div><a href="./comptext.php?id=9">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento9 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento9Marker.addListener('click', function() {
      infoEvento9.open(map, locacionEvento9Marker);
    });


    
    var locacionEvento10 = new google.maps.LatLng(32.233713, -110.931702);

    var locacionEvento10Marker = new google.maps.Marker({
        position: locacionEvento10,
        map: map,
        title:"Evento10",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Los Gabachos</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: US Police</b></div><div><b>Topawa Rangers</b></div><div><b>Lugar: Estados Unidos, Arizona, Tucson</b></div><div><b>2015-06-09</b></div>'+
        '<p>Bunch of redneck persecuting wetbacks<div><a href="./comptext.php?id=10">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento10 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento10Marker.addListener('click', function() {
      infoEvento10.open(map, locacionEvento10Marker);
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
        '<div><b>Grupo: Border Patrol</b></div><div><b>Winnies</b></div><div><b>Lugar: México, Baja California, Tecate</b></div><div><b>2015-12-15</b></div>'+
        '<p>Oscar Mayer hiso salchichas a 23 personas<div><a href="./comptext.php?id=13">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento13 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento13Marker.addListener('click', function() {
      infoEvento13.open(map, locacionEvento13Marker);
    });


    
    var locacionEvento16 = new google.maps.LatLng(35.085334, -106.605553);

    var locacionEvento16Marker = new google.maps.Marker({
        position: locacionEvento16,
        map: map,
        title:"Evento16",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba15</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Policï¿½a MX</b></div><div><b></b></div><div><b>Lugar: Estados Unidos, New Mexico, Albuquerque</b></div><div><b>2016-01-21</b></div>'+
        '<p>Probano ya lo de credentials<div><a href="./comptext.php?id=16">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento16 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento16Marker.addListener('click', function() {
      infoEvento16.open(map, locacionEvento16Marker);
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


    
    var locacionEvento19 = new google.maps.LatLng(29.297225, -110.330881);

    var locacionEvento19Marker = new google.maps.Marker({
        position: locacionEvento19,
        map: map,
        title:"Evento19",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Se tropezo</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Policï¿½a MX</b></div><div><b></b></div><div><b>Lugar: México, Sonora, El Chile</b></div><div><b>0000-00-00</b></div>'+
        '<p>saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=19">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento19 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento19Marker.addListener('click', function() {
      infoEvento19.open(map, locacionEvento19Marker);
    });


    
    var locacionEvento20 = new google.maps.LatLng(29.297225, -110.330881);

    var locacionEvento20Marker = new google.maps.Marker({
        position: locacionEvento20,
        map: map,
        title:"Evento20",
        icon: borderpatrol
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Se tropezo</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: Policï¿½a MX</b></div><div><b></b></div><div><b>Lugar: México, Sonora, El Chile</b></div><div><b>0000-00-00</b></div>'+
        '<p>saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=20">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento20 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento20Marker.addListener('click', function() {
      infoEvento20.open(map, locacionEvento20Marker);
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
        '<h1 id="firstHeading" class="firstHeading">Javier</h1>'+
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


    
    var locacionEvento22 = new google.maps.LatLng(19.246470, -99.101350);

    var locacionEvento22Marker = new google.maps.Marker({
        position: locacionEvento22,
        map: map,
        title:"Evento22",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: PolicÃ­a MX</b></div><div><b>subg</b></div><div><b>Lugar: México, Baja California, Distrito Federal</b></div><div><b>2012-02-02</b></div>'+
        '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=22">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento22 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento22Marker.addListener('click', function() {
      infoEvento22.open(map, locacionEvento22Marker);
    });


    
    var locacionEvento23 = new google.maps.LatLng(19.246470, -99.101350);

    var locacionEvento23Marker = new google.maps.Marker({
        position: locacionEvento23,
        map: map,
        title:"Evento23",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: PolicÃ­a MX</b></div><div><b>subg</b></div><div><b>Lugar: México, Baja California, Distrito Federal</b></div><div><b>2012-02-02</b></div>'+
        '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=23">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento23 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento23Marker.addListener('click', function() {
      infoEvento23.open(map, locacionEvento23Marker);
    });


    
    var locacionEvento24 = new google.maps.LatLng(19.246470, -99.101350);

    var locacionEvento24Marker = new google.maps.Marker({
        position: locacionEvento24,
        map: map,
        title:"Evento24",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: PolicÃ­a MX</b></div><div><b>subg</b></div><div><b>Lugar: México, Baja California, Distrito Federal</b></div><div><b>2012-02-02</b></div>'+
        '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=24">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento24 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento24Marker.addListener('click', function() {
      infoEvento24.open(map, locacionEvento24Marker);
    });


    
    var locacionEvento25 = new google.maps.LatLng(19.246470, -99.101350);

    var locacionEvento25Marker = new google.maps.Marker({
        position: locacionEvento25,
        map: map,
        title:"Evento25",
        icon: uspolice
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Prueba</h1>'+
        '<div id=bodyContent>'+
        '<div><b>Grupo: PolicÃ­a MX</b></div><div><b>subg</b></div><div><b>Lugar: México, Baja California, Distrito Federal</b></div><div><b>2012-02-02</b></div>'+
        '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<div><a href="./comptext.php?id=25">Noticia Completa</div>'+
        '</div>'+
        '</div>';

    var infoEvento25 = new google.maps.InfoWindow({
      content: contentString
    });


    locacionEvento25Marker.addListener('click', function() {
      infoEvento25.open(map, locacionEvento25Marker);
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
        '<div><b>Grupo: US Police</b></div><div><b>a</b></div><div><b>Lugar: México, Baja California, 213</b></div><div><b>0000-00-00</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>ckla</b></div><div><b>Lugar: México, Baja California, lkcsna</b></div><div><b>2016-01-22</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>asdf</b></div><div><b>Lugar: México, Baja California, fas</b></div><div><b>2001-01-01</b></div>'+
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
        '<div><b>Grupo: US Police</b></div><div><b>asdf</b></div><div><b>Lugar: México, Baja California, fas</b></div><div><b>2001-01-01</b></div>'+
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


    

    //---------FIN PARTE GENERADA--------//
      
       google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);