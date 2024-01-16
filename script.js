const bookArr = []

const library = document.querySelector(".library-box")

const heading = document.querySelector(".box-heading")

const msg = document.querySelector(".msg")

const deleteButton = document.querySelector(".library-functions .delete")

deleteButton.style.display = "none"



console.log(library.innerHTML)
if (library.innerHTML == `<div class="msg">no books added!</div>`) {
    console.log("hkj")

    heading.style.display = "none"
    msg.style.display = "flex"
}

const bookDisplay = () => {
    for (let i = 0; i < bookArr.length; i++) {


        library.innerHTML += `
        <div class="box">
            <div class="title">${bookArr[i].title}</div>
            <div class="author">${bookArr[i].author}</div>
            <div class="pages-with-logo">
                <div class="pages">${bookArr[i].read}</div>
                <div class="icon"><img class="img" src="./assets/add_page_icon.svg" alt=""></div>
            </div>
            <div class="status">${bookArr[i].status}</div>
        </div>`
    }
}

// bookDisplay()

const resetBookDisplay = () => {

}





let bookCount = 2

function Book(title, author, read, pages, status) {
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



const front = document.querySelector(".main-container")
const back = document.querySelector(".popup")

const addButton = document.querySelector(".add")





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
    bookStatusInput.value = "Starting"
}

const showBack = () => {
    front.style.display = "none"
    back.style.display = "flex"
}

const showFront = () => {
    front.style.display = null
    back.style.display = "none"
}


addButton.addEventListener("click", () => {
    showBack()
})

submitButton.addEventListener("click", () => {
    bookTitle = bookTitleInput.value
    bookAuthor = bookAuthorInput.value
    bookPagesRead = bookPagesReadInput.value
    bookTotalPages = bookTotalPagesInput.value
    bookStatus = bookStatusInput.value
    // console.log(bookTitle)

    if (bookTitle && bookAuthor && bookPagesRead && bookTotalPages && bookStatus) {

        bookCount++

        book = new Book(bookTitle, bookAuthor, bookPagesRead, bookTotalPages, bookStatus)
        console.log(book.info())

        bookArr.push(book)

        console.log(bookArr)

        clearContent();

        deleteButton.style.display = "flex"


        showFront()

        heading.style.display = "flex"
        msg.style.display = "none"


        bookDisplay()


    }

    else {
        alert("nothing should be empty")
    }
})



// const bookDisplay = () => {
//     for (let i = 0; i < bookArr.length; i++) {


//         library.innerHTML += `
//         <div class="box">
//             <div class="title">${bookArr[i].title}</div>
//             <div class="author">${bookArr[i].author}</div>
//             <div class="pages-with-logo">
//                 <div class="pages">${bookArr[i].read}</div>
//                 <div class="icon"><img class="img" src="./assets/add_page_icon.svg" alt=""></div>
//             </div>
//             <div class="status">${bookArr[i].status}</div>
//         </div>`
//     }
// }
