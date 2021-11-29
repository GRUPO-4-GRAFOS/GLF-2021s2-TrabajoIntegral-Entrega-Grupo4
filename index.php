<!DOCTYPE html>
<html lang="en">
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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.9.0/vis.min.css" rel="stylesheet" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Trabajo Integral grafo</title>
    
    <script src="./assets/js/main.js" type="module"></script>
  </head>
  <body>
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

      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 mt-5">
          <div class="mynetwork" id="mynetwork"></div>
        </div>
      </div>
      <!--Row Formularios-->
      <div class="row mb-5">
        <!--Primer formulario-->
        <div class="col-sm-12 col-md-6 mt-5">
          <form class="formulario" id="cordenadas">
            <h3 class="text-center">Cordenadas</h3>
            <input type="file" class="form-control" id="agrfile" />
            <h5 class="mt-3">Contenido del archivo:</h5>
            <ul id="agrdata" class="list-group mb-3"></ul>
            <input
              type="submit"
              class="btn btn-dark"
              value="subir archivo"
            />
          </form>
        </div>
        <!--Segundo formulario-->
        <div class="col-sm-12 col-md-6 mt-5">
          <form class="formulario" id="productos">
            <h3 class="text-center">Productos</h3>
            <input type="file" class="form-control" id="agrfile2" />
            <h5 class="mt-3">Contenido del archivo:</h5>
            <ul id="agrdata2" class="list-group mb-3"></ul>
            <input
              type="submit"
              class="btn btn-dark"
              value="subir archivo"
            />
          </form>
        </div>
          <div class="centered">
            <button class="button" type="button" id="Datos_Adicionales">Obtener Datos</button>
          </div>    
        <div class="scrsl">
          <h3>Ejecución</h3>
        </div>
      </div>
    </div>
    <!--Fin container-->
    <script src="./assets/js/index.js" type="module"></script>
    <script
      type="text/javascript"
      src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"
    ></script>
    <script src="./assets/js/ciudad.js"></script>
  </body>
</html>
