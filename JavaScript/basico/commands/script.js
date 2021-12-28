function alertTest() {
  alert('Hello world... this is definely getting too old')
}

console.log("hello... oh, i'm inside the console")

//Comentário apenas nessa linha

/*
comentário igual o css,
nesse espaço todo até o fechamento
*/

//tipos de var
var a1 = true
var a2 = false
var b = null
var c = undefined
var d = 1
var e = '1'

//tipos de Operações

// Adição, Subtração, multiplicação e divisão
// Módulo (Resto da Div): " % "
// Incrementação: ++
// Decrementação: --
console.log('Exemplos de Atribuição')

var f = 0
var g = f++
console.log(g)
// ++ após a var apenas incrementa o "f" após o "g" guardar o valor inicial de "f", mas não guarde em g de novo
console.log(f)
// "f" foi incrementado

var h = ++f
console.log(h)
//++ foi colocado antes, 1° "f" é incrementado, então aí  guarda o valor novo de "f" em "h"

/*
+ Atribuições

" var a++ " é igual a " var a += 1" 
" var a-- " é igual a " var a -= 1" 
" var a = a * 2 " é igual a " var a *= 2" 
" var a = a / 3 " é igual a " var a /= 3" 
" var a = a * 2 " é igual a " var a *= 2" 
" var a = a % 2 " é igual a " var a %= 2" 
*/
console.log('Exemplos de Atribuição, Método 2')

var i = 2
console.log(i)
i += 8
console.log(i)
// 2 + 8 = 10

i *= 2
console.log(i)
// 10 * 2 = 20

i %= 3
console.log(i)
// 20/3 = 18, Resto: 2

console.log('Operadores Comparativos Aritméticos')

console.log("2 + '2' == 2 ?", 2 + 2 == '2')
//Comparação de VALORES, ACEITA  TIPOS Diferentes. R: True

console.log('2 + 2 == 5 ?', 2 + 2 == 5)
// R: False

console.log("2 === '2' ?", 2 === '2')
//Comparação de VALORES, NÃO ACEITA TIPOS Diferentes. R: False

console.log("1 != '1' ?", 1 != '1')
//Comparação NEGADA de VALOR ("Diferende de"), ACEITA Tipos Diferentes. R: False

console.log("1 !== '1' ?", 1 !== '1')
//Comparação NEGADA de VALOR ("Diferende de"), NÃO ACEITA Tipos Diferentes. R: True

//Mais Exemplos de Comparadores Aritméticos
console.log('1 <= 1.4 ?', 1 <= 1.4)
//true
console.log('4 > 5 ?', 4 > 5)
//false

console.log('Operadores Lógicos')
// &&  =  AND
// ||  =  OR
// !   =  NOT
// NAND e NOR, só botando um AND ou OR em uma Variável ou Parêntesis e então Negando.

var j = 1 + 1 == 2
var k = 2 + 2 == 5

console.log('Afirmações: 1+1==2 e 2+2==5')
console.log('Afirmação 1 é ' + j)
console.log('Afirmação 2 é ' + k)
console.log('OR é', j || k)
console.log('AND é', j && k)
console.log('NOR é ', !(j || k))
console.log('NAND é ', !(j && k))

//parseInt

/*“parseInt” transforma uma string em número. Posiciona-se antes do valor da variável que será impressa no console (funciona apenas com partes inteiras)

“parsefloat” números com casa decimais
*/

//Alert e Prompt

/*
ALERT: O método alert () exibe uma caixa de alerta com uma mensagem especificada e um botão OK.

PROMPT: O método prompt () exibe uma caixa de diálogo que solicita um valor para a entrada do visitante. Retorna o valor de entrada se o usuário clicar em "OK" e se o usuário clicar em "cancelar", retornará nulo. 
*O prompt retorna uma string automaticamente

*/
function promptTest() {
  var nome = prompt('Qual é o seu nome, mano?')
  alert('Ok, mano, vou te chamar de mano')
  alert('Zuera, bem-vindo ' + nome)
  var idade = parseInt(prompt('E qual é sua idade, aliás,' + nome + '?'))
  alert('Ok, ' + nome + ' de ' + idade + ' anos. Bem vindo ao clube!')
  var dobro = idade + idade
  console.log('dobro da idade: ' + dobro)
}

