let myLibrary = [];


function Book(title, author, pages, read) {

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {

        // both lines of code below works
        //console.log(title + ", " + author + ", " +pages + ", " + read)
        console.log(this.title, this.author, this.pages, this.read);
       
    }

};

function display(){
    let display = document.querySelector('#book-display');
    for(let i = 0; i < myLibrary.length; i++){
        

        let newBook = myLibrary[i];
        //create new div each time a new book is added and display it on the page
        let bookDisplay = document.createElement('div');
        bookDisplay.innerHTML = `<p>${newBook.title}</p>`;
        // add the new book onto the library page
        display.appendChild(bookDisplay);
        //test in the console 
        console.log(myLibrary[i]);
    
    }
}

function addNewBook() {

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    

    let book = new Book(title, author, pages,read);
    myLibrary.push(book);
    display();

};

let start = document.querySelector('#btn');
start.addEventListener('click', () => {
    
})

let addBook = document.querySelector('#add-book')
addBook.addEventListener('click', () => {
    addNewBook();

    
})

