// Start index for slideshow
var i = 0;

// Array containing images
var images = [];

// Delay for slideshow
var time = 3000;

images[0] = "image0.png";
images[1] = 'image1.png';
images[2] = 'image2.png';
images[3] = 'image3.png';

// Change Image
function changeImage(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImage, time);
}

// Run function
window.onload=changeImage();