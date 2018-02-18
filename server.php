<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $housing = $_POST['user-housing'];
    $apartment = $_POST['user-apartment'];
    $floor = $_POST['user-floor'];
    $comment = $_POST['user-comment'];
    $pay = $_POST['pay'];    

    $notcall = $_POST['notcall']; // 1 или null
    $notcall = isset($notcall) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>            
            <li>Улица:' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $housing . '</li>
            <li>Квартира: ' . $apartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Оплата: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $notcall . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <olga-slavina7@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('ova@mtrest.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>