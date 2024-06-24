let animales = ['perro', 'gato', 'conejo'];
let numeros = [1, 2, 3, 5];
let datos = ['hola', true, 5, ['Elias', 'Onnembo', 38]];
console.log(datos[2]);
// shit: Elimina el primer elemento de la matriz
// console.log(numeros.shift()); 

// map: Llama a una función de devolución de llamada definida en cada elemento de una matriz y devuelve una matriz que contiene los resultados.
const newArray = numeros.map(numero => numero * 10)
console.log(newArray);

// filter: Devuelve los elementos de una matriz que cumplen la condición especificada en una función de devolución de llamada.
const newArray2 = animales.filter(animal => animal == 'gato' || animal == 'perro')
console.log(newArray2);