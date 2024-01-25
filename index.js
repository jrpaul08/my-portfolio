function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var slideIndexStudentManagement = 1;
var slideIndexProHooperPortal = 1;
var slideIndexMovieWorld = 1;

showSlides('studentManagementSlides', slideIndexStudentManagement);
showSlides('proHooperPortalSlides', slideIndexProHooperPortal);
showSlides('movieWorldSlides', slideIndexMovieWorld);


function plusSlides(slidesId, n) {
  if (slidesId === 'studentManagementSlides') {
    showSlides('studentManagementSlides', slideIndexStudentManagement += n);
  } else if (slidesId === 'proHooperPortalSlides') {
    showSlides('proHooperPortalSlides', slideIndexProHooperPortal += n);
  } else if (slidesId === 'movieWorldSlides') {
    showSlides('movieWorldSlides', slideIndexMovieWorld += n);
  }
  // Add more conditions for other projects if needed
}

function showSlides(slidesId, n) {
  var i;
  var slides = document.getElementById(slidesId).getElementsByClassName("mySlides");
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n - 1].style.display = "block";

  // Update the respective global variable based on the slideshow
  if (slidesId === 'studentManagementSlides') {
    slideIndexStudentManagement = n;
  } else if (slidesId === 'proHooperPortalSlides') {
    slideIndexProHooperPortal = n;
  } else if (slidesId === 'movieWorldSlides') {
    slideIndexMovieWorld = n;
  }
}

const counter = document.querySelector(".counter-number");
async function updateCounter(){
  let response = await fetch("https://3gglqdc7qdauwag7dti5p7o72q0xkfur.lambda-url.ca-central-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = `Views: ${data}`;
}

updateCounter();