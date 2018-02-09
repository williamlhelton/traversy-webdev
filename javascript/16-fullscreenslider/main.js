// Variable declaration
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

// Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Init Slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// Show previous
function slideLeft(){
    reset();
    if(current == 0){
        current = sliderImages.length;
    }
    current--;
    sliderImages[current].style.display = 'block';
    //current--;
}

// Show next
function slideRight(){
    reset();
    if(current == sliderImages.length-1){
        current = -1;
    }
    current++;
    sliderImages[current].style.display = 'block';
    
}

// Left arrow event
arrowLeft.addEventListener('click', slideLeft);

// Right arrow event
arrowRight.addEventListener('click', slideRight);

// Start Slide
startSlide();