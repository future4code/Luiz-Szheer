// let a = 10
// let b = 10

// console.log(b)
// No primeiro console.log(b) irá imprimir apenas o número 10

// b = 5
// console.log(a, b)
// No segundo console.log irá imprimir o numero 10 e o número 5

// let a = 10
// let b = 20
// let c
// c = a
// b = c
// a = b

// console.log(a, b, c)
// No terceiro console.log será impresso o número 10,10,10

// let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
// let valorRecebidoDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${horasTrabalhadasDia/valorRecebidoDia} por hora`)

// Basicamente o código abre o prompt para que o usúario possa responder as perguntas. 
// Por fim, após receber a informações de horas e valor recebido por dia.
// O código calcula e imprime para o usuário o valor recebido por hora. 


//Exercicio 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
// Basicamente imprimiu undefined porque não foi atribuido nenhum valor para as duas variáveis.

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(nome)
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)
//Agora os dois passam a ser string pois o prompt sempre retorna String.

console.log("Olá", nome, "você tem", idade, "anos.")

//Exercicio 2

let timeDeFutebol = prompt("Você torce para o Vasco da Gama?")
let socioTorcedor = prompt("Você é socio torcedor?")
let divisaoTime = prompt("Seu time esta na serie A do Brasileirão?")

console.log("Você torce para o Vasco da Gama?", timeDeFutebol, "Você é socio torcedor?", socioTorcedor, "Seu time esta na serie A do Brasileirão?", divisaoTime)

//Exercicio 3
let a = 10
let b = 25
let c

c = a
a = b 
b = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio
let numero1 = prompt("Digite o primeiro número")
let numero2 = prompt("Digite o segundo número")

/*Tive que transformar em número a variavel informada pelo usuário no prompt porque ela sempre retorna uma String.
E no caso para somar estava apenas concatenando ao invez de realmente somar. */ 

let atualizandoParaNumero1 = Number(numero1)
let atualizandoParaNumero2 = Number(numero2)

let x = atualizandoParaNumero1 + atualizandoParaNumero2
let y = atualizandoParaNumero1 * atualizandoParaNumero2

console.log(x)
console.log(y)
