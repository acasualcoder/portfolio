$( document ).ready(function() {

  $(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 20) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery page scrolling feature using jQuery Easing plugin
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 600, 'easeInOutExpo');
    event.preventDefault();
  });

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function(event) {
  if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
  });


  /* Lightbox - Magnific Popup */
$('.popup-with-move-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
  });


  /* Filter - Isotope */
  var $grid = $('.grid').isotope({
      // options
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
  });

  // filter items on button click
  $('.filters-button-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });


});
