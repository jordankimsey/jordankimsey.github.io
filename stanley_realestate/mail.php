<?php
if(isset( $_POST['firstName']))
$firstName = $_POST['firstName'];
if(isset( $_POST['lastName']))
$lastName = $_POST['lastName'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$content="From: $firstName \n Email: $email \n Message: $message";
$recipient = "jordankimsey@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>