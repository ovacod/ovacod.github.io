
<?php

$object = $_POST['user-object']; //Тип объекта

//Внешняя реконструкция
$project = $_POST['project']; // 1 или null
$project = isset($project) ? 'ДА' : 'НЕТ'; //Пристроить помещение

$building = $_POST['building'];
$building = isset($building) ? 'ДА' : 'НЕТ'; //Надстроить помещение

$basis = $_POST['basis'];
$basis = isset($basis) ? 'ДА' : 'НЕТ'; //Встроить помещение

//Внутренняя реконструкция
$project2 = $_POST['project2']; // 1 или null
$project2 = isset($project2) ? 'ДА' : 'НЕТ'; //Перепланировка

$building2 = $_POST['building2'];
$building2 = isset($building2) ? 'ДА' : 'НЕТ'; //Капитальный ремонт

$basis2 = $_POST['basis2'];
$basis2 = isset($basis2) ? 'ДА' : 'НЕТ'; //Отделочные работы

//Частичная реконструкция
$project3 = $_POST['project3']; // 1 или null
$project3 = isset($project2) ? 'ДА' : 'НЕТ'; //Реконструкция фундамента

$building3 = $_POST['building3'];
$building3 = isset($building3) ? 'ДА' : 'НЕТ'; //Реконструкция несущих конструкций

$basis3 = $_POST['basis3'];
$basis3 = isset($basis3) ? 'ДА' : 'НЕТ'; //Реконструкция инженерных сетей

$basisRec = $_POST['basis-rec'];
$basisRec = isset($basisRec) ? 'ДА' : 'НЕТ'; //Реконструкция инженерных сетей



$area = $_POST['m2']; //Площадь

$floor = $_POST['floor']; //Этажность

$adress = $_POST['user-adress']; //Адрес объекта

$comment = $_POST['comment']; //Описание объекта

$userName3 = $_POST['user-name3']; //Имя

$userPhone3 = $_POST['user-phone3']; //Телефон

$userMail3 = $_POST['user-mail3']; //email 





$mail_message = '
<html>
<head>
    <title>Расчёт предварительной сметы на реконструкцию объекта</title>
</head>
<body>
    <h2>Предварительная смета на реконструкцию</h2>
    <ul>
        <li>Тип Объекта: ' . $object . '</li>
        <li>Площадь: ' . $area . '</li>            
        <li>Этажность: ' . $floor . '</li>
        <li>Адрес: ' . $adress . '</li>

        <h4>Внешняя реконструкция</h4>
        <li>Пристроить помещение: ' . $project . '</li>
        <li>Надстроить помещение: ' . $building . '</li>
        <li>Встроить помещение: ' . $basis . '</li>

        <h4>Внутренняя реконструкция</h4>
        <li>Перепланировка: ' . $project2 . '</li>
        <li>Капитальный ремонт: ' . $building2 . '</li>
        <li>Отделочные работы: ' . $basis2 . '</li>

        <h4>Частичная реконструкция</h4>
        <li>Реконструкция фундамента: ' . $project3 . '</li>
        <li>Реконструкция несущих конструкций: ' . $building3 . '</li>
        <li>Реконструкция инженерных сетей: ' . $basis3 . '</li>
        <li>Реконструкция фасада и кровли: ' . $basisRec . '</li>

        <h4>Описание проекта</h4>
        <li>' . $comment . '</li>

        <h6>Данные клиента</h6>
        <li>Имя: ' . $userName3 . '</li>
        <li>Телефон: ' . $userPhone3 . '</li>            
        <li>Email: ' . $userMail3 . '</li>

                   
    </ul>
</body>
</html>';

$headers = "From: Расчёт сметы на реконструкцию <olga-slavina7@yandex.ru>\r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olga-slavina7@yandex.ru', 'Заявка на расчет сметы', $mail_message, $headers);


?>