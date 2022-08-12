var randomNumber = Math.floor(Math.random()*6)+ 1;
 var randomDiceImage = "dice" + randomNumber + ".png";
 var randomNumber1 = Math.floor(Math.random()*6)+ 1;
 var randomDiceImage1 = "dice" + randomNumber1 + ".png";
 var randomImageSource = "images/" + randomDiceImage;
 var randomImageSource1 = "images/" + randomDiceImage1;
 var image1 = document.querySelectorAll("img")[0];
 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);;
 
 image1.setAttribute("src", randomImageSource);

 if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML=" player 1 wins"
 }
 else if(randomNumber<randomNumber1){
    document.querySelector("h1").innerHTML=" player 2 wins "
 }

 else{
    document.querySelector("h1").innerHTML=" Draw! "
 }
