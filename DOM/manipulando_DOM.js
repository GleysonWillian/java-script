// Capturando um elemento do DOM por id:
// let titulo = document.getElementById("titulo1");
// console.log(titulo);

// Capturando um elemento do DOM por class:
// let titulo2 = document.getElementsByClassName("titulo2");
// console.log(titulo2);

// Capturando por tags:

// let tags = document.getElementsByTagName("h1")
// console.log(tags);


// Preenchendo via JS:
// let newTitle = document.getElementById("nome").innerHTML = prompt("Qual é o seu nome?");


// Inserindo novo elemento via JS:
// let msg = prompt("Ver mensgaem escondida? Digite 1 - Sim e 2 - Não");

// if (msg === "1") {
//     let novoElemento = document.createElement("h2");
//     novoElemento.innerHTML = "Elemento gerado via JS.";
//     document.body.appendChild(novoElemento);
// }

// Removendo um elemento via JS:
let removerNome = document.getElementById("nome");
removerNome.remove();