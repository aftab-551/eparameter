<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    require 'vendor/autoload.php';

    $mail = new PHPMailer();

    //smtp settings
    try{
        $mail->SMTPDebug = 2;                                       
        $mail->isSMTP();                                            
        $mail->Host       = '	smtp.eparameter.com';                    
        $mail->SMTPAuth   = true;                             
        $mail->Username   = 'info@eparameter.com';                 
        $mail->Password   = 'Testing@123';                        
        $mail->SMTPSecure = 'ssl';                              
        $mail->Port       = 465;

        //email settings
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->addAddress("info@eparameter.com");
        $mail->Subject = ("$email ($subject)");
        $mail->Body = $message;

        $mail->send();
        echo "Mail has been sent successfully!";

    }
    catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

?>
      