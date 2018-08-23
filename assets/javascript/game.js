
// Generate randon mumber.....use a document.ready? 
$(document).ready(function()
 {
    let Random=Math.floor(Math.random()*(120-19+1)+19);


// Display random number
$("#scoreToMatch").text(Random);

// Generate random number for each crystal
    let num1= Math.floor(Math.random()*12+1);
    let num2= Math.floor(Math.random()*12+1);
    let num3= Math.floor(Math.random()*12+1);
    let num4= Math.floor(Math.random()*12+1);


// Create variables to keep track of wins, losses and total score...research .text?

    let playerTotal = 0;
    let wins = 0;
    let losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

{
    // return Math.floor(Math.random()*(max-min+1)+min);
// Reset the game
function reset() 
    {
    Random=Math.floor(Math.random()*(120-19+1)+19);
    console.log(Random);
    $("#scoreToMatch").text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    playerTotal= 0;

    $("#totalScore").text(playerTotal);

}
// Show wins

function chixDinner()
    {
    alert ("Winner, winner...chicken dinner!");
        wins++;
        $("#wins").text(wins);
        reset();
    
    }
// Show losses
function loser()
    {
    alert ("LOOOSER!!!!");
        losses++;
        $("#losses").text(losses);
        reset()
}

// Clicking the crystals
$(".blue").on("click", function()
    {
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $("#totalScore").text(playerTotal);

        // Conditionals for win or lose
        if (playerTotal == Random)
        {
        chixDinner();       
        }
        else if (playerTotal > Random)
        {
        loser();
        }
})
$(".red").on("click", function()
    {
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $("#totalScore").text(playerTotal);

        // Conditionals for win or lose
        if (playerTotal == Random) {
        chixDinner();       
        }
        else if (playerTotal > Random)
        {
        loser();
        }
})
$(".yellow").on("click", function()
    {
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $("#totalScore").text(playerTotal);

        // Conditionals for win or lose
        if (playerTotal == Random) 
        {
        chixDinner();       
        }
        else if (playerTotal > Random)
        {
        loser();
        }
})
$(".green").on("click", function()
    {
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $("#totalScore").text(playerTotal);

        // Conditionals for win or lose
        if (playerTotal == Random) 
        {
        chixDinner();       
        }
        else if (playerTotal > Random)
        {
        loser();
        }
    })

});