const burger = document.getElementById("burger")
const menuItems = ["Louer une voiture", "Louer un utilitaire", "Réserver un chauffeur", "Découvrez nos agences", "Mon Compte", "Contact"]

burger.addEventListener("click", ()=>{
    if (document.body.contains(document.getElementById("menu"))){
        document.body.removeChild(document.getElementById("menu"))
        burger.classList.remove("active")
        return
    } else {
        burger.classList.add("active")
        const menu = document.createElement("ul")
        menu.id = "menu"
        menuItems.forEach(item => {
            const menuItem = document.createElement("li")
            menuItem.textContent = item
            menu.append(menuItem)
        });
        document.body.append(menu)
    }
})
export {burger};