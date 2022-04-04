//Pré definições do projeto:
//Carne - 400g/pessoa.   Se evento > de 6h, - 650g/pessoa
//Cerveja - 1200ml/pessoa. Se event > 6h, - 2000ml/pessoa
//Refrigerante/agua - 1000ml/pessoa. Se evento > 6h, - 1500ml/pessoa

//Criança = 0.5 * adulto - *Desconsiderando cerveja

function loaded() {
  let meatQnt = localStorage.getItem('meat')
  let beerQnt = localStorage.getItem('beer')
  let sodaQnt = localStorage.getItem('soda')
  let meatH3 = document.getElementsByTagName('h3')[0].innerText
  let beerH3 = document.getElementsByTagName('h3')[1].innerText
  let sodaH3 = document.getElementsByTagName('h3')[2].innerText

  meatH3 += ' ' + meatQnt + 'g'
  beerH3 += ' ' + beerQnt + 'ml'
  sodaH3 += ' ' + sodaQnt + 'ml'
}
