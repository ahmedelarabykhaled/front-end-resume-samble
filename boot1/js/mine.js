


var typed = new Typed('#typed', {
    strings: ['web design','web development'],
    loop: true,
    typeSpeed: 50
  });


$('.first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 3,
})

// second carousel
$('.second').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
});



var about = $('.block2').position();
var services = $('.block3').position();
var works = $('.block5').position();
var blog = $('.block6').position();
var contact = $('.block8').position();

// determin which div on scroll and take action on navbar
$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    // console.log(scrollPos);
    if (scrollPos < about.top) {
    	$('.navbar').css('position','relative');
    	$('.navbar').removeClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#home').addClass('active');
    }


    if (scrollPos > about.top && scrollPos < services.top) {
    	$('.navbar').css('position','fixed');
    	$('.navbar-expand-lg').css('width','100%');
    	$('.prop').css('left','0px');
    	$('.navbar').addClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#about').addClass('active');
    }


    if (scrollPos > services.top && scrollPos < works.top) {
    	$('.navbar').css('position','fixed','z-index','1000');
    	$('.navbar-expand-lg').css('width','100%');
    	$('.prop').css('left','0px');
    	$('.navbar').addClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#services').addClass('active');
    }

    if (scrollPos >= works.top && scrollPos < blog.top) {
    	$('.navbar').css('position','fixed','z-index','1000');
    	$('.navbar-expand-lg').css('width','100%');
    	$('.prop').css('left','0px');
    	$('.navbar').addClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#works').addClass('active');
    }


    if (scrollPos >= blog.top && scrollPos < contact.top) {
    	$('.navbar').css('position','fixed','z-index','1000');
    	$('.navbar-expand-lg').css('width','100%');
    	$('.prop').css('left','0px');
    	$('.navbar').addClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#blog').addClass('active');
    }

    if (scrollPos > contact.top) {
    	$('.navbar').css('position','fixed','z-index','1000');
    	$('.navbar-expand-lg').css('width','100%');
    	$('.prop').css('left','0px');
    	$('.navbar').addClass('prop');
    	$('.navbar-nav li').removeClass('active');
    	$('#contact').addClass('active');
    }    
})

// smoothy scroll for every div
$(document).ready(function(){
  $(".block1 .navbar-nav .nav-item a").on('click', function(event) {
    object = {Home:'block1' , About:'block2' , Services:'block3',Works:'block5',Blog:'block6',Contact:'block8'} ;
    if (this.innerHTML !== "") {
      event.preventDefault();
      var hash = object[this.innerHTML];
      $('html, body').animate({
        scrollTop: $("."+hash).offset().top +1
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});






