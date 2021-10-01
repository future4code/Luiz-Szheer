// //Exercícios de interpretação de texto
// //1)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// // a) Vai ser impresso o nome do primeiro objeto, o apelido do primeiro objeto e o indice 0  do objeto.
// // Em seguida todos os objetos.
// // E segue esse mesmo processo ate terminarem os indices do objeto.

// //2)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// //a)Vai ser impresso um novoarray apenas com o os nomes.

// //3)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//a) Vai criar uma nova array com os objetos que tiverem o apelido diferente de Chijo.


//Exercícios com escrita de código
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a) Crie um novo array que contenha apenas o nome dos doguinhos
const novaArrayPets = pets.map((item, index, array) => {
    return item.nome
})
console.log(novaArrayPets)

//b)Crie um novo array apenas com os cachorros salsicha
const apenasOsSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(apenasOsSalsichas)

//c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const apenasOsPoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const desconto = apenasOsPoodles.map((item, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(desconto)

//Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item
 const nomeDoProduto = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(nomeDoProduto)

 //b)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
    const novoArrayCom5PorcentoDeDesconto = produtos.map((item) => {
    const precoAtualizado = Number((item.preco*0.95).toFixed(2))
    
    return {nome: item.nome, preco: precoAtualizado}
 })
console.log(novoArrayCom5PorcentoDeDesconto)


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const apenasBebidas = produtos.filter((item, index, array) =>{
    return item.categoria === "Bebidas"
})
console.log(apenasBebidas)

//d)Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const apenasYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(apenasYpe)

//e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const frase = apenasYpe.map((item, index, array) => {
    return `Compre ${item.nome} por R$${Number(item.preco).toFixed(2)}`
})
console.log(frase)