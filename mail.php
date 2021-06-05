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

header('Content-Type: application/json');
if ($firstName === ''){
    print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
    exit();
    }
    if ($lastName === ''){
        print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
        exit();
        }
    if ($email === ''){
        print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
        exit();
    } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
        exit();
    }
    }
    if ($subject === ''){
        print json_encode(array('message' => 'Subject cannot be empty', 'code' => 0));
        exit();
    }
    if ($message === ''){
        print json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
        exit();
    }


$content="From: $firstName $lastName \n Email: $email \n Phone number: $phone \n Subject: $subject \n  Message: $message";
$recipient = "scottstanleyrealtor@gmail.com";
$mailheader = "From: $email $subject \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
echo "Email sent!";
exit();
?>