// Listen for Submit button click
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName, siteUrl)){
        return false;
    }

    // Create bookmark object
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    // Test if bookmarks array is null
    // Create array, then add first bookmark to it
    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);

        // Set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-Set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }    

    // Clear form
    document.getElementById('myForm').reset();

    // Re-Fetch bookmarks
    fetchBookmarks();

    // Prevent form from submitting
    e.preventDefault();
}

// Fetch Bookmarks
function fetchBookmarks(){
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get output ID
    var bookmarksResults = document.getElementById('bookmarks-results');

    // Build output
    bookmarksResults.innerHTML = '';

    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="card bg-light text-dark card-body">' +
                '<h3>' + name + 
                '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' + 
                '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' + 
                '</h3>' +
            '</div>';

    }
}

// Delete Bookmarks
function deleteBookmark(url){
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through bookmarks
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }

    // Re-Set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-Fetch bookmarks
    fetchBookmarks();
}

// Validate Form
function validateForm(siteName, siteUrl){
    // Validate inputs exist
    if(!siteName || !siteUrl){
        alert("Please fill in the form.");
        return false;
    }

    // Validate siteUrl starts with 'http'
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

/*
// Local Storage Test
// Only stores strings, but can store JSON
// key-value pair
// can check in browser dev tools under "Storage"

localStorage.setItem('test', 'Hello World');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
*/