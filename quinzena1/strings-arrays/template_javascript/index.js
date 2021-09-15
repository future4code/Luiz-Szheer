//Exercicio 1 Interpretação de código
let array
console.log('a. ', array)
//Irá retornar a. undefined porque a variavel let não foi definidade

array = null
console.log('b. ', array)
//Irá retornar b. null porque o array foi definido como null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//Irá retornar o tamanho do array c. 11

let i = 0
console.log('d. ', array[i])
//Irá retornar o índice 0 da array , que no caso é o número 3.
//A resposta impressa ser d. 3

array[i+1] = 19
console.log('e. ', array)
//Irá substituir o índice 1 do array que no caso é o número 4 pelo número novo.
//Em seguida irá imprimir todo o array [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//Irá retorna f. 9. Irá imprimir o sexto indice que é o número 9.

//Exercicio 2
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//"Subi num ônibus em Marrocos"
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//-----------------------Exercício de escrita de código---------------------
//Exercício 1
const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail")
console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

//Exercício 2 
//A
const comidasFavoritas = ["Pizza", "HB", "Churrasco", "Japonesa", "Chocolate"]
console.log(comidasFavoritas)
//B
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

//C
const comidasFavoritaUsuario = prompt("Informe sua comida favorita")
const novaArray = comidasFavoritas.splice(1,1, comidasFavoritaUsuario)
console.log(comidasFavoritas)

//Exercício 3
const listaDeTarefas = []
const tarefa1 = prompt("Informe uma tarefa que você precisa fazer")
const tarefa2 = prompt("Informa a segunda tarefa")
const tarefa3 = prompt("Informe a terceira tarefa")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

const atividadeRealizada = prompt("Informe 0,1 ou 2 referente a atividade que você ja realizou")
listaDeTarefas.splice(atividadeRealizada, 1)
console.log(listaDeTarefas)

//Desafio
//Número 1
const frase = prompt("Escreve uma frase aleatória")
const novaFrase = frase.split( " " );
console.log(novaFrase)

//Número 2
const sacolaoFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(sacolaoFrutas.indexOf("Abacaxi"),sacolaoFrutas.length)



