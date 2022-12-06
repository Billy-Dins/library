let myLibrary = [];

let bookList = document.querySelector('#bookListContent')

function book() {
    this.title = document.querySelector('#bookTitle').value;
    this.author = document.querySelector('#bookAuthor').value;
    this.bookLength = document.querySelector('#bookPages').value;
    this.finished = document.querySelector('#finished').value
};

function addBookToLibrary() {
    let newBook = new book()
    console.log(newBook)
    myLibrary.push(newBook)
    console.log(myLibrary)
    bookList.textContent = myLibrary[0].title
}