//Transformar String em Número - parseInt e parseFloat
var l1 = '1'
var l2 = '2.5'
parseSoma = parseInt(l1) + parseFloat(l2)
console.log('Operação com ParseInt e Float')
console.log(l1 + ' + ' + l2 + ' = ' + parseSoma)

//If, Else e Else If em JavaScript
function ifElseTest() {
  var m1 = 'Votar'
  var m2 = 'Ser Vereador'
  var m3 = 'Ser Prefeito ou Deputado'
  var m4 = 'Ser Governador'
  var m5 = 'Ser Presidente'
  alert('Verificação de Idade à Seguir!')
  var m = parseInt(prompt('Qual a sua idade, Candidato?'))
  if (m >= 100) {
    alert('VAMPIRO DETECTADO, ALERTA!!!!')
  } else if (m >= 35) {
    alert('Você pode: \n' + m1 + '\n' + m2 + '\n' + m3 + '\n' + m4 + '\n' + m5)
  } else if (m >= 30) {
    alert('Você pode, então: \n' + m1 + '\n' + m2 + '\n' + m3 + '\n' + m4)
  } else if (m >= 21) {
    alert('Você pode, então: \n' + m1 + '\n' + m2 + '\n' + m3)
  } else if (m >= 18) {
    alert('Você pode, então: \n' + m1 + '\n' + m2)
  } else if (m >= 16) {
    alert('Você então pode, apenas: \n' + m1)
  } else if (m < 16) {
    alert('Muito jovem, espere alguns anos')
  } else {
    alert('Erro!! Insira uma Idade Válida!  ')
  }
}

//Operador Ternário - "Substituto" de uma Condicional SIMPPLES (If + Else)
//if subtendido ; then = "?" ; else = ":"

function ternaryTest() {
  alert('Para comprar bebidas, responda à seguinte pergunta:')
  var n = parseInt(prompt('Quantos anos você tem?'))
  var n1 = n >= 18 ? 'Ok, pode comprar de boa. 😃' : 'Ainda NÃO PODE!! 😠'
  alert(n1)
}

//if e Op Ternário
var o = 0

function ifTernaryTest() {
  ++o

  if (o == 1) {
    console.log('If + Op. Ternário')
  }

  if (o > 2 && o < 5) {
    var o1 = 5 - o
    console.log('Faltam ' + o1 + ' cliques para entrar no modo Desenvolvedor')
  }

  var o2 = o == 5 ? console.log('Agora você está no Modo Desenvolvedor.') : null
}

/*
Usa-se switch para especificar blocos de código alternativos a serem executados para operar sobre a mesma variável ou expressão de entrada.
*/
//Switch - Outra "Alternativa" ao If e Else
function switchTest() {
  var p = parseFloat(prompt('Qual Foi a sua Nota no ENEM?'))
  var conceito
  if (p > 1000 || p < 0) {
    conceito = 'Valor Inválido'
  } else if (p == 1000) {
    conceito = 'Mito!!!!!!'
  } else if (p >= 900) {
    conceito = 'Excelente!!!'
  } else if (p >= 760) {
    conceito = 'Ótimo!!'
  } else if (p >= 620) {
    conceito = 'Bom!'
  } else if (p >= 530) {
    conceito = 'Regular'
  } else if (p >= 500) {
    conceito = 'Ruim!'
  } else if (p < 500) {
    conceito = 'Péssimo!!!'
  } else {
    conceito = 'Valor Inválido'
  }
  alert(conceito)

  switch (conceito) {
    case 'Valor Inválido':
      alert('Erro!!! Insira a Nota Corretamente')
      break

    case 'Mito!!!!!!':
      alert(
        'Parabéns!!!!!! Você é um ET e Abriu mão de Toda sua Vida Social esse ano.'
      )
      break

    case 'Excelente!!!':
      alert(
        'Parabéns!!! Você é um semi-ET! Houve uma altíssima dedicação e tomou muito tempo, mas conquistou uma Nota acima do ideal'
      )
      break

    case 'Ótimo!!':
      alert(
        'Parabéns!! Você se Dedicou muito e Alcançou uma Nota Impressionante. Dá para entrar na maioria dos cursos'
      )
      break

    case 'Bom!':
      alert(
        'Parabéns! Não foi uma Nota extravagante, mas foi uma boa nota. Você consegue ir além, se dedique mais!'
      )
      break

    case 'Regular':
      alert(
        'Bom. Está na média, o que não é uma vitória, faltou bastante dedicação, ideal tentar novamente ano que vem.'
      )
      break

    case 'Ruim':
      alert(
        'Está levemente abaixo da média. Provavelmente estudou pouco ou não se dedicou bem para tentar outras estratégias, recomendação quase obrigatória de tentar novamente no próximo ano'
      )
      break

    case 'Péssimo!!!':
      alert(
        'Vergonhoso. Obviamente não houve dedicação e foco durante o período de preparação. Tente sem dúvidas fazer novamente, agora se dedicando de verdade!'
      )
      break
  }
}

