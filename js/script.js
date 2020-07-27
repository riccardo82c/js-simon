/* Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l 'utente deve inserire un prompt alla
volta i numeri che ha visto precedentemente.Dopo che
sono stati inseriti i 5 numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati. */




/* array di numeri creati dal pc */
var numPc = [];

/* finchè la lunghezza dell'array non arriva a 5 */
/* inserisco un numero nell'array dopo aver controllato che nn è presente 
nell'array */
while (numPc.length < 5) {
	var numeroRnd = numRandom(1, 100);
	if (!checkArr(numPc, numeroRnd)) {
		numPc.push(numeroRnd);
	}
}


alert(numPc + 'Memorizza questi numeri, hai 30 secondi di tempo');


setTimeout(function () {
	var inserito = prompt('Inserisci un numero');
}, 30000);








// funzione random
function numRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione check se un N è presente in un array (true = presente)
function checkArr(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (num == arr[i]) {
			return true;
		}
	}
	return false;
}

// funzione inserisci un numero
var inserito = prompt('Inserisci un numero');