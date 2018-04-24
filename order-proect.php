
<?php


//Тип здания
$storage1 = $_POST['storage1']; // 1 или null
$storage1 = isset($storage1) ? 'ДА' : 'НЕТ'; //Офис

$storage2 = $_POST['storage2']; // 1 или null
$storage2 = isset($storage2) ? 'ДА' : 'НЕТ'; //Магазин

$storage3 = $_POST['storage3']; // 1 или null
$storage3 = isset($storage3) ? 'ДА' : 'НЕТ'; //АБК

$storage4 = $_POST['storage4']; // 1 или null
$storage4 = isset($storage4) ? 'ДА' : 'НЕТ'; //Цех

$storage5 = $_POST['storage5']; // 1 или null
$storage5 = isset($storage5) ? 'ДА' : 'НЕТ'; //Склад

$storage6 = $_POST['storage6']; // 1 или null
$storage6 = isset($storage6) ? 'ДА' : 'НЕТ'; //Ангар

$storage7 = $_POST['storage7']; // 1 или null
$storage7 = isset($storage7) ? 'ДА' : 'НЕТ'; //Котельная

$storage8 = $_POST['storage8']; // 1 или null
$storage8 = isset($storage8) ? 'ДА' : 'НЕТ'; //Другое



$type = $_POST['type']; //Способ оплаты

$area = $_POST['m2']; //Площадь

$floor = $_POST['floor']; //Этажность

$comment = $_POST['comment']; //Описание объекта

$userName3 = $_POST['user-name3']; //Имя

$userPhone3 = $_POST['user-phone3']; //Телефон

$userMail3 = $_POST['user-mail3']; //email 





$mail_message = '
<html>
<head>
    <title>Расчёт предварительной сметы на проектирование объекта</title>
</head>
<body>
    <h2>Предварительная смета на проектирование</h2>
    <ul>
        <h4>Тип здания</h4>
        <li>Офис: ' . $storage1 . '</li>            
        <li>Магазин: ' . $storage2 . '</li>
        <li>АБК: ' . $storage3 . '</li>
        <li>Цех: ' . $storage4 . '</li>
        <li>Склад: ' . $storage5 . '</li>
        <li>Ангар: ' . $storage6 . '</li>
        <li>Котельная: ' . $storage7 . '</li>
        <li>Другое: ' . $storage8 . '</li>

        <h4>Тип проекта</h4>
        <li>' . $type . '</li>
        

        <h4>Площадь и этажность объекта:</h4>
        <li>Площадь: ' . $area . '</li>
        <li>Этажность: ' . $floor . '</li>
        

        <h4>Описание проекта</h4>
        <li>' . $comment . '</li>

        <h6>Данные клиента</h6>
        <li>Имя: ' . $userName3 . '</li>
        <li>Телефон: ' . $userPhone3 . '</li>            
        <li>Email: ' . $userMail3 . '</li>

                   
    </ul>
</body>
</html>';

$headers = "From: Расчёт сметы на проектирование <olga-slavina7@yandex.ru>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olga-slavina7@yandex.ru', 'Заявка на расчет сметы', $mail_message, $headers);


?>