//Maps
function initialize() {

  var centroDelMapa = new google.maps.LatLng(31.790278, -106.423333);
  var mapOptions = {
    zoom: 6,
    center: centroDelMapa,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	//---------PARTE GENERADA--------//
		var locacionEvento1 = new google.maps.LatLng(-117.016700, 32.525000);

  var locacionEvento1Marker = new google.maps.Marker({
      position: locacionEvento1,
      map: map,
      title:Evento1,
      //icon: image
  });

  var contentString = '<div id=content>'+
      '<div id=siteNotice>'+
      '</div>'+
      '<h1 id=firstHeading class=firstHeading>Prueba1</h1>'+
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
      '<p>Attribution: Uluru, <a href=https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194>'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento1 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento1Marker.addListener('click', function() {
    infoEvento1.open(map, locacionEvento1Marker);
  });

	var locacionEvento2 = new google.maps.LatLng(32.366101, -117.061755);

  var locacionEvento2Marker = new google.maps.Marker({
      position: locacionEvento2,
      map: map,
      title:Evento2,
      //icon: image
  });

  var contentString = '<div id=content>'+
      '<div id=siteNotice>'+
      '</div>'+
      '<h1 id=firstHeading class=firstHeading>Prueba2</h1>'+
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
      '<p>Attribution: Uluru, <a href=https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194>'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infoEvento2 = new google.maps.InfoWindow({
    content: contentString
  });


  locacionEvento2Marker.addListener('click', function() {
    infoEvento2.open(map, locacionEvento1Marker);
  });

	

	//---------FIN PARTE GENERADA--------//
		
		google.maps.event.trigger(map, 'resize'); 
};

google.maps.event.addDomListener(window, 'load', initialize);