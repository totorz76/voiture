const hero = document.getElementById("heroImg");
// const img = document.createElement("img");
// img.src = "./assets/img/background.jpg";
// hero.append(img);

const images = [
    "./assets/img/background1.jpg",
    "./assets/img/background2.jpg",
    "./assets/img/background.jpg",
]

let index = 0
setInterval (() =>{
    hero.style.transition = "all 1s ease-in-out"
    hero.style.backgroundImage = `url(${images[index]})`
    index++
    setTimeout(() => {
        hero.style.transition = ""
    },3000);
    if (index === images.length){
        index = 0
    }
    console.log(index);
}, 15000)
export {hero}