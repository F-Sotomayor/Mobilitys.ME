const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide > div");

const preBtn = document.getElementById("btnPrev");
const nextBtn = document.getElementById("btnNext");
const spanTitle = document.getElementById("dynamicSpanTitle");
const title = document.getElementById("dynamicTitle");

let counter = 0;

nextBtn.addEventListener("click", ()=> {
    if (counter >= carouselImages.length - 1) return;
    
    counter++;
    carouselSlide.style.transform = `translateX(-${counter}00vw)`;
});

preBtn.addEventListener("click", ()=> {
    if (counter <= 0) return;

    counter--;
    carouselSlide.style.transform = `translateX(-${counter}00vw)`;
});
