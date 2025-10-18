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
            return false
        }
        numero = parseInt(numero)
        if ((numero ?? false) || (numero == 0)){
            numeroValido = true
        }else{
            numero = (prompt("Valor inválido. \nPor favor " + frase))
            numeroValido = false
        }
    }while (!(numeroValido))
    return numero
}

function entrada(mensajes){
    let numero1 = verificarEntrada(mensajes[0])
    if (numero1 === false){
        return false
    }
    let numero2 = verificarEntrada(mensajes[1])
    if (numero2 === false){
        return false
    }
    let numeros = [numero1, numero2]
    return numeros
}

const sumar = function(){
    let sumandos = entrada(["Ingrese el primer sumando", "Ingrese el segundo sumando"])
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

const radicar = function(){
    let numeros = entrada(["Ingrese el índice", "Ingrese el radicando"])
    if (numeros === false){
        cancelado()
        return
    }
    
    switch (true){
        case numeros[0] == 0:
            cancelado("El índice de la raiz no puede ser 0")
            break

        case esNegativo(numeros[0]):
            cancelado("No se puede resolver una raíz con índice negativo")
            break

        case esNegativo(numeros[1]) && esPar(numeros[0]):
            salida(numeros, ((-1 * numeros[1]) ** (1/numeros[0])) + "i", "√")
            break

        case esNegativo(numeros[1]) && !esPar(numeros[0]):
            salida(numeros, -1 * (-1 * numeros[1]) ** (1/numeros[0]), "√")
            break

        default:
            salida(numeros, (numeros[1]) ** (1/numeros[0]), "√")
            break
    }
    return
}


do{
    entradaMenu = prompt("Ingrese un número para seleccionar la operación: \n1: Sumar \n2: Restar \n3: Multiplicar \n4: Dividir \n5: Potencia \n6: Raiz \n9: Salir")
    menu = parseInt(entradaMenu)
    if (!entradaMenu){
        menu = 9
    }
    
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
} while (menu !== 9)
console.log("Programa finalizado")