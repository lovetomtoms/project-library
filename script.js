let myLibrary = [];
// let empty = false;
const container = document.querySelector('.container');
const inputs = document.querySelectorAll('input');
const addNewBook = document.querySelector('.new-book');
const addBook = document.querySelector('.add');
const form = document.querySelector('.form-container');
const overlay = document.querySelector('.overlay');

// Another DOM cachefor inputs
const formInput = document.querySelector('form')
const inputTitle = document.querySelector('input:nth-of-type(1)')
const inputAuthor = document.querySelector('input:nth-of-type(2)')
const inputPages = document.querySelector('input:nth-of-type(3)')

// Another addEventListener for inputs
inputTitle.addEventListener('input', () => {
    inputTitle.setCustomValidity('')
})
inputTitle.addEventListener('invalid', () => {
    inputTitle.setCustomValidity('Please enter the title of the book')
})

inputAuthor.addEventListener('input', () => {
    inputAuthor.setCustomValidity('')
})
inputAuthor.addEventListener('invalid', () => {
    inputAuthor.setCustomValidity('Please enter the author of the book')
})

inputPages.addEventListener('input', () => {
    inputPages.setCustomValidity('')
})
inputPages.addEventListener('invalid', () => {
    inputPages.setCustomValidity('Please enter the number of pages of the book')
})

addNewBook.addEventListener('click', displayForm);
addBook.addEventListener('click', addBookToLibrary);

// function Book(title, author, pages) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = false
// }

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = false
    }
}

function displayForm() {
    form.style.display = 'block';
    overlay.style.display = 'block';
}

// function areInputsEmpty() {
//     inputs.forEach(input => {
//         if(input.value === '') {
//             empty = true;
//             return;
//         } else {
//             empty = false;
//         }
//     });
// }

function displayBook() {
    const bookContainers = container.children;
    // console.log(bookContainers[9]);
    for(let i = 0; i < myLibrary.length; i++) {
        if(bookContainers[i] === undefined) {
            const bookContainer = document.createElement('div');
            const book = document.createElement('div');
            const remove = document.createElement('button');
            const read = document.createElement('input');
            const labelRead = document.createElement('label');
            
            book.classList.add('book');
            book.innerText = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${myLibrary[i].read ? 'already read' : 'not read yet'}`;
            
            remove.classList.add('remove');
            remove.innerText = '\u274c';
            remove.addEventListener('click', removeBook);

            bookContainer.classList.add('book-container');
            bookContainer.setAttribute('data-index', i);

            read.setAttribute('type', 'checkbox');
            read.addEventListener('change', isChecked);
            labelRead.innerText = 'Already read';

            container.appendChild(bookContainer);

            bookContainer.appendChild(remove);
            bookContainer.appendChild(book);
            bookContainer.appendChild(read);
            bookContainer.appendChild(labelRead);
        } else {
            bookContainers[i].setAttribute('data-index', i);
        }
    }
}

function isChecked() {
        const x = this.parentElement.getAttribute('data-index');
        myLibrary[x].read = true;
}

function removeBook(e){
    const target = e.target;
    const index = target.parentElement.getAttribute('data-index');

    myLibrary.splice(index, 1);

    // console.log(index);

    target.parentElement.remove();

    displayBook();
}

function addBookToLibrary() {
    // areInputsEmpty();
    const inputsHaveValue = Array.from(inputs).every(input => input.value !== '')
    console.log(inputsHaveValue)
    if(!inputsHaveValue) return
    const x = inputTitle.value;
    const y = inputAuthor.value;
    const z = inputPages.value;
    myLibrary.push(new Book(x, y, z));
    form.style.display = 'none';
    overlay.style.display = 'none';
    displayBook();
    // if(inputsHaveValue) {
    inputs.forEach(input => input.value = '');
    // }
    // inputs.forEach(input => input.value = '');
}

// const addBook = document.querySelector('.add');
// addBook.addEventListener('click', addBookToLibrary);

// myLibraryArraySample = [

//     {
//         title: 'Fairy Tale',
//         author: 'Stephen King',
//         pages: 608,
//         read: false
//     },
    
//     {
//         title: 'Desperation in Death',
//         author: 'J.D. Robb',
//         pages: 368,
//         read: false
//     },

//     {
//         title: 'Verity',
//         author: 'Colleen Hoover',
//         pages: 331,
//         read: false
//     },

//     {
//         title: 'It Ends with Us',
//         author: 'Colleen Hoover',
//         pages: 381,
//         read: false
//     },

//     {
//         title: 'Where the Crawdads Sing',
//         author: 'Delia Owens',
//         pages: 384,
//         read: false
//     },

//     {
//         title: 'A Court of Silver Flames',
//         author: 'Sarah J. Maas',
//         pages: 76812,
//         read: false
//     },

//     {
//         title: 'Ugly Love',
//         author: 'Colleen Hoover',
//         pages: 333,
//         read: false
//     },

//     {
//         title: 'The Seven Husbands of Evelyn Hugo',
//         author: 'Taylor Jenkins Reid',
//         pages: 400,
//         read: false
//     },

//     {
//         title: 'Novemer 9',
//         author: 'Colleen Hoover',
//         pages: 314,
//         read: false
//     },

//     {
//         title: 'The American Roommate Experiment',
//         author: 'Elena Armas',
//         pages: 400,
//         read: false
//     }

// ];

// const container = document.querySelector('.container');

// for(let i = 0; i < myLibraryArraySample.length; i++){
//     const bookContainer = document.createElement('div');
//     const book = document.createElement('div');
//     const remove = document.createElement('button');

//     book.classList.add('book');
//     book.innerText = `${myLibraryArraySample[i].title} by ${myLibraryArraySample[i].author}, ${myLibraryArraySample[i].pages} pages, ${myLibraryArraySample[i].read ? 'already read' : 'not read yet'}`;

//     remove.classList.add('remove');
//     remove.innerText = '\u274c';
//     remove.addEventListener('click', removeBook);

//     bookContainer.classList.add('book-container');
//     bookContainer.setAttribute('data-index', i);

//     container.appendChild(bookContainer);

//     bookContainer.appendChild(remove);
//     bookContainer.appendChild(book);
// }

// function removeBook(e){
//     const target = e.target;
//     const index = target.parentElement.getAttribute('data-index');

//     myLibraryArraySample.splice(index, 1);

//     target.parentElement.remove();
// }