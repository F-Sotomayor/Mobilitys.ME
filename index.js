const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide > div");
// NAV BUTTONS
const navBtnHome = document.getElementById("btn-home")
const navBtnAbout = document.getElementById("btn-about")
const navBtnProduct = document.getElementById("btn-product")
const navBtnContact = document.getElementById("btn-contact")
const prod1 = document.getElementById("btn1");
const prod2 = document.getElementById("btn2");
const prod3 = document.getElementById("btn3");
const buy = document.getElementById("buy");
const image1 = document.getElementById("img1")
const image2 = document.getElementById("img2")
// SCROLLS TO
const homeSlide = document.querySelector('.carousel-slide')
const aboutSlide = document.querySelector(".aboutpage")
const productSlide = document.querySelector(".product-page")
const contactSlide = document.querySelector(".footer")


const homeContainer = document.querySelector(".carousel-slide")
const preBtn = document.getElementById("btnPrev");
const nextBtn = document.getElementById("btnNext");
const spanTitle = document.getElementById("dynamicSpanTitle");
const title = document.getElementById("dynamicTitle");
const test1 = document.querySelector(".container");
const test2 = document.querySelector(".containerNav");

console.log(test1.clientHeight);
console.log(test2.clientHeight);

test3 = test1.clientHeight + test2.clientHeight;
console.log(test3)



let counter = 0;

prod1.addEventListener("click",handleClickProduct);
prod2.addEventListener("click",handleClickProduct);
prod3.addEventListener("click",handleClickProduct);

function handleBuy(e) {
    window.location.href = "https://articulo.mercadolibre.com.ar/MLA-846092775-led-trainer-entrenamiento-led-marca-mobilitys-me-_JM"
}
buy.addEventListener("click", handleBuy)

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

function handleClickHome(e) {
    homeSlide.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function handleClickAbout(e) {
    aboutSlide.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}
function handleClickProduct(e) {
    productSlide.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function handleClickContact(e) {
    contactSlide.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
navBtnHome.addEventListener("click", handleClickHome);
navBtnAbout.addEventListener("click", handleClickAbout);
navBtnProduct.addEventListener("click", handleClickProduct);
navBtnContact.addEventListener("click", handleClickContact);

function handleHover(e) {
    image1.style.scale = 1.5;
}

image1.addEventListener("mouseenter", handleHover)