//For e While
function forWhileTest() {
  console.log('For e While')

  var q = 10
  console.log('Inicializando em...')
  while (q > 0) {
    q--
    console.log(q * 0.1 + 's')
  }
  console.log('Inicializado ')

  for (var i = 10; i > q; i--) {
    console.log('Otimizando... ' + i)
  }
}

//Array (Vetor)
var r = 0
function arrayTest() {
  r++

  var r1 = new Array('Hamburguer', 'Pizza', 'Salgadinho', 'Pastel', 'Churrasco')

  if (r == 1) {
    console.log('Teste de Array - Método 1')
    for (i = 0; i < r1.length; i++) {
      console.log(r1[i])
    }
  }
  // i "in" array vai pegar o valor do index de cada elemento, até o final desse array.
  else if (r == 2) {
    i = 0
    console.log('Teste de Array - Método 2')
    for (i in r1) {
      console.log(r1[i])
    }
  }
  //i "of" array vai pegar o cada elemento na ordem até o final desse array
  else if (r == 3) {
    i = 0
    console.log('Teste de Array - Método 3')
    for (i of r1) {
      console.log(i)
    }
  }
}

//Funções e Argumentos
function functionArgsTest() {
  s = (s1, s2) => {
    //Função Anônima do tipo Arrow Function

    var nota1 = s1
    var nota2 = s2
    var media = (s1 + s2) / 2
    return media
  }

  var resultado = s(
    parseInt(prompt('Nota do Teste 1')),
    parseInt(prompt('Nota do Teste 2'))
  )
  alert('Média: ' + resultado)
}

//Juntando tudo até aqui
function schoolSystem() {
  alert('Bem vinda(o) ao Sistema Escolar!')
  alert(
    'À seguir, preencha os dados dos alunos corretamente. Ao final, será mostrado todo o registro.'
  )
  var looper = window.confirm('Vamos começar?')
  var media
  var result
  var novoAluno
  var alunosLista = ''

  alunos = new Array()
  var i = 0

  while (looper == true) {
    novoAluno = (nome, n1, n2) => {
      media = (n1 + n2) / 2

      if (media >= 6 && media <= 10) {
        result = 'PASSOU!!!'
      } else if (media < 6 && media >= 0) {
        result = 'REPROVOU!'
      } else result = 'Houve um erro!'

      aluno = new Array(nome, n1, n2, media, result)
      return aluno
    }

    novoAluno(
      prompt('Nome do(a) Aluno(a)'),
      parseFloat(prompt('Nota 1:')),
      parseFloat(prompt('Nota 2:'))
    )

    alunos[i] = aluno
    i += 1

    looper = window.confirm('Quer continuar?')
  }

  if (alunos.length > 0) {
    for (i of alunos) {
      alunosLista +=
        i[0] +
        ' - ' +
        i[1] +
        ' - ' +
        i[2] +
        ' - ' +
        'M: ' +
        i[3] +
        ' - ' +
        i[4] +
        '\n' +
        '\n'
    }
    alert(
      'Número de Alunos Registrados: ' +
        alunos.length +
        '\n' +
        '\n' +
        'ALUNO -' +
        ' NOTA 1 -' +
        ' NOTA 2 -' +
        ' MÉDIA -' +
        ' RESULTADO' +
        '\n' +
        '\n' +
        alunosLista
    )
  }
}
