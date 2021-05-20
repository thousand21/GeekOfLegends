class Heros{
    constructor(nom,ptDeVie,ptDAttk){
        this.nom=nom;
        this.ptDeVie=ptDeVie;
        this.ptDAttk=ptDAttk;
        
    }
}
class Guerrier extends Heros{
    constructor(nom,ptDeVie,ptDAttk,ptRage){
        super(nom,ptDeVie,ptDAttk);
        this.ptRage=ptRage;
        this.attack=()=>{

        }
        this.defense=()=>{

        }
        this.perks=()=>{
            this.ptDAttk==this.ptDAttk+this.ptDAttk*0.25;
        }
    }
}
class Mage extends Heros{
    constructor(nom,ptDeVie,ptDAttk,ptMana){
        super(nom,ptDeVie,ptDAttk);
        this.ptMana=ptMana;
        this.attack=()=>{

        }
        this.defense=()=>{

        }
        this.perks=()=>{
            this.ptMana+=7;
        
    }
    }
}
class Archer extends Heros{
    constructor(nom,ptDeVie,ptDAttk,fleche){
        super(nom,ptDeVie,ptDAttk);
        this.fleche=fleche;
        this.attack=()=>{

        }
        this.defense=()=>{

        }
        this.perks=()=>{
            this.fleche+=6;
        }
    }
    
}
export {Guerrier,Mage,Archer};
