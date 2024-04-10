/*
Escreva um código para calcular a soma de todos os elementos de uma
matriz em JavaScript.
*/

function calcularSomaMatriz(matriz) {
    let soma = 0;
    
    // Iterar sobre cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Iterar sobre cada elemento da linha
        for (let j = 0; j < matriz[i].length; j++) {
            // Adicionar o elemento atual à soma
            soma += matriz[i][j];
        }
    }
    
    return soma;
}

// Exemplo de uma matriz
let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Calcular a soma da matriz de exemplo
let somaDaMatriz = calcularSomaMatriz(matrizExemplo);

// Imprimir a soma
console.log("A soma de todos os elementos da matriz é:", somaDaMatriz);