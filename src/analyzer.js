const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === "") {
      return 0;
    } else {
      const arrayText = text.split(" "); // Intentando eliminar los espacios que me cuenta antes de las palabras
      return arrayText.length; //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    }
  },

  getCharacterCount: (text) => {
    const total = text.length
    return total//Retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => { 
    let count = 0 //1. agregar contador
    const textSplit = text.split(''); //2. ver el texto dividido
    for (let i = 0; i < textSplit.length; i++) {     //3. quitar los espacios recorriendo con un for y quitar los espacios con una condición
      if (textSplit[i] === ' ' || textSplit[i] === ',' || textSplit[i] === '.') {
        count = count + 0
      } else {
        count = count + 1
      }
    }
    return count; //4. mostrar el nuevo largo
  },

  getNumberCount: (text) => { //Defino la fx con el parámetro text que es lo que quiero que reciba. 
    if (text.trim() === "") { // Si el text sin espacios en blancos .trim() es una cadena vacía, es decir, si ningún carácter, el código dentro de este bloque se ejecutará.
      return 0; //Si el texto está vacío, devuelve 0 indicando que no encontró números en el texto.
    } 
  
    const groups = text.trim().split(' '); //Creación de nueva variable para div el texto en "groups", text.trim() limpia nuevamente los espacios y con split divide el texto en grupos separados por espacios en blancos creando un array donde cada elemento es una palabra del texto.
    let numberCount = 0; //Declaro la veriable inciando su valor en 0 para que cuente la cantidad de n° que encontró en el texto.
  
    for (const group of groups) { //El bucle "for" recorre cada elemento dentro del conjunto "groups" y, en cada iteración, se asigna a la variable group.
      if (!isNaN(Number(group.replace('.', '')))) { //Luego, verificar si el contenido de "group" ¡isNaN y lo convierte a Number. 
        //Dentro los () replace, tengo el fragmento que quiero buscar dentro de la cadena. El . lo utilcé literal para representar un punto y como separador decimal. El '' reemplaza cada punto en la cadena group, como es cadena vacía, se elimina sin reemplazarlo. 
        numberCount++; //Por lo tanto, si no es un número, se incrementa el contador. 
      }
    }
    
    return numberCount;//Devuelve el conteo de n° una vez recorrido todoo el texto, lo que representa la cantidad de números encontrados.
  },
  
  
  getNumberSum: (text) => { //Parámetro (text), array con números separados por espacios
    if (text.trim() === "") { //Comprueba si text está vacío después de quitar los espacios en blanco al principio y al final usando trim().
      return 0; // Si es así, la función devuelve 0, ya que no hay números que sumar
    } 
    //Si text no está vacío, entonces pasa lo siguiente: 
    const words = text.trim().split(' '); // Dividir por palabras (eespacio=delimitador) y se almacena en un array (const=words)
    let numberSum = 0;  //Se declara la variable para almacenar la suma de n°
    
    for (let i = 0; i < words.length; i++) { //Recorremos el array por palabra con el bucle for 
      let word = words[i]; //
      if (word.endsWith('.')) { //Si la palabra termina en punto, entonces lo elimina con slice (lo extrae)
        word = word.slice(0, -1); //
      }
      
      const number = Number(word);      
      if (!isNaN(number)) {
        numberSum += number;
      }
    }
    
    return parseFloat(numberSum.toFixed(2)); // Devuelve la suma de los números, redondeado a dos decimales utilizando .toFixed

  },

  getAverageWordLength: (text) => {
    const words = text.trim().split(' ');//Para poder dividir el texto en palabras. El argumento (" ") nos ayuda a que se divida en cada espacio en blanco=array de palabras
    let totalLength = 0; //inicio y almaceno la suma de la longitud de todas las palabras
    for (let i = 0; i < words.length; i++) { //este bucle (for) recorrerá cada palabra en array "words"
      totalLength += words[i].length; //dentro de este for sumo la long de cada palabra a la variable "totalLentgh" con la propiedad .length
    }
    const averageWordLength = totalLength / words.length; //Después de que recorra, declaro una constante que calcule el promedio (average), es decir, calculo la long media dividiendo con el "/" por el n° de palabras
    return parseFloat(averageWordLength.toFixed(2)); //Retorna el cálculo anterior y redondear con toFixed
  },
};

export default analyzer;