$(function(){function o(n,e){l=100>a?100:10,setTimeout(function(){console.log(a+=l),37305>a&&o(n,l)},e)}$('a[href^="#"], a[href^="."]').click(function(){var o=$(this).attr("href");return 0!=$(o).length&&$("html, body").animate({scrollTop:$(o).offset().top},500),!1});var n=new google.maps.Map(document.getElementById("mapNetwork"),{center:new google.maps.LatLng(51.636069,-.407119),zoom:9,mapTypeId:google.maps.MapTypeId.ROADMAP,streetViewControl:!0,mapTypeControl:!1,scrollwheel:!1,zoomControlOptions:{}}),e=[{lat:51.547979,lng:-1.779727},{lat:51.456432,lng:-1.045024},{lat:51.823655,lng:-.808591},{lat:51.874123,lng:.151096},{lat:51.895979,lng:.891617},{lat:51.73566,lng:.468263},{lat:51.398098,lng:.836568},{lat:51.850598,lng:-1.761554},{lat:51.528693,lng:-.202793},{lat:51.551644,lng:-.129963},{lat:51.538889,lng:-.057552}];e.forEach(function(o){new google.maps.Marker({map:n,animation:google.maps.Animation.DROP,position:o,icon:"images/markerMap.png"})});var t=new google.maps.Map(document.getElementById("mapContact"),{center:new google.maps.LatLng(53.710215,-1.495679),zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,streetViewControl:!0,scrollwheel:!1,mapTypeControl:!1,zoomControlOptions:{}}),a=(new google.maps.Marker({map:t,animation:google.maps.Animation.DROP,position:{lat:53.710212,lng:-1.49572},icon:"images/marker-contact.png"}),0),l=100;o(a,l)});