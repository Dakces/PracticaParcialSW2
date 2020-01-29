abstract class Servant {
    abstract ejecutarNP()
}

class Altria extends Servant {
    ejecutarNP() {
        console.log("Ekuscaribaaaaaaaaaa!!!")
    }
}

class Gilgamesh extends Servant {
    ejecutarNP() {
        console.log("Eniuma Erishuuuuuuuuuuuuu!!!")
    }
}

class Scathach extends Servant {
    ejecutarNP() {
        console.log("Gei Borugu Aruternativeeeeeee!!!")
    }
}

class Master
{
    servants : Servant[] | null = null
    addObservador (obs : Servant) 
    {
        if (this.servants == null) 
        {
            this.servants = []
        }
        this.servants.push(obs)
    }
    ordenarNP()
    {
        if (this.servants != null) 
        {
            for (let i = 0; i < this.servants.length; i++) 
            {
                let ser : Servant = this.servants[i]
                ser.ejecutarNP()
            }
        }
    }
}

let mainObserver = () => {
    let master = new Master()
    let altria = new Altria()
    let gilgamesh = new Gilgamesh()
    let scathach = new Scathach()

    master.addObservador(altria)
    master.addObservador(gilgamesh)
    master.addObservador(scathach)

    master.ordenarNP()
}
mainObserver()