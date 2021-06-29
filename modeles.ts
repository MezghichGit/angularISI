export interface Etudiant{
    nom:string,
    age:number
}

export class Cours{
    //private titre:string;
    //private vh:number;

    public infoCours()
    {
        console.log(this.titre+" "+this.vh);
    }

   /* public constructor(){
        console.log("Hello Cours");
    }*/

    public constructor(private titre?: string, private vh?:number){
        //console.log("Hello Cours");
        this.titre = titre;
        this.vh = vh;
    }
}