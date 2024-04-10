/*
Crie uma matriz 3x3 em JavaScript e imprima-a na tela.
*/

// Criando uma matriz 3x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimindo a matriz na tela
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}