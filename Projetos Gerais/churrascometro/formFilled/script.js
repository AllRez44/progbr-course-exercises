//Pré definições do projeto:
//Carne - 400g/pessoa.   Se evento > de 6h, - 650g/pessoa
//Cerveja - 1200ml/pessoa. Se event > 6h, - 2000ml/pessoa
//Refrigerante/agua - 1000ml/pessoa. Se evento > 6h, - 1500ml/pessoa
//Criança = 0.5 * adulto - *Desconsiderando cerveja

//Var declare
let meatQnt = localStorage.getItem('meat')
let beerQnt = localStorage.getItem('beer')
let sodaQnt = localStorage.getItem('soda')

let result = document.getElementById('result')

let toggle = document.getElementById('toggleValueBtn')

function loaded() {
  if (meatQnt == undefined || beerQnt == undefined || sodaQnt == undefined) {
    result.innerHTML = '<h2> Erro!!! </h2>'
    toggle.style.display = none
  } else {
    result.innerHTML = `<h3> Carne: ${meatTotalV1(meatQnt)} </h3>`
    result.innerHTML += `<h3> Cerveja:  ${beerTotalV1(beerQnt)}`
    result.innerHTML += `<h3> Refri/Água: ${sodaTotalV1(sodaQnt)}`

    result.innerHTML += '<p> *Mala = 15 unidades de 269mL'
    result.innerHTML += '<p> *Lata = 1 unidade de 350mL'
  }

  //V1 is the aproximate amount of items

  function meatTotalV1(meat) {
    meat = Math.ceil(meat)
    if (meat > 1000) {
      meat = meat / 1000
      meatDecimal = meat - Math.floor(meat)
      if (meatDecimal < 0.5 && meatDecimal > 0) {
        meat = Math.floor(meat) + 0.5
      } else if (meatDecimal > 0.5) {
        meat = Math.ceil(meat)
      }
      return `${meat} Kg`
    } else return `${meat} g`
  }

  function beerTotalV1(beer) {
    if (beer > 4035) {
      let cans = Math.ceil((beer % 4035) / 350)
      beer = Math.floor(beer / 4035)
      if (cans > 1 && cans <= 11) {
        return `${beer} Malas e ${cans} Latas`
      } else if (cans == 1) {
        return `${beer} Malas e 1 Lata`
      } else if (cans > 11) {
        beer += 1
        return `${beer} Malas`
      }
    } else if (beer / 350 > 11 && beer <= 4035) {
      return '1 Mala'
    } else if (beer / 350 <= 11) {
      return `${Math.ceil(beer / 350)} Latas`
    }
  }

  function sodaTotalV1(soda) {
    if (soda > 1500 && Math.ceil(soda / 1000) % 2 == 0) {
      return `${Math.ceil(soda / 2000)} Garrafas de 2 L`
    } else if (soda > 1500 && Math.ceil(soda / 1000) % 2 > 0) {
      return `${Math.floor(soda / 2000)} Garrafas de 2 L + 1 de 1 L`
    } else if (soda > 1000 && soda <= 1500) {
      return '1 Garrafa de 1.5 L'
    } else if (soda > 0 && soda <= 1000) {
      return '1 Garrafa de 1 L'
    }
  }
}

function exactVal() {
  result.innerHTML = `<h3> Carne: ${meatTotalV2(meatQnt)} </h3>`
  result.innerHTML += `<h3> Cerveja:  ${beerTotalV2(beerQnt)}`
  result.innerHTML += `<h3> Refri/Água: ${sodaTotalV2(sodaQnt)}`

  toggle.value = 'Quantidade Aproximada'
  toggle.onclick = reload
}

//V1 is the exact amount of items

function meatTotalV2(meat) {
  if (meat >= 1000) {
    meat = meat / 1000
    return `${meat} Kg`
  } else return `${meat} g`
}

function beerTotalV2(beer) {
  if (beer >= 1000) {
    beer = beer / 1000
    return `${beer} L`
  } else return `${beer} mL`
}

function sodaTotalV2(soda) {
  if (soda >= 1000) {
    soda = soda / 1000
    return `${soda} L`
  } else return `${soda} mL`
}

function reload() {
  location.reload()
}

/*
  if (meatQnt > 1000) {
    result.innerHTML += '</h3> ${meatQnt / 1000 + Kg} </h3>'
  } else if (meatQnt < 1000 || meatQnt > 0) {
    result.innerText += ' ' + meatQnt + 'g'
  } else {
    result.innerText = ' Erro!'
  }
  if (beerQnt > 1000) {
    result.innerText += ' ' + beerQnt / 1000 + ' L'
  } else if (result < 1000 || beerQnt > 0) {
    result.innerText += ' ' + beerQnt + 'mL'
  } else {
    result.innerText = ' Erro!'
    result.style.display = 'none'
    result.style.display = 'none'
  }

  if (sodaQnt > 1000) {
    result.innerText += ' ' + sodaQnt / 1000 + ' L'
  } else if (sodaQnt < 1000 || sodaQnt > 0) {
    result.innerText += ' ' + beerQnt + 'mL'
  } else {
    result.innerText = ' Erro!'
    result.style.display = 'none'
    result.style.display = 'none'
  }
  */
