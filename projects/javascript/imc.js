let peso = 70
let altura = 1.9

function calcularIMC(peso, altura){
  let imc = peso / (altura * altura)
  return imc.toFixed(2)
}


function clasificarIMC(imc) {
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30.0 && imc <= 34.9) {
    return "Obesidad clase I";
  } else if (imc >= 35.0 && imc <= 39.9) {
    return "Obesidad clase II";
  } else if (imc >= 40) {
    return "Obesidad clase III";
  } else {
    return "Valor inválido";
  }
}

function informarIMC(peso, altura) {
  const imc = calcularIMC(peso, altura);
  const clasificacion = clasificarIMC(imc);
  return `Tu IMC es de ${imc}, lo que indica que tienes un ${clasificacion}.`;
}

console.log(informarIMC(peso, altura))
