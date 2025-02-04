
export const loadAboutPage = () => {
    const content = document.getElementById("content")
    const container = document.createElement("div")
    container.className = "info_page"
    

    addInfo("Address: ", "320, not real str", container)
    addInfo("Phone: ", "555-420-555", container)
    addInfo("Email: ", "notRealEmail@gmail.com", container)
    addInfo("Website: ", "www.notRealWebstite.com", container)
    addOpenInfo(container)

    content.appendChild(container)
}

function addInfo(heading, content, holder){
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    strong.textContent = heading
    p.textContent = content
    div.appendChild(strong)
    div.appendChild(p)
    holder.appendChild(div)
}

function addOpenInfo(container) {
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    strong.textContent = "Opening Hours:"
    p1.textContent = "Monday to Friday: 8am-10pm"
    p2.textContent = "Saturday and Sunday: 8am-2pm"
    div.appendChild(strong)
    div.appendChild(p1)
    div.appendChild(p2)
    container.appendChild(div)
}