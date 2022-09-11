const smalls = document.querySelector('#smalls')
const bigs = document.querySelector('#bigs')
const drinks = document.querySelector('#drinks')

document.querySelector('#smallsClick').addEventListener('click', smallsNext)
document.querySelector('#bigsClick').addEventListener('click', bigsNext)
document.querySelector('#drinksClick').addEventListener('click', drinksNext)

function smallsNext(){
    smalls.classList.toggle('hidden')
	bigs.classList.add('hidden')
	drinks.classList.add('hidden')
}
function drinksNext(){
    smalls.classList.add('hidden')
	bigs.classList.add('hidden')
	drinks.classList.toggle('hidden')
}
function bigsNext(){
    smalls.classList.add('hidden')
	bigs.classList.toggle('hidden')
	drinks.classList.add('hidden')
}
