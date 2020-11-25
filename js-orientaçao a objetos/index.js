import{Cliente} from "./Cliente.js" ;
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("alice", 88822233309);
const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);

ContaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
ContaCorrenteRicardo.tranferir(valor, conta2);

console.log(ContaCorrenteRicardo, ContaCorrente.numeroDeContas);



//Criando classes

// O que são atributos

// Instâcia/Objeto

// Operador new

// Criação de métodos

// Palavra chave this

// Encapsulamento

// Proposta de atributos privados

// return e early return