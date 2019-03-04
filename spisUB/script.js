// åpner navbaren
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("div").style.display = "block";
  }
  
// lukker navbaren
  function closeNav() {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("div").style.display = "none";
  }

// automatisk slideshow
const images = ["jonasb", "newagra", "pizzakompaniet", "smak-sans"];

var img = "";
for(let i = 0; i < images.length; i++) {
  img = img + "<img class='imgSlides' src='img/food/carousel/new/" + images[i] + ".jpg' alt='" + images[i] + "'>";
  
}

document.getElementById("visBilder").innerHTML = '<div class="slides">' + img + '</div>';

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("imgSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < images.length; i++) {
    images[i] = images[i].replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  images[slideIndex-1] += " active";
  setTimeout(showSlides, 3000);
}

// Når brukeren scroller på nettsiden skal stickSearch starte.
window.onscroll = function() {stickSearch()};

// henter searchbaren
var searchhold = document.getElementById("searchholder");

// Henter ofset posisjonen til searchbaren
var sticky = searchhold.offsetTop;

// Legger til sticky klassen til searchbaren når brukeren når 'scroll posisjonen'. 
//Fjerner "sticky" når brukeren forlater 'scroll posisjonen'.
function stickSearch() {
  if (window.pageYOffset >= sticky) {
    searchhold.classList.add("sticky")
  } else {
    searchhold.classList.remove("sticky");
  }
}

