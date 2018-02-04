// Hide cards until input
document.getElementById('output').style.visibility = 'hidden';

// Listen for input box change
document.getElementById('lbsInput').addEventListener('input', function(e){
    // Show conversion cards
    document.getElementById('output').style.visibility = 'visible';

    // Calculate conversions
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (lbs*16).toFixed(2);
});