//click on menu burger(when closed)
$('.burger').click(() => {
    $('.burger__line').toggleClass('burger__line--open');
    $('.nav__list').toggleClass('nav__list--open');
});

//click on menu close button
$('.nav__link').click(() => {
  $('.burger__line').toggleClass('burger__line--open');
  $('.nav__list').toggleClass('nav__list--open');
})

//reveal animation
const sr = ScrollReveal( { reset: true });
sr.reveal('article', { duration: 2000 });

//from: https://codepen.io/Danielgroen/pen/VeRPOq
//text writer animation
$(document).on('DOMContentLoaded', () => {
  // array with texts to type in typewriter
  const dataText = ["Hi, <br> I'm Robert Arias."];
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  const typeWriter = (text, i, fnCallback) => {
    // check if text isn't finished yet
    if (i < (text.length)) {
      if ((text.substring(i, i+1).localeCompare("<")) != 0) {
          // add next character to h1
          $('.landing-page__title').html(text.substring(0, i+1) +'<span class="ticking" aria-hidden="true"></span>');
          // wait for a while and call this function again for next character
      }
      setTimeout(() => {
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
   const StartTextAnimation = (i) => {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(() => {
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
//smooth animation
// Select all links with hashes
$('a[href*="#"]').click(function(event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

$('.contact-form__btn').on('click', () => {
  const message = $('#contactForm').serialize();
  $.ajax( {
    type: 'POST',
    url: 'https://formspree.io/xoqwzlwn',
    data: { message: message },
    dataType: 'json'
  });
  $('.contact-alert').show();
  return false;
})