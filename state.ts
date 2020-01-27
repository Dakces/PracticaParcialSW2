enum EstadoEvolutivo {Baby1, Baby2, Rookie, Champion, Ultimate, Mega}

class Digimon {
    nombre : string
    estadoEvolutivo : EstadoEvolutivo

    //Constructor
    constructor(nombre : string) {
        this.nombre = nombre
        this.estadoEvolutivo = EstadoEvolutivo.Baby1
    }

    toBaby2() {
        console.log(`${this.nombre} ha cambiado`)
        this.nombre = "Koromon"
        this.estadoEvolutivo = EstadoEvolutivo.Baby2
    }
    toRookie() {
        if (this.estadoEvolutivo != EstadoEvolutivo.Baby1) {
            console.log(`${this.nombre} ha cambiado`)
            this.nombre = "Agumon"
            this.estadoEvolutivo = EstadoEvolutivo.Rookie
        }
    }
    toChampion() {
        if (this.estadoEvolutivo == EstadoEvolutivo.Rookie) {
            console.log(`${this.nombre} ha cambiado`)
            this.nombre = "Greymon"
            this.estadoEvolutivo = EstadoEvolutivo.Champion
        }
    }
    toUltimate() {
        if (this.estadoEvolutivo == EstadoEvolutivo.Champion) {
            console.log(`${this.nombre} ha cambiado`)
            this.nombre = "MetalGreymon"
            this.estadoEvolutivo = EstadoEvolutivo.Ultimate
        }
    }
    toMega() {
        if (this.estadoEvolutivo == EstadoEvolutivo.Ultimate || this.estadoEvolutivo == EstadoEvolutivo.Rookie) {
            console.log(`${this.nombre} ha cambiado`)
            this.nombre = "Wargreymon"
            this.estadoEvolutivo = EstadoEvolutivo.Mega
        }
    }
}

let mainState = () => {
    let digimon = new Digimon("Botamon")
    digimon.toBaby2()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toRookie()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toChampion()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toUltimate()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toMega()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toBaby2()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toUltimate()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
    digimon.toRookie()
    console.log(`Ahora es ${digimon.nombre}`)
    console.log("---------------------------------------------")
}
mainState()