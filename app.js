// Book List Application:
// Refference:
// For keyCode and Details about keys : keycode.info
// All Creadit goes to Twincle Cats (HM Nayem Vai)


// For Showing Current Date & Time on Display
const demo = document.querySelector('.demo');
demo.innerHTML= new Date()

// Main Projects : Book List Application : QuerySelectors
const ul = document.querySelector('.checkList');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('#input');

// Events:
inputField.addEventListener('keypress', (e) => {
	if(e.keyCode === 13) { 
		let value = e.target.value;
		e.target.value = '';
		if(value === '' ) {
			console.log('Do nothing for now');
		} else {
			newBookList(ul, value)
		}
	}
});
// Add Button Event:
addBtn.addEventListener('click', (e) => {
	var value = inputField.value; // Data of Input Field
	inputField.value = '';
	if(value === '' ) {
		console.log('Do nothing for now');
	} else {
		newBookList(ul, value)
	}
});


// BookList Creator Function
function newBookList(ul,value) {
	let li = document.createElement('li');
	li.className = 'list-group-item d-flex text-left';

	// create 'a' inside of each 'li':
	let link = document.createElement('a');
	link.setAttribute('href','#');
	link.className = 'checkName'; 
	link.innerHTML = value; 
	

	// create delete icon/button inside of each 'li':
	let deleteBtn = document.createElement('span');
	deleteBtn.className = 'delete ml-auto'
	deleteBtn.innerText = 'Delete'
	// Event for Delete Button:
	deleteBtn.addEventListener('click', (e) => {
		ul.removeChild(li)
	});

	// Push Method for DOM:
	li.appendChild(link);
	li.appendChild(deleteBtn);
	ul.appendChild(li)
}


// Book Search Filter:
let bookSearchInput = document.querySelector('#bookSearch');
let bookSearchBtn = document.querySelector('#bookSearchBtn');


// Book Search Field Event:
bookSearchInput.addEventListener('keyup', (e) => {
	const value = e.target.value.toLowerCase();

	const item = document.querySelector('.checkName')

	Array.from(item).forEach(function(event) {
		const title = event.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(value) != -1 ) {
			event.style.display = 'block'
		} else {
			event.style.display = 'none'
		}
	})




});



// Book Search Button Event:
bookSearchBtn.addEventListener('click', (e) => {
	// Code goes here
});