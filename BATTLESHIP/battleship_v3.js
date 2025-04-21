//Declared variables 
var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

//game logic

while (isSunk == false){
    guess = prompt("Ready! , Aim, Fire!(Enter Number 0-6)🎯:");

    if (guess == null) {
        alert("Te Namian kmn hy? te ok a");
        break;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6!");
        continue;

    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);

    if (hitIndex !== -1) {
        alert("Hit!");
        shipLocations.splice(hitIndex, 1);
        hits++;
        if (shipLocations.length === 0) {
            isSunk = true;
        }
    } else {
        alert("Miss da baba mo!");
    }
}

var accuracy = (guesses > 0 ? (hits/ guesses) * 100 : 0).toFixed(2);
var stats = "YOU TOOK " + guesses + " GUESSES TO SINK THE BATTLESHIP!\n" + "Accuracy: " + accuracy + "%";

alert(stats);
