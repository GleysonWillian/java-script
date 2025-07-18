// estrutura de uma function:
// function nome(){
// }

function soma(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}

let parametro1 = parseFloat(prompt("Insira um número:"));
let parametro2 = parseFloat(prompt("Insira outro número:"));
let operacao = prompt("Escolha a operação: 1 - soma, 2 - subtração, 3 -  multiplicação ou 4 - divisão.");

if (operacao === "1") {
    alert(soma(parametro1, parametro2));
} else if (operacao === "2") {
    alert(subtracao(parametro1, parametro2));
} else if (operacao === "3") {
    alert(multiplicacao(parametro1, parametro2));
} else if (operacao === "4") {
    alert(divisao(parametro1, parametro2));
} else {
    alert("Operação inválida. Tente novamente!");
}