let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
	let input = document.getElementById('user-guess');
	//add functionality to guess function here
	if (answer.value.length == 0 && attempt.value.length == 0) {
		setHiddenFields ();
	}

	if (!validateInput(input.value)) {
		return false;
	}
	attempt.value++;
}

//implement new functions here
var setHiddenFields = function(){
	attempt.value = 0;
	//Vou guardar a parte inteira do valor produzido pelo random multiplicado por 10000
	var aux  = Math.floor(Math.random() * 10000); //The maximum is exclusive and the minimum is inclusive
	//vou repetir x vezes a string "0" até ter o a string answer ter tamanho 4
	//console.log(answer);
	aux = "0".repeat(4-String(aux).length) + aux.toString(10);

	return answer.value = aux.toString(10);
};

var setMessage = function(message) {
	let msg_label = document.getElementById('message');
	msg_label.innerHTML = message;
};

var validateInput = function(argument) {
	if (argument.length === 4) {
		return true;
	} else {
		setMessage ("Guesses must be exactly 4 characters long.");
		return false;
	}
}