
export const loadHomePage = function() {
    const container = document.getElementById("content")

    const backgroudnImage = document.createElement("img")
    backgroudnImage.src = "./img/home.jpg"
    backgroudnImage.alt = "background"
    container.appendChild(backgroudnImage)

    const headText = document.createElement("h1")
    headText.textContent = "Wellcome to Xanh-Authetical Vietnamese Cuisine"
    container.appendChild(headText)

    const containerText = document.createElement("p")
    containerText.textContent = "Discover the vibrant flavors of Vietnam with our carefully crafted dishes, from warm bowls of Phở to fresh Gỏi Cuốn and flavorful Bánh Mì. At Xanh, we bring the heart of Vietnamese tradition to your table, offering a true taste of culture and connection."
    container.appendChild(containerText)

    const footText = document.createElement("h3")
    footText.textContent = "Savor the essence of Vietnam, one bite at a time"
    container.appendChild(footText)
}

