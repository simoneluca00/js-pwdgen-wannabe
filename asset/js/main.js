// NOME DELL'UTENTE
let nome = prompt("Qual è il tuo nome?");
console.log(nome);

// COGNOME DELL'UTENTE
let cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// COLORE PREFERITO DELL'UTENTE
let colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

let password = `${nome}${cognome}${colore}`;
console.log(password);

// PASSWORD GENERATOR
// document.getElementById("psw-gen").innerHTML = "La tua password è: " + nome + cognome + colore + 21;
// document.getElementById("psw-gen").innerHTML = `La tua password è: ${nome}${cognome}${colore}21`;
document.getElementById("psw-gen").innerHTML = `La tua password è: ${password}21`;


