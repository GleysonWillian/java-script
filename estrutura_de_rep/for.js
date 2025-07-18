// for (inicializador; condição-saída;expressão-final){}
// - Inicializador é uma variável de contagem
// - Condiçãoesaída é quando a contagem deve ser encerrada (operador de comparação)
// - Expressão-final é quando queremos que o inicializador faça mais contagem

let notas = [2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100, 2, 5, 10, 25, 50, 100, 50, 10, 20, 5];
let total = 0;

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++) {
    total += notas[repeticoes];
}

console.log(`O total do seu dinheiro é ${total}`);