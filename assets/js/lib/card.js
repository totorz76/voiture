import { cars } from "../../catalogue/catalogue.js"

let result = document.getElementById("result");
const articles = document.getElementById("articles");

cars.forEach(car => {
    result.textContent = `${cars.length} résultats`;
    const article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = 
    `<div>
        <i class="fa-solid fa-caret-left"></i>
        <img src="./assets/img/${car.image}" alt="${car.nom}">
        <i class="fa-solid fa-caret-right"></i>
    </div>
    <div>
        <h2>${car.nom}</h2> 
        <p>${car.description}</p>
        <p>${car.prix}</p>
        <p>${car.vendeur}</p>
        <button>Reserver et Payer</button>
    <div>`;     
    articles.append(article);
});


export { articles }