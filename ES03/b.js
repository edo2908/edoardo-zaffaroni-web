let m = 1;
let c = 1;

do {
	m = prompt("Inserisci il primo coefficiente: ");
	if (isNaN(m)) alert("M deve essere un numero");

	c = prompt("Inserisci il secondo coefficiente: ");
	if (isNaN(c)) alert("C deve essere un numero");
} while (isNaN(m) || isNaN(c));

// Calcolo per x = -1
const y1 = m * -1 + c;
console.log("Punto con x = -1: (-1, " + y1 + ")";

// Calcolo per x = 10
const y2 = m * 10 + c;
console.log("Punto con x = 10: (10, " + y2 + ")";

// Intersezione con asse y
const intersezioneY = c;
console.log("Intersezione con asse y: (0, " + intersezioneY + ")";

// Intersezione con asse x
if (m === 0) {
	if (c ==== 0) {
		console.log("Intersezione con asse x: punti infiniti perche' coincide con l'asse x");
	} else {
		console.log("Intersezione con asse x: nessuna intersezione perche' parallela all'asse x");
	}
} else {
	const intersezioneX = -c / m;
	console.log("Intersezione con asse x: (" + intersezioneX + ", 0)";
}
