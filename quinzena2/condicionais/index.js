//Exercício de interpretação de código
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
//Exercício 1
//a) Explique o que o código faz. Qual o teste que ele realiza?
//Pede um número pro usúario e depois transforma ele em Number.
//Em seguida verifica se o resto da divisão dele por 2 é igual a zero.
//Se a resposta for "true" ele imprime a mensagem "Passou no teste.", caso contrario imprime "Não passou no teste."
//Pode ser usada para verificar se o número é par ou impar.


//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Irá imprimir para os números pares.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//Para todos os númeres ímpares

//Exercício 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//Ele verifica o valor e o preço da fruta que será escolhida pelo cliente.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta Maçã é R$ 2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default
//O preço da fruta  Pêra  é  R$  5

//Exercicio 3
const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
//a) O que a primeira linha está fazendo?
//Pedindo um número pro usuário pelo prompt e transformando o resultado em um Number.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se digitar o número 10: Esse número passou no teste
//Se digitar o número -10: Não irá aparecer nenhuma mensagem pois ele não executa o if e não foi definido nenhum else if ou else.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//A variável let dentro do bloco não assume escopo global então não será "impressa" no console fora do bloco.
//Caso seja substituida por "var" ai seria impresso a mensagem fora do bloco.

//----------Exercícios de escrita de código----------

//Exercício 1
//Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
const idadeDoUsuário = Number(prompt("Qual a sua idade?"))
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
if (idadeDoUsuário >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//Exercício 2
// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
const turnoDoDiaAlunoEstuda = prompt("Informe o turno do dia que você estuda? M para Matutino, V para Vespertino e N para Noturno. ")
if (turnoDoDiaAlunoEstuda === "M") {
    console.log("Bom Dia!")
} else if (turnoDoDiaAlunoEstuda === "V") {
    console.log("Boa tarde!")
} else if (turnoDoDiaAlunoEstuda === "N") {
    console.log("Boa noite!")
} else {
    console.log("Tente novamente digitando M para Matutino, V para Vespertino e N para Noturno. ")
}

//Exercício 3
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
const turnoDoDiaAlunoEstuda = prompt("Informe o turno do dia que você estuda? M para Matutino, V para Vespertino e N para Noturno. ")
switch (turnoDoDiaAlunoEstuda) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Tente novamente digitando M para Matutino, V para Vespertino e N para Noturno. ")

}

//Exercício 4
//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
const generoDoFilme = prompt("Qual o genero do filme?")
const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//----------Desafios----------
//Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
const generoDoFilme = prompt("Qual o genero do filme?")
const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
    const lanchinhoVaiLevar = prompt("Qual lanchinho você vai levar?")
    console.log(`Bom filme! Aproveite o seu ${lanchinhoVaiLevar}`)
} else {
    console.log("Escolha outro filme :(")
}

//Desafio 2
//Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//Nome completo;
//Tipo de Jogo: IN indica internacional; e DO indica doméstico;
//Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//Categoria: podeser as opções 1,2,3 ou 4
//Quantidade de ingressos
//O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
const nomeCompleto = prompt("Informe o seu nome completo")
const tipoDeJogo = prompt("Informe o tipo de jogo: IN para Internacional e DO para doméstico!")
const etapaDeJogo = prompt("Informe a etapa do jogo: SF para semi-final, DT para decisão do terceiro lugar e FI para final!")
const categoria = Number(prompt("Informe a categoria: 1, 2, 3 ou 4!!!"))
const quantidadeDeIngressos = Number(prompt("Informe a quantidade de ingressos que deseja comprar???"))


if (tipoDeJogo === "DO" && etapaDeJogo === "SF" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(1320)}`)
    console.log(`Valor total: R$ ${Number(1320) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "SF" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(880)}`)
    console.log(`Valor total: R$ ${Number(880) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "SF" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(550)}`)
    console.log(`Valor total: R$ ${Number(550) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "SF" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(220)}`)
    console.log(`Valor total: R$ ${Number(220) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "DT" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(660)}`)
    console.log(`Valor total: R$ ${Number(660) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "DT" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(440)}`)
    console.log(`Valor total: R$ ${Number(440) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "DT" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(330)}`)
    console.log(`Valor total: R$ ${Number(330) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "DT" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(170)}`)
    console.log(`Valor total: R$ ${Number(170) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "FI" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(1980)}`)
    console.log(`Valor total: R$ ${Number(1980) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "FI" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(1320)}`)
    console.log(`Valor total: R$ ${Number(1320) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "FI" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(880)}`)
    console.log(`Valor total: R$ ${Number(880) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "DO" && etapaDeJogo === "FI" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Nacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: R$ ${Number(330)}`)
    console.log(`Valor total: R$ ${Number(330) * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "SF" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(1320)*0.2439}`)
    console.log(`Valor total: USD ${Number(1320)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "SF" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(880)*0.2439}`)
    console.log(`Valor total: USD ${Number(880)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "SF" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(550)*0.2439}`)
    console.log(`Valor total: USD ${Number(550)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "SF" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Semi-Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(220)*0.2439}`)
    console.log(`Valor total: USD ${Number(220)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "DT" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(660)*0.2439}`)
    console.log(`Valor total: USD ${Number(660)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "DT" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(440)*0.2439 }`)
    console.log(`Valor total: USD ${Number(440)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "DT" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(330)*0.2439}`)
    console.log(`Valor total: USD ${Number(330)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "DT" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Decisão do terceiro lugar`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(170)*0.2439}`)
    console.log(`Valor total: USD ${Number(170) *0.2439* quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "FI" && categoria === 1) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(1980)*0.2439}`)
    console.log(`Valor total: USD ${Number(1980)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "FI" && categoria === 2) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(1320)*0.2439}`)
    console.log(`Valor total: USD ${Number(1320)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "FI" && categoria === 3) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(880)*0.2439}`)
    console.log(`Valor total: USD ${Number(880)*0.2439 * quantidadeDeIngressos} `)
} else if (tipoDeJogo === "IN" && etapaDeJogo === "FI" && categoria === 4) {
    console.log("--Dados da compra--")
    console.log(`Nome do cliente: ${nomeCompleto}`)
    console.log(`Tipo de jogo: Internacional`)
    console.log(`Etapa de jogo: Final`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("--Valores--")
    console.log(`Valor do ingresso: USD ${Number(330)*0.2439}`)
    console.log(`Valor total: USD ${Number(330)*0.2439 * quantidadeDeIngressos} `)
}

console.log("Vascão porraaaaaaaaaaaa")





