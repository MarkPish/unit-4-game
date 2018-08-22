
// Generate randon mumber.....use a document.ready? 
$(document).ready(function()
 {
    let Random=Math.floor(Math.random()*120+19)


// Display random number
$("#scoreToMatch").text(Random);

// Generate random number for each crystal
    let num1= Math.floor(Math.random()*12+1)
    let num2= Math.floor(Math.random()*12+1)
    let num3= Math.floor(Math.random()*12+1)
    let num4= Math.floor(Math.random()*12+1)


// Create variables to keep track of wins, losses and total score...research .text?

    let playerTotal = 0;
    let wins = 0;
    let losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

// Reset the game
function reset(){
    Random=Math.floor(Math.random()*120+19)
    console.log(Random)
}


}




// Display wins



// Display losses




// Create buttons for the crystal images




// Clicking crystals