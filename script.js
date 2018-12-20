var easyWord = ["shoe", "bag", "belt", "sock"];
var mediumWord = ["shirt", "jacket", "jeans", "purse"];
var hardWord = ["sundress", "corduroy", "pinstripes", "tuxedo"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var images = ["images/1.png", "images/2.png", "images/3.png", "images/1.png", "images/1.png", "images/1.png", "images/1.png", "images/1.png", ]

var graveyard = [];
var pickedLetters = [];
var lives = 10;
var pickedWord = [];


function startGame(){

    clearOut();

    var difficult = document.getElementById(diffMenu).value;
    console.log(difficult);
    difficult = parseInt(diffMenu);
    if (difficult == 0){
        var randWord = easyWord[Math.floor(Math.random() * easyWord.length)];
    }
    if (difficult == 1){
        var randWord = mediumWord[Math.floor(Math.random() * mediumWord.length)];
    }
    if (difficult == 2){
        var randWord = hardWord[Math.floor(Math.random() * hardWord.length)];
    }
    console.log(randWord);
    pickedWord= randWord.split("");
    printWord();

}

function clearOut(){
    graveyard = [];
    picked = [];
    lives = 6;
    removeButtons();
    makeMeButtons();
    //something about an image
}
function printWord(){
    var answer = "";

    for(var i = 0; i < pickedWord.length; i++){
        if (pickedLetters.includes(pickedWord[i])){
            answer += pickedWord[i];
        } else {
            answer+= "_";
        }
    }
    return answer;
}


function removeButtons(){
    var parent = document.getElementById("buttonContainer");
    var child = document.getElementsByClassName("letterButton");
    var bye;
    bye = parent.removeChild(child);

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

    console.log(button.value);
    // add to guessed letters and run printWord again

    for(var i = 0; i < pickedWord.length; i++){
        if (button.value == pickedWord[i]){

        }
    }
    
}

