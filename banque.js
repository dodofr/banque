//menu navbar
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// les operations
//les variables
let positifInput = document.getElementById("positifInput");
let positifBtn = document.getElementById("positifBtn");

let negatifInput = document.getElementById("negatifInput");
let negatifBtn = document.getElementById("negatifBtn");

let lesSousSolde = document.getElementById("lesSousSolde");
let lesSousOperation = document.getElementById("lesSousOperation");
let arnaqueLaBanque = document.getElementById("arnaqueLaBanque")

let sePlaindre = document.getElementById("sePlaindre")
let body = document.getElementById("body")


// valider son solde positif
positifBtn.addEventListener("click", () => {
  arnaqueLaBanque.innerHTML = ""
  affichageOperationPositive()
let recuperationNombreSousSolde = lesSousSolde.innerHTML
let nombreUtilisableSousSolde = parseInt(recuperationNombreSousSolde)
let a = parseInt(positifInput.value)
let b = nombreUtilisableSousSolde
let calcule = a + b
  lesSousSolde.innerHTML = `${calcule}`
})

// valider son solde negatif
negatifBtn.addEventListener("click", () => {
  let recuperationNombreSousSolde = lesSousSolde.innerHTML
  let nombreUtilisableSousSolde = parseInt(recuperationNombreSousSolde)
  if (nombreUtilisableSousSolde > 0) {
  affichageOperationNegative()
  
  let a = parseInt(negatifInput.value)
  let b = nombreUtilisableSousSolde
  let calcule = b - a
  if (calcule > 0) {
    lesSousSolde.innerHTML = `${calcule}`
  }
    else{
      arnaquelaBanque()
    }
  }
})


// fonction qui va afficher les operations positives
function affichageOperationPositive(){
let operationenCours = document.createElement("p")
operationenCours.setAttribute("class","green")
  operationenCours.innerHTML += "+" + positifInput.value +"&euro;"
  lesSousOperation.appendChild(operationenCours)
}
// fonction qui va afficher les operations negatives
function affichageOperationNegative(){
  let operationenCours = document.createElement("p")
  operationenCours.setAttribute("class","red")
  operationenCours.innerHTML += "-" + negatifInput.value+"&euro;"
  lesSousOperation.appendChild(operationenCours)
}
// lorsque votre solde va étre negatif
function arnaquelaBanque(){
  arnaqueLaBanque.setAttribute("class","darkred")
  arnaqueLaBanque.innerHTML = "TU T'ES CRU OU? ON FAIT PAS CREDIT ICI" + "<br>" + "On s'est servi pour la peine, t'as intérêt de te remettre à flot !"
  lesSousSolde.innerHTML = "0";
}
// fonction loser qui se lance au clic sur ici
function looser(){
  // les createlement
  div = document.createElement("div")
  div.setAttribute("class","plaindreDiv")
  let plaindretitre = document.createElement("h1")
  plaindretitre.setAttribute("class","red")
  let plaindreP = document.createElement("p")
  plaindreP.setAttribute("class","plaindreP")
  let plaindreGif = document.createElement("img")
  plaindreGif.setAttribute("class","gifClass")
  //le contenu
  plaindretitre.innerHTML = "HAHAHAHA TU VOULAIS TE PLAINDRE? A QUI? A LA POLICE? HAHAHAHA"
  plaindreP.innerHTML = "Nous ferons bon usage des sous de ton compte !"
  plaindreGif.src = `${plaindreTab[getRandomInt(50)]}`;
  //le placement des elements
  div.appendChild(plaindretitre)
  div.appendChild(plaindreP)
  div.appendChild(plaindreGif)
  
  body.appendChild(div)
}

//le clic sur le se plaindre ICI
sePlaindre.addEventListener("click",() =>{
  body.innerHTML = ""
  looser()
})


// Partie API 
//le tableau qui va recuperer les url
let plaindreTab = []
// fetch pour recuperer le gif
fetch(
  "https://tenor.googleapis.com/v2/search?key=AIzaSyAVpVVTmWXqZnBvf1vFJbxh2Wi3Q4SLThg&q=looser&random=true&limit=50"
) 
  .then((reponse) => reponse.json())
  .then((picture) => {
    for (let i = 0; i < 50; i++) {
      plaindreTab.push(picture.results[i].media_formats.gif.url); // recuperer le gif en url en fessant le chemin picture-results-etc 
    }
  });

  //fonction random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }