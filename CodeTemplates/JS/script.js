function fadeOutElements() {
    // Get elements by their IDs
    var element = document.getElementById('all');
    var button = document.getElementById('button');
    var fadeIn = document.getElementById('fade-in');
    // Apply the fade-out effect by changing opacity
    element.style.opacity = '0';
    button.style.top = '220px';
    fadeIn.style.opacity = '100';
}