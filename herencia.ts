class Servant {
    true_name : string
    executeNP() {}
}

class Saber extends Servant {
    executeNP() {
        console.log(`${this.true_name} excecuted her NP`)
    }
}

class Archer extends Servant {
    executeNP() {
        console.log(`${this.true_name} excecuted her NP`)
    }
}

class Lancer extends Servant {
    executeNP() {
        console.log(`${this.true_name} excecuted her NP`)
    }
}

let inheritanceMain = () => {
    let saber : Servant = new Saber()
    let archer : Servant = new Archer()
    let lancer : Servant = new Lancer()
    saber.true_name = "Altria"
    archer.true_name = "Ishtar"
    lancer.true_name = "Scáthach"
    saber.executeNP()
    archer.executeNP()
    lancer.executeNP()
}
inheritanceMain()