// console.log("Boa noite, Johnson!!")

// function salveFamilia() {
//   console.log("Salve família!!")
// }

// const instrutor = {
//   nome: "Pedro Darvas",
//   idade: 26,
//   falaDeEfeito: salveFamilia,
//   filmesPreferidos: ["Matrix", "Senhor dos Anéis", "Star Wars"],
//   vegetariano: false,
//   "nome completo": "Pedro Darvas etc"
// }
// instrutor.idade = 30
// instrutor["nome completo"] = "Darvas Pedro"

// console.log(instrutor)

// Notação de ponto -> mais comum
// console.log(instrutor.nome)
// console.log(instrutor.idade)
// console.log(instrutor.falaDeEfeito)
// console.log(instrutor.filmesPreferidos)
// console.log(instrutor.vegetariano)

// Notação de colchetes
// console.log(instrutor["nome"])
// console.log(instrutor["idade"])
// console.log(instrutor["falaDeEfeito"])
// console.log(instrutor["filmesPreferidos"])
// console.log(instrutor["vegetariano"])
// console.log(instrutor["nome completo"])

// Exercício 1

// const filme = {
//   direcao: "Herbert Richards",
//   nome: "Star Wars",
//   anoLancamento: "1980",
//   elenco: ["Harrison Ford", "Carrie Fisher", "Geroge Lucas"],
//   assistido: true
// }

// // Notação de ponto
// console.log(filme.direcao)
// console.log(filme.nome)

// // Notação de colchetes
// console.log(filme["anoLancamento"])
// console.log(filme["elenco"])
// console.log(filme["assistido"])

// Exercício 2

// const pessoa = {
//   nome: "Laís",
//   idade: 25,
//   generoMusical: "MPB",
//   animalEstimacao: {
//     nome: "Lupin",
//     idade: 1
//   },
//   filmesPreferidos: ["Matrix", "Senhor dos Anéis", "Star Wars"]
// }


// // console.log(`O nome da pessoa é ${pessoa["nome"]}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)
// console.log(pessoa.animalEstimacao.nome) // objeto dentro de objeto
// console.log(pessoa.filmesPreferidos[0]) // array dentro de objeto

// pessoa.stack = ["javascript", "node", "mysql", "typescript"]

// console.log(pessoa)


// const pessoas = [
//   {
//     nome: "Laís",
//     idade: 25,
//     generoMusical: "MPB",
//     animalEstimacao: {
//       nome: "Lupin",
//       idade: 1
//     },
//     filmesPreferidos: ["Matrix", "Senhor dos Anéis", "Star Wars"]
//   },
//   {
//     nome: "Bruno",
//     idade: 27,
//     generoMusical: "Rock",
//     animalEstimacao: {
//       nome: "Bob",
//       idade: 3
//     },
//     filmesPreferidos: ["Harry Potter"]
//   }
// ]

// console.log(pessoas[0].nome) // array de objetos
// console.log(pessoas[1].nome) // array de objetos

// Exercício 3

// const filme = {
//   direcao: "Herbert Richards",
//   nome: "Star Wars",
//   anoLancamento: "1980",
//   elenco: ["Harrison Ford", "Carrie Fisher", "Geroge Lucas"],
//   assistido: true
// }

// filme.personagens = ["Luke", "Leia", "R2D2"] // adicionar propriedade

// console.log(filme["elenco"][0]) // ler array dentro do objeto
// console.log(filme.elenco[1])
// console.log(filme.elenco[2])

// filme.elenco[0] = "Xuxa" // alterar elemento do array dentro do objeto

// console.log(`O nome do filme é ${filme.nome}, dirigido por ${filme.direcao} no ano de ${filme.anoLancamento}. O elenco conta com ${filme.elenco[0]}, ${filme.elenco[1]}, ${filme.elenco[2]} representando os personagens ${filme.personagens}`) // imprimir usando template string


// Spread

// const usuario = {
//   nome: "Astrodev",
//   idade: 25,
//   email: "astrodev@labenu.com.br"
// }

// Jeito errado

// const novoUsuario = usuario
// novoUsuario.nome = "Bruno"

// console.log("antigo", usuario)
// console.log("novo", novoUsuario)

// Um dos jeitos certos
// const novoUsuario = {
//   ...usuario,
//   nome: "Bruno"
// }

// console.log("antigo", usuario)
// console.log("novo", novoUsuario)

// const pokemonObjeto = {
//   nome: "Pikachu",
//   tipo: "Raio",
//   ataque: "Choque do Trovão"
// }

// const pokemonArray = ["Pikachu", "Charizard", "Snorlax"]

// console.log(pokemonObjeto["nome"])
// console.log(pokemonArray[0])

// console.log(pokemonObjeto["tipo"])
// console.log(pokemonArray[1])

// console.log(pokemonObjeto["ataque"])
// console.log(pokemonArray[2])

// Exercício 4

// const pessoa = {
//   nome: "Laís",
//   idade: 25,
//   generoMusical: "MPB"
// }

// const pessoa2 = {
//   nome: "Laura",
//   idade: 25,
//   generoMusical: "MPB"
// }

// function adicionarComidasEAmigo(inputPessoa) {
//   const novaPessoa = {
//     ...inputPessoa,
//     comidasPreferidas: ["pão de queijo", "coxinha", "torresmo", "abobrinha"],
//     melhorAmigo: {
//       nome: "Caio",
//       idade: 28
//     }
//   }

//   return novaPessoa
// }

// const resposta = adicionarComidasEAmigo(pessoa)
// console.log(`O nome da pessoa é ${resposta.nome} e suas comidas preferidas são 
// ${resposta.comidasPreferidas[0]}, ${resposta.comidasPreferidas[1]}, ${resposta.comidasPreferidas[2]} e ${resposta.comidasPreferidas[3]}. 
// Seu melhor amigo se chama ${resposta.melhorAmigo.nome} e tem ${resposta.melhorAmigo.idade} anos.`)
// console.log(resposta)

// const resposta2 = adicionarComidasEAmigo(pessoa2)


// Revisão funções

const site = {
  nome: "Meu site",
  tema: "claro"
}

function mudarTema(siteInput) {
  siteInput.tema = "escuro"
}

// botão chama a função de mudar tema
mudarTema(site)

function soma(num1, num2) {
  return num1 + num2
}

console.log(soma(1, 2))

function exibirManual() {
  console.log("Manual bla bla bla")
}


const pessoa = {
	nome: "Amanda", 
	apelidos: ["Amandinha", "Mandinha", "Mandi"]
     }
const apresentacao=(objeto)=>console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${ objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
apresentacao(pessoa)
//b)
const outraPessoa={
	...pessoa,
	apelidos: ["Mandizinha", "MandiMandi", "Amandão"]
}
apresentacao(outraPessoa)