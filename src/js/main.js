//import boss
import Boss from './boss.js';
import {Mage,Archer} from './heros.js';
import startMana from './fonction.js';


/* ### - Trois boss(Sauron,Chronos,Lilith). 
 Chaque boss possédera les propriétés suivantes :
>* Un nom;
>* Un nombre de points de vie;
>* Un nombre de points d'attaque. */
/* let Sauron=new Boss("Sauron",400,10); */
let Sauron=new Boss("Sauron",400,10);
let Chronos=new Boss("Chronos",200,20);
let Lilith=new Boss("Lilith",300,5);
let tabBoss=[];
/* #### A Savoir sur les boss */

//import heros

//hahaha
/* while(!(reponse==7)||(reponse==9)||reponse==11){
    reponse=Math.floor(Math.random()*(5)+7);
}
console.log(reponse); */
/* Chronos.lowhp();
Lilith.lowhp(); */
/* #### A Savoir sur les boss :*/

///     LE JEU COMMENCE ICI///////////
/* let chiffBoss=Math.ceil(Math.random()*3);
let reponse=false;
if(chiffBoss==1){
    tabBoss.push(Sauron);
    alert("Vous allez affronter le boss Sauron, maintenez choississez ses stats ");
    while(reponse==false){
    Sauron.ptDeVie=Number(prompt(`Les pv de Sauron :`));
    Sauron.ptDAttk=Number(prompt(`L'attk' de Sauron :`));
    reponse=confirm(`Les pv de Sauron : ${Sauron.ptDeVie} , Attk de Sauron : ${Sauron.ptDAttk}. Continuer?`)
    }
    
}
else if(chiffBoss==2){
    tabBoss.push(Chronos);
    alert("Vous allez affronter le boss Chronos, maintenez choississez ses stats ");
    while(reponse==false){
        Chronos.ptDeVie=Number(prompt(`Les pv de Chronos :`));
        Chronos.ptDAttk=Number(prompt(`L'attk' de Chronos :`));
        reponse=confirm(`Les pv de Chronos : ${Chronos.ptDeVie} , Attk de Chronos : ${Chronos.ptDAttk}. Continuer?`);
        }
}
else if(chiffBoss==3){
    tabBoss.push(Lilith);
    alert("Vous allez affronter le boss Lilith, maintenez choississez ses stats ");
    while(reponse==false){
        Lilith.ptDeVie=Number(prompt(`Les pv de Lilith :`));
        Lilith.ptDAttk=Number(prompt(`L'attk' de Lilith :`));
        reponse=confirm(`Les pv de Lilith : ${Lilith.ptDeVie} , Attk de Lilith : ${Lilith.ptDAttk}. Continuer?`);
        }
}
//Creer les heros+import*/
/*
//creer les stats du guerrier
let guerrier= new Guerrier("bernard",0,0,0);
let creaGuerrier=false;
while(creaGuerrier==false){
    guerrier.nom=prompt("Quel est le nom du guerrier?");
    guerrier.ptDAttk=Number(prompt("Quelle est la puissance du guerrier"));
    guerrier.ptDeVie=Number(prompt("Quels sont les pv du guerrier"));
    creaGuerrier=confirm(`nom guerrier: ${guerrier.nom},Les pv de guerrier : ${guerrier.ptDeVie} , Attk de guerrier : ${guerrier.ptDAttk}. Continuer?`);
}

//creer les stats du mage*/
console.log(startMana());
let mage=new Mage("Bernardd",0,0,0);
let creaMage=false;
while(creaMage==false){
    mage.nom=prompt("Quel est le nom du mage?");
mage.ptDAttk=Number(prompt("Quelle est la puissance du mage"));
mage.ptDeVie=Number(prompt("Quels sont les pv du mage"));
creaMage=confirm(`nom mage: ${mage.nom},Les pv de mage : ${mage.ptDeVie} , Attk de mage : ${mage.ptDAttk}. Continuer?`);
}


//creer les stats de larcher
let startFleche=[7,8,9,10,11];
let startFlecheRandom=Math.floor(Math.random()*4);
let archer= new Archer("Bernarddd",0,0,startFleche[startFlecheRandom]);
let creaArcher=false;
while(creaArcher==false){
    archer.nom=prompt("Quel est le nom du archer?");
archer.ptDAttk=Number(prompt("Quelle est la puissance du archer"));
archer.ptDeVie=Number(prompt("Quels sont les pv du archer"));
creaArcher=confirm(`nom archer: ${archer.nom},Les pv de archer : ${archer.ptDeVie} , Attk de archer : ${archer.ptDAttk}. Continuer?`);
}
///LE COMBAT COMMENCE ICI
/* alert("Tu choisir le mode de chaque heros: attk, defense, normal");
let mode=false;
while(mode==false){
    alert(`Le mode attk:`)
}
 */


Sauron.lowhp();


/*>* une fois le boss à 20% de ses points de vie, il posera à tes personnages (l'utilisateur) une énigme (choisie aléatoirement entre minimum 3 énigmes) à laquelle ils devront répondre en 3 essais au maximum, s'ils échouent, ils mourront, sinon ils vaincront le boss.
​
#### Exemples d'énigmes traditionnelles :
>* Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?
>* Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?
#### Exemples d'énigmes pouvant être obtenu via des commande Javascript :
>* Quel heure est-il ?(écriture informatisée)
>* Quel est l'indice du premier "i" de cette question ?
>* Que fait retourne Math.floor(1.3 * 10) ?
​
>* Le choix du type d'enigme est à votre guise cela peut même être un mix des styles */
