let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields (){
	//Vou guardar a parte inteira do valor produzido pelo random multiplicado por 10000
	answer = Math.floor(Math.random() * 10000); //The maximum is exclusive and the minimum is inclusive
	//vou repetir x vezes a string "0" até ter o a string answer ter tamanho 4
	return answer = "0".repeat(4-String(answer).length) + answer.toString(10);
}