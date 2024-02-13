const numeros = [40, 15, 20, 13, 2, 8, 23, 11]; //tamanho 8

let soma = 0;

for (let i = 0; i < numeros.length; i++){
    //sera executado para i = 0 ate 7, 8 nao sera executado
    soma = soma + numeros[i];
}
console.log(soma);