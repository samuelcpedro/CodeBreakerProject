let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields (answer){
	//Vou guardar a parte inteira do valor produzido pelo random multiplicado por 10000
	answer = Math.floor(Math.random() * 10000); //The maximum is exclusive and the minimum is inclusive
}