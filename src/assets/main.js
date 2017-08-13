let NR_OF_DIGITS = 4
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
	getResults(input.value);
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

var getResults = function(argument) {
	let countCorrecDigits = 0;
	//create auxiliar var to save the struture for analisys of the answwer of the user
	let auxHTML = '';
	//Get results element to add a div with info about the guess that was made
	let results = document.getElementById('results');
	//save first lines
	auxHTML += '<div class="row"><span class="col-md-6">' + argument + '</span><div class="col-md-6">';
	//for each letter of the answer we will see
	for (var i= 0; i < NR_OF_DIGITS;  i++) {
		//if the number in position i of the answer is equal to the number in the same position of the guess
		if (answer.value[i] == argument[i]) {
			auxHTML += '<span class="glyphicon glyphicon-ok"></span>';
			countCorrecDigits++;
		//else if the number in positon i of the guess exist in the answer
		}else if(answer.value.indexOf(argument[i]) !== -1){
			auxHTML += '<span class="glyphicon glyphicon-transfer"></span>';
		//else just say that that number doesnt exist
		}else{
			auxHTML += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	//save the closing tags of the divs that were opended
	results.innerHTML += auxHTML + '</div></div>';
	//if the number of digits were equal to number of digits that were in the correct position return true else false
	return NR_OF_DIGITS == countCorrecDigits;
}