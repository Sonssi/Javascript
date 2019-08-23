// Javascript harjoitus //


function askname(){
    let name = prompt('Mikä on nimesi?');
    alert('Hei ' + name +', kiva nähdä sinua kesän jälkeen!');
}

// Tehtävä 1: Merkkijonojen yhdistäminen

function askname2() {
    let name = prompt('Mikä on nimesi?');
    let date = prompt('Mikä päivä tänään on?');
    alert('Hei ' + name + '!' );
}

// Tehtävä 2: Yhteenlasku

function summa(){
     
    let x = prompt('Lisää numero')
    let y = prompt('Lisää numero')
    
    alert (Number (x) +Number(y));
}

// Tehtävä 3: Laskuri
let x = 0;
function laskuri(){
    
     console.log (x++);
}

// Tehtävä 4: Suurempi luku
let y  = x--;
function luku(){

    let x = prompt('numero');
    let y = prompt('numero');
    

  
    alert (Math.max(x,y));
}

// Tehtävä 5: Täysi-ikäisyys (ehtolause)


function age(){

    let age = prompt('ikä');
    if(age < 18){
        alert ('lapsi');
    }else{
        alert ('aikuinen');
    }

}

//
 
