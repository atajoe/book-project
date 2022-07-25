const book_result = document.querySelector('.result')
const add_book_button = document.querySelector('.add-book-button')
const book_form = document.querySelector('.add-book-container')
const exit_book_form = document.querySelector('.exit-book')
const submit_button = document.querySelector('.submit')
const full_form = document.querySelector('.full-form')

full_form.addEventListener('submit', (e)=>{
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let user_readit = document.getElementById('readit').value
    add_book_to_library(title,author,pages)
    console.log(`The title is: ${title} by ${author}. Pages: ${pages}. User read it: ${user_readit}`);
    console.log('Form submitted')
})

console.log(submit_button)

add_book_button.addEventListener('click', (e)=>{
    console.log('Button clicked.')
    formOpenClose()
})

exit_book_form.addEventListener('click', (e)=>{
    console.log('Exit button clicked')
    closeform()
})


submit_button.addEventListener('submit', (e)=>{
    console.log('Submit Button clicked')
    closeform()
})

function formOpenClose(){
    if (document.getElementById("add-book-box").style.transform = "scale(0)"){
        document.getElementById("add-book-box").style.transform = "scale(1)"
    } else if (document.getElementById("add-book-box").style.transform = "scale(1)"){
        document.getElementById("add-book-box").style.transform = "scale(0)"
    }
}

function closeform(){
    let scaled_box = document.getElementById("add-book-box").style.transform = "scale(1)"
    scaled_box = true ? document.getElementById("add-book-box").style.transform = "scale(0)" : console.log('It is not scaled!')
}



// List of book objects 
let myLibrary = [];


//Constructor to actually create a book
function Book(title, author, num_of_pages){
    this.title = title;
    this.author = author;
    this.num_of_pages = num_of_pages;
    this.read_it = false;
}



Book.prototype.user_read_it = function(){
    this.read_it = true;
    return 'User has read the book!'
}

Book.prototype.book_info = function(){
    return(`${this.title} by ${this.author}, ${this.num_of_pages}. Book read? ${this.read_it}`)
}

Book.prototype.check_if_instance = function(){
    if (this instanceof Book){
        return true
    } else {
        return false;
    }
}


//A function to register a new book object being created and add it to the myLibrary array.
function add_book_to_library(title,author,num_of_pages){
    let new_book = new Book(title,author,num_of_pages)
    if (!(new_book instanceof Book)){
        throw Error('Error: Incorrect invocation');
    }
    myLibrary.push(new_book)
    let childNode = document.createElement('p');
    for (let i = 0; i < myLibrary.length; i++){
        childNode.textContent = JSON.stringify(myLibrary[i])
        console.log(childNode.textContent)
        book_result.appendChild(childNode)
    }
    return 'It is the correct instance of the book object!'
}


// console.log(add_book_to_library('Harry Potter: Goblet of Fire', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_2', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))
// console.log(add_book_to_library('Harry Potter: Goblet of Fire_3', 'JK Rowling', 696))






