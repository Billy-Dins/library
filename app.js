let myLibrary = [];

let bookList = document.querySelector('#bookListContent')

function Book() {
    this.title = document.querySelector('#bookTitle').value;
    this.author = document.querySelector('#bookAuthor').value;
    this.bookLength = document.querySelector('#bookPages').value;
};

let addBook = document.getElementById('addBook');
addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault()
    let books = new Book()
    myLibrary.push(books)

    let myBooks = document.createElement('div')
    myBooks.setAttribute('id', 'myBooks')

    let myTitle = document.createElement('li')
    myTitle.setAttribute('id', 'bookTitle')
    myTitle.textContent = myLibrary.at(-1).title
    myBooks.appendChild(myTitle)

    let myAuthor = document.createElement('li')
    myAuthor.setAttribute('id', 'bookAuthor')
    myAuthor.textContent = myLibrary.at(-1).author
    myBooks.appendChild(myAuthor)

    let myPages = document.createElement('li')
    myPages.setAttribute('id', 'bookLength')
    myPages.textContent = myLibrary.at(-1).bookLength
    myBooks.appendChild(myPages)

    let deleteBook = document.createElement('button')
    deleteBook.setAttribute('id', 'deleteBtn')
    deleteBook.setAttribute('onclick', 'deleteThisBook(event)')
    deleteBook.textContent = 'delete'
    myBooks.appendChild(deleteBook)

    let toggleRead = document.createElement('button');
    toggleRead.setAttribute('id', 'readBtn');
    toggleRead.setAttribute('onclick', 'toggleReadEvent(event)')
    toggleRead.textContent = 'complete'
    myBooks.appendChild(toggleRead)

    bookList.appendChild(myBooks)
};

function deleteThisBook(event) {
    event.preventDefault()
    console.log('hello world')
}

function toggleReadEvent(event) {
    event.preventDefault();
}