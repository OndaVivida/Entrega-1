//variables globales
let entradaMenu = ""
let menu = 0

const salida = (valores, resultado, operacion) => alert(valores[0] + operacion + valores[1] + " = " + resultado)
const cancelado = (error = "Operación cancelada") => alert(error)
const esPar = (numero) => (numero % 2) == 0
const esNegativo = (numero) => numero < 0

function verificarEntrada(frase){
    let numeroValido
    let numero
    numero = (prompt(frase))
    do{
        if (!numero){
            console.log("botón cancelar de Verificar Entrada")
            return false
        }
        console.log("primer número ingresado en Verificar Entrada: "+numero)
        numero = parseInt(numero)
        if ((numero ?? false) || (numero == 0)){
            console.log("número válido en Verificar Entrada: "+numero)
            numeroValido = true
        }else{
            console.log("número inválido en Verificar Entrada: "+numero)
            numero = (prompt("Valor inválido. \nPor favor " + frase))
            numeroValido = false
        }
        console.log("salida de Verificar Entrada: "+numeroValido)
    }while (!(numeroValido))
    return numero
}

function entrada(mensajes){
    let numero1 = verificarEntrada(mensajes[0])
    if (numero1 === false){
        console.log("cadena del botón cancelar")
        return false
    }
    let numero2 = verificarEntrada(mensajes[1])
    if (numero2 === false){
        console.log("cadena del botón cancelar")
        return false
    }
    let numeros = [numero1, numero2]
    return numeros
}

const sumar = function(){
    let sumandos = entrada(["Ingrese el primer sumando", "Ingrese el segundo sumando"])
    console.log("numeros en sumar: "+sumandos)
    if (sumandos === false){
        cancelado()
        return
    }
    let total = sumandos[0] + sumandos[1]
    salida(sumandos, total, " + ")
    return
}

const restar = function(){
    let restandos = entrada(["Ingrese el minuendo", "Ingrese el sustraendo"])
    console.log("numeros en restar: "+restandos)
    if (restandos === false){
        cancelado()
        return
    }
    let diferencia = restandos[0] - restandos[1]
    salida(restandos, diferencia, " - ")
    return
}

const multiplicar = function(){
    let factores = entrada(["Ingrese el primer factor", "Ingrese el segundo factor"])
    console.log("numeros en multiplicar: "+factores)
    if (factores === false){
        cancelado()
        return
    }
    let producto = factores[0] * factores[1]
    salida(factores, producto, " x ")
    return
}

const elevar = function(){
    let potenciales = entrada(["Ingrese la base", "Ingrese el exponente"])
    console.log("numeros en elevar: "+potenciales)
    if (potenciales === false){
        cancelado()
        return
    }
    let potencia = potenciales[0] ** potenciales[1]
    salida(potenciales, potencia, "^")
    return
}
//estoy seguro de que tiene que haber una forma de no poner tantos "if (numeros === false)" pero no se me ocurre

const dividir = function(){
    let numeros = entrada(["Ingrese el numerador", "Ingrese el denominador"])
    console.log("numeros en dividir: "+numeros)
    if (numeros === false){
        cancelado()
        return
    }
    if (numeros[1] == 0){
        cancelado("No se puede dividir por 0")
        return
    }
    let cociente = numeros[0] / numeros[1]
    salida(numeros, cociente, " / ")
    return
}

// const radicar = function(){
//     let numeros = entrada(["Ingrese el índice", "Ingrese el radicando"])
//     if (numeros === false){
//         cancelado()
//         return
//     }
//     if (numeros[0] == 0){
//         cancelado("El índice de la raiz no puede ser 0")
//         return
//     }
//     if ((numeros[1] < 0) && !(numeros[0] % 2)){
//         console.log("imaginario")
//         numeros[1] = numeros[1] * -1
//         let raiz = numeros[1] ** (1/numeros[0])
//         raiz = raiz + "i"
//         salida(numeros, raiz, "√")
//     }else{
//         console.log("real")
//         let raiz = numeros[1] ** (1/numeros[0])
//         salida(numeros, raiz, "√")
//     }
//     return
// }

const radicar = function(){
    let raiz
    let numeros = entrada(["Ingrese el índice", "Ingrese el radicando"])
    if (numeros === false){
        cancelado()
        return
    }
    console.log("radicales: "+numeros)
    console.log("paridad del índice: "+esPar(numeros[0]))
    console.log("negatividad del radicando: "+esNegativo(numeros[1]))
    switch (true){
        case numeros[0] == 0:
            console.log("caso índice 0")
            cancelado("El índice de la raiz no puede ser 0")
            break

        case esNegativo(numeros[0]):
            console.log("caso índice negativo")
            cancelado("No se puede resolver una raíz con índice negativo")
            break

        case esNegativo(numeros[1]) && esPar(numeros[0]):
            console.log("caso números imaginarios")
            raiz = ((-1 * numeros[1]) ** (1/numeros[0])) + "i"
            salida(numeros, raiz, "√")
            break

        default:
            console.log("caso números reales")
            raiz = numeros[1] ** (1/numeros[0])
            salida(numeros, raiz, "√")
            break
    }
    return
}


do{
    entradaMenu = prompt("Ingrese un número para seleccionar la operación: \n1: Sumar \n2: Restar \n3: Multiplicar \n4: Dividir \n5: Potencia \n6: Raiz \n9: Salir")
    menu = parseInt(entradaMenu)
    if (!entradaMenu){
        console.log("botón cancelar del menú")
        menu = 9
    }
    console.log("comando menú: "+entradaMenu)
    console.log("comando menú parseado: "+menu)
    switch (menu){
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        case 5:
            elevar()
            break
        case 6:
            radicar()
            break  
        case 9:
            break
        default:
            if (confirm("El caracter ingresado: "+ entradaMenu + ", no corresponde a una operación válida. \n¿Desea salir?")){
                menu = 9
            }else{
                menu = 0
            }
    }
    console.log("bucle del menú \n ")
} while (menu !== 9)
console.log("Programa finalizado")