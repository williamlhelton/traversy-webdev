//
// EXAMINE DOCUMENT OBJECT
//

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

// getElementById
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = 'solid 3px #000';

// getElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "gray";
// }

// getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "gray";
// }

// Query Selector
// // can use anything, tags, classes, ids, css ids
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// // there are two 'input's, but it grabs the first one
// var input = document.querySelector('input');
// input.value = 'Hello World';

// // get input button
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// // gets first <li> only
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// // gets last <li>
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// query selector all
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#888';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < even.length; i++){
//     even[i].style.backgroundColor = '#ddd';
// }

//
// TRAVERSING THE DOM
//

// var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ddd';
// itemList.parentNode.parentNode.style.backgroundColor = '#bbb';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#999';

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ddd';
// itemList.parentElement.parentElement.style.backgroundColor = '#bbb';
// itemList.parentElement.parentElement.parentElement.style.backgroundColor = '#999';

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild); // useless
// console.log(itemList.firstElementChild); // useful
// itemList.firstElementChild.textContent = "hello";

// lastChild & lastElementChild

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling & previousElementSibling

// createElement

// // Create a div
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'goodbye';
// newDiv.setAttribute('title', 'Hello Title');

// // For Inner HTML, create text node
// var newDivText = document.createTextNode('Hello Text Node');

// // Add text node to div
// newDiv.appendChild(newDivText);

// // Place div in site as first child in "container"
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

// console.log(newDiv);

//
// EVENTS
//

// event listeners
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = "#ccc";
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX + " " + e.clientY);
    // console.log(e.offsetX);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log("EVENT TYPE: "+e.type);
//     // console.log(e.target.value);
//     // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
// }