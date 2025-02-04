import phoImg from "./img/pho.jpg"
import goicuonImg from "./img/goicuon.jpg"
import banhmiImg from "./img/banhmi.jpg"
import banhxeoImg from "./img/banhxeo.jpg"
 
export const loadMenuPage = () => {
    const content = document.getElementById("content")

    const container = document.createElement("div")
    container.className = "menu_page"
    
    
    const item1 = createItem("Pho", phoImg, "Vietnam’s iconic noodle soup, a harmonious blend of savory broth, tender beef or chicken, fresh herbs, and delicate rice noodles.")
    item1.addItem(container)
    
    const item2 = createItem("Goi Cuon", goicuonImg, "Fresh Vietnamese spring rolls filled with shrimp, pork, herbs, and rice noodles, wrapped in delicate rice paper and served with a flavorful dipping sauce.")
    item2.addItem(container)

    const item3 = createItem("Banh Mi", banhmiImg, "Vietnam’s beloved baguette sandwich, combining crispy bread with savory meats, fresh vegetables, and tangy sauces for a perfect balance of flavors.")
    item3.addItem(container)

    const item4 = createItem("Banh Xeo", banhxeoImg, "A crispy Vietnamese savory pancake filled with shrimp, pork, bean sprouts, and herbs, served with fresh greens and a tangy dipping sauce.")
    item4.addItem(container)

    content.appendChild(container)

}

function createItem(name, img, descrip){
    function addItem(container){
        const foodCard = document.createElement("div")
        
        const foodImg = document.createElement("img")
        foodImg.src = img
        foodCard.appendChild(foodImg)

        const foodContent = document.createElement("div")

        const foodName = document.createElement("h3")
        foodName.textContent = name
        foodContent.appendChild(foodName)

        const foodDes = document.createElement("p")
        foodDes.textContent = descrip
        foodContent.appendChild(foodDes)

        foodCard.appendChild(foodContent)
        container.appendChild(foodCard)
    }

    return {addItem}
}