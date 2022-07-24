//Ejercicio 2 funciones
function info(cadena) {

  let resultado = "La cadena \""+cadena+"\" ";

  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}

alert(info("HOLA MUNDO"));
alert(info("hola mundo"));