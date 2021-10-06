// EXERCÍCIO 01
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

// EXERCÍCIO 02
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
// EXERCÍCIO 03
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
// EXERCÍCIO 04
const maiorNumeroDoArray = [1, 2, 3, 4, 5, 6]

function retornaMaiorNumero(array) {
  return Math.max(...array)
}

console.log(maiorNumeroDoArray)
// EXERCÍCIO 05
const tamanhoDoArray = [1, 2, 3, 4, 5, 6]
function retornaQuantidadeElementos(array) {
  return array.length
}
console.log(retornaQuantidadeElementos(tamanhoDoArray))

// EXERCÍCIO 06

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
  const pares = []
  let par = 0
  let i = 0
  while (i < n) {
    i++
    pares.push(par)
    par += 2
  }
  return pares
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
 
  if(a === b && b === c) {
    return "Equilátero"
  } else if (a === b || b === c) {
    return "Isósceles"
  } else {
    return "Escaleno"
  } 
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
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return [array[array.length - 2], array[1]]
}



// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}



// EXERCÍCIO 12
function filmeFavorito() {
  const filme = new Object();
  filme.nome = 'O Diabo Veste Prada'
  filme.ano = 2006
  filme.diretor = 'David Frankel'
  filme.atores = ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme=new Object();
filme.nome='O Diabo Veste Prada'
filme.ano=2006
filme.diretor='David Frankel'
filme.atores=['Meryl Streep',' Anne Hathaway',' Emily Blunt',' Stanley Tucci']
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
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
