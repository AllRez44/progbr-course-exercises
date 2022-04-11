let list = document.getElementById('list')
let listNum = parseInt(list.getAttribute('num'))
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
console.log(alphabet)
console.log(listNum)

for (let i = 0; i < listNum; i++) {
  list.innerHTML += `<p> ${alphabet[i]} </p>`
}
