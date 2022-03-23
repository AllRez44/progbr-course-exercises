var cont = 0

function showDocument() {
  alert(document.documentElement.innerHTML)
  //ou
  //alert(document.body.parentElement.innerHTML)
}

function dropHideEventTest() {
  cont++
  if (cont % 2 == 0) {
    document.getElementById('tempEventElement').style.display = 'none'
  } else {
    document.getElementById('tempEventElement').style.display = 'flex'
  }
}

function hideEventTest() {}

function titleAlter(input) {
  // "input" poderia ser qualquer nome, aliás, é uma variável que pega o valor do parâmetro declarado no index.html
  let h2 = document.getElementsByTagName('h2')[0]
  h2.innerText = input.value
  // ou, se não usasse o argumento para adiantar
  /*
  let input = document.getElementsByTagName('input')[0]
  let h2 = document.getElementsByTagName('h2')[0]
  h2.innerHTML = input.value
  */
}
