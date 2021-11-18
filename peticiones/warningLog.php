<?php

  header("Content-type: application/json");
  
  include '../models/Log.php';

  $data = json_decode(file_get_contents('php://input'), true);


  if(!is_dir('../logs')){
    mkdir('../logs');
  }

  $log = new Log('../logs/warning.log');
  $mensaje = array($data['msg'], ' ', $data['campo']);
  $log->writeline('Warning', implode($mensaje));

?>