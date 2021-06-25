const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function getBooks() {
  const raw = window.localStorage.getItem('storedBooks');

  if (raw) return JSON.parse(raw);
  return [];
}
const storedBooks = getBooks();

function saveToLocalStorage() { window.localStorage.setItem('storedBooks', JSON.stringify(storedBooks)); }

function addBookToList(book) {
  const list = document.querySelector('#tableBody');
  const row = document.createElement('tr');
  book.read = document.getElementById('read').checked;
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td> <button class="btn btn-info" id="status"> ${book.read}</button></td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);
  row.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    row.remove();
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    saveToLocalStorage();
  });
}

function displayBooks() {
  storedBooks.forEach((book) => addBookToList(book));
}
function addBookToLibrary(book) {
  storedBooks.push(book);
  saveToLocalStorage();
  addBookToList(book);
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').checked = false;
}
displayBooks();

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  const book = new Book(title, author, pages, read);

  addBookToLibrary(book);
  clearFields();
});
