//Pré definições do projeto:
//Carne - 400g/pessoa.   Se evento > de 6h, - 650g/pessoa
//Cerveja - 1200ml/pessoa. Se event > 6h, - 2000ml/pessoa
//Refrigerante/agua - 1000ml/pessoa. Se evento > 6h, - 1500ml/pessoa

//Criança = 0.5 * adulto - *Desconsiderando cerveja
let meat
let beer
let soda

function calc() {
  let adults = parseInt(document.getElementById('adultsNum').value)
  let kids = parseInt(document.getElementById('kidsNum').value)
  let time = parseFloat(document.getElementById('timeNum').value)

  if (time < 6 && time > 0) {
    Math.round((meat = (adults + kids / 2) * 400))
    Math.round((beer = adults * 1200))
    Math.round((soda = (adults + kids / 2) * 1000))
  } else if (time >= 6) {
    Math.round((meat = (adults + kids / 2) * 650))
    Math.round((beer = adults * 2000))
    Math.round((soda = (adults + kids / 2) * 1500))
  } else {
    meat = undefined
    beer = undefined
    soda = undefined
  }

  localStorage.setItem('meat', meat)
  localStorage.setItem('beer', beer)
  localStorage.setItem('soda', soda)
}
