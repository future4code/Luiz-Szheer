//Exercícios de interpretação de código

//1) O que o código abaixo está fazendo? Qual o resultado impresso no console
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//Ele esta fazendo um loop até o indice chegar ao valor 5. E soma o valor dos índices anteriores.
//Imprime o número 10

//2)Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//a)O que vai ser impresso no primeiro console?
// 19, 21, 23, 25, 27, 30

//b)Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?
//Seria necessário usar um for padrão.

//3)Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//* ,**, ***, ****

// Exercício de escrita de código
//1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console
//Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.


let nomeDosPets = []
const qtdPets = Number(prompt("Quantos pets você tem?"))
if (qtdPets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (i = 0; i < qtdPets; i++) {
        const qualOhNomeDeCadaPet = prompt("Informe o nome do seu pet " + (i + 1) + "º pet")
        nomeDosPets[i] = qualOhNomeDeCadaPet
    }
}
console.log(nomeDosPets)


// Exercício 2
//a) Escreva um programa que imprime cada um dos valores do array original
const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99]
const imprimirArray = (numeros) => {
    for(let indice = 0; indice < numeros.length; indice++){
        const novoArray = numeros[indice]
        console.log(novoArray)
    }
}
imprimirArray(arrayOriginal)


//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const imprimirArray = (numeros) => {
    for(let indice = 0; indice < numeros.length; indice++){
        const novoArray = numeros[indice] / 10
        console.log(novoArray)
    }
}
imprimirArray(arrayOriginal)

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99]
let arrayDePares = []
const numerosParesApenas = (numeros) => {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            arrayDePares[i] = numeros[i]
        }

    }
    console.log(arrayDePares)
}
numerosParesApenas(arrayOriginal)

//d)Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let arrayDeStrings = []
const imprimirArray = (numeros) => {
    for(let indice = 0; indice < numeros.length; indice++){
        const novoArray = `O elemento do índex ${indice} é ${numeros[indice]}`
        console.log(novoArray)
    }
}
imprimirArray(arrayOriginal)


//e)Escreva um programa que imprima no console o maior e o menor números contidos no array original
// Você deve criar variáveis para guardar o valorMaximo e o valorMinimo. Inicialize a variável valorMaximo com um valor que não seja maior que qualquer valor do array original e a valorMinimo com um valor que não seja menor que qualquer valor do array original.
// "O maior número é 130 e o menor é 21"

const arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let valorMaximo = -Infinity
let valorMinimo = Infinity

const maiorNumeroEhMenorNumero = (numeros) => {
    for (let numeroDaVez of numeros) {
        if (numeroDaVez > valorMaximo) {
            valorMaximo = numeroDaVez
            
        }
        for (let numeroDaVez of numeros) {
            if (numeroDaVez < valorMinimo) {
                valorMinimo = numeroDaVez
            

            }
        }
    }
return (`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}!`)
}
console.log(maiorNumeroEhMenorNumero(arrayOriginal));


//Desafio

const numeroEscolhido = Number(prompt("Escolha um número!!!!"))
console.log("Vamos jogar!!!")
let numeroDeTentativas
let acerteONumero

for (let i = 0; acerteONumero !== numeroEscolhido; i++) {
    acerteONumero = Number(prompt("Tente acertar o número!!!"))
    console.log(`O número chutado foi: ${acerteONumero}`)
    if (acerteONumero > numeroEscolhido) {
        console.log(`Errou. O Numero escolhido é menor.`)
    } else if (acerteONumero < numeroEscolhido) {
        console.log(`Errou. O número escolhido é maior`)
    } else {
        console.log("Acertou")
        numeroDeTentativas= (i++ + 1)
    }
    
}
console.log(`Você acertou o número no: ${numeroDeTentativas} chute`)


//Desafio 2
const numeroAleatorio = Math.round(Math.random()*100)
if(numeroAleatorio === 0) {
    numeroAleatorio = 1
}
console.log("Vamos jogar!!!")
let numeroDeTentativas
let acerteONumero


for (let i = 0; acerteONumero !== numeroAleatorio; i++) {
    acerteONumero = Number(prompt("Tente acertar o número!!!"))
    console.log(`O número chutado foi: ${acerteONumero}`)
    if (acerteONumero > numeroAleatorio) {
        console.log(`Errou. O Numero escolhido é menor.`)
    } else if (acerteONumero < numeroAleatorio) {
        console.log(`Errou. O número escolhido é maior`)
    } else {
        console.log("Acertou")
        numeroDeTentativas= (i++ + 1)   
    }  
}
console.log(`Você acertou o número no: ${numeroDeTentativas} chute`)

/*As alterações não foram fáceis. Porque tive que buscar uma nova função para arredontar
 e depois multiplicar por 100 porque Math.random() retorna apenas números entre 0 e 1.*/