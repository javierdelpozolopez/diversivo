$(function(){
  var $services = $('#services');
  var $services_desc = $('#services-desc');

  var $service1 = $('#service-1');
  var $service1_info = $('#service-1__info, #service-1__info-desc');

  var $service2 = $('#service-2');
  var $service2_info = $('#service-2__info, #service-2__info-desc');

  var $app = $('#app');

  $service1.on('click dbclick', function(){
    $services.addClass('box--off');
    $services_desc.addClass('box--off');
    $service1_info.removeClass('box--off');
    $service2_info.addClass('box--off');
    $app.addClass('services__bg--1');
    $app.removeClass('services__bg--2');
  })

  $service2.on('click dbclick', function(){
    $services.addClass('box--off');
    $services_desc.addClass('box--off');
    $service2_info.removeClass('box--off');
    $service1_info.addClass('box--off');
    $app.addClass('services__bg--2');
    $app.removeClass('services__bg--1');
  })

});
