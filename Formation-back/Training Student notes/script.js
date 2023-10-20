const moyenne = (notes) => {
    let sum = 0
    for(let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

class Student {
    ecole = 'Jules Ferry'
    _notes = []
    static moyenne = 10

    constructor (firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    set setNotes(notes) {
        if (Array.isArray(notes)){
          this._notes = notes  
        }
    }

    get name () {
        return `${this.firstname} ${this.lastname}`
    }

    canPass () {
        return moyenne(this._notes) >= Student.moyenne
        
    }
}

const John = new Student('John', 'Doe')
const Jane = new Student('Jane', 'Doe')
const Marc = new Student('Marc', 'Tricabel')
const Jake = new Student('Jake', 'Paul')

John.setNotes = [9]
Jane.setNotes = [12, 17, 15, 18]
Marc.setNotes = [14, 15, 17, 19]
Jake.setNotes = [8, 11, 9, 7]

console.log(John.canPass(), Jane.canPass(),
            Marc.canPass(), Jake.canPass())
