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

    //Montando o jogo
console.log("Boas vindas ao jogo de Blackjack!")

const novaEtapa = confirm("Quer iniciar uma nova rodada?")
if (novaEtapa) {
   let primeiraCartaUsuario = comprarCarta()
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let segundaCartaComputador = comprarCarta()

   let somaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   let somaComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${somaUsuario}`)
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação ${somaComputador}`)


   if (somaUsuario > somaComputador) {
      console.log("O Usuário ganhou!")
   } else if (somaUsuario < somaComputador) {
      console.log("O computador ganhou!!!")
   } else {
      console.log("Empataram!!!")
   }

} else {
   console.log("O jogo acabou!!!")
}
