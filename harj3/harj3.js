$(document).ready(function(){

    // jQuery koodi tulee tähän...
  $("H1").css("color", "pink");
  $("p").css("color" , "lightblue");
  $(".harj3").append("Hippolife, best life!").css("color", "purple");
  $(".harj3").append("<h2> Hippoo</h2>");
  $("body").append("<h2 class= 'footer'> Ihan viimeinen teksti</h2>");
  $(".footer").on("click", function(){
        $(this).hide();
  })
  $(".harj3").append("<button id='magic'> Paina Tästä </button>");
  $(".harj3").append("<img id='hippo' alt='hippo' src='hippo.jpg'>");
  $("#hippo").css("width",  "40%");
 
  $('#magic').on("click", function(){
    let hippo= $("#hippo");  
    if(hippo.css("display") === "none"){
        hippo.show();
    } else {
        hippo.hide();
    }
        
})
let asiat =["jquery", "map", "hide/show"];
let valmis = asiat.map(asia=> "<li class='klikkiotsikot'>" + asia + "<li>")

$("body").append("<ul></ul>");
$("ul").append(valmis);


  // Tehtävä 1
  let otsikot =["Elämä", "on", "oikein", "mukavaa", "HIPPOOO"];
  let valmis1 = otsikot.map(otsikko=> "<h2>" + otsikko + "</h2>");
  $(".tehtävä1").append(valmis1);
 

// <li class='otsikko'>" + otsikko"
});