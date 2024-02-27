<?php
$path = $_POST['fileAddress'];
$text = file_get_contents('../' . $path);
echo json_encode($text);
?>