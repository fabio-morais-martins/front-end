const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
    `Curitiba`
);
const idadeComprador = 18;
const estaAcompnhada = false;
let temPassagemComprada = false;

let contador = 0
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 
if (idadeComprador >= 18 || estaAcompanhada == true) {
    consoe.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}
