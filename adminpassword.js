const password = prompt("Enter Admin Password");
if(password !== "IPQuest123") {
    alert("Incorrect password!");
    window.location.href = "index.html"; // redirect to homepage
}
