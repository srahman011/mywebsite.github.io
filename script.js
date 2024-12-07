// Welcoming message function
window.onload = function() {
    var welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        welcomeMessage.innerHTML = "<h3>Welcome to my personal website! I'm glad you're here!</h3>";
    }
}

// Custom JS function that asks for user's name
function askName() {
    var name = prompt("What is your name?");
    if (name != null && name != "") {
        document.getElementById("userName").innerHTML = "Hello, " + name + "!";
    } else {
        document.getElementById("userName").innerHTML = "Hello, stranger!";
    }
}
