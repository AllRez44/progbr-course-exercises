//Pré definições do projeto:
//Carne - 400g/pessoa.   Se evento > de 6h, - 650g/pessoa
//Cerveja - 1200ml/pessoa. Se event > 6h, - 2000ml/pessoa
//Refrigerante/agua - 1000ml/pessoa. Se evento > 6h, - 1500ml/pessoa

//Criança = 0.5 * adulto - *Desconsiderando cerveja
function loaded() {
  let meat = localStorage.getItem('meat')
  let beer = localStorage.getItem('beer')
  let soda = localStorage.getItem('soda')
}

function calc() {
  let adults = document.getElementById('adultsNum').value
  let kids = document.getElementById('kidsNum').value
  let time = document.getElementById('timeNum').value
  let meat = (adults + kids / 2) * 400
  let beer = adults * 1200
  let soda = (adults + kids / 2) * 1000
  localStorage.setItem('meat', meat)
  localStorage.setItem('beer', beer)
  localStorage.setItem('soda', soda)
}
