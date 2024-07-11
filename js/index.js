const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    hamburger.classList.remove("translate-x-full")
    hamburger.classList.add("translate-x-0")
    closeBtn.classList.add('!block')
    menuBtn.classList.add('!hidden')
    document.body.style.overflow = "hidden"
})

closeBtn.addEventListener("click", () => {
    hamburger.classList.remove("translate-x-0")
    closeBtn.classList.remove('!block')
    menuBtn.classList.remove('!hidden')
    document.body.style.overflow = "auto"
    header.classList.remove("justify-end")
    header.classList.add("justify-between")
})