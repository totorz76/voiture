import { cars } from "../../catalogue/catalogue.js"

let result = document.getElementById("result");
const articles = document.getElementById("articles");

cars.forEach((car) => {
    result.textContent = `${cars.length} résultats`;
    const article = document.createElement("article");
    article.classList.add("card");

    let index = 0;

    article.innerHTML = `
    <div class="slider">
      <i class="fa-solid fa-caret-left"></i>
      <img src="./assets/img/${car.image[index]}" alt="${car.nom}">
      <i class="fa-solid fa-caret-right"></i>
    </div>
    <div>
      <h2>${car.nom}</h2> 
      <p>${car.description}</p>
      <p>${car.prix}</p>
      <p>${car.vendeur}</p>
      <button>Réserver et Payer</button>
    </div>
  `;
    articles.append(article);

    const img = article.querySelector("img");
    const next = article.querySelector(".fa-caret-right");
    const prev = article.querySelector(".fa-caret-left");

    next.addEventListener("click", () => {
        index = (index + 1) % car.image.length;
        img.src = `./assets/img/${car.image[index]}`;
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + car.image.length) % car.image.length;
        img.src = `./assets/img/${car.image[index]}`;
    });
});



export { articles }