const smalls = document.querySelector('#smalls')
const bigs = document.querySelector('#bigs')
const drinks = document.querySelector('#drinks')



document.querySelector('#smallsClick').addEventListener('click', smallsNext)
document.querySelector('#bigsClick').addEventListener('click', bigsNext)
document.querySelector('#drinksClick').addEventListener('click', drinksNext)

document.querySelector('#smallsClick').addEventListener('touchstart', smallsNext)
document.querySelector('#bigsClick').addEventListener('touchstart', bigsNext)
document.querySelector('#drinksClick').addEventListener('touchstart', drinksNext)



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


let spaceship = {
	homePlanet : 'Earth',
	color : 'red'
  };
//creates changeable spaceship object

  let tryReassignment = obj => {
	obj = {
	  identified : false, 
	  'transport type' : 'flying'
	}
	console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
	//creates a function where it tries to reassign an object
   
  };

  tryReassignment(spaceship) // The attempt at reassignment does not work.
  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
  //parameter is a pointer to the created obj, it is not the spaceship itself
   
  spaceship = {
	identified : false, 
	'transport type': 'flying'
  }; // Regular reassignment still works.
