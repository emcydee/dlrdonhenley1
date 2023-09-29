<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $field_name = $_POST['name'];
    $field_email = $_POST['email'];
    $field_subject = $_POST['subject'];
    $field_message = $_POST['message'];

    // Sanitize and validate input
    $field_name = filter_var($field_name, FILTER_SANITIZE_STRING);
    $field_email = filter_var($field_email, FILTER_SANITIZE_EMAIL);
    $field_subject = filter_var($field_subject, FILTER_SANITIZE_STRING);
    $field_message = filter_var($field_message, FILTER_SANITIZE_STRING);

    // Check for required fields
    if (empty($field_name) || empty($field_email) || empty($field_subject) || empty($field_message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    $mail_to = 'dolordonheley@gmail.com'; // Replace with your email address
    $subject = 'Message from a site visitor: ' . $field_subject;

    $body_message = 'From: ' . $field_name . "\n";
    $body_message .= 'E-mail: ' . $field_email . "\n";
    $body_message .= 'Subject: ' . $field_subject . "\n";
    $body_message .= 'Message: ' . $field_message;

    $headers = 'From: ' . $field_email . "\r\n";
    $headers .= 'Reply-To: ' . $field_email . "\r\n";

    // Attempt to send the email
    if (mail($mail_to, $subject, $body_message, $headers)) {
        echo "Thank you for the message. We will contact you shortly.";
    } else {
        echo "Message failed to send. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
