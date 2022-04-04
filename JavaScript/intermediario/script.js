//declaração das variáveis
tempEE = document.getElementsByClassName('tempEventElement')
mouseEvent = document.getElementsByClassName('mouseTestText')

h1fst = document.getElementById('first')
h1scd = document.getElementById('second')
h1trd = document.getElementById('third')

pi = document.getElementById('pi')
e = document.getElementById('e')
random = document.getElementById('random')
randomRound = document.getElementById('randomRound')
expo = document.getElementById('exponenciacao')

let Names = localStorage.getItem('names')
let NameI = localStorage.getItem('nameCounter')

let h3Timer = document.getElementById('timerTitle')
let h3StopWatch = document.getElementById('stopWatchTitle')
let timerNum = 0
let stopWatchNum = 0
let timer
let timeDecrease
let stopWatch

var cont = 0
var i = 0

function loaded() {
  console.log('Page is fully loaded')
  //While que esconde todas as box da página após carregada completamente
  while (i < tempEE.length) {
    tempEE[i].style.display = 'none'
    i++
  }

  //Event Listener para associar um evento de mouse à sua função específica
  tempEE[2].addEventListener('mouseover', mouseOverText)
  tempEE[2].addEventListener('mouseout', mouseOutText)

  //Event Listeners da quarta Box
  h1fst.addEventListener('click', showParent)
  h1scd.addEventListener('click', showSibling)
  h1trd.addEventListener('click', showChildren)

  //Event Listeners da Quinta Box
  pi.addEventListener('click', mathPi)
  e.addEventListener('click', mathE)
  random.addEventListener('click', mathRandom)
  randomRound.addEventListener('click', mathRandomRound)
  expo.addEventListener('click', mathExpo)

  //Função que deixa a sexta caixa com titulo salvo na memória
  let title = localStorage.getItem('title')
  let h1 = document.getElementById('h1InputLS')
  h1.innerText = title
  console.log(title)

  //Array nomes
  if (Names == null) {
    Names = new Array()
  } else {
    Names = JSON.parse(Names)
  }

  if (NameI == null) {
    NameI = 0
  } else {
    NameI = JSON.parse(NameI)
  }
}

//Função dos botões Gerarem ou Esconderem sua box de evento
function dropHideEvent(BoxNumber) {
  cont++
  if (cont % 2 == 0) {
    tempEE[BoxNumber].style.display = 'none'
  } else {
    tempEE[BoxNumber].style.display = 'flex'
  }
}

//Função do primeiro botão
function showDocument() {
  alert(document.documentElement.innerHTML)
  //ou
  //alert(document.body.parentElement.innerHTML)
}

//Função Title Alter 1 - onchange
function titleAlter1(input) {
  // "input" poderia ser qualquer nome, aliás, é uma variável que pega o valor do parâmetro declarado no index.html
  let title1 = document.getElementsByTagName('h2')[0]
  title1.innerText = input.value
  // ou, se não usasse o argumento para adiantar
  /*
  let input = document.getElementsByTagName('input')[0]
  let h2 = document.getElementsByTagName('h2')[0]
  h2.innerHTML = input.value
  */
}

//Funções Title Alter 2 - onkeypress
function titleAlter2(input) {
  let title2 = document.getElementsByTagName('h2')[1]
  title2.innerText = input.value
}

// Função MouseOver & Mouse Out
function mouseOverText() {
  mouseEvent[0].textContent = 'Mouse is OVER the box'
  mouseEvent[0].style = 'font-weight: bold'
}
function mouseOutText() {
  mouseEvent[0].textContent = 'Mouse is OUT of the box'
}

//Função do onclick
document.getElementById('thisH2').onclick = italic
document.getElementById('thisH3').onclick = italic
document.getElementById('thisH4').onclick = italic

function italic() {
  this.style = 'font-style: italic'
}

//Função Parent, Children & Sibling
function parentChildSibling() {}

function showParent() {
  console.log('Parent:', h1fst.parentElement.id)
}

function showSibling() {
  var sibling = ''
  sibling = h1scd.previousElementSibling.textContent
  console.log('Siblinf:', sibling)
}

function showChildren() {
  var children = ''
  for (i = 0; i < h1trd.children.length; i++) {
    children += ' ' + h1trd.children[i].innerText
  }

  console.log('Children:', children)
}

//Função Math
function mathPi() {
  pi.innerText += ' ' + Math.PI
}

function mathE() {
  e.innerText += ' ' + Math.E
}

function mathRandom() {
  random.innerText += ' ' + Math.random()
}

function mathRandomRound() {
  randomRound.innerText += ' ' + Math.round(Math.random() * 10)
}

function mathExpo() {
  expo.innerText += ' 7 ³ é igual à ' + Math.pow(7, 3)
}

//Função de JSON
function json() {
  let a = {
    nome: 'Allan',
    nota: 8.2
  }

  let b = JSON.stringify(a)

  let a2 = '{"Nome":"Júlio", "nota": 3.3}' //Aspas simples são OBRIGATÓRIAS

  let b2 = JSON.parse(a2)

  console.log('Objeto criado manualmente')
  console.log(a)
  console.log('JSON gerado automatico pela conversão')
  console.log(b)
  console.log('------------------')
  console.log('JSON criado manualmente')
  console.log(a2)
  console.log('Objeto gerado automatico pela conversão')
  console.log(b2)
}

//Função Local Storage
function update(element) {
  let h1 = element.previousElementSibling
  h1.innerText = element.value

  localStorage.setItem('title', h1.innerText)
}

//Local Storage de Qualquer dado **APENAS NO CÓDIGO
function localStorageObj() {
  let obj = {
    nome: 'Allan',
    cpf: 177.157,
    nota: 8.5,
    solteiro: true
  }

  localStorage.setItem('object', JSON.stringify(obj))
  //Para pegar esse json, apenas precisaria dar um:
  // let obj = localStorage.getItem('object') ;
  // obj = JSON.parse(obj)
}

//Função do sorteio
function saveName(name) {
  if (Names == null) {
    Names = new Array()
  }
  if (name == '') {
    name = null
  } else {
    Names[NameI] = name
    NameI++
    console.log(Names[NameI - 1])
    localStorage.setItem('nameCounter', JSON.stringify(NameI))
    localStorage.setItem('names', JSON.stringify(Names))
  }
}

function startGiveAway() {
  let numRandom = Math.floor(Math.random() * Names.length)
  let numReal = numRandom + 1
  if (Names == null) {
    console.log('Erro, não há participantes!')
  } else {
    let winner =
      'O participante número: ' +
      numReal +
      ', de nome: ' +
      Names[numRandom] +
      ', ganhou o prêmio!!!'
    alert(winner)
  }
}

function clearGiveAway() {
  localStorage.removeItem('names')
  Names = null
  localStorage.removeItem('nameCounter')
  NameI = 0
}

//Funções do Timer e Cronômetro

//Função do onchange do pré tempo
function preTimeTimer() {
  timerNum = document.getElementById('timerInput').value
  if (timerNum < 0) {
    timerNum = 0
  }
  h3Timer.innerText = timerNum + ' s'
}

//Funções de Start e stop do Cronômetro (Stop Watch)
function stopWatchFun() {
  stopWatchNum++
  h3StopWatch.innerText = stopWatchNum + ' s'
}

function startStopWatch() {
  stopWatch = setInterval(stopWatchFun, 1000)
}

function stopStopWatch() {
  clearInterval(stopWatch)
  stopWatchNum = 0
  h3StopWatch.innerText = '0 s'
}

//Funções de Start e stop do Timer
function timerFun() {
  h3Timer.innerText = '0 s'
  alert('Acabou o tempo!!!')
  clearInterval(timeDecrease)
}

function timerTitleChanger() {
  h3Timer.innerText = counter + 1 + ' s'
  counter--
}

function startTimer() {
  timer = setTimeout(timerFun, timerNum * 1000)
  counter = timerNum - 2
  timeDecrease = setInterval(timerTitleChanger, 1000)
}

function stopTimer() {
  clearTimeout(timer)
  clearInterval(timeDecrease)
  h3Timer.innerText = '0 s'
}
