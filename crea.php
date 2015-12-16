<?php
  
  include"config.php";
  //require_once"HTML/Template/ITX.php";

  $link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
  mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

  $file = fopen("./../scripts/main.js", "w") or die("ERROR: CREATING FILE"); // NO ESTA CREANDO EL ARCHIVO POR ESO LO VOY A PROBAR EN UN ECHO

  //en el fopen si esta solo ./scripts/main.js se tiene que cambiar a ./../scripts/main.js para que sea despues de insertar la parte de creacion

  //PARTE 1 CONSTANTE
  fwrite($file, '//Maps
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

  ');

  //ACCEDER A DB Y GENERAR ARCH DE CORDENADAS
  fwrite($file, "

  //---------PARTE GENERADA--------//
    ");



  $Query = "SELECT ev.idEvento AS idEvento, ev.Titulo AS Titulo, ev.NombrePerpetrador AS NP, g.Nombre AS Grupo, g.Grupo AS GrupoC, g.Descripcion AS GrupoD, t.Categora AS Categoria, p.Nombre AS Pais, e.Nombre AS Estado, m.Nombre AS Municipio, ev.NumVictimas AS NumVictimas, ev.Descripcion AS EventoD, ev.Fecha AS Fecha, ev.TextoCompleto AS Texto, ev.lg AS lng, ev.lt AS lat  FROM Evento ev LEFT JOIN Grupo g USING(idGrupo) LEFT JOIN TiposViolencia t USING(idTiposViolencia) LEFT JOIN Pais p USING(idPais) LEFT JOIN Estado e USING(idEstado) LEFT JOIN Municipio m USING(idMunicipio);";

  $res = mysql_query($Query);
 echo mysql_error($link);
  while($line = mysql_fetch_assoc($res)){


    //---COMPARACION DE GRUPO PARA OBTENER EL COLOR DESEADO----//
    if(strcmp($line['GrupoC'], "Policía MX") == 10752){
        $color = "mxpolice";
    }

    if(strcmp($line['GrupoC'], "US Police") == 0){
      $color = "uspolice";
    }

    if(strcmp($line['GrupoC'], "Narco") == 0){
        $color = "narc";
    }

    if(strcmp($line['GrupoC'], "Border Patrol") == 0){
        $color = "borderpatrol";
    }

    if(strcmp($line['GrupoC'], "Otros") == 0){
      $color = "other";
    }
  
    //---FIN COMPARACION DE GRUPO PARA OBTENER EL COLOR DESEADO----//

    fwrite($file, "
  var locacionEvento".$line['idEvento']." = new google.maps.LatLng(".$line['lng'].", ".$line['lat'].");

  var locacionEvento".$line['idEvento']."Marker = new google.maps.Marker({
      position: locacionEvento".$line['idEvento'].",
      map: map,
      title:".'"Evento'.$line['idEvento'].'"'.",
      icon: ".$color."
  });

  var contentString = '<div id=".'"content"'.">'+
      '<div id=".'"siteNotice"'.">'+
      '</div>'+
      '<h1 id=".'"firstHeading"'." class=".'"firstHeading"'.">".$line['Titulo']."</h1>'+
      '<div id="."bodyContent".">'+
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
      '<p>Attribution: Uluru, <a href=".'"https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"'.">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento".$line['idEvento']." = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento".$line['idEvento']."Marker.addListener('click', function() {
    infoEvento".$line['idEvento'].".open(map, locacionEvento".$line['idEvento']."Marker);
  });


  ");
  }


  fwrite($file, "

  //---------FIN PARTE GENERADA--------//
    
    ");

//PARTE FINAL CONSTANTE
  fwrite($file, "google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);");

  mysql_free_result($res); //LIBERAR RESULTSET
  mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS
    fclose($file); //CERRAR EL ARCHIVO
?>