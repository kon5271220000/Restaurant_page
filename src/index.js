import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";
import "./style.css"

loadHomePage()

const mainContent = document.getElementById("content")

document.getElementById("home").addEventListener('click', () => {
    mainContent.innerHTML = ''
    loadHomePage()
})

document.getElementById("menu").addEventListener("click", () => {
    mainContent.innerHTML = ''
    loadMenuPage()
})

document.getElementById("about").addEventListener('click', () => {
    mainContent.innerHTML = ''
    loadAboutPage()
})

