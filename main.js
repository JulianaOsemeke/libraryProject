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
function addBookToList(book){
  const list = document.querySelector('#tableBody');
  const row = document.createElement('tr');
  book.read = document.getElementById('read').checked;
  row.innerHTML= `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td> <button class="btn btn-info" id="status"> ${book.read}</button></td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;
  list.appendChild(row);
}