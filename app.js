let myLibrary = [];

const addBookBtn = document.querySelector('#addBookBtn')
const addBook = document.querySelector('#addBookBtn')
const libraryShelf = document.querySelector('#bookShelf')
const deleteBtn = document.querySelector('deleteBtn')


function createBook() {
    this.title = document.querySelector('#bookTitle').value;
    this.author = document.querySelector('#bookAuthor').value;
    this.pages = document.querySelector('#bookPages').value;
    this.read = document.querySelector('#readBtn').checked
};

addBookBtn.addEventListener('click', () => {
    let book = new createBook()
    myLibrary.push(book)
    libraryShelf.textContent = ''
    renderBooks()
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPages').value = '';
    document.querySelector('#readBtn').checked = false
})

function toggleRead(book) {
    if (book.read == true) {
        book.read = false;
    } else {
        book.read = true;
    }
    libraryShelf.textContent = ''
    renderBooks()
}

function deleteBook(index) {
    myLibrary.splice(index,1)
    libraryShelf.textContent = ''
    renderBooks()
}

function createBookElements(el, content, className) {
    const element = document.createElement(el);
    element.setAttribute('class', className)
    element.textContent = content
    return element;
}

function createNewBook(book, index) {
    let newBook = document.createElement('div');
    newBook.setAttribute('class', 'book');
    newBook.setAttribute('id', index);
    newBook.appendChild(createBookElements('h5', `Title: ${book.title}`, 'bookTitle'))
    newBook.appendChild(createBookElements('h5', `Author: ${book.author}`, 'bookAuthor'))
    newBook.appendChild(createBookElements('h5', `Pages: ${book.pages}`, 'bookPages'))
    let deleteBtn = newBook.appendChild(createBookElements('button', 'x', 'deleteBtn'))
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        deleteBook(index)
    })
    if (book.read == true) {
        let readBtn = newBook.appendChild(createBookElements('button', 'read', 'complete'))
        readBtn.addEventListener('click', (e) => {
            e.preventDefault()
            toggleRead(book, index)
        })
    } else {
        let readBtn = newBook.appendChild(createBookElements('button', 'read', 'notComplete'))
        readBtn.addEventListener('click', (e) => {
        e.preventDefault()
        toggleRead(book, index)
        })
    }
    libraryShelf.appendChild(newBook)
}

function renderBooks() {
    myLibrary.map(function (book,index) {
        createNewBook(book,index)
    });
}

renderBooks();