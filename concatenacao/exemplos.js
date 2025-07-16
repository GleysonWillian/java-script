// Como declarar uma variável do tipo string:

let texto = "alguma coisa";

// Concatenar (juntar um texto no outro);

let msg1 = "Olá, ";
let msg2 = "Seja Bem-Vindo(a)";
let con = msg1 + msg2;

let pessoa = "Gleyson";
// Concatenando do jeito antigo:
let msg3 = " Olá, " + pessoa + ". Seja bem-vindo!"
// Concatenando do jeito mais atual:
let msg4 = `Olá, ${pessoa}. Seja Bem-Vindo!`;

// método para visualizar o que contém dentro de uma variável
console.log(msg4);