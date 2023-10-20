/*
*Les classes
*/

/*
console.log({a: 1})
*/

/*
console.log(Object.getPrototypeOf({a: 1}))
*/

/*
console.log(Object.getPrototypeOf(1))
console.log(Object.getPrototypeOf("hello"))
console.log(Object.getPrototypeOf([]))
console.log(Object.getPrototypeOf(true))
*/

/*
class Student {
    // La propriété sera automatiquement placée sur l'objet lors de sa construction
    notes = []
    // La méthode constructor permet d'indiquer comment le type sera construit
    constructor (firstname, lastname) {
        // this permettra d'accéder à l'objet construit
        this.firstname = firstname
        this.lastname = lastname
    }
    // Ajouter des méthodes, this fera référence à l'objet sur lequel on utilisera la méthode
    addNote (note) {
        this.notes.push(note)
    }
    // On peut créer des getters, ce sont des propriétés magiques qui ont une logique
    get fullname () {
        return `${this.firstname} ${this.lastname}`
    }
    get moyenne () {
        let sum = 0
        for (let note of this.notes) {
            sum += note
        }
        return sum / this.notes.length
    }
    // On peut créer des setters pour ajouter de la logique
    set name (str) {
        const items = str.split(' ')
        this.firstname = items[0]
        this.lastname = items[1]
    }
}
const John = new Student('John', 'Doe') 
John.notes
John.fullname
John.addNote(18)
John.moyenne
John.name = 'Jane Doe'
John.firstname = "Jane"
console.log(John)
*/
