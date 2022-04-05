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

  meat = meatFun(time) * adults + (meatFun(time) * kids) / 2
  beer = beerFun(time) * adults
  soda = sodaFun(time) * adults + (sodaFun(time) * kids) / 2

  localStorage.setItem('meat', meat)
  localStorage.setItem('beer', beer)
  localStorage.setItem('soda', soda)
}

function meatFun(time) {
  if (time < 6 && time > 0) {
    return 400
  } else if (time >= 6) {
    return 650
  } else {
    return undefined
  }
}

function beerFun(time) {
  if (time < 6 && time > 0) {
    return 1200
  } else if (time >= 6) {
    return 2000
  } else {
    return undefined
  }
}

function sodaFun(time) {
  if (time < 6 && time > 0) {
    return 1000
  } else if (time >= 6) {
    return 1500
  } else {
    return undefined
  }
}
