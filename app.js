const Pelicula = {
    id: 1,
    nombre: "ironman",
    reproducir() {
        return `Reproduciendo la pelicula ${this.nombre}`
    }
}

console.log(Pelicula.reproducir());

class Movie {
    constructor(id, nombre){
        this.id = id,
        this.nombre = nombre
    }
    reproducir() {
        return `Reproduciendo la pelicula ${this.nombre}`
    }
}
const movie = new Movie(2, "Batman");
console.log(movie.reproducir());

class Serie extends Movie {
    constructor(id, nombre, capitulo){
        super(id,nombre)
        this.capitulo = capitulo;
    }
    reproducir() {
        return `Reproduciendo Capitulo ${this.capitulo} de la serie ${this.nombre}`
    }
}
const serie = new Serie(100,"PLL","1");
console.log(serie.reproducir())