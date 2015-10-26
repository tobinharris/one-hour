$(function () {
  $('a[href^="#"], a[href^="."]').click(function () { // если в href начинается с # или ., то ловим клик
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(51.636069, -0.407119),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
      mapTypeControl: false,
      zoomControlOptions: {}
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: {lat: 48.466730, lng: 35.043740},
      title: 'Dnipropetrovsk',
      icon: 'images/markerMap.png'
    });
});
