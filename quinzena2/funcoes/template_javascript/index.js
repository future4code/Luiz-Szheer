//Leitura de Código
//Exercicio 1
//A
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//No primeiro console.log ele imprime o valor 2 * 5, apresentando o resultado que é 10.
//Já no segundo console.log ele imprime o valor 10 * 5, apresentando o resultado que é 50.

//B
/* Se fosse retirado o console.log não iria acontecer nada basicamente pois foi imputado
os valores 2 e 10 para a variavel, mas não foi impressa dentro ou fora da função .*/

//Exercicio 2
//A
let textoDoUsuario = prompt("Insira um texto"); //Solicitao uma informação ao usuário

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
//Retornou para o escopo global a função,
//a variavel texto com letra minuscula e 
//procurando a String cenoura dentro do texto.
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//Basicamente usa a função criada acima, procura se a palavra cenoura
//foi digitada dentro do prompt e imprime se é verdadeiro ou falso.
//Ela é util para procurar a palavra informada que no caso é ("cenoura") fora do escopo do bloco.

//B
//As três frases terão como resultado true

//----------Exercicio de código----------
//Exercicio 1
/* a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */

function informacoesSobreMin(){
    console.log("Eu sou Fábio, tenho 36 anos, moro no Rio de Janeiro e sou estudante.")
}
informacoesSobreMin()

/*Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. 
Exemplo: Para a entrada:  "Laís", 23, "São Paulo" e "instrutora", deve retornar:
"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."*/

function nomeIdadeCidadeProfissao(nome,idade,cidade,profissao) {
   console.log(`Eu sou ${nome}, tenho ${36}, moro no ${cidade} e sou ${profissao}`)
}
nomeIdadeCidadeProfissao("Luiz Fabio",36,"Rio de Janeiro","Empresário")

//Exercicio 2
/* Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

function somaDeDoisNumeros(num1, num2) {
    const soma = num1 + num2
    return soma  
}
const somaDosValores = somaDeDoisNumeros(10,2)
console.log(somaDosValores)


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function somaDeDoisNumerosMaiorOuIgual(num1, num2) {
    const maiorOuIgual = (num1 >= num2)
    console.log(maiorOuIgual)
}
    
somaDeDoisNumerosMaiorOuIgual(5, 10)
somaDeDoisNumerosMaiorOuIgual(10, 4)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
function oNumeroEhPar(num1) {
    const verificandoSeEhPar = (num1 % 2) === 0
    console.log(`O numero ${num1} é par? ${verificandoSeEhPar}`)
}
oNumeroEhPar(11)

/*d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.*/

function imprimirMensagem(mensagem){
    console.log(mensagem.toLowerCase(),mensagem.length)

}
imprimirMensagem("O CÉU É AZUL E TUDO VAI FICAR MINUSCULO")

//Exercício 3
/*Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:*/
//Números inseridos: 30 e 3
function operacoesBasicas (){
    const primeiroNumero = Number(prompt("Informe um números"))
    const segundoNumero = Number(prompt("Informe o segundo número"))
    const somatorio = primeiroNumero + segundoNumero
    const diferenca = primeiroNumero - segundoNumero
    const multiplicacao = primeiroNumero * segundoNumero
    const divisao = primeiroNumero / segundoNumero
    console.log(`Soma :${somatorio}\nDiferença:${diferenca}\nMultiplicação:${multiplicacao}\nDivisao:${divisao}`)
}
operacoesBasicas()

function operacaoSoma (primeironumero, segundonumero) {
    const soma = primeironumero + segundonumero
    return soma
}

function operacaodivisao (primeironumero, segundonumero) {
    const divisao = primeironumero / segundonumero
    return divisao
}

function operacaosubtracao(primeironumero, segundonumero) {
    const subtracao = primeironumero - segundonumero
    return subtracao
}
function operacaomultiplicacao(primeironumero, segundonumero) {
    const multiplicacao = primeironumero * segundonumero
    return multiplicacao
}
const valor1 = Number(prompt("Informe o primeiro número"))
const valor2 = Number(prompt("Informe o segundo número"))
console.log("Soma:",operacaoSoma(valor1, valor2))
console.log("Subtração",operacaosubtracao(valor1, valor2))
console.log("Divisao:",operacaodivisao(valor1, valor2))
console.log("Multiplicação:",operacaomultiplicacao(valor1, valor2))

//Desafio 1
/*Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los 
mais de uma vez ao longo do código através de invocações/chamadas. 
Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro*/

let nomeCompleto = (primeironome) => {
    return primeironome 
}
console.log(nomeCompleto("Fabio"))

/*b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo*/

let somaArrowFunction = (firstNum, secondNum) => {
    return firstNum + secondNum
}
const meuResultado = somaArrowFunction(20,10)
console.log(nomeCompleto(meuResultado))

//Desafio 2
/*Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
Retorne este valor, invoque a função e imprima o resultado no console.
Dica A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
É necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)*/

// Fórmula hip² = a² + b² 
let calcularHipotenusa = (cateto1,cateto2) => {
    return Math.sqrt((cateto1*cateto1) + (cateto2*cateto2))
}

console.log(calcularHipotenusa(4,3))



