var easyWord = ["shoe", "bag", "belt", "sock"];
var mediumWord = ["shirt", "jacket", "jeans", "purse"];
var hardWord = ["sundress", "corduroy", "pinstripes", "tuxedo"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", ]

var graveyard = [];
var pickedLetters = [];
var lives = 8;
var pickedWord = [];


function startGame(){
    // alert('before');

    clearOut();
//   alert('after');

    var difficult = document.getElementById("diffMenu").value;
    console.log(difficult);
    difficult = parseInt(difficult);
    //alert(difficult);
    if (difficult == 0){
        var randWord = easyWord[Math.floor(Math.random() * easyWord.length)];
    }
    if (difficult == 1){
        var randWord = mediumWord[Math.floor(Math.random() * mediumWord.length)];
    }
    if (difficult == 2){
        var randWord = hardWord[Math.floor(Math.random() * hardWord.length)];
    }
    //alert(randWord);
    console.log(randWord);
    pickedWord= randWord.split("");
    printWord();



}

function clearOut(){
    graveyard = [];
    document.getElementById("graveyard").innerHTML = graveyard;
    pickedLetters = [];
    lives = 8;
// alert ("hi");
    removeButtons();
// alert ("working");
    makeMeButtons();
//something about an image
}

function printWord(){
    document.getElementById("lives").innerHTML = lives;
    //alert(pickedWord.length);
    var answer = "";

    for(var i = 0; i < pickedWord.length; i++){
        answer+= "_ ";
    }

   // alert(answer);
    document.getElementById("guessingPart").innerHTML = answer;


}


function removeButtons(){
    var parent = document.getElementById("buttonContainer");
    var child = document.getElementsByClassName("letterButton");
    if (child.length > 0){
       // alert('has buttons');
        while (parent.hasChildNodes()) {
            parent.removeChild(child[0]);
        }
      //  alert ('working?');

    }
}

function makeMeButtons() {

    var btn;

    var div = document.getElementById("buttonContainer");
    for (var i = 0; i < letters.length; i++) {
        btn = document.createElement("button");
        btn.setAttribute("class", "letterButton");
        btn.setAttribute("value", letters[i]);
        btn.setAttribute("onclick", "buttonClickHandler(this)");
        btn.innerHTML = letters[i];
        div.appendChild(btn);
    }
}





function buttonClickHandler(button) {

    var parent = document.getElementById("buttonContainer");
    var bye;
    bye = parent.removeChild(button);



    console.log(button.value);
    // add to guessed letters and run printWord again
    pickedLetters += button.value;
    var answer2 = "";
    var goodGuess = false;
    for(var i = 0; i < pickedWord.length; i++){
        if (button.value == pickedWord[i]){
            goodGuess = true;
        }
        if (pickedLetters.includes(pickedWord[i])){
            answer2 += pickedWord[i];
        } else {
            answer2+= "_ ";

        }
    }
    document.getElementById("guessingPart").innerHTML = answer2;
    if (goodGuess == false){
        document.getElementById("graveyard").innerHTML += button.value;
        lives -= 1;
        document.getElementById("lives").innerHTML = lives;
        if (lives <= 0){
            document.getElementById("lives").innerHTML = "You are dead. The word was " + pickedWord + ". Click PLAY to restart the game.";
            removeButtons();
        }
    }


}