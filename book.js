const SearchBook = () => {
    // get input text
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    
    // Load Data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => setBook(data))
}
// Display books
 const setBook = data => {
    // console.log(data.numFound)
    const books = data.docs;
    console.log(books)
    const divRow = document.getElementById('book-box');
    const counter = document.getElementById('book-counter');
    const error = document.getElementById('error-message');
    counter.innerText = `Showing ${books.length} Of ${data.numFound} Result`;
    if(data.numFound === 0){
        error.innerHTML = `<h3 class="text-center">Search result not found</h3>`
    }
    else{
        error.innerText = ''
    }
    while (divRow.lastElementChild) {
        divRow.removeChild(divRow.lastElementChild);
      }
    books.forEach(book => {
        // console.log(book)
        const bookBox = document.createElement('div');
        bookBox.classList.add('col-md-3');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        console.log(imgUrl);
        bookBox.innerHTML = `
            <img class ="img-fluid" src="${imgUrl}" alt="">
            <div class="shadow rounded p-3 m-2">
            <h3>${book.title}</h3>
            <p>Author: ${book.author_name}</p>
            <p>First Publish: ${book.first_publish_year}</p>
            </div>
        ` 
        divRow.appendChild(bookBox);
    });
 }