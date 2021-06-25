function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const store = []

function getBooks() { 
  const raw = window.localStorage.getItem('storedBooks');
  
  if (raw) return JSON.parse(raw)
  return []
  
}  
function saveToLocalStorage() { window.localStorage.setItem('storedBooks', JSON.stringify(storedBooks)); } 
const storedBooks = getBooks();

function displayBooks() {
  storedBooks.forEach((book)=>addBookToList(book));
}
function addBookToLibrary(book) {
  storedBooks.push(book)
  saveToLocalStorage()
  addBookToList(book)
}
