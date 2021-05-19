class Heros{
    constructor(nom,ptDeVie,ptDAttk){
        this.nom=nom;
        this.ptDeVie=ptDeVie;
        this.ptDAttk=ptDAttk;
        this.attack=()=>{

        }
        this.defense=()=>{

        }
    }
}
class Guerrier{
    constructor(nom,ptDeVie,ptDAttk,ptRage){
        super(nom,ptDeVie,ptDAttk);
        this.ptRage=ptRage;
    }
}
class Mage{
    constructor(nom,ptDeVie,ptDAttk,ptMana){
        super(nom,ptDeVie,ptDAttk);
        this.ptMana=ptMana;
    }
}
class Archer{
    constructor(nom,ptDeVie,ptDAttk,fleche){
        super(nom,ptDeVie,ptDAttk);
        this.fleche=fleche;
    }
}
