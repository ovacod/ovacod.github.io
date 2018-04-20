
<?php

$question = $_POST['user-question'];
$name = $_POST['user-name3'];
$phone = $_POST['user-phone3'];
$mail = $_POST['user-mail3'];






$mail_message = '
<html>
<head>
    <title>Заявка-вопрос инженеру</title>
</head>
<body>
    <h2>Вопрос инженеру</h2>
    <ul>
        <li>Вопрос: ' . $question . '</li>
        <li>Имя: ' . $name . '</li>            
        <li>Телефон: ' . $phone . '</li>
        <li>Почта: ' . $mail . '</li>          
    </ul>
</body>
</html>';

$headers = "From: Вопрос инженеру <olga-slavina7@yandex.ru>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olga-slavina7@yandex.ru', 'Заказ', $mail_message, $headers);


?>