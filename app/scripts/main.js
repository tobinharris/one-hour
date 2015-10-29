$(function () {
  $('a[href^="#"], a[href^="."]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    }
    return false;
  });

  var mapNetwork = new google.maps.Map(document.getElementById('mapNetwork'), {
    center: new google.maps.LatLng(51.636069, -0.407119),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    zoomControlOptions: {}
  });

  var markersNetwork = [
    {lat: 51.547979, lng: -1.779727},
    {lat: 51.456432, lng: -1.045024},
    {lat: 51.823655, lng: -0.808591},
    {lat: 51.874123, lng: 0.151096},
    {lat: 51.895979, lng: 0.891617},
    {lat: 51.735660, lng: 0.468263},
    {lat: 51.398098, lng: 0.836568},
    {lat: 51.850598, lng: -1.761554},
    {lat: 51.528693, lng: -0.202793},
    {lat: 51.551644, lng: -0.129963},
    {lat: 51.538889, lng: -0.057552}
  ];
  markersNetwork.forEach(function (market) {
    var markerNetwork = new google.maps.Marker({
      map: mapNetwork,
      animation: google.maps.Animation.DROP,
      position: market,
      icon: 'images/markerMap.png'
    });
  });

  var mapContact = new google.maps.Map(document.getElementById('mapContact'), {
    center: new google.maps.LatLng(53.710215, -1.495679),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    scrollwheel: false,
    mapTypeControl: false,
    zoomControlOptions: {}
  });

  var markerContact = new google.maps.Marker({
    map: mapContact,
    animation: google.maps.Animation.DROP,
    position: {lat: 53.710212, lng: -1.495720},
    icon: 'images/marker-contact.png'
  });



  var amount = 0;
  var speed = 100;

  function doSetTimeout(a, s) {
    speed = amount < 100 ? 100 : 10;

    setTimeout(function () {
      console.log(amount += speed);

      if(amount < 37305) {
        doSetTimeout(a, speed);
      }

    }, s);
  }

  doSetTimeout(amount, speed);


function setDigit (element, digit) {

}



});
