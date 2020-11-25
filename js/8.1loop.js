const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = `Salvador`;

console.log(`\n Destinos possiveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;

let destinoExistente = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExistente = true;
        break;
    }
    contador++;
}

console.log(`Destino existe:`, destinoExistente);

if (listaDeDestinos && destinoExistente) {
    console.log(`Boa viagem`);
} else {
    console.log(`Desculpe tivemos um erro!`);
}