console.log("Trabalhando com listas ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
    `Curitiba`
);
const idadeDoComprador = 15;
console.log("Destinos possiveis");
console.log("listaDeDestinos");

if(idadeDoComprador >= 18){

    console.log("comprador maior de idade");
    console.log(listaDeDestinos);
}else{
    console.log("nao é maior de idade ");
    console.log(listaDeDestinos.splice(1,1));
}

console.log("listaDeDestinos");
/*

Uma vez que a idade for inferior a 18, será exibida a mensagem Não é maior de idade e não posso vender,
 que definimos no else, com um fluxo de execução controlado.

Utilizamos os operadores lógicos = e >, mas existem diversas possibilidades de configuração:

>18
>18
<=18
>18
==18

Quando utilizamos o marcador == estamos marcando uma comparação,
 e quando utilizamos = fazemos atribuição de valor.

*/