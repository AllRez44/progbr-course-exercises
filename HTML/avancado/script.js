//Função da Lista alfabética feita em JavaScript
let list = document.getElementById('list')
let listNum = parseInt(list.getAttribute('num'))
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') //Após o split, a variável muda de uma string grande para um array com cada letra dela
console.log(alphabet)
console.log(listNum)

for (let i = 0; i < listNum; i++) {
  list.innerHTML += `<p> ${alphabet[i]} </p>`
}

// Funções do Video 2 - Duna
let dune = document.getElementById('dune')
let controls = dune.parentElement.nextElementSibling
let playBtn = document.getElementById('playBtn')
let pauseBtn = document.getElementById('pauseBtn')

let timer

let speedMeter = document.getElementById('speedVid')

dune.onclick = () => {
  if (dune.paused && !dune.webkitDisplayingFullscreen) {
    playVid()
  } else if (!dune.paused && !dune.webkitDisplayingFullscreen) {
    pauseVid()
  }
}

function playVid() {
  dune.play()
  dune.addEventListener('mouseout', hideTimer)
  controls.addEventListener('mouseout', hideTimer)
}

dune.onplaying = () => {
  playBtn.style.display = 'none'
  pauseBtn.style.display = 'inline-block'
}

function pauseVid() {
  dune.pause()

  dune.removeEventListener('mouseout', hideTimer)
  controls.removeEventListener('mouseout', hideTimer)
}

dune.onpause = () => {
  pauseBtn.style.display = 'none'
  playBtn.style.display = 'inline-block'
}

function stopVid() {
  dune.pause()
  dune.currentTime = 0
  pauseBtn.style.display = 'none'
  playBtn.style.display = 'inline-block'
  dune.removeEventListener('mouseout', hideTimer)
  controls.removeEventListener('mouseout', hideTimer)
}

function forward() {
  dune.currentTime += 15
}

function backward() {
  dune.currentTime -= 15
}

function speedUp() {
  dune.playbackRate += 0.25
  speedMeter.innerHTML = `speed (${dune.playbackRate}x)`
}

function speedDown() {
  dune.playbackRate -= 0.25
  speedMeter.innerHTML = `speed (${dune.playbackRate}x)`
}

function fullScreen() {
  dune.webkitEnterFullscreen()
}

//Função Mouse in e Mouse out
function hideTimer() {
  timer = setTimeout(hideVid, 800)
}

function hideVid() {
  controls.classList.add('hide')
}

dune.onmouseover = () => {
  clearTimeout(timer)
  controls.classList.remove('hide')
}

controls.onmouseover = () => {
  clearTimeout(timer)
  controls.classList.remove('hide')
}

//Funções da Moving Box 
let box = document.getElementById('movingBox')
let bX = 0
let bY = 0
let axysIncrease

function moveBox (x,y){
  box.style.left = x + 'px'
  box.style.top = y + 'px'
}

function axysInterval (){
  axysIncrease = setInterval(axysIncreaseFun, 20)
}

function axysIncreaseFun(){
  bX += 1
  bY += 1
  moveBox(bX,bY)
  if (bX > 999 || bY > 999 ){
    console.log('bX = ',bX,'bY = ', bY)
    clearInterval(axysIncrease)
  }
}

//Canvas 1
let canv1 = document.getElementById('canvas1') 
let ctx1 = canv1.getContext('2d')

ctx1.moveTo(0,0)//Posição inicial do canvas nos eixos X e Y 
ctx1.lineTo(250,200)//Line to = Criar linha 
ctx1.lineTo(500,0)
ctx1.strokeStyle = 'gray'
ctx1.lineWidth = 3 //grossura da linha
//Stroke desenha a(s) linha(s)
ctx1.stroke()

//Canvas 2 - Begin Path e Close Path
let canv2 = document.getElementById('canvas2') 
let ctx2 = canv2.getContext('2d')

ctx2.beginPath()
ctx2.lineWidth = 3
ctx2.strokeStyle = 'purple'
ctx2.moveTo(12,12)
ctx2.lineTo(400,310)
ctx2.lineTo(480,100)

ctx2.stroke()

ctx2.beginPath()
ctx2.lineWidth = 5
ctx2.strokeStyle = 'lightBlue'
ctx2.fillStyle = 'yellow'
ctx2.moveTo(60,15)
ctx2.lineTo(360,360)
ctx2.lineTo(100,360)
ctx2.closePath()
ctx2.stroke() //se colocar depois do fill, fica mais grossa a borda
ctx2.fill()

//Canvas 3 - Circunferência
let canv3 = document.getElementById('canvas3') 
let ctx3 = canv3.getContext('2d')

let x3 = 250
let y3 = 200
let radius3 = 100
let start3 = 0 //se trocar de valor com o end3, a semi ci
let end3 = 1 * Math.PI //2 pi faz uma circunferência completarcunferência fica metade em cima

ctx3.beginPath()
ctx3.strokeStyle = 'red'
ctx3.fillStyle = 'darkBlue'
ctx3.arc(x3,y3,radius3,start3,end3)
ctx3.fill()
ctx3.stroke()

//Canvas 4 - Animação da Circunferência
let canv4 = document.getElementById('canvas4') 
let ctx4 = canv4.getContext('2d')

let circle = {   //Tudo agora está dentro de um objeto chamado circle
  x: 250,
  y : 200,
  radius : 100,
  start : 0, 
  end : 0,
  counterClockWise: false //Diz se vai ou não animar no sentido antihorário
}

function drawCircle(c){
//parte que vai reedesenhar o retângulo do background
ctx4.beginPath();
ctx4.rect(0,0,500,400)
ctx4.fillStyle = 'chocolate'
ctx4.fill()

//Parte do desenho do círculo
ctx4.beginPath()
ctx4.strokeStyle = 'red'
ctx4.fillStyle = 'darkBlue'
ctx4.arc(c.x,c.y,c.radius,c.start,c.end,c.counterClockWise)
ctx4.fill()
ctx4.stroke()
}

let circAnimation = setInterval(function(){ //A animação em si
  if (circle.end < 2 * Math.PI){
    circle.end += 0.1
    circle.x += 1
  } else {
    clearInterval(circAnimation)
  } 
drawCircle(circle)
},10)

//Imagem via javaScript
let canv5 = document.getElementById('canvas5') 
let ctx5 = canv5.getContext('2d')
let img = new Image()

img.src = "./assets/BigBoss.jpg"
img.onload = drawImg

function drawImg() {
  ctx5.drawImage(img, 70, 30,this.naturalWidth/1.5,this.naturalHeight/1.5) //poderia usar o this ao invés de img também.
}



