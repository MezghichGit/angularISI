"use strict";
exports.__esModule = true;
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    /* public constructor(){
         console.log("Hello Cours");
     }*/
    function Cours(titre, vh) {
        //console.log("Hello Cours");
        this.titre = titre;
        this.vh = vh;
    }
    Cours.prototype.infoCours = function () {
        console.log(this.titre + " " + this.vh);
    };
    return Cours;
}());
exports.Cours = Cours;
