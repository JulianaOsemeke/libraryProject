const myLibrary = [{
  title: "Ruby",
  author: "Microverse",
  pages: 100,
  status: true
},  {
  title: "Javascript",
  author: "Odin",
  pages: 150,
  status: false

}]

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addNewBook() {
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);

  });
}




