//Pré definições do projeto:
//Carne - 400g/pessoa.   Se evento > de 6h, - 650g/pessoa
//Cerveja - 1200ml/pessoa. Se event > 6h, - 2000ml/pessoa
//Refrigerante/agua - 1000ml/pessoa. Se evento > 6h, - 1500ml/pessoa

//Criança = 0.5 * adulto - *Desconsiderando cerveja

function loaded() {
  let meatQnt = localStorage.getItem('meat')
  let beerQnt = localStorage.getItem('beer')
  let sodaQnt = localStorage.getItem('soda')

  let meatH3 = document.getElementsByTagName('h3')[0]
  let beerH3 = document.getElementsByTagName('h3')[1]
  let sodaH3 = document.getElementsByTagName('h3')[2]

  if (meatQnt > 1000) {
    meatH3.innerText += ' ' + meatQnt / 1000 + ' Kg'
  } else if (meatQnt < 1000 || meatQnt > 0) {
    meatH3.innerText += ' ' + meatQnt + 'g'
  } else {
    meatH3.innerText = ' Erro!'
    beerH3.style.display = 'none'
    sodaH3.style.display = 'none'
  }
  if (beerQnt > 1000) {
    beerH3.innerText += ' ' + beerQnt / 1000 + ' L'
  } else if (beerH3 < 1000 || beerQnt > 0) {
    beerH3.innerText += ' ' + beerQnt + 'mL'
  } else {
    meatH3.innerText = ' Erro!'
    beerH3.style.display = 'none'
    sodaH3.style.display = 'none'
  }

  if (sodaQnt > 1000) {
    sodaH3.innerText += ' ' + sodaQnt / 1000 + ' L'
  } else if (sodaQnt < 1000 || sodaQnt > 0) {
    beerH3.innerText += ' ' + beerQnt + 'mL'
  } else {
    meatH3.innerText = ' Erro!'
    beerH3.style.display = 'none'
    sodaH3.style.display = 'none'
  }
}
