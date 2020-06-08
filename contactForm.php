<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $msg = $_POST['message'];

    $to = "samuel.manresa@gmail.com";
    $headers = "From: Samuel Portfolio - ".$email;
    $txt = "Samuel Portfolio from ".$name.".\n\n".$subject.".\n\n".$msg;

    if(mail($to, $headers, $txt, $headers)) {
        echo "<h1>Sent with Success! Thank you"." ".$name.", We will contact you shortly</h1>";
    }
    else {
        echo "Sorry, something went wrong!";
    }
}
