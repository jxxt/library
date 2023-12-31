const bookArr = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        console.log(this.title)
    }
}

book1 = new Book(1, 2, 3, 4)
book1.info()

function addBookToLibrary() {
    bookArr.push(book1)
}