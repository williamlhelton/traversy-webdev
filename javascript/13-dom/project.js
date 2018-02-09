var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);

    // Add text node to li
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append delete to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Delete item
function removeItem(e){
    // if delete button is clicked
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            // get parent element of delete, which is li
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter list
function filterItems(e){
    // convert input to lowercase
    var text = e.target.value.toLowerCase();
    
    // get all 'li's from itemList
    var items = itemList.getElementsByTagName('li');

    // convert HTML Collection to Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        
        // compare input to text
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}