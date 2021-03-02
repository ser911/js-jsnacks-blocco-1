// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var playerNumber1 = prompt("Inserisci il primo numero");
var playerNumber2 = prompt("Inserisci il secondo numero");

 if (playerNumber1 > playerNumber2){
   console.log("Il numero vincente è " + playerNumber1)
 }
 else if (playerNumber2 > playerNumber1) {
   console.log("Il numero vincente è " + playerNumber2)

 }
 else {
   console.log( playerNumber1 + " e " + playerNumber2 + " sono equivalenti")
 }
