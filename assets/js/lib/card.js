import { cars } from "../../catalogue/catalogue.js";

const result = document.getElementById("result");
const articles = document.getElementById("articles");
const trieur = document.getElementById("trieur");

let currentIndex = 0;
const batchSize = 10;
let filteredCars = [...cars]; // tableau modifiable selon le tri

// Affiche le nombre total de résultats
result.textContent = `${cars.length} résultats`;

// === Fonction d’affichage d’un lot ===
function loadCars() {
  const slice = filteredCars.slice(currentIndex, currentIndex + batchSize);

  slice.forEach((car) => {
    const article = document.createElement("article");
    article.classList.add("card");

    let index = 0;

    article.innerHTML = `
      <div class="slider">
        <i class="fa-solid fa-caret-left"></i>
        <img src="./assets/img/${car.image[index]}" alt="${car.nom}" loading="lazy">
        <i class="fa-solid fa-caret-right"></i>
      </div>
      <div>
        <h2>${car.nom}</h2> 
        <p>${car.description}</p>
        <p>${car.prix} €</p>
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

  currentIndex += batchSize;
}


function resetAndLoad() {
  articles.innerHTML = ""; 
  currentIndex = 0;
  loadCars();
}

trieur.addEventListener("change", (e) => {
  const value = e.target.value;
// me suis aidé d'internet pour faire ça à 100% parceque j'avais oublié
  if (value === "Prix croissant") {
    filteredCars.sort((a, b) => parseFloat(a.prix) - parseFloat(b.prix));
  } else if (value === "Prix décroissant") {
    filteredCars.sort((a, b) => parseFloat(b.prix) - parseFloat(a.prix));
  } else {
    filteredCars = [...cars];
  }

  resetAndLoad();
});

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentIndex < filteredCars.length) {
      loadCars();
    }
  }
});

loadCars();

export { articles };
