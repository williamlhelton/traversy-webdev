//
// Chain Breaking Animation
//

// Run function
breakChain();

// Animate every two seconds
setInterval(breakChain, 2000);

// Animate icon to break chain
function breakChain(){
    // Get div id
    let chain = document.getElementById('chain');

    // Every icon has a Unicode
    // Set to unbroken chain icon
    chain.innerHTML = "&#xf0c1";

    // Change to broken chain icon after one second
    setTimeout(function(){
        chain.innerHTML = "&#xf127";
    }, 1000);
}

//
// Battery Charge Animation
//

// Run function
chargeBattery();

// Animate every five seconds
setInterval(chargeBattery, 5000);

// Animate battery to charge
function chargeBattery(){
    // Get div id
    let battery = document.getElementById('battery');

    // Set to empty battery icon
    battery.innerHTML = "&#xf244";

    // Change to charging battery icon
    setTimeout(function(){
        battery.innerHTML = "&#xf243";
    }, 1000);
    setTimeout(function(){
        battery.innerHTML = "&#xf242";
    }, 2000);
    setTimeout(function(){
        battery.innerHTML = "&#xf241";
    }, 3000);
    setTimeout(function(){
        battery.innerHTML = "&#xf240";
    }, 4000);
}

//
// Hourglass Animation
//

// Run function
hourglassTip();

// Animate every three seconds
setInterval(hourglassTip, 3000);

// Animate hourglass to tip
function hourglassTip(){
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251";

    setTimeout(function(){
        hourglass.innerHTML = "&#xf252";
    }, 1000);
    setTimeout(function(){
        hourglass.innerHTML = "&#xf253";
    }, 2000);
}