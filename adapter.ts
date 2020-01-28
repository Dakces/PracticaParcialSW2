class AdapterFactory {
    obtenerAdapter(enemigo : string) : Servant {
        if (enemigo == "saber") {
            return new ArcherAdapter()
        } else if (enemigo == "archer") {
            return new LancerAdapter()
        } else if (enemigo == "lancer") {
            return new SaberAdapter()
        } else {
            return null
        }
    }
}

interface Enemigo {
    tipo : string
}

abstract class Servant {
    nombre : string

    abstract atacar(enemigo : string)
    abstract derrotar(enemigo : string)
    abstract hablar()
}

class ArcherAdapter extends Servant{
    nombre = "Gilgamesh"

    atacar(enemigo: string) {
        console.log(`${this.nombre} atacó al ${enemigo}`)
    }    
    derrotar(enemigo: string) {
        console.log(`${this.nombre} derrotó al ${enemigo}`)
    }
    hablar() {
        console.log(`Zasshu!!!`)
    }
}

class LancerAdapter extends Servant {
    nombre = "Minamoto no Raikou(Lancer)"

    atacar(enemigo: string) {
        console.log(`${this.nombre} atacó al ${enemigo}`)
    }    
    derrotar(enemigo: string) {
        console.log(`${this.nombre} derrotó al ${enemigo}`)
    }
    hablar() {
        console.log(`Ara ara`)
    }
}

class SaberAdapter extends Servant {
    nombre = "Siegfried"

    atacar(enemigo: string) {
        console.log(`${this.nombre} atacó al ${enemigo}`)
    }    
    derrotar(enemigo: string) {
        console.log(`${this.nombre} derrotó al ${enemigo}`)
    }
    hablar() {
        console.log(`Sumanai`)
    }
}

let mainAdapter = () => {
    let enemigo = process.argv[2]

    let factory : AdapterFactory = new AdapterFactory()
    let adapter : Servant = factory.obtenerAdapter(enemigo)

    adapter.atacar(enemigo)
    adapter.derrotar(enemigo)
    adapter.hablar()
}
mainAdapter()