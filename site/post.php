<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data using $_POST superglobal
    $name = $_POST["user_name"]; // Update "name" to "user_name"
    $email = $_POST["user_email"]; // Update "email" to "user_email"
    
    // Do something with the data (e.g., store it in a database, display it, etc.)
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
} else {
    // If form is not submitted, display an error message or redirect the user
    echo "Form not submitted.";
}
?>
