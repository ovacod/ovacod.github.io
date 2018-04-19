
<?php

    $object = $_POST['user-object'];
    $length = $_POST['user-length'];
    $width = $_POST['user-width'];
    $height = $_POST['user-height'];

    $project = $_POST['project']; // 1 или null
    $project = isset($project) ? 'ДА' : 'НЕТ';

    $building = $_POST['building'];
    $building = isset($building) ? 'ДА' : 'НЕТ';

    $basis = $_POST['basis'];
    $basis = isset($basis) ? 'ДА' : 'НЕТ';
    
    $adress = $_POST['user-adress'];
    $name2 = $_POST['user-name2'];
    $phone2 = $_POST['user-phone2'];    
    $mail2 = $_POST['user-mail2'];
    
    


    
    $mail_message = '
    <html>
    <head>
        <title>Заявка на расчет предварительной сметы</title>
    </head>
    <body>
        <h2>Предварительная смета</h2>
        <ul>
            <li>Объект: ' . $object . '</li>
            <li>Длина: ' . $length . '</li>            
            <li>Ширина: ' . $width . '</li>
            <li>Высота: ' . $height . '</li>

            <li>Проектирование: ' . $project . '</li>
            <li>Монтаж здания под ключ: ' . $building . '</li>
            <li>Отдельные виды работ: ' . $basis . '</li>

            <li>Адрес: ' . $adress . '</li>
            <li>Имя: ' . $name2 . '</li>
            <li>Телефон: ' . $phone2 . '</li>
            <li>email: ' . $mail2 . '</li>           
        </ul>
    </body>
    </html>';

    $headers = "From: Расчёт сметы <olga-slavina7@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('olga-slavina7@yandex.ru', 'Заказ', $mail_message, $headers);


?>