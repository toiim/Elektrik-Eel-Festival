$(document).ready(function(){
    $('nav').css({height:'0em'}); // this sets the height to zero, so that the effect is visisble, since the nav height already set to 3em in the css by default
    $('nav').ready(function(){
      menuSlide(); // basically when the nav item is loaded, it calls the function menuSlide
    });
    $('.switch').click(function()
    {
      $('nav ul').css({display:'block'});
    });
  });

function menuSlide()
  {
    $('nav').animate({height:'3.5em'},200).animate({height:'3em'},100); // menuSlide animates the height changing to 3em over 300 milliseconds with a bit of a bounce because of the initial 3.5em
  }

