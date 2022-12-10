let myLibrary = [];

const addBookBtn = document.querySelector('#addBookBtn')
const addBook = document.querySelector('#addBookBtn')
const libraryShelf = document.querySelector('#bookShelf')
const deleteBtn = document.querySelector('deleteBtn')

/* book constructor */
function createBook() {
    this.title = document.querySelector('#bookTitle').value;
    this.author = document.querySelector('#bookAuthor').value;
    this.pages = document.querySelector('#bookPages').value;
    this.read = document.querySelector('#readBtn').checked
};
/* takes current form data, compiles into an object using constructor,
then pushes to the myLibrary array before re-rendering the array
and clearing all input fields */
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
/* toggles the selected book value (read) between true & false,
clears the display then re-renders the array. */
function toggleRead(book) {
    if (book.read == true) {
        book.read = false;
    } else {
        book.read = true;
    }
    libraryShelf.textContent = ''
    renderBooks()
}
/* Takes the given index and removes that element from the
myLibrary array before re-rendering the array onto the page.  */
function deleteBook(index) {
    myLibrary.splice(index,1)
    libraryShelf.textContent = ''
    renderBooks()
}
/* Creates an element, sets its class, and assigns content that
was given or input. */
function createBookElements(el, content, className) {
    const element = document.createElement(el);
    element.setAttribute('class', className)
    element.textContent = content
    return element;
}
/* Creates a new div, then runs the createBookElements function 
to create a new book object then appends the book to the div */
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
/* Renders the myLibrary, working array onto the webpage by
creating an individual book object for every item in the array. */
function renderBooks() {
    myLibrary.map(function (book,index) {
        createNewBook(book,index)
    });
}

renderBooks();