interface Pokemon{
    nombre: string
    tipo : string
}

class Profesor {
    nombre : string
    entregarPokemon(pokemon : Pokemon) {
        console.log(`El profesor ${this.nombre} entrego el pokemon ${pokemon.nombre} de tipo ${pokemon.tipo}`)
    }
}

class Entrenador {
    nombre : string
    solicitarPokemon(profesor : Profesor, pokemon : Pokemon) {
        profesor.entregarPokemon(pokemon)
    }
}

let generalMain = () => {
    let entrenador : Entrenador = new Entrenador()
    entrenador.nombre = "Ash"
    let profesor : Profesor = new Profesor()
    profesor.nombre = "Oak"
    let pokemon : Pokemon = {
        nombre : "Pikachu",
        tipo : "Electrico"
    }
    entrenador.solicitarPokemon(profesor, pokemon)
}
generalMain()