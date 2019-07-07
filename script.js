// Main Projects : Book List Application : QuerySelectors
const ul = document.querySelector('.checkList');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('#input');

// Add item:

addBtn.addEventListener('submit', addFunction);

// Add function

function addFunction(e) {
	let value = e.target.value;
	console.log(value);
	// Create li
	let li = document.createElement('li');
	li.className = 'list-group-item d-flex text-left';

	// create 'a' inside of each 'li':
	let link = document.createElement('a');
	link.setAttribute('href','#');
	link.className = 'checkName'; // Style are triggered from external css.
	link.innerHTML = value; // value = event.target.value

	// create delete icon/button inside of each 'li':
	let deleteBtn = document.createElement('span');
	// deleteBtn.setAttribute('href','#'); // if element will be anchor tag
	deleteBtn.className = 'delete ml-auto'
	deleteBtn.innerText = 'Delete'

	// Event for Delete Button:
	deleteBtn.addEventListener('click', (e) => {
		ul.removeChild(li)
	});

	li.appendChild(link);
	li.appendChild(deleteBtn);
	ul.appendChild(li)

}