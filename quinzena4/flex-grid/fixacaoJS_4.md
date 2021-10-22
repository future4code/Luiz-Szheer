```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let escolherNumero = arrayDeNumeros.filter((item) =>{
    return item === numeroEscolhido})
    
    if(escolherNumero.length != 0){
      return `O número ${numeroEscolhido} aparece ${escolherNumero.length}x`
    } else {
      return "Número não encontrado"
    }
} ```
