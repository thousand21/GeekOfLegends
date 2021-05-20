let enigme=()=>{
    random=Math.ceil(Math.random()*3);
    console.log(random);
    if(random==1){
        reponse="silence";
        rep=prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je");
        if(rep==reponse){
            return true;
        }
        else{
            return false;
        }
    }
    else if(random==2){
        reponse=4;
        rep=Number(prompt("2+2=?"));
        if(rep==reponse){
            return true;
        }
        else{
            return false;
        }
    }
    else if(random==3){
        reponse=5;
        rep=Number(prompt("Il y a combien de membres dans Hololive 3rd Gen"));
        if(rep==reponse){
            return true;
        }
        else{
            return false;
        }
    }
}
export default enigme;