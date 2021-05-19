class Boss{
    constructor(nom,ptDeVie,ptDAttk){
        this.nom=nom;
        this.ptDeVie=ptDeVie;
        this.ptDAttk=ptDAttk;
        this.lowhp=()=>{
            let random=Math.ceil(Math.random()*3);
    console.log(random);
    if(random==1){
        let reponse="silence";
        let rep=prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je");
        if(rep==reponse){
            return  console.log(`Bravo, vous avez vaincu ${this.nom}`);
        }
        else{
            return console.log(`Vous avez echoue`);
        }
    }
    else if(random==2){
        let reponse2=4;
        let rep2=Number(prompt("2+2=?"));
        if(rep2==reponse2){
            return  console.log(`Bravo, vous avez vaincu ${this.nom}`);
        }
        else{
            return console.log(`Vous avez echoue`);
        }
    }
    else if(random==3){
        let reponse3=5;
        let rep3=Number(prompt("Il y a combien de membres dans Hololive 3rd Gen"));
        if(rep3==reponse3){
            return  console.log(`Bravo, vous avez vaincu ${this.nom}`);
        }
        else{
            return console.log(`Vous avez echoue`);
        }
    }
        }
           
          
    }
}
import enigme from './fonction.js';
export default Boss;
