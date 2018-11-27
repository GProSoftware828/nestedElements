let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
//Get children element nodes
val = list.children[0];
list.children[1].textContent = 'Hello';

val = list.firstChild;
val = list.firstElementChild; //Also parents and siblings, next, prev.

console.log(val);

// 1 - Element node .children only do Element nodes
// 2 - Attribute (depreciated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Create Element:

const li = document.createElement('li');

//Add class
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

//Put something inside something-
li.appendChild(document.createTextNode('Hello World'));

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

//Add inner HTML link:
const link = document.createElement('a');
//Add classes:
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append link into li
li.appendChild(link);

//REPLACE ELEMENTS:
//Create element-
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));
//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace with JS method replace and the child of cardAction
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//Remove method:

const list = document.querySelectorAll('li');

list[0].remove();

const firstLi = document.querySelector('li-first-child');