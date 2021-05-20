
let startMana=()=>{
    let startFleche=[7,8,9,10,11];
    let startFlecheRandom=Math.floor(Math.random()*4); 
    return startFleche[startFlecheRandom];
}

export default startMana;