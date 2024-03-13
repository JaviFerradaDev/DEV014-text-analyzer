import analyzer from './analyzer.js';

//SELECTORES DEL DOM
const text = document.querySelector('textarea[name="user-input"]'); //acá 
const liWordCount = document.querySelector('li[data-testid="word-count"]');
const liCharacterCount = document.querySelector('li[data-testid="character-count"]');
const liNoSpacesCount = document.querySelector('li[data-testid="character-no-spaces-count"]');
const liNumberCount = document.querySelector('li[data-testid="number-count"]');
const liNumberSum = document.querySelector('li[data-testid="number-sum"]');
const litAverageWordLength = document.querySelector('li[data-testid="word-length-average"]');
const resetButton = document.getElementById('reset-button');

//Función para limpiar el textarea
function clearValues() {
  text.value = ""; 
  liWordCount.textContent = "Recuento de palabras: 0"; 
  liCharacterCount.textContent = "Recuento de carácteres: 0";
  liNoSpacesCount.textContent = "Contador de carácteres sin espacio: 0";
  liNumberCount.textContent = "Recuento de números: 0";
  liNumberSum.textContent = "Suma total de números: 0";
  litAverageWordLength.textContent = "Longitud media de palabras: 0";//Acá se limpia
}
//Evento para limpiar con el button
resetButton.addEventListener('click', clearValues);

//EVENTOS del DOM e invocar los métodos del objeto `analyzer`
text.addEventListener('input', function () {
  //requerimiento 1: obtener el total de palabras
  const resultWordCount = analyzer.getWordCount(text.value);
  liWordCount.textContent = "Recuento de palabras: " + resultWordCount;

  //requerimiento 2:
  const resultCharacterCount = analyzer.getCharacterCount(text.value);
  liCharacterCount.textContent = "Recuento de carácteres: " + resultCharacterCount;

  //requerimiento 3:
  const resultNoSpacesCount = analyzer.getCharacterCountExcludingSpaces(text.value);
  liNoSpacesCount.textContent = "Contador de carácteres sin espacio: " + resultNoSpacesCount;

  //requerimiento 4:
  const resultNumberCount = analyzer.getNumberCount(text.value);
  liNumberCount.textContent = "Recuento de números: " + resultNumberCount;

  //requerimiento 5:
  const resultNumberSum = analyzer.getNumberSum(text.value);
  liNumberSum.textContent = "Suma total de números: " + resultNumberSum;

  //requerimiento 6:
  const resultAverageWordLength = analyzer.getAverageWordLength(text.value);
  litAverageWordLength.textContent = "Longitud media de palabras: " + resultAverageWordLength;
})




//Crear una función para contar números de letras/carácteres de un texto/string

//Funciones EN TIEMPO REAL ¿Cómo indico que cuente en tiempo real?

//Función Recuento de palabras: la aplicación debe poder contar el número de palabras en el texto de entrada y mostrar este recuento a la usuaria.
//Cómo identificar que son palabras
//Ponerlo dentro de un contenedor
//Que itere y verifique que cada carácter es una palabra o número
//Retornar conteo de palabras

//Función Recuento de caracteres: la aplicación debe poder contar el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y mostrar este recuento a la usuaria.

//Función Recuento de caracteres excluyendo espacios y signos de puntuación: la aplicación debe poder contar el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento a la usuaria.

//Función Recuento de números: la aplicación debe contar cúantos números hay en el texto de entrada y mostrar este recuento a la usuaria.

//Función Suma total de números: la aplicación debe sumar todos los números que hay en el texto de entrada y mostrar el resultado a la usuaria.

//Función Longitud media de las palabras: la aplicación debe calcular la longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

//Función para limpiar el contenido d la caja de texto haciendo clic en un botón.



