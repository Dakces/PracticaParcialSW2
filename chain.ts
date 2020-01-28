interface Enemigo {
    tipo : string
    hp : number
}

abstract class Servant {
    sucesor : Servant
    abstract enfrentarEnemigo(enemigo : Enemigo)
    addSucesor(sucesor : Servant) {
        this.sucesor = sucesor
    }
}

class Caesar extends Servant {
    enfrentarEnemigo(enemigo : Enemigo) {
        if (enemigo.hp >= 10000) {
            this.sucesor.enfrentarEnemigo(enemigo)
        } else {
            console.log(`Caesar derroto al ${enemigo.tipo}`)
        }
    }
}

class Lancelot extends Servant {
    enfrentarEnemigo(enemigo : Enemigo) {
        if (enemigo.hp >= 20000) {
            this.sucesor.enfrentarEnemigo(enemigo)
        } else {
            console.log(`Lancelot derroto al ${enemigo.tipo}`)
        }
    }
}

class Arthur extends Servant {
    enfrentarEnemigo(enemigo : Enemigo) {
        console.log(`Arthur derroto al ${enemigo.tipo}`)
    }
}

let mainChain = () => {
    let caesar : Caesar = new Caesar()
    let lancelot : Lancelot = new Lancelot()
    let arthur : Arthur = new Arthur()

    caesar.addSucesor(lancelot)
    lancelot.addSucesor(arthur)

    let e1 : Enemigo = {
        tipo : "Slime",
        hp : 9000
    }
    let e2 : Enemigo = {
        tipo : "Golum",
        hp : 15000
    }
    let e3 : Enemigo = {
        tipo : "Quimera",
        hp : 30000
    }

    caesar.enfrentarEnemigo(e1)
    console.log(`-------------------------------------`)
    caesar.enfrentarEnemigo(e2)
    console.log(`-------------------------------------`)
    caesar.enfrentarEnemigo(e3)
}
mainChain()