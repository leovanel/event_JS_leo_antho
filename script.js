// fonctionnalité 1 

var footer = document.querySelector("footer.text-muted");
let compteur = 0
footer.addEventListener('click',f1,true);
function f1(){
  
  compteur ++;
  console.log("clique n°" + compteur);
  };

// fonctionnalité 2 
var navbar = document.getElementById("navbarHeader");
  
var buttonnavbar = document.getElementsByClassName("navbar-toggler");

console.log(buttonnavbar[0]);

let compteur2 = 0;

buttonnavbar[0].addEventListener('click', f2, true);

  function f2(){

    if (navbar.className == ("collapse bg-dark")) {
      navbar.classList.toggle("collapse");
      console.log(navbar.className)
    }
    else {
      navbar.classList.toggle("collapse");
      console.log(navbar.className);
    }

    compteur2 ++;
    console.log("clique n°" + compteur2);

  };

// fonctionnalité 3

var bouton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
var first_card = document.getElementsByClassName("card-body")[0].childNodes[1]
console.log(bouton)
console.log(first_card)

bouton.addEventListener('click', f3, true);

  function f3(){
    first_card.style.color = "red"

  }

// fonctionnalité 4

var bouton2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
var secondcard = document.getElementsByClassName("card-body")[1].childNodes[1]
console.log(bouton2)
console.log(secondcard)

bouton2.addEventListener('click', f4, true);

  function f4(){

    if (secondcard.style.color === 'green') {
      secondcard.style.color = '';
      console.log("if");
    }
    else {
      secondcard.style.color = 'green';
      console.log("else");
    }
    }


// fonctionnalité 5 
var navbar2 = document.getElementsByTagName("header")[0]
var bootstrap = document.getElementsByTagName("link")[0]

console.log(bootstrap)
console.log(navbar2)

navbar2.addEventListener('dblclick', f5, true);
let compteur3=0;
  function f5(){
    console.log(compteur3);
    compteur3 ++;

    if (bootstrap.getAttribute("href") === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
      bootstrap.setAttribute("href","");
      console.log("if");
    }
    else {
      bootstrap.setAttribute("href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
      console.log("else");
    }
    }

// fonctionnalité 6
// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), 
// celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
// Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

function vbutton()
{var viewbutton = document.getElementsByClassName("btn btn-sm btn-success");
return viewbutton}

function cimage()
{var cardimage = document.getElementsByClassName("card-img-top");
return cardimage}

function ctext()
{var cardtext = document.getElementsByClassName("card-text");
return cardtext}

for(let index=0, max= 6; index < max; index++){
  vbutton()[index].addEventListener('mouseover', function(){

    
    if (cimage()[index].style.width == "") {
      ctext()[index].classList.toggle("collapse");
      cimage()[index].style.width = "20%";
      console.log("if");
      console.log(ctext()[index].className);
      console.log(index);
    }
    else  {
      ctext()[index].classList.toggle("collapse");
      cimage()[index].style.width = "";
      console.log("else");
      console.log(ctext()[index].className);
      console.log(index);
    }
    }); 
  }

  // fonctionnalité 7 

  let greybutton = document.getElementsByClassName("btn btn-secondary my-2");
  console.log(greybutton);

  let rowparent = document.getElementsByClassName("row")[1];
  console.log(rowparent);

  greybutton[0].addEventListener('click',f7,true);
  
  function f7(){
    console.log("hola");
  rowparent.insertBefore(rowparent.lastChild, rowparent.firstChild);
  }
  



  
  // fonctionnalité 8
