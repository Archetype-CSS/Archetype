(function(){
  // remove modernizr js class
  $('body').removeClass('no-js');
  // set variables
  var navSlide = $('.nav--slide'),
    menuLink = $('.menu-link'),
    container = $('.container'),
    menuButton = $('.menu-button');

  // toggle active state on click
  menuButton.on('click', function(e) {
    menuButton.toggleClass('is-active'); 
    menuLink.toggleClass('is-active');
    navSlide.toggleClass('is-active');
    container.toggleClass('is-slide');
    e.preventDefault();
  });
  // remove active state on window re-size
  $(window).resize(function(){
    menuButton.removeClass('is-active');
    menuLink.removeClass('is-active');
    navSlide.removeClass('is-active');
    container.removeClass('is-slide');
    e.preventDefault();
  });

}()); 


