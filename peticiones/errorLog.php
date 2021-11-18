<?php
header("Content-type: application/json");
include '../models/Log.php';

$error = json_decode(file_get_contents('php://input'), true);

if(!is_dir('../logs')){
    mkdir('../logs');
  }

  $log = new Log('../logs/error.log');
  $mensaje = array( $error['error']);
  $log->writeline('Error', implode($mensaje));
  $log->close()
?>