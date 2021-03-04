// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

var nomi = ["Carlo", "Guido", "Paolo"];
var cognomi = ["Bianchi", "Rossi", "Verdi"];
var invitati = [];
for (var i = 1; i <= 3; i++) {
var randomName = Math.floor(Math.random() * nomi.length)

var randomSurname = Math.floor(Math.random() * cognomi.length)

var fullName = nomi[randomName] + " " + cognomi[randomSurname];
invitati.push(fullName);
}
console.log(fullName);
