
export const loadHomePage = () => {
    const container = document.getElementById("content")

    const homeContainer = document.createElement("div")
    homeContainer.className = "home_page"

    const headText = document.createElement("h1")
    headText.textContent = "Wellcome to Xanh-Authetical Vietnamese Cuisine"
    homeContainer.appendChild(headText)

    const containerText = document.createElement("p")
    containerText.textContent = "Discover the vibrant flavors of Vietnam with our carefully crafted dishes, from warm bowls of Phở to fresh Gỏi Cuốn and flavorful Bánh Mì. At Xanh, we bring the heart of Vietnamese tradition to your table, offering a true taste of culture and connection."
    homeContainer.appendChild(containerText)

    const footText = document.createElement("h3")
    footText.textContent = "Savor the essence of Vietnam, one bite at a time"
    homeContainer.appendChild(footText)

    container.appendChild(homeContainer)
}

