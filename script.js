// Function to update user information (name and tokens)
function updateUserInformation(userName, userTokens) {
    // Update the user's name on the page
    document.getElementById("user-name").textContent = userName;

    // Update the token balance on the page
    document.getElementById("token-balance").textContent = userTokens;
}

// Check if user information is stored in localStorage
const storedName = localStorage.getItem("userName");
const storedTokens = localStorage.getItem("userTokens");

// If stored, update the page with the user's information
if (storedName !== null && storedTokens !== null) {
    updateUserInformation(storedName, storedTokens);
}

// Function to generate tokens
function generateTokens() {
    var generatedTokens = 100; // Replace with your token generation logic

    // Retrieve the current token balance from localStorage
    var currentTokens = parseInt(localStorage.getItem("userTokens")) || 0;

    // Update the token balance
    var updatedTokens = currentTokens + generatedTokens;

    // Store the updated token balance in localStorage
    localStorage.setItem("userTokens", updatedTokens);

    // Update the page with the new token balance
    updateUserInformation(storedName, updatedTokens);
}
// Define an array of image URLs
const backgroundImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
];

let currentImageIndex = 0; // Index of the currently displayed image

// Function to change the background image
function changeBackgroundImage() {
    // Update the background image URL
    const imageUrl = 'C:\Users\ACER\Desktop\wasteToken\background-container(' + backgroundImages[currentImageIndex] + ')';
    document.getElementById('background-container').style.backgroundImage = imageUrl;

    // Increment the image index or loop back to the first image
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);

// Initial background image setup (on page load)
changeBackgroundImage();
