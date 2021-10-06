'use strict'

var readlineSync = require("readline-sync");
var opcao, quantPecas, peca, peso
var listaDePecas = [];
const numLetras = 3, numPecas = 10;


do{

    console.log("~~~~ Cadastro de Peças ~~~~");
    console.log("1 - Cadastrar Peças");
    console.log("2 - Listagem de Peças");
    console.log("0 - Sair do Sistema");

    opcao = readlineSync.question("Digite a opcao desejada: ");

  switch(opcao){
       case'1' :
         peca = readlineSync.question("Digite o nome da Peca: ");
          peso= readlineSync.question("Digite o peso da peca em gramas: ");
          if(peca.length > numLetras){
              if(peso>=100){
                 listaDePecas.push(peca);
                 console.log("A peça:" + peca + "Foi Cadastrada com Sucesso!!");
                }   else{
                 console.log("A Peça Não pode ser cadastrada por possuir um peso inferior a 100 gramas.")
                }
            } else{
               console.log ("A peça não pode ser cadastrada por possuir um nome inferior a 3 caracteres.")
            }
            break;

        case '2':
          console.log ("Listando a quantidade de Peças")
          quantPecas = listaDePecas.length;
             if(quantPecas <= numPecas){
                console.log("Ainda podem ser armazenada mais peças na caixa!");
            } else{
                console.log("Espaço para armazenamento insuficiente");
            }
            break;

        case '0':
          console.log("Obrigado por utilizar nosso sistema")
          break;

        default:
            console.log("Opçao Inválida, Tente novamente!");
    }
} while(opcao != 0);