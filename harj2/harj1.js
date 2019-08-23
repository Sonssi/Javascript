// Demo 1: Elementtien etsintä

function change(){
    document.querySelector("h1").style.color= "read";

    let myHeader = document.querySelector("h1");
    myHeader.style.fontSize = "4em";
    myHeader.style.BorderStyle ="solid";
}
 




//Tehtävä 1: Tervehtiminen input:in avulla

function greeting(){
    let name =document.querySelector("#hello").value;
    let message =`olet kirjautunut ${name}. Kiitos ja näkemiin`; //temp
    console.log("olet kirjautunut: " + name + " Kiitos ja näkemiin");
    let myHeader = document.createElement("h3");
    let myText = document.createTextNode(message);
    myHeader.appendChild(myText);
    document.getElementById("harj1").appendChild(myHeader)
}

function age(){
    let name = document.querySelector("#old").value;
  
    let message1 = `Liian nuori pelaamaan tätä peliä!`;
    let message2 =   `hyvä, jatketaan`;
    
    console.log((age > 16) = message1);
    console.log((age < 16) = message2);
    let myHeader = document.createElement("h3");
    let myText = document.createTextNode(message1)
  
}

