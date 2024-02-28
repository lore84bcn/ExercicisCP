//Las listas en JS se llaman "arrays"

let color1 = "rojo"
let color2 = "azul"
 
//                       0            1       2        3
let array_colores = ["amarillo", "violeta", "naranja", color2]

console.log(array_colores)

let color_favorito = "naranja"

for (let i = 0; i < array_colores.length; i++){
    console.log(array_colores[i])
    if (color_favorito == array_colores[i]) {
        console.log("El color está en la lista")
        break
    }
}
    