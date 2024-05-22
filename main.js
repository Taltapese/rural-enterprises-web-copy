"use strict";

// =============================================================== Header Nav =============================================================

let ul__li = document.querySelectorAll(".ul__li");
let li__ul = document.querySelectorAll(".li__ul");

function opcionesAboutUs() {
    li__ul[0].classList.remove("li__ul--none");
    li__ul[0].classList.add("li__ul--flex");
}

function removeOpcionesAboutUs() {
    li__ul[0].classList.remove("li__ul--flex");
    li__ul[0].classList.add("li__ul--none");
}

ul__li[1].addEventListener("mouseover",opcionesAboutUs);
ul__li[1].addEventListener("mouseout",removeOpcionesAboutUs);

// =============================================================

let employee = document.querySelector(".li__a--three");

function opcionesEmployee() {
    li__ul[1].classList.remove("li__ul--none");
    li__ul[1].classList.add("li__ul--flex");
}

function removeOpcionesEmployee() {
    li__ul[1].classList.remove("li__ul--flex");
    li__ul[1].classList.add("li__ul--none");
}

ul__li[2].addEventListener("mouseover",opcionesEmployee);
ul__li[2].addEventListener("mouseout",removeOpcionesEmployee);

// =============================================================

let employer = document.querySelector(".li__a--four");

function opcionesEmployer() {
    li__ul[2].classList.remove("li__ul--none");
    li__ul[2].classList.add("li__ul--flex");
}

function removeOpcionesEmployer() {
    li__ul[2].classList.remove("li__ul--flex");
    li__ul[2].classList.add("li__ul--none");
}

ul__li[3].addEventListener("mouseover",opcionesEmployer);
ul__li[3].addEventListener("mouseout",removeOpcionesEmployer);

// =============================================================

let farmJobs = document.querySelector(".li__a--five");

function opcionesFarmJobs() {
    li__ul[3].classList.remove("li__ul--none");
    li__ul[3].classList.add("li__ul--flex");
}

function removeOpcionesFarmJobs() {
    
    li__ul[3].classList.remove("li__ul--flex");
    li__ul[3].classList.add("li__ul--none");
}

ul__li[4].addEventListener("mouseover",opcionesFarmJobs);
ul__li[4].addEventListener("mouseout",removeOpcionesFarmJobs);

// ===================================================== Carousel =================================================

let angleLeft = document.querySelector(".fa-angle-left");
let angleRight = document.querySelector(".fa-angle-right");

let imgActual = 0;

function cambiarImagenHaciaIzquierda() {
    imgActual--;
    cambiarImagen();
}

function cambiarImagenHaciaDerecha() {
    imgActual++;
    cambiarImagen();
}

function cambiarImagenAutomatico(){
    imgActual++;
    cambiarImagen();
}

function cambiarImagen(){
    if(imgActual == -1){
        imgActual = 7;
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Vineyard Australia.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">RURAL RECRUITMENT</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 0){
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australia Farm Job.jpeg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">WORKING IN AUSTRALIA</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 1) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australian Farm 3.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">FARMING JOBS AUSTRALIA</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 2) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australian Farm 6.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">FARM WORKERS</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 3) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australian Farm 7.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">RURAL RECRUITMENT</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 4) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australian Farm.jpeg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">WORKING IN AUSTRALIA</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 5) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Farm Job Australia.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">FARMING JOBS AUSTRALIA</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 6) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Planting Australian Farm.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">FARM WORKERS</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 7) {
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Vineyard Australia.jpg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">RURAL RECRUITMENT</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    } else if (imgActual == 8) {
        imgActual = 0;
        let carouselDivImg = document.querySelector(".carousel__div--img");
        carouselDivImg.innerHTML = `<img src="Imagenes/Australia Farm Job.jpeg" alt="Img carousel" class="carousel--img">`;
        let carouselDivText = document.querySelector(".carousel__div--text");
        carouselDivText.innerHTML = `<p class="carousel--p">WORKING IN AUSTRALIA</p>`
        clearInterval(temporizador);
        temporizador = setInterval(cambiarImagenAutomatico,20000);
    }
}

angleLeft.addEventListener("click",cambiarImagenHaciaIzquierda);
angleRight.addEventListener("click",cambiarImagenHaciaDerecha);

var temporizador = setInterval(cambiarImagenAutomatico,20000);

// =======================   Jobs Left Carousel ==========================================

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".carousel--angle--jobs");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// ======================== Google Maps Api ==================================

function iniciarMap(){
    var coord = {lat:-25.274398 ,lng: 133.775136};
    var map = new google.maps.Map(document.querySelector('.maps'),{
      zoom: 4,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

// =======================   Jobs Box ==========================================

let boxOne = document.querySelector(".box--one");

function boxOneIn(){
    boxOne.classList.add("box--one--in");
    boxOne.classList.remove("box--one--out");
}

function boxOneOut(){
    boxOne.classList.add("box--one--out");
    boxOne.classList.remove("box--one--in");
}

boxOne.addEventListener("mouseover",boxOneIn);
boxOne.addEventListener("mouseout",boxOneOut);

// ==========================================

let boxTwo = document.querySelector(".box--two");

function boxTwoIn(){
    boxTwo.classList.add("box--two--in");
    boxTwo.classList.remove("box--two--out");
}

function boxTwoOut(){
    boxTwo.classList.add("box--two--out");
    boxTwo.classList.remove("box--two--in");
}

boxTwo.addEventListener("mouseover",boxTwoIn);
boxTwo.addEventListener("mouseout",boxTwoOut);

// ==========================================

let boxThree = document.querySelector(".box--three");

function boxThreeIn(){
    boxThree.classList.add("box--three--in");
    boxThree.classList.remove("box--three--out");
}

function boxThreeOut(){
    boxThree.classList.add("box--three--out");
    boxThree.classList.remove("box--three--in");
}

boxThree.addEventListener("mouseover",boxThreeIn);
boxThree.addEventListener("mouseout",boxThreeOut);

// ==========================================

let boxFour = document.querySelector(".box--four");

function boxFourIn(){
    boxFour.classList.add("box--four--in");
    boxFour.classList.remove("box--four--out");
}

function boxFourOut(){
    boxFour.classList.add("box--four--out");
    boxFour.classList.remove("box--four--in");
}

boxFour.addEventListener("mouseover",boxFourIn);
boxFour.addEventListener("mouseout",boxFourOut);

// ================================================== Scroll Animation ======================== 

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
        }
    });
});

const hiddenElements = document.querySelectorAll(`.hidden`);
hiddenElements.forEach((el) => observer.observe(el));