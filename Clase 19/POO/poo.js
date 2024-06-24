/*
    POO
    Abstracción
    Encapsulación
    Herencia
    Polimorfismo
*/
class Libros {
    #autor
    #titulo
    #precio
    #stock
    #id
    constructor(
        titulo,
        autor,
        precio,
        id,
        stock
    ) {
        this.#titulo = titulo,
            this.#autor = autor,
            this.#precio = precio,
            this.#id = id,
            this.#stock = stock
    }

    verInfo() {
        let info = (`Info del libro: ${this.#titulo}, autor: ${this.#autor}, precio: $${this.#precio}, id: ${this.#id}`);
        return this.#stock > 0 ? info += `, stock: ${this.#stock}` : info += `, Sin stock`;
    }

}

const libro1 = new Libros("El solitario", "Guy des cars", 50000, '5458AS', 3);
const libro2 = new Libros("El león", "Javier Milei", 60000, '125FFG');
console.log(libro1);
console.log(libro1.verInfo());
console.log(libro2.verInfo());

class Comics extends Libros {
    #ilustradores
    #volumen
    constructor(
        titulo,
        autor,
        precio,
        id,
        stock,
        ilustradores,
        volumen
    ) {
        super(titulo, autor, precio, id, stock);
        this.#ilustradores = ilustradores,
        this.#volumen = volumen
    }
    
    verInfoComics() {
        let info = `ilustradores: ${this.#ilustradores}, volumen: ${this.#volumen}`;
        return `${this.verInfo()}, ${info}`;
    }
}

const comic1 = new Comics("Stan LEE", "Spiderman", 69811, "12356LJ", 6, ["Ilustrador", "Ilustradora"], 98);
console.log(comic1.verInfoComics());