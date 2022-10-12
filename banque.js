//menu navbar
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

// les operations
//les variables
let positifInput = document.getElementById("positifInput");
let positifBtn = document.getElementById("positifBtn");

let negatifInput = document.getElementById("negatifInput");
let negatifBtn = document.getElementById("negatifBtn");

let lesSousSolde = document.getElementById("lesSousSolde");
let lesSousOperation = document.getElementById("lesSousOperation");
let arnaqueLaBanque = document.getElementById("arnaqueLaBanque");

let sePlaindre = document.getElementById("sePlaindre");
let body = document.getElementById("body");

let monCompteALinstantT = [404];

// valider son solde positif
positifBtn.addEventListener("click", () => {
  arnaqueLaBanque.innerHTML = "";
  // affichageOperationPositive();
  let recuperationNombreSousSolde = lesSousSolde.innerHTML;
  let nombreUtilisableSousSolde = parseInt(recuperationNombreSousSolde);
  // let a = parseInt(positifInput.value);
  // let b = nombreUtilisableSousSolde;
  // let calcule = a + b;
  // lesSousSolde.innerHTML = calcule;
  // monCompteALinstantT.pop();
  // monCompteALinstantT.push(calcule);
  // console.log(monCompteALinstantT);
  //
  if (nombreUtilisableSousSolde >= 0) {
    
    let a = parseInt(positifInput.value);
    let b = nombreUtilisableSousSolde;
    let calcule = a + b;
    if (calcule > 0) {
      affichageOperationPositive();;
      lesSousSolde.innerHTML = calcule;
      monCompteALinstantT.pop();
      monCompteALinstantT.push(calcule);
    } else {
      affichageTentativeArnaque();
      arnaquelaBanque();
    }
  }//
});

// valider son solde negatif
negatifBtn.addEventListener("click", () => {
  let recuperationNombreSousSolde = lesSousSolde.innerHTML;
  let nombreUtilisableSousSolde = parseInt(recuperationNombreSousSolde);
  if (nombreUtilisableSousSolde > 0) {
    let a = parseInt(negatifInput.value);
    let b = nombreUtilisableSousSolde;
    let calcule = b - a;
    if (calcule > 0) {
      affichageOperationNegative();
      lesSousSolde.innerHTML = calcule;
      monCompteALinstantT.pop();
      monCompteALinstantT.push(calcule);
    } else {
      affichageTentativeArnaque();
      arnaquelaBanque();
    }
  }
});

// fonction qui va afficher les operations positives
function affichageOperationPositive() {
  let operationenCours = document.createElement("p");
  operationenCours.setAttribute("class", "green");
  operationenCours.innerHTML += "+" + positifInput.value + "&euro;";
  lesSousOperation.appendChild(operationenCours);
}
// fonction qui va afficher les operations negatives
function affichageOperationNegative() {
  let operationenCours = document.createElement("p");
  operationenCours.setAttribute("class", "red");
  operationenCours.innerHTML += "-" + negatifInput.value + "&euro;";
  lesSousOperation.appendChild(operationenCours);
}
function affichageTentativeArnaque(){
  let operationenCours = document.createElement("p");
  operationenCours.setAttribute("class", "red");
  operationenCours.innerHTML += "refusé et mise à 0&euro; du compte";
  lesSousOperation.appendChild(operationenCours);
}
// lorsque votre solde va étre negatif
function arnaquelaBanque() {
  arnaqueLaBanque.setAttribute("class", "darkred");
  arnaqueLaBanque.innerHTML =
    "TU T'ES CRU OU? Ni crédits Ni petits malins qui veulent arnaquer la banque" +
    "<br>" +
    "On s'est servi pour la peine, t'as intérêt de te remettre à flot !";
  lesSousSolde.innerHTML = "0";
}
// fonction loser qui se lance au clic sur ici
function looser() {
  // les createlement
  div = document.createElement("div");
  div.setAttribute("class", "plaindreDiv");
  let plaindretitre = document.createElement("h1");
  plaindretitre.setAttribute("class", "red");
  let plaindreP = document.createElement("p");
  plaindreP.setAttribute("class", "plaindreP");
  let plaindreGif = document.createElement("img");
  plaindreGif.setAttribute("class", "gifClass");
  //le contenu
  plaindretitre.innerHTML =
    "HAHAHAHA TU VOULAIS TE PLAINDRE? A QUI? A LA POLICE? HAHAHAHA";
  plaindreP.innerHTML = "Nous ferons bon usage des sous de ton compte !";
  plaindreGif.src = `${plaindreTab[getRandomInt(50)]}`;
  //le placement des elements
  div.appendChild(plaindretitre);
  div.appendChild(plaindreP);
  div.appendChild(plaindreGif);

  body.appendChild(div);
}

//le clic sur le se plaindre ICI
sePlaindre.addEventListener("click", () => {
  body.innerHTML = "";
  looser();
});

// Partie API
//le tableau qui va recuperer les url
let plaindreTab = [];
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
//API conversion de monnaie

//variable pour conversion
let conversion = document.getElementById("conversion");
let conversionAffichage = document.getElementById("conversionAffichage");
let conversionDollars = document.getElementById("conversionDollars");
let conversionVef = document.getElementById("conversionVef");
let conversionDevise = document.getElementById("conversionDevise");
let extradition = document.getElementById("extradition");
let d = conversionDevise.value;
var myHeaders = new Headers();
myHeaders.append("apikey", "EocLfZlNdEdWowlL1ACTBvaHeiTjNd59");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
conversion.addEventListener("click", () => {
  // console.log(conversionDevise.value)

  fetch(
    `https://api.apilayer.com/currency_data/convert?to=${conversionDevise.value}&from=EUR&amount=${monCompteALinstantT[0]}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      // console.log(result.result)
      let d = conversionDevise.value;
      conversionAffichage.innerHTML =
        "Avec " +
        monCompteALinstantT[0] +
        "&euro; " +
        "tu auras : " +
        result.result +
        " " +
        conversionDevise.value;
      if (
        d == "GBP" ||
        d == "USD" ||
        d == "AUD" ||
        d == "BGN" ||
        d == "BRL" ||
        d == "IDR" ||
        d == "ZAR"
      ) {
        extradition.innerHTML =
          "&#10060;" +
          " Attention ils pratiquent l'extradition "+
          "&#10060;";
      } else if (
        d == "BMD" ||
        d == "GTQ" ||
        d == "JMD" ||
        d == "KPW" ||
        d == "MXN" ||
        d == "SLL" ||
        d == "TZS"
      ) {
        extradition.innerHTML =
          "&#9989;" + " un bon choix, ils ne pratiquent pas l'extradition " + "&#9989;";
      } else {
        extradition.innerHTML =
          "&#10060;" +
          " Méfie toi, ils pratiquent l'extradition quand bon leur semble " +
          "&#9989;";
      }
    })
    .catch((error) => console.log("error", error));
});
// fetch("https://api.apilayer.com/currency_data/list", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
