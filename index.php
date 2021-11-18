<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="shortcut icon"
      href="./assets/img/UTEM.svg.png"
      type="image/x-icon"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Trabajo Integral grafo</title>
  </head>
  <body background= "./assets/img/mountains-the-game-lake-forest-wallpaper-preview.png";>
    <div class="container">
      <h1 class="text-center mt-3">Trabajo Integral Grafos</h1>
      <!-- Inicio Navbar -->
      <nav class="navbar-expand-lg navbar navbar-dark bg-dark mt-3">
        <div class="container-fluid">
          <img
            src="./assets/img/UTEM.svg.png"
            alt="logo-utem"
            class="d-inline-block align-text-top"
            width="50"
            height="50"
          />
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link link-success active" href="./integrantes.php">
              Integrantes
            </a>
          </li>
        </ul>
      </nav>
      <!-- fin Navbar -->
      <!--Inicio row Instrucciones-->
    </div>
    <!--Fin container-->
<form>
  <fieldset>
  <h1 class="text-center mt-3">Ingreso de Datos</h1>
  <h5 class="text-center mt-3">Datos para las rutas</h5>
  <div>
  <h3 class="">Datos Generales</h3>
  <form name="formulario" method="post" action="/send.php" enctype="multipart/form-data">
  <input type="file" name="adjunto" accept=".txt" multiple />
</form>
  <ul class="list">
  <li><strong>Contenido del archivo:</strong></li>
  <?php
  $fp=fopen('coordenadas.txt','r');
echo '<p>';
while (!feof($fp)){
    $cont=fgets($fp);
    echo $cont;
}
echo '</p>';
fclose($fp); 
?>
  </div>
</fieldset>
<input class="btn" type="submit" value="Darme de alta" />
</form>

                        <h3>Datos<br>Generales</h3>
                        <input type="file" id="datosgen" class="button button-ps" />
                        <ul class="list">
                            <li><strong>Contenido del archivo:</strong></li>
                            <li><pre id="contenido-archivogen"></pre></li>
                        </ul>
                    </div>
                    <div class="span6 price-column">
                        <h3>DATOS DEMANDA DE<br>PRODUCTOS DEL DÍA</h3>
                        <input type="file" id="datoscpn" class="button button-ps" />
                        <ul class="list">
                            <li><strong>Contenido del archivo:</strong></li>
                            <li><pre id="contenido-archivocpn"></pre></li>
                        </ul>
                        
                    </div>
                </div>
                <div class="centered">
                    <button class="button" type="button" id="finalizar"> Finalizar </button>
                </div>
            </div>
        </div>
  </body>
</html>
