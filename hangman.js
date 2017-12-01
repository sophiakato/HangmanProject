var words = ["SORBET", "FJORD", "LENTILS", "SIMILE" , "CHAMELEON", "QUICHE", "ERASER", "DAREDEVIL", "POCKETBOOK",
    "CHARISMATIC", "TENDRILS", "ZIPPER", "IVORY", "BANJO"];
var word = words[Math.floor(Math.random()*words.length)]; // the word to guess will be chosen from the array above
var guesses = 5;
var guessedLetters = [];
var wrongLetters = [];


//This function will form the drop down and eliminate the last guessed letter + print instructions
function populateGuess() {
    document.getElementById("instructions").innerHTML = "Please select " +
        "'Start Game' to start or reset the game.";

    // document.getElementById("lose").style.display = "none";
    // document.getElementById("win").style.display = "none";
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
        "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var result = "";
    for (var i = 0; i < alphabet.length; i++) {
        if(guessedLetters.indexOf(alphabet[i]) == -1) {
            result += "<option value'" + i + "'>" + alphabet[i] + "</options> ";
        }
    }
    document.getElementById("letters").innerHTML = result;
}


// Reset the board, clear out any traces of the last round from guessedLetters and wrongLetters and re-display the buttons.
// Choose a word - this code will grab  a random element from your words array for you:
function startGame(){
    document.getElementById("guessButton").style.display = "block";
    word = words[Math.floor(Math.random()*words.length)];
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("wrongLetters").innerHTML ="";
    document.getElementById("lose").innerHTML ="";
    document.getElementById("win").innerHTML = "";
    document.getElementById("lose").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("displayedWord").innerHTML = "";
    document.getElementById("winPic").innerHTML = "";
    document.getElementById("winPic").innerHTML = "";
    guesses = 5;
    document.getElementById("guesses").innerHTML = "You have: " + guesses + " wrong guesses remaining!";
    guessedLetters = [];
    wrongLetters= [];
    populateGuess();
    printWord();
    console.log(word);
}

//This function takes the letter and checks in "word" to see if the letter is in it. If not, it removes one from "guesses"
//and if guesses is zero, or no guesses remaining, the user would have lost
function guessLetter(){
    var letter = document.getElementById("letters").value;
    guessedLetters.push(letter);
    if(guesses>0) {
        if(word.indexOf(letter)==-1) {
            guesses--;
            wrongLetters.push(letter);
            if(guesses==0) {
                //to determine whether the user has lost
                document.getElementById("lose").innerHTML = "You lose! The word was " + word;
                document.getElementById("lose").style.display = "block";
                document.getElementById("winPic").innerHTML = "<img src= 'img/melted.png' >" ;
                document.getElementById("guessButton").style.display = "none";
            }
        }
        document.getElementById("wrongLetters").innerHTML = "Wrong Letters: " + wrongLetters;
        document.getElementById("guesses").innerHTML = "You have: " + guesses + " wrong guesses remaining!";
    }
    printWord();
    populateGuess();
}



// Compare word to guessedLetters using guessedLetters.indexOf(letter in word) to build the “_”
// word with the correctly guessed letters filled in.
function printWord() {
    var output = "";
    // guessedLetters.push(letter);//this pushes the letter to the guessed letters array
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) == -1) {//at whichever index of word we are at, is it in guessed letters?
            output += "_ ";
        } else {
            output += word[i];
        }
    }
    document.getElementById("displayedWord").innerHTML = output;

    if(output==word) {

        document.getElementById("win").innerHTML = "You win! The word was " + word;
        document.getElementById("win").style.display = "block";
        document.getElementById("winPic").innerHTML = "<img src='img/snowman.gif' >" ;
        document.getElementById("guessButton").style.display = "none";

    }

}
