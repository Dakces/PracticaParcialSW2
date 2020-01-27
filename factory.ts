abstract class Pizza {
    abstract prepararPizza()
}

class Americana extends Pizza {
    prepararPizza() {
        return `Se preparo una pizza Americana`
    }
}

class Hawaiana extends Pizza {
    prepararPizza() {
        return `Se preparo una pizza Hawaiana`
    }
}

class PizzaFactory {
    obtenerPizza(tipo : string) : Pizza
    {
        if (tipo == "americana") {
            return new Americana()
        } else if (tipo == "hawaiana") {
            return new Hawaiana()
        } else {
            return null
        }
    }
}

let factoryMain = () => {
    let factory = new PizzaFactory()
    let tipo : string = process.argv[2]
    let p1 : Pizza = factory.obtenerPizza(tipo)

    console.log(`Orden : ${p1.prepararPizza()}`)
}
factoryMain()