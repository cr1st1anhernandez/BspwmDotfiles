// function numberText(number, cadena){
//   let cadena_repetida = ""
//   for(let i=0; i<number; i++){
//     cadena_repetida += ` ${cadena}`
//   } 
//   return cadena_repetida
// }

function numberText(number, cadena){
  return cadena.repeat(number);
}

console.log(numberText(3, "hola"));
