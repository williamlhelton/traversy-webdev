// Slideshow #0
// Variables for slideshow
var i = 0;
var images = [];
var time = 3000;
var runSlide;

// Variables for box selectors
var boxID = document.getElementById("slideshow-buttons");
var boxes = boxID.getElementsByTagName("li");

// Image List
images[0] = 'img/img0.jpg';
images[1] = 'img/img1.jpg';
images[2] = 'img/img2.jpg';
images[3] = 'img/img3.jpg';

// Change Image
function changeImg(){
    blueCurrentBox();

    // Change Image Content
    document.slides0.src = images[i];

    // Start Main Loop
    runSlide = setTimeout(function(){
        slideLoop();
    }, time);
}

// Main Loop On Timer
function slideLoop(){
    grayCurrentBox();

    increaseI();

    changeImg();
}

// Force a Hard Trigger to Change Image
function hardTrigger(newI){
    grayCurrentBox();

    i = newI;
    clearTimeout(runSlide);
    changeImg();
}

// Increase and Decrease i
function increaseI(){
    if(i == images.length - 1){
        i = 0;
    } else {
        i++;
    }
}

function decreaseI(){
    if(i == 0){
        i = images.length - 1;
    } else {
        i--;
    }
}

// Behavior For Side Arrow Buttons
function leftArrow(){
    grayCurrentBox();
    decreaseI();
    hardTrigger(i);
}

function rightArrow(){
    grayCurrentBox();
    increaseI();
    hardTrigger(i);
}

// Change Selector Box Colors
function grayCurrentBox(){
    boxes[i].style.backgroundColor = "#ccc";
}

function blueCurrentBox(){
    boxes[i].style.backgroundColor = "#00f";
}

// Call Slideshow on Window Load
window.onload = changeImg;