class Fate 
{
    nombre : string
    episodios : number

    clonar() 
    {
        let f = new Fate()
        f.nombre = `${this.nombre} Prototype`
        f.episodios = this.episodios
        return f
    }
}

let mainPrototype = () => {
    let f1 = new Fate()
    f1.nombre = "Fate"
    f1.episodios = 25

    let f2 = f1.clonar()

    console.log(`El nombre del animu es ${f1.nombre} y el clonado es ${f2.nombre}`)
}
mainPrototype()