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



// fonctionnalité 5 
