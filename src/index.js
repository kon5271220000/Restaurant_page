import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";

loadHomePage()

const mainContent = document.getElementById("content")

document.getElementById("menu").addEventListener("click", () => {
    mainContent.innerHTML = ''
    loadMenuPage()
})