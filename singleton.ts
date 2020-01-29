class Anime 
{
    private static instance : Anime | null = null
    nombre : string
    episodios : number

    private constructor() {}

    static getInstance() 
    {
        if (Anime.instance == null) 
        {
            Anime.instance = new Anime()
        }
        return Anime.instance
    }
}

let mainSingleton = () => {
    let a1 = Anime.getInstance()
    let a2 = Anime.getInstance()
    let a3 = Anime.getInstance()

    a1.nombre = "Usagi Drop"
    a2.nombre = "KissXSis"
    a3.nombre = "Milky Party"

    console.log(`El nombre del monito chino es: ${a1.nombre}`)
}
mainSingleton()