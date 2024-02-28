function calcular() {
  //limpiar las advertencias
  let error1 = document.getElementById("error1");
  error1.innerText = "";
  let error2 = document.getElementById("error2");
  error1.innerText = "";
  let resultado = document.getElementById("resultado")
  resultado = 0

  //Obtener los números
  let num1 = document.getElementById("num1").value; //el document es que busque en todo el HTML ese valor (value)
  let num2 = document.getElementById("num2").value;
  //console.log(num1)
  //console.log(isNaN(num1)) /*verifica si es un numero o no (true/false)*/

  // Errores en los numeros
  num1 = num1.trim(); /*quita los espacios para evitar errores*/
  let errores = false;
  if (isNaN(num1) || num1 == "") {
    error1.innerText = "entrada incorrecta";
    errores = true;
    //return
  }
  if (isNaN(num2) || num2 == "") {
    error2.innerText = "entrada incorrecta";
    errores = true;
    //return
  }

  if (errores) {
    return;
  }

  console.log("num1 al principio es", typeof(num1));
  //Conversion entero
  num1 = parseFloat(num1);
  console.log("Después del parseFloat es", typeof(num1));
  num2 = parseFloat(num2);

  let opciones = document.getElementsByName("operador");
  console.log (opciones);

  let operacion = ""
  for (let i = 0; i < opciones.length; i++){
    if (opciones[i].checked == true){
      operacion = opciones[i].id;
      break
    }
  }
  console.log("La operacion es", operacion)
  
  if(operacion == "sumar"){
  document.getElementById("resultado"). innerText = num1 + num2
  } else if (operacion == "restar"){
    document.getElementById("resultado"). innerText = num1 - num2
  }
}
