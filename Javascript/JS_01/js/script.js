/*Comentario multilinea*/
        //Comentario de una sola linea
        let primeraVariable = "Buenos días" //let es para definir el nombre de la variable
        primeraVariable = "Buenas tardes" //no hace falta el let porque ya está declarada la variable, esto sirve para cambiarla.
        var segundaVariable = "Son las 9" //similar a let
        segundaVariable = "Son las 9:30"
        terceraVariable = "Adiós" //No recomendada
        const PI = 3.1416 //dato que no variará durante la ejecución del programa
        //PI = 18

        let palabra="H" + "O" + "L" + "A" //Hola
        let suma = 10 + 20 //30
        let suma2 = "10" + "20" // 1020

        let verdadero = true
        let falso = false

        typeof (palabra) //Instrucción que indica que tipo es una variable pero no la muestra necesita un console.log
        console.log(typeof(palabra))

        //alert(primeraVariable) //Manda una alerta al usuario en el navegador
        console.log(segundaVariable); //recomendado para saber como va el codigo y si funciona

       // let nombre = prompt ("¿Cuál es tu nombre?")
        //alert ("Saludos, " + nombre)

        let llueve = confirm ("¿Está lloviendo ahora?")
        alert (llueve)