//Programa para calcular cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
// -Los signos de puntuacion no forman parte de la palabra. Una palabra es la misma aunque aparezca en minusculas o mayusculas

txt.addEventListener('input', event => {
    let text = event.target.value
    console.log(text)

    text = text.replace(/\.¿\?,;/g," ") // Replazamos todo lo que sea signo de puntuacion
    text = text.replace(/\s+/g, " ").trim()    // El s+ indica que de haber un espacio o mas, lo remplazara a un espacio normal. El trim quita los espacios del inicio y el final
    
    text = text.toUpperCase()

    const words = text.split(" ")

    const result = words.reduce((ac, word) => {
         ac.filter(w=>w.word === word).length === 0 ?  // Si el conjunto de elementos es 0, es porque no existe
         ac.push({
            word: word, total: 1              // Vamos a meter ese elemento porque esa palabra no existe
         }) : 
           ac.find(w=>w.word === word).total++;  // En el caso de que ya exista, hacemos que regrese la primera palabra en cada iteracion
 
           return ac;
    }, [])
    console.log(result)

})
