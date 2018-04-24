<?php

$comment = $_POST['designer__form-question']
$name = $_POST['designer__form-name'];
$phone = $_POST['designer__form-phone'];






$mail_message = '
<html>
<head>
    <title>Заказ консультации с техническим директором</title>
</head>
<body>
    <h2>Перезвоните мне!</h2>
    <ul>
        <li>Имя: ' . $name . '</li>
        <li>Номер: ' . $phone . '</li>  
        <li>Комментарий: ' . $comment . '</li>                
    </ul>
</body>
</html>';

$headers = "From: Консультация с техническим директором <olga-slavina7@yandex.ru>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olga-slavina7@yandex.ru', 'Заказ консультации', $mail_message, $headers);


?>