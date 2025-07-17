let nota1 = Number(prompt("Digite o valor da N1:"));
let nota2 = Number(prompt("Digite o valor da N2:"));
let nota3 = Number(prompt("Digite o valor da N3:"));

let media = (nota1 + nota2 + nota3)/3;

if (media >= 5) {
     alert("Você foi aprovado. Parabéns pelo resultado!")
} else {
     alert("Você foi reprovado. Está de recuperação!")
}