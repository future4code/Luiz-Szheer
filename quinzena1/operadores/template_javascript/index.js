// Exercicio 1

// O primeiro console.log irá imprimir: a. false
// O segundo console.log irá imprimir: b. false
// O terceiro console.log irá imprimir: c. true
// O quarto console.log irá imprimir: d. boolean

// Exercicio 2 

// Ele irá imprimir o valor concatenados das Strings que foram digitadas no prompt pelo usuário.
// Ex: Se o usuário digitar 10 e 2 o resultado iria imprimir 102.

// Exercicio 3
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// ---------------- Exercícios com digitação de código ----------------------

// Exercicio 1
let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do(a) seu melhor amigo(a)?"))
let idadeMaior = (suaIdade > idadeMelhorAmigo)
let diferencaIdade = (suaIdade - idadeMelhorAmigo)
console.log("Sua idade é maior do a do seu melhor amigo?",idadeMaior)
console.log("A diferença de idade entre vocês é de:", diferencaIdade, "ano(s).")

// Exercicio 2
let numeroPar = Number(prompt("Digite um número par."))
console.log(numeroPar % 2)

// O resultado é sempre 0 pois qualquer número par dividido por 2 não apresenta sobra.
// O resultado sempre vai apresentar uma sobra.

// Exercicio 3
let qualSuaIdade = Number(prompt("Qual a sua idade?"))
console.log("Sua idade em meses é: ", qualSuaIdade * 12)
console.log("Sua idade em dias é: ",qualSuaIdade * 365)
console.log("Sua idade em horas é: ",qualSuaIdade * 24 * 365)

//Exercicio 4
let primeiroNumero = Number(prompt("Digite o primeiro número!!!"))
let segundoNumero = Number(prompt("Digite o segundo número!!!"))
let resultado = primeiroNumero > segundoNumero
let resultado2 = primeiroNumero === segundoNumero
let resultado3 = (primeiroNumero % segundoNumero) === 0
let resultado4 = (segundoNumero % primeiroNumero) === 0


console.log("O primeiro numero é maior que o segundo?", resultado)
console.log("O primeiro numero é igual ao segundo?", resultado2)
console.log("O primeiro numero é divisivel pelo segundo?", resultado3)
console.log("O segundo número é divisível pelo primeiro?", resultado4)

//Desafio 1 
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//a
let grausFahrenheit = 77
let kelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log(kelvin)

//b
let celsius = 80
let grausFahrenheit2 = (celsius)*(9/5) + 32
console.log(grausFahrenheit2)

//c
let celsius2 = 30
let grausFahrenheit3 = (celsius2)*(9/5) + 32
console.log(grausFahrenheit3)

let kelvin2 = (grausFahrenheit3 - 32)*(5/9) + 273.15
console.log(kelvin2)

//d 
let gCelsius3 = Number(prompt("Digite um valor em graus Celsius para conversão:"))
let gFahrenheit3 = (gCelsius3) *(9/5) + 32
let gKevin3 = (gFahrenheit3 - 32) *(5/9) + 273.15
console.log (gFahrenheit3, "ºF")
console.log (gKevin3, "ºK" )



//Desafio 2

//Enunciado
let quilowattsHora = 0.05

//A
let consumoEnergia = (280 * quilowattsHora)
console.log("O valor do consumo de energia dessa residência é R$",consumoEnergia)

//B
let desconto = consumoEnergia - (consumoEnergia * 15) / 100
console.log("O valor final para pagamento com o desconto é de R$",desconto)

//Desafio 3
//A
let umaLibra = 0.45
let vinteLibras = 0.45 * 20
console.log("20lb equivalem a ",vinteLibras,"kg")

//B
const umOz = 0.0283495
const dezEMeioOz = umOz * 10.5

console.log("10.5oz equivalem a",dezEMeioOz,"kg")

//C
const umaMilha = 1609.34
const cemMilhas = umaMilha * 100
console.log("100mi equivalem a", cemMilhas,"m")

//D
const umPe = 0.3048
const cinquentaPes = umPe * 50
console.log("50ft equivalem a",cinquentaPes,"m")

//E
const umGalao = 3.79
const centoETres = umGalao * 103.56
console.log("103.56gal equivalem a",centoETres,"l")

//F
const xic = 0.24
const xic2 = xic * 450
console.log("450 xic equivalem a",xic2,"l")


//G
let quantidadeDeLibras = Number(prompt("Informe a quantidade de libras que quer converter em kg."))
let umaLibraEmKg = 0.45 //uma libra representa 0.45kg
let valorFinal = quantidadeDeLibras * umaLibraEmKg
console.log("O valor de",quantidadeDeLibras,"libras em KG é de:",valorFinal)


