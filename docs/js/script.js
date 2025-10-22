
let currentIndex = 0;

const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

const indicator = document.getElementById('slide-indicator');


function updateSlide() {
  slides.style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
  indicator.textContent = '第 ' + (currentIndex + 1) + ' 張 / 共 ' + totalSlides + ' 張';
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}


function scrollToContent() {
  document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}


setInterval(nextSlide, 4000);


updateSlide();


window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};


document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
