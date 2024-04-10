/*
Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal.
*/

function verificarSimetriaDiagonalPrincipal(matriz) {
    // Verificar se a matriz não é 3x3
    if (matriz.length !== 3 || matriz[0].length !== 3) {
        return false;
    }
    
    // Verificar simetria em relação à diagonal principal
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Se algum elemento não for igual ao seu correspondente na diagonal principal, a matriz não é simétrica
            if (matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    
    // Se todas as comparações forem iguais, a matriz é simétrica em relação à diagonal principal
    return true;
}

// Exemplo de uma matriz simétrica em relação à diagonal principal
let matrizSimetrica = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

// Exemplo de uma matriz não simétrica em relação à diagonal principal
let matrizNaoSimetrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Verificar se a matriz é simétrica em relação à diagonal principal
console.log("A matriz simétrica é:", verificarSimetriaDiagonalPrincipal(matrizSimetrica)); // Deve retornar true
console.log("A matriz não simétrica é:", verificarSimetriaDiagonalPrincipal(matrizNaoSimetrica)); // Deve retornar false