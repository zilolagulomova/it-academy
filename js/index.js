const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const hamburger = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
    hamburger.classList.remove("translate-x-full")
    hamburger.classList.add("translate-x-0")
})