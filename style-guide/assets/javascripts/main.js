(function() {
$('body').removeClass('no-js');

  var navSlide = $('.nav--slide'),
    menulink = $('.menu-link'),
    container = $('.container'),
    menuButton = $('#menuButton');

  menuButton.on('click', function(e) {
    menuButton.toggleClass('is-active');
    navSlide.toggleClass('is-active');
    container.toggleClass('is-slide');
    e.preventDefault();
  });

  $(window).resize(function(e){
    menuButton.removeClass('is-active');
    navSlide.removeClass('is-active');
    container.removeClass('is-slide');
    e.preventDefault();       
  });

})(); 

