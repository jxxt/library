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






// const testModal = document.querySelector(".test")

// const newBtn = document.querySelector(".add")

// newBtn.addEventListener('click', () => {
//     testModal.showModal()
// })










const submitButton = document.querySelector(".submit-btn")

const bookTitleInput = document.querySelector(".title-input")
const bookAuthorInput = document.querySelector(".author-input")
const bookPagesReadInput = document.querySelector(".pages-read-input")
const bookTotalPagesInput = document.querySelector(".total-pages-input")
const bookStatusInput = document.querySelector(".status-input")

let bookTitle
let bookAuthor
let bookPagesRead
let bookTotalPages
let bookStatus

submitButton.addEventListener("click", () => {
    bookTitle = bookTitleInput.value
    console.log(bookTitle)
})