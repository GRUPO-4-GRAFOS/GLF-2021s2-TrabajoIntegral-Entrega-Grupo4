<?php
  header("Content-type: application/json"); //? forma de decirle a php que trabajara con json
  
  include '../models/Log.php'; //?importacion del modelo de los Logs
  
  $formulario = json_decode(file_get_contents('php://input'), true); //? Recibir datos en php enviados desde js
  $directorio = '../logs';
  $path = '../logs/info.log';
  $abecedario = 'abecedario';
  $estadoInicial = 'estadoInicial';
  

  if(!is_dir($directorio)){ //? Comprobar si existe el directorio de logs, si no existe lo crea
    mkdir($directorio);
  }

  $log = new Log($path);
  
  if($formulario['pl']){
    $mensaje = array(
        'Datos del automata( ',
        'El abecedario: ', implode(' ',$formulario[$abecedario]), 
        ' El estado Inicial: ', $formulario[$estadoInicial],
        ' El estados Automatas: ', implode(' ', $formulario['estadosAutomata']),
        ' El estado final: ', implode(' ', $formulario['estadosFinales']),
        ' El automata es: ','AP',
        ')'
    );
    $log->writeline('Info', implode($mensaje));
    $log->close();
    
  }
  elseif($formulario['afd']){
    $mensaje = array(
        'Datos del automata( ',
        'El abecedario: ', implode(' ',$formulario[$abecedario]), 
        ' El estado Inicial: ', $formulario[$estadoInicial],
        ' El estados Automatas: ', implode(' ', $formulario['estadosAutomata']),
        ' El estado final: ', implode(' ', $formulario['estadosFinales']),
        ' El automata es: ','AFD',
        ')'
    );
    $log->writeline('Info', implode($mensaje));
    $log->close();
  }
  else{
    $mensaje = array(
        'Transiciones del Automata(',
        ' Estado base: ', $formulario[$estadoInicial],
        ' Simbolo: ', $formulario['simbolo'],
        ' Estado final: ', $formulario['estadoLlegada'],
        ' Automata: ', $formulario['automata'],
        ' )'
    );
    $log->writeline('Info', implode($mensaje));
    $log->close();

  }

?>