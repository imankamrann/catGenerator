// cat.js

function getCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            // Update the src attribute of the img tag with the new cat image URL
            document.getElementById('catImage').src = data[0].url;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}

// Optionally, load a cat image when the page loads
window.onload = getCatImage;
