
<?php

$name = $_POST['user-name1'];
$phone = $_POST['user-phone1'];






$mail_message = '
<html>
<head>
    <title>Заказ обратного звонка</title>
</head>
<body>
    <h2>Перезвоните мне!</h2>
    <ul>
        <li>Имя: ' . $name . '</li>
        <li>Номер: ' . $phone . '</li>                      
    </ul>
</body>
</html>';

$headers = "From: Обратный звонок <olga-slavina7@yandex.ru>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olga-slavina7@yandex.ru', 'Заказ звонка', $mail_message, $headers);


?>