//import boss
import Boss from './boss.js';
/* import enigme from './fonction.js'; */
/* ### - Trois boss(Sauron,Chronos,Lilith). 
 Chaque boss possédera les propriétés suivantes :
>* Un nom;
>* Un nombre de points de vie;
>* Un nombre de points d'attaque. */
let Sauron=new Boss("Sauron",400,10);
let Chronos=new Boss("Chronos",200,20);
let Lilith=new Boss("Lilith",300,5);
/* #### A Savoir sur les boss */
Sauron.lowhp();
/* Chronos.lowhp();
Lilith.lowhp(); */
/* #### A Savoir sur les boss :*/


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
