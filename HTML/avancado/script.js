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
  timer = setTimeout(hideVid, 2000)
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
