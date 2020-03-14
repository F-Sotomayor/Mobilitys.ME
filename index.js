const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const preBtn = document.getElementById("btnPrev");
const nextBtn = document.getElementById("btnNext");
const spanTitle = document.getElementById("dynamicSpanTitle");
const title = document.getElementById("dynamicTitle");

let counter = 0;

const size = carouselImages[0].clientWidth;

nextBtn.addEventListener("click", ()=> {
    if (counter>1) return;
carouselSlide.style.transition = "transform 0.4s ease-in-out";
counter++;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});
preBtn.addEventListener("click", ()=> {
    if (counter<1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    });