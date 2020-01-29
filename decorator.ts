/*let funcionGenerica = (frase : string) => {
    return `${frase}`
}

let funcionDecoradora = (funcion : Function) => {
    let funcionDecorada = (frase : string) => {
        let res = funcion(frase)
        return res.toUpperCase()
    }
    return funcionDecorada
}

let mainDecorator = () => {
    let FUNCIONGENERICA = funcionDecoradora(funcionGenerica)
    let fraseGenerica = FUNCIONGENERICA("escribir en mayusculas significa gritar uwu")
    console.log(fraseGenerica) 
}*/

let funcionSuma = (a1 : number, a2 : number) => {
    return a1 + a2
}

let funcionDecoradora = (funcion : Function) => {
    let funcionConversora = (a1 : number, a2 : number) => {
        return a1 * a2
    }
    return funcionConversora
}

let mainDecorator = () => {
    console.log(funcionSuma(3,3))
    let funcionMultiplicar = funcionDecoradora(funcionSuma)
    let multiplicacion = funcionMultiplicar(3,3)
    console.log(`----------------------------`)
    console.log(multiplicacion)
}

mainDecorator()