import {Etudiant, Cours} from './modeles';
//console.log("Bonjour");
/*
function info(){

    for(let i =0; i<6;i++)
    {
        console.log(i);
    }

    console.log("final" + i);
}
info();*/


// Syntaxe sans arrow function(expression lambda)
/*let mafonction = function(nom, prenom){
    console.log(nom+" "+prenom);
}*/

//let mafonction = (nom,prenom) => console.log(nom+" "+prenom);


//mafonction("mezghich","mohamed amine");

function info(e : Etudiant)
{
    console.log(e.nom +" "+e.age);
}

let e1 : Etudiant ={'nom':'amine', 'age':25};

//info(e1);

let c : Cours = new Cours(); // constructeur par défaut
let c2 : Cours = new Cours("Angular",14);// constructeur avec param
c.infoCours(); 
c2.infoCours(); 
