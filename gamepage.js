var y = Math.floor(Math.random() * 10 + 1)
var x = document.getElementById("guessField").value
// counting the number of guesses


sumbit () 
if(x == y){
    alert("CONGRATULATIONS! ! !"+playername+"YOU GUESSED IT RIGHT IN " +guess + " GUESS");
      guess=1;
}
else(x>y)
{
    guess++;
    alert("OPPS SORRY!! TRY A SMALLER");
}
if(x<y) {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}

var y = Math.floor(Math.random() * 10 + 1)
var x = document.getElementById("guessField").value
