const SearchBook = () => {
    // get input text
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    // Load Data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}