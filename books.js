const book_result = document.querySelector('.result')
const add_book_button = document.querySelector('.add-book-button')
const book_form = document.querySelector('.add-book-container')
const exit_book_form = document.querySelector('.exit-book')
const submit_button = document.querySelector('.button-submit')
const full_form = document.querySelector('.full-form')
let form_open = false;
let counter = 0;
"use strict";



// Event listeners for all of our buttons
add_book_button.addEventListener('click', (e)=>{
    console.log('Button clicked.')
    open_form_or_close_form()
})

exit_book_form.addEventListener('click', (e)=>{
    console.log('Exit button clicked')
    open_form_or_close_form()
})

submit_button.addEventListener('click', (e)=>{
    console.log('Submit Button clicked')
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let user_readit = document.getElementById('readit')
    let user_readit_value = (user_readit.options[user_readit.selectedIndex].value);
    let added_book = create_book(title,author,pages, user_readit_value);
    create_book_html(added_book)
    open_form_or_close_form()
})




// Function to know if the form is open or closed.
function open_form_or_close_form(){
    if (form_open === false){
        document.getElementById("add-book-box").style.transform = "scale(1)"
        form_open = true
    } else{
        document.getElementById("add-book-box").style.transform = "scale(0)"
        form_open = false
    }
}


//Constructor to actually create a book
function Book(title, author, num_of_pages, user_readit_value){
    this.title = title;
    this.author = author;
    this.num_of_pages = num_of_pages;
    this.read_it = user_readit_value;
}


//A function to register a new book object being created and add it to the myLibrary array.
function create_book(title,author,num_of_pages, user_readit_value){
    let new_book = new Book(title,author,num_of_pages, user_readit_value)
    if (!(new_book instanceof Book)){
        throw Error('Error: Incorrect invocation');
    }
    counter++;
    
    return new_book
}


// Create the html for the book and append it to the result container.
function create_book_html(new_book){

    let user_new_book = new_book
    let childNode_title = document.createElement('p');
    let childNode_author = document.createElement('p');
    let childNode_num_of_pages = document.createElement('p');
    let childNode_read_it = document.createElement('p');
    let result_container = document.createElement('div');
    let button_container = document.createElement('div');
    let delete_button = document.createElement('button');
    let update_button = document.createElement('button');


    delete_button.className = "delete-book";
    delete_button.textContent = "Delete";
    delete_button.addEventListener("click", (e) =>{
        let removed_child = result_container
        book_result.removeChild(removed_child)
    })

    update_button.addEventListener("click", (e) => {
        let removed_child = result_container
        let user_read_change = removed_child.lastChild;
        let user_read_final = user_read_change.previousSibling;
        if (user_read_final.textContent === "User read it? Yes"){
            user_read_final.textContent = "User read it? No"
    
        } else{
            user_read_final.textContent = "User read it? Yes";
        }
    });

    update_button.className = "update-book"
    update_button.textContent = "Update"

    button_container.className = "button-container";
    button_container.appendChild(delete_button);
    button_container.appendChild(update_button);

    result_container.className = "result-container";
    result_container.setAttribute("id", `Book-${counter}`)

    childNode_read_it.className = "userread"

    childNode_title.textContent = (`Title: ${user_new_book.title}`)
    childNode_author.textContent = (`Author: ${user_new_book.author}`)
    childNode_num_of_pages.textContent = (`Pages: ${user_new_book.num_of_pages}`)
    childNode_read_it.textContent = (`User read it? ${user_new_book.read_it}`)

    result_container.appendChild(childNode_title)
    result_container.appendChild(childNode_author)
    result_container.appendChild(childNode_num_of_pages)
    result_container.appendChild(childNode_read_it)
    result_container.appendChild(button_container)
    book_result.appendChild(result_container)
    console.log(book_result)
  
}



// Book.prototype.user_read_it = function(){
//     read_it = true;
//     return 'User has read the book!'
// }

// Book.prototype.book_info = function(){
//     return(`${title} by ${author}, ${num_of_pages}. Book read? ${read_it}`)
// }

// Book.prototype.check_if_instance = function(){
//     if (this instanceof Book){
//         return true
//     } else {
//         return false;
//     }
// }










