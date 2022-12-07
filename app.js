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
    myBooks.setAttribute('style', 'border: 1px solid black; margin-bottom: 5px; background-color: rgb(0, 0, 0, .2);')

    let myTitle = document.createElement('li')
    myTitle.setAttribute('style', 'margin: 0px;')
    myTitle.textContent = myLibrary.at(-1).title
    myBooks.appendChild(myTitle)

    let myAuthor = document.createElement('li')
    myAuthor.setAttribute('style', 'margin: 0px;')
    myAuthor.textContent = myLibrary.at(-1).author
    myBooks.appendChild(myAuthor)

    let myPages = document.createElement('li')
    myPages.setAttribute('style', 'margin: 0px;')
    myPages.textContent = myLibrary.at(-1).bookLength
    myBooks.appendChild(myPages)


    bookList.appendChild(myBooks)
};