/* Put code for the task below */
// Function to show the button when the mouse hovers over the image
function showButton() {
    var button = document.getElementById('buttonTask1');
    button.style.display = 'block';  // Make the button visible
}

// Function to hide the button when the mouse moves away from the image
function hideButton() {
    var button = document.getElementById('buttonTask1');
    button.style.display = 'none';  // Hide the button again
}

// Function to hide the image when the button is clicked
function disapT1() {
    var image = document.getElementById('imageTask1');
    image.style.display = 'none';  // Hide the image
}
