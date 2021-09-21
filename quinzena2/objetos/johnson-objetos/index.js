// //Exercícios de interpretação de código
// //Exercício 1A
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //Será impresso Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) //Será impresso Virginia Cavendish
// console.log(filme.transmissoesHoje[2])//Será impresso {canal: "Globo", horario: "14h"}

// //Exercício 2A
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) /*Será impresso todo o objeto {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }*/
// console.log(gato) /*Será impresso todo o objeto substituindo o nome Juca do primeiro objeto pelo nome Juba{
// 	nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"
// }*/
// console.log(tartaruga) /*Será impresso todo o objeto substituindo a letra A pela letra O em todo o texto{
// 	nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"
// }*/

// // B)Conhecido como spread, ele copiou o objeto anterior 

// //Exercício 3
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//A) Será impresso o nome da pessoa
//False e undefined 

//B) O primeiro console.log foi pego a propriedade backender e retornou o seu resultado.
//Já no segundo console.log a propriedade altura não foi definida.

//Exercícios de escrita de código
/*a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/
// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const pessoaX = {
    nome: "Fabio",
    apelidos: ["Babinho","Fabinho","Peruca"]
}
function apresentacao(pessoaX) {
    console.log(`Eu sou ${pessoaX.nome}, mas pode me chamar de: ${pessoaX.apelidos[0]}, ${pessoaX.apelidos[1]} ou ${pessoaX.apelidos[2]}`)
}
apresentacao(pessoaX)

/*b) Agora, usando o operador spread, crie um novo objeto mantendo 
o valor da propriedade nome, mas com uma nova lista de três apelidos.
Depois, chame a função feita no item anterior passando como argumento o novo objeto.*/

const novaPessoa = {...pessoaX, apelidos: ["Zezinho","Huginho","Luizinho"]}
apresentacao(novaPessoa)

//Exercício 2
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const primeira = {
    nome: "Fabio Szheer",
    idade: 36,
    profissao: "Futuro DEV"
}

const segunda = {
    nome: "Larissa Avellar",
    idade: 35,
    profissao: "Médica"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//1) O valor de nome
//2) O número de caracteres do valor nome
//3) O valor de idade
//4) O valor de profissão
//5)O número de caracteres do valor profissão

function receberObjetos(primeira) {
    const array = [primeira.nome, primeira.nome.length, primeira.idade, primeira.profissao, primeira.profissao.length]
    return array
}

console.log(receberObjetos(primeira))

//Exercício 3
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "melancia",
    disponibilidade: true
}

const fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
// Invoque essa função passando os três objetos criados. 

const receberFruta = (fruta1,fruta2,fruta3) => {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)  
    return carrinho
}


//Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
console.log(receberFruta(fruta1,fruta2,fruta3))

//Desafio
/*1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.*/

const dadosUsuário = () => {
    const nome = prompt("Qual o seu nome?")
    const idade = Number(prompt("Qual a sua idade?"))
    const profissao = prompt("Qual a sua profissão?")

    const imprimir = {nome,idade,profissao}

    console.log(imprimir)
    console.log(typeof imprimir)
    
}
dadosUsuário()

/*2) Crie uma função que receba dois objetos que representam filmes. 
Eles devem ter as propriedades: ano de lançamento e nome. 
A função deve retornar uma mensagem no seguinte modelo:*/
//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

const filmes = () => {
const filme1 = {anoDeLancamento: 2010, nome: "A volta dos que não foram."}
const filme2 = {anoDeLancamento: 2010, nome: "As tranças do careca."}
const antes = filme1.anoDeLancamento > filme2.anoDeLancamento
const mesmoAno = filme1.anoDeLancamento == filme2.anoDeLancamento
console.log(`O primeiro filme foi lançado antes do segundo? ${antes} 
O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

filmes()


/*3) Crie uma função a mais pro exercício 3 de escrita de código. 
Essa função vai auxiliar o controle de estoque do sacolão: 
ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade 
disponibilidade com o valor invertido*/

const carrinho = []
const fruta1 = {nome: "banana", disponibilidade: true}
const fruta2 = {nome: "melancia", disponibilidade: true}
const fruta3 = {nome: "abacaxi",disponibilidade: true}


const receberFruta = (fruta1,fruta2,fruta3) => {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)  
    return carrinho
}
console.log(receberFruta(fruta1,fruta2,fruta3))

const controleDeEstoque = (carrinho) => {
    return (!carrinho.disponibilidade)
}
console.log(controleDeEstoque(fruta1))

