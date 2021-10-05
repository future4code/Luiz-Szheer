// EXERCÍCIO 01 - feito

const inverterNumeros = [1, 2, 3, 4, 5, 6]
function inverteArray(array) {
  let novoArray = []
  //pega os valores do ultimo para o primeiro
  for (let i = array.length - 1; i >= 0; i--) {
    //O método push() adiciona ao final do array
    novoArray.push(array[i]);
  }
  return novoArray;
}
let b = inverteArray(inverterNumeros);
console.log(b);

// EXERCÍCIO 02 - feito
const numerosParesAoQuadrado = [1, 2, 3, 4, 5, 6]
function retornaNumerosParesElevadosADois(array) {
  let novoArrAoCubo = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      const numeroAtualizado = numero * numero
      novoArrAoCubo.push(numeroAtualizado)
    }
  }
  return novoArrAoCubo
}
console.log(retornaNumerosPares(numerosParesAoQuadrado))

// EXERCÍCIO 03 - feito
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function retornaNumerosPares(array) {
  let novoArr = []
  for (let numeros of array) {
    if (numeros % 2 === 0) {
      novoArr.push(numeros)
    }
  }
  return novoArr
}
console.log(retornaNumerosPares(arrayNumeros))

// EXERCÍCIO 04 - feito 
const maiorNumeroDoArray = [1, 2, 3, 4, 5, 6]

function retornaMaiorNumero(array) {
  return Math.max(...array)
}

console.log(maiorNumeroDoArray)

// EXERCÍCIO 05 - feito

const tamanhoDoArray = [1, 2, 3, 4, 5, 6]
function retornaQuantidadeElementos(array) {
  return array.length
}
console.log(retornaQuantidadeElementos(tamanhoDoArray))

// EXERCÍCIO 06 - feito

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3

function retornaExpressoesBooleanas() {
  const expressoesBooleanas = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
  return expressoesBooleanas
}

console.log(retornaExpressoesBooleanas())

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {

  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
