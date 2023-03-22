// Crear un array
let Array = [];

// Agregar 10 elementos aleatorios al array
for (let i = 0; i < 10; i++) {
	Array.push(Math.floor(Math.random() * 10) + 1);
}

// sumar los arrays
let sum = 0;
for (let i = 0; i < Array.length; i++) {
	sum += Array[i];
}

// Imprimir el array y la suma
console.log("El array es: " + Array);
console.log("La suma es: " + sum);
