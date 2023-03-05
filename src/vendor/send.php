<?php
$name = $_POST['name'];
$name = str_replace(['(',')','{','}','[', ']', '+', '=', '$', '_', '<', '>', '/', '/\/'], '', $name );
$phone = $_POST['tel'];
$phone = str_replace(['(',')','-','+',' '], '', $phone );
$token = "6160359415:AAEN0kyL70TtIdvSpJzzWtOs-2MR0ncep3w";
$chat_id = "-719392759";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if (!$sendToTelegram) {
    $message = 'Что-то пошло не так и ничего не отправилось...';
} else {
    $message = 'Ваша заявка отправлена!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>