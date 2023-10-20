/*class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    get perimeter () {
        return (this.width + this.height)
    }

    get isValid () {
        return this.width > 0 && this.height
    }

    isBiggerThan (shape) {
        return this.perimeter > shape.perimeter
    }
}

class Square extends Rectangle {
    constructor (width) {
        super(width, width)
    }
}

const r = new Rectangle(10, 20)
console.log(r.perimeter)
console.log(r.isValid)
const r2 = new Rectangle(-10,20)
console.log(r2.isValid)
const c = new Square(10)
console.log(c.perimeter)
console.log(c.isBiggerThan (r))
*/

class Book {
    #page = 1
    constructor(title, pages) {
        this.title = title
        this.pages = pages
        this.#page = 1
    }

    get page() {
        return this.#page
    }

    nextPage() {
        if (this.#page < this.pages) {
            this.#page++
        }
    }

    close() {
        this.#page = 1
    }
}

class Library {
    #books = []

    addBook(book) {
        this.#books.push(book)
    }

    addBooks(books) {
        for (let book of books) {
            this.addBook(book)
        }
    }

    findBooksByLetter(letter) {
       return this.#books.filter((book) => 
         book.title[0].toLowerCase() === letter.toLowerCase()
        )
    }
    }

const b = new Book('Seigneur des anneaux', 200)
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library();
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'))
