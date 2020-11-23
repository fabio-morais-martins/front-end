console.log("Trabalhando com listas ");

// const salvador = `salvador`;
// const saoPaulo = `são Paulo`;
// const rioDeJaneiro = `rio de janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
    `Curitiba`
)

listaDeDestinos.push(`Florianopolis`);
console.log("listaDeDestinos");
//console.log("Destinos possiveis");
//console.log(salvador,saoPaulo,rioDeJaneiro);

// primeiro parametro a posição a ser deletado proximo parametro é quantos indices serao deletados
//o indice começa no numero ZERO
//EX:listaDeDestinos.splice(0,1);
//Para acessar um elemento especifico podemos chamar o nome dessa lista seguido de
//colchetes com o index desse elemento. ex: lista[2]

console.log(listaDeDestinos.splice(1,2));

// O que aprendemos ate aqui:

// Criação de Arrays;

// Inserção de itens em um array;

// Array splice;

// Palavras reservadas;

// Indices do array;

