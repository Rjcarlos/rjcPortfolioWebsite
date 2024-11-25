var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


function parallax(){
  var prlx_lyr_1 =document.getElementById('prlx_lyr_1');
  prlx_lyr_1.style.top = -(window.pageYOffset / 4)+'px';
}
window.addEventListener("scroll", parallax, false);
