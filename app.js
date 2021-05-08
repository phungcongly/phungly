// document.addEventListener("scroll", handleScroll);
// // get a reference to our predefined button
// var scrollToTopBtn = document.getElementById('button');

// function handleScroll() {

//   if (document.documentElement.scrollTop > 200) {
//     //show button
//     scrollToTopBtn.style.display = "block";
//   } else {
//     //hide button
//     scrollToTopBtn.style.display = "none";
//   }
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);
// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

