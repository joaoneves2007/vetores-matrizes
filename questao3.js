/*
Crie um vetor com 10 elementos e remova o último elemento e imprima
a matriz sem o elemento removido em JavaScript?
*/

// Criando o vetor com 10 elementos
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Removendo o último elemento
vetor = vetor.slice(0, -1);

// Imprimindo o vetor sem o último elemento
console.log(vetor);