/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//1) As cartas dos jogadores (usuário e computador) podem ser armazenadas em  array.
//2)  Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.
console.log("Boas vindas ao jogo de Blackjack!")
let cartasDoUsuario = []
let cartasDoPc = []
let somaUsuario
let somaComputador
let comprarNovaCarta
let comprando = true

const novaEtapa = confirm("Quer iniciar uma nova rodada?")
if (novaEtapa) {
   let primeiraCartaUsuario = comprarCarta()
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let segundaCartaComputador = comprarCarta()

   somaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   somaComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   while (somaUsuario === 22 || somaComputador === 22) {
      primeiraCartaUsuario = comprarCarta()
      primeiraCartaComputador = comprarCarta()
      segundaCartaUsuario = comprarCarta()
      segundaCartaComputador = comprarCarta()

   }

   cartasDoUsuario.push(primeiraCartaUsuario)
   cartasDoUsuario.push(segundaCartaUsuario)
   cartasDoPc.push(primeiraCartaComputador)
   cartasDoPc.push(segundaCartaComputador)

   while (comprando) {
      if (somaUsuario < 21) {
confirm(`Suas cartas são: ${primeiraCartaUsuario.valor, primeiraCartaUsuario.texto} ${segundaCartaUsuario.valor, segundaCartaUsuario.texto}. A carta revelada do computador é ${primeiraCartaComputador.valor, primeiraCartaComputador.texto}.\nDeseja comprar mais uma carta?`)
         comprarNovaCarta = comprarCarta()
         cartasDoUsuario.push(comprarNovaCarta)
         somaUsuario += comprarNovaCarta.valor
      } else {
         comprando = false
      }
   }//console.log(cartasDoUsuario)

   

} else {
   console.log("O jogo acabou!!!")
}