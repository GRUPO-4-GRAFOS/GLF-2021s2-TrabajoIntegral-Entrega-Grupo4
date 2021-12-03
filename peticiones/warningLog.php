<?php
  header("Content-type: application/json"); //? forma de decirle a php que trabajara con json
  
  include '../models/Log.php'; //?importacion del modelo de los Logs
  
  $formulario = json_decode(file_get_contents('php://input'), true); //? Recibir datos en php enviados desde js
  $directorio = '../logs';
  $path = '../logs/info.log';
  $estadoInicial = 'estadoInicial';
  

  if(!is_dir($directorio)){ //? Comprobar si existe el directorio de logs, si no existe lo crea
    mkdir($directorio);
  }

  $log = new Log($path);
  $log->writeline('Warning', $formulario['msg']);
  $log->close();

  
?>