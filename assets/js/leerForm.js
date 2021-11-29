let inputFile, parrafo, contenido, arr;
const file = new FileReader(); //*crear lector de archivo

export const formCordenadas = e => {
  e.preventDefault();
  //? ====================Recibir parametros de HTML========================
  inputFile = document.querySelector('#agrfile').files[0];
  parrafo = document.querySelector('#agrdata');

  file.onload = ({ target }) => {
    contenido = target.result; //*leer todo el contenido del archivo
    arr = contenido.split('\r\n'); //*cortar las  lineas del archivo

    //? ===========Recorrer arreglo e insertar datos en el html==============
    arr.forEach((element, i) => {
      const hijo = document.createElement('li');
      hijo.className = 'list-group-item';
      hijo.innerText = element;
      parrafo.appendChild(hijo);
    });
  };
  file.readAsText(inputFile); //*leer el archivo
};

export const formProductos = e => {
  e.preventDefault();
  inputFile = document.querySelector('#agrfile2').files[0];
  parrafo = document.querySelector('#agrdata2');

  file.onload = ({ target }) => {
    contenido = target.result;
    arr = contenido.split('\r\n');

    arr.forEach((element, i) => {
      const hijo = document.createElement('li');
      hijo.className = 'list-group-item';
      hijo.innerText = element;
      parrafo.appendChild(hijo);
    });
  };

  file.readAsText(inputFile); //*leer el archivo
};
