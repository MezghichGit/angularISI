"use strict";
exports.__esModule = true;
var modeles_1 = require("./modeles");
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
function info(e) {
    console.log(e.nom + " " + e.age);
}
var e1 = { 'nom': 'amine', 'age': 25 };
//info(e1);
var c = new modeles_1.Cours(); // constructeur par défaut
var c2 = new modeles_1.Cours("Angular", 14); // constructeur avec param
c.infoCours();
c2.infoCours();
