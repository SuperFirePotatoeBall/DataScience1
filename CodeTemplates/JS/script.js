function button(){
    var button = document.createElement("button");
    button.innerHTML = "Dynamic Button";
    button.id = "dynamicButton";

    button.addEventListener("click", function() {
        transition();
    });
    document.body.appendChild(button);
}
function transition(){
    document.getElementById('fadeButton').addEventListener('click', function() {
    var elementToFade = document.getElementById('elementToFade');
    
    // Toggle the opacity property to trigger the fade effect
    if (elementToFade.style.opacity === '1') {
        elementToFade.style.opacity = '0';
    } else {
        elementToFade.style.opacity = '1';
    }
});  
}