const bookArr = []

let bookCount = 1

function Book(title, author, pages, read, status) {
    this.title = title
    this.author = author
    this.read = read
    this.pages = pages
    this.status = status
    this.info = function () {
        return this.status
    }
}


function addBookToLibrary() {

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

const clearContent = () => {
    bookTitleInput.value = ""
    bookAuthorInput.value = ""
    bookPagesReadInput.value = ""
    bookTotalPagesInput.value = ""
    bookStatusInput.value = ""
}

submitButton.addEventListener("click", () => {
    bookTitle = bookTitleInput.value
    bookAuthor = bookAuthorInput.value
    bookPagesRead = bookPagesReadInput.value
    bookTotalPages = bookTotalPagesInput.value
    bookStatus = bookStatusInput.value
    // console.log(bookTitle)

    if (bookTitle && bookAuthor && bookPagesRead && bookTotalPages && bookStatus) {

        book = new Book(bookTitle, bookAuthor, bookPagesRead, bookTotalPages, bookStatus)
        console.log(book.info())

        bookArr.push(book)

        console.log(bookArr)

        clearContent;

    }

    else {
        alert("nothing should be empty")
    }
})
