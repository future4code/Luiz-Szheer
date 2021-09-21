// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual a altura do retângulo?"))
  const largura = Number(prompt("Qual a largura do retângulo?"))
  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Informe o ano atual!"))
  const anoDeNascimento = Number(prompt("Informe o seu ano de nascimento"))
  console.log(anoAtual - anoDeNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Informe o seu peso em KG?"))
  const altura = Number(prompt("Informe a sua altura em metros!"))
  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite a sua cor favorita!")
  const cor2 = prompt("Digite a sua segunda cor favorita!")
  const cor3 = prompt("Digite a sua terceira cor favorita!")
  console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("Escreva uma texto qualquer")
  console.log(string.toLocaleUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoDoEspetaculo = Number(prompt("Qual o custo do espetáculo?"))
  const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))
  console.log(custoDoEspetaculo / valorDoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const primeiraString = prompt("Escreva uma frase qualquer")
  const segundaString = prompt("Escreve outra frase qualquer")
  console.log(primeiraString.length === segundaString.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Escreva uma frase qualquer")
  const segundaString = prompt("Escreve outra frase qualquer")
  console.log(primeiraString.toUpperCase() === segundaString.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Informe o ano atual?"))
  const nascimento = Number(prompt("Informe o seu ano de nascimento!"))
  const validadeRG = Number(prompt("Informe a validade do seu RG"))
  
  const idade = anoAtual-nascimento
  const renova = anoAtual-validadeRG
  
  const resultado = (idade <=20 && renova >= 5) || ((idade > 20 && idade <= 50) && renova >= 10 ) || (idade > 50 && renova >= 15)
  console.log(resultado)

}

// Exercício 11
function checaAnoBissexto() {
  const ano = prompt("Informe um ano aleatório!")
  const bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você é maior de idade?")
  const grauDeEscolariedade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva de tempo?")

console.log(idade === "sim" && grauDeEscolariedade === "sim" && disponibilidade === "sim")

}