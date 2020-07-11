$('.burger').click(() => {
    $('.burger__line').toggleClass("burger__line--open");
    $(".nav__list").toggleClass("nav__list--open");
});

$('.nav__link').click(() => {
  $('.burger__line').toggleClass("burger__line--open");
  $(".nav__list").toggleClass("nav__list--open");
})

//from: https://codepen.io/Danielgroen/pen/VeRPOq
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["Hi, <br> I'm Robert Arias."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      

      if (i < (text.length)) {

        if ((text.substring(i, i+1).localeCompare("<")) != 0) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class="ticking" aria-hidden="true"></span>';
            // wait for a while and call this function again for next character
        }

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
});

//from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]').click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});