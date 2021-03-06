import { operator } from './camiones.js';
import { peticionError, peticionInfo } from './logs.js';

let var_c_p = []; //Arreglo de variables C y P
const cant_c_p = []; //Arreglo para utilizar numeros asignados a C y P
let var_coord = []; //Arreglo para las coordenadas
let datos_agr = []; //Agrupación de los datos //primer Doc de texto
let datos_agr_2 = []; //Arreglo para agrupar las variables C, P y N //segundo Doc de texto
let dist_center = []; //Arreglo de centros de distribución
let local_e = []; //Arreglo Locales de entrega
let id_center = []; //Identificador para Centros de distribución
let id_local_e = []; //Identificador para Locales de entrega
let cantidad = []; //Arreglo para las variables de cantidad
let AUX_lenght; //Auxiliar designado para almacenar tamaños de forma temporal
let Warn; // Variable designada para los mensajes de log
let agr_text;
let agr_text_2;

let info_msg = document.querySelector('.terminal');

//var aux=0; /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//var auy=0;

document
  .getElementById('agrfile')
  .addEventListener('change', ObtenerAgr, false);
document
  .getElementById('agrfile2')
  .addEventListener('change', ObtenerAgr2, false);

function ObtenerAgr(file) {
  let data_file = file.target.files[0];
  let Reader = new FileReader();

  if (!data_file) {
    return;
  }

  Reader.onload = function (file2) {
    agr_text = file2.target.result;
    SepararAgr();
    VerAgr();
  };

  Reader.readAsText(data_file);
}

function SepararAgr() {
  let claw = agr_text.split('\r\n'); //Organiza los datos separandolos segun corresponda
  let Aux_Size = claw.length;

  for (var i = 0; i < Aux_Size; i++) {
    var Aux_dato = claw[i].split(';'); //separador de datos
    var Aux_Size2 = Aux_dato.length;

    Aux_dato[1] = parseInt(Aux_dato[1]);
    Aux_dato[2] = Aux_dato[2].split(',');
    Aux_dato[2][0] = parseInt(Aux_dato[2][0]);
    Aux_dato[2][1] = parseInt(Aux_dato[2][1]);

    let Aux_Coord = Aux_dato[2].length;

    if (
      Aux_dato[1] > 0 &&
      Aux_dato[1] % 1 === 0 &&
      Aux_dato[2][0] % 1 === 0 &&
      Aux_Size2 === 3 &&
      (Aux_dato[0] === 'C' || Aux_dato[0] === 'P') &&
      Aux_dato[2][1] % 1 === 0 &&
      Aux_Coord === 2
    ) {
      AUX_lenght = datos_agr.length;
      var_c_p[AUX_lenght] = Aux_dato[0];

      if (var_c_p[AUX_lenght] === 'C') {
        let Tamano_C = dist_center.length;
        dist_center[Tamano_C] = Aux_dato;
      } else {
        var Tamano_P = local_e.length;
        local_e[Tamano_P] = Aux_dato;
      }

      cant_c_p[AUX_lenght] = Aux_dato[1];
      var_coord[AUX_lenght] = Aux_dato[2];
      datos_agr[AUX_lenght] = Aux_dato;
    } else {
      Warn = `[ERROR] "Hay un dato mal ingresado en la línea: ${i + 1}" <br>`;

      peticionError(
        `[ERROR] "Hay un dato mal ingresado en la línea: ${i + 1}"`
      );

      info_msg.innerHTML += Warn;

      if (Aux_Size2 > 3 || Aux_Size2 < 3) {
        Warn = `[ERROR] "Deben ingresarse 3 datos por cada fila" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`[ERROR] "Deben ingresarse 3 datos por cada fila"`);
      } else if (Aux_dato[0] !== 'C' && Aux_dato[0] !== 'P') {
        Warn = `[ERROR] "Se deben ingresar datos "C" o "P" " <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`[ERROR] "Se deben ingresar datos "C" o "P" "`);
      } else if (Aux_dato[1] <= 0) {
        Warn = `[ERROR] "Los valores de C y P deben ser enteros mayores a 0" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `[ERROR] "Los valores de C y P deben ser enteros mayores a 0"`
        );
      } else if (Aux_dato[1] % 1 !== 0) {
        Warn = `[ERROR] "Los valores de C y P deben ser de tipo entero" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `[ERROR] "Los valores de C y P deben ser de tipo entero"`
        );
      } else if (Aux_dato[2][0] % 1 !== 0 || Aux_dato[2][1] % 1 !== 0) {
        Warn = `[ERROR] "Las coordenadas deben ser ingresadas como valores de tipo entero" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `[ERROR] "Las coordenadas deben ser ingresadas como valores de tipo entero"`
        );
      } else if (Aux_Coord > 2 || Aux_Coord < 2) {
        Warn = `[ERROR] "Las coordenadas deben ser valores para los ejes X,Y" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `[ERROR] "Las coordenadas deben ser valores para los ejes X,Y"`
        );
      }
    }
  }
}

function VerAgr() {
  let contenidos = document.getElementById('agrdata');
  contenidos.innerHTML = agr_text;
}
//////////////////////////////////////////////////////////Final Funciones Agr//////////////////////////////////////////////////////////////////////

function ObtenerAgr2(file3) {
  var data_file = file3.target.files[0];

  if (!data_file) {
    return;
  }

  var Reader = new FileReader();

  Reader.onload = function (file4) {
    agr_text_2 = file4.target.result;
    SepararAgr2();
    VerAgr2();
  };

  Reader.readAsText(data_file);
}

function SepararAgr2() {
  let Claw = agr_text_2.split('\r\n'); //separa los datos por conjunto
  let Aux_Size, Aux_Size2, Aux_dato;
  Aux_Size = Claw.length;

  for (let i = 0; i < Aux_Size; i++) {
    //separa los datos
    Aux_dato = Claw[i].split(';');
    Aux_Size2 = Aux_dato.length;
    Aux_dato[0] = parseInt(Aux_dato[0]);
    Aux_dato[1] = parseInt(Aux_dato[1]);
    Aux_dato[2] = parseInt(Aux_dato[2]);
    if (
      Aux_Size2 === 3 &&
      Aux_dato[0] > 0 &&
      Aux_dato[0] % 1 === 0 &&
      Aux_dato[1] > 0 &&
      Aux_dato[1] % 1 === 0 &&
      Aux_dato[2] <= 1000 &&
      Aux_dato[2] >= 0 &&
      Aux_dato[2] % 1 === 0
    ) {
      AUX_lenght = datos_agr_2.length;
      id_center[AUX_lenght] = Aux_dato[0];
      id_local_e[AUX_lenght] = Aux_dato[1];
      cantidad[AUX_lenght] = Aux_dato[2];
      datos_agr_2[AUX_lenght] = Aux_dato;
    } else {
      Warn = `[ERROR] "Hay un dato mal ingresado en la línea: ${i + 1}" <br>`;
      info_msg.innerHTML += Warn;

      peticionError(`"Hay un dato mal ingresado en la línea: ${i + 1}"`);

      if (Aux_Size2 > 3 || Aux_Size2 < 3) {
        Warn = `[ERROR] "Deben ingresarse 3 datos por cada fila" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`Deben ingresarse 3 datos por cada fila`);
      } else if (Aux_dato[0] <= 0) {
        Warn = `[ERROR] "Los valores de C deben ser mayores a 0" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`Los valores de C deben ser mayores a 0`);
      } else if (Aux_dato[0] % 1 !== 0) {
        Warn = `[ERROR] "Los valores de C deben ser de tipo entero" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`Los valores de C deben ser de tipo entero`);
      } else if (Aux_dato[1] <= 0) {
        Warn = `[ERROR] "Los valores de P deben ser mayores a 0" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`Los valores de P deben ser mayores a 0`);
      } else if (Aux_dato[1] % 1 !== 0) {
        Warn = `[ERROR] "Los valores de P deben ser de tipo entero" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`Los valores de P deben ser de tipo entero`);
      } else if (Aux_dato[2] > 1000) {
        Warn = `[ERROR] "No puede haber una cantidad de productos mayor a 1000 unidades" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `No puede haber una cantidad de productos mayor a 1000 unidades`
        );
      } else if (Aux_dato[2] < 0) {
        Warn = `[ERROR] "La cantidad de productos debe ser mayor a 0" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(`La cantidad de productos debe ser mayor a 0`);
      } else if (Aux_dato[2] % 1 !== 0) {
        Warn = `[ERROR] "La cantidad de productos debe ingresarse como un valor de tipo entero" <br>`;
        info_msg.innerHTML += Warn;

        peticionError(
          `La cantidad de productos debe ingresarse como un valor de tipo entero`
        );
      }
    }
  }
  operator(dist_center, local_e, datos_agr_2, Aux_Size2); //Calcula la hoja de ruta que se pida
}

function VerAgr2() {
  var elemento = document.getElementById('agrdata2');
  elemento.innerHTML = agr_text_2;
}
/////////////////////////////////////////////////////////Final Funciones Agr//////////////////////////////////////////////////////////////////////

function Despliegue() {
  //funcion que debe mostrar los datos al final
  if (datos_agr !== undefined && datos_agr_2 !== undefined) {
    info_msg = document.querySelector('.scrsl');
    Warn = `Parametros:<br>`;
    info_msg.innerHTML += Warn;

    for (let i = 0; i < datos_agr.length; i++) {
      info_msg = document.querySelector('.scrsl');
      Warn = datos_agr[i];

      peticionInfo(`Parámetros ingresados: ${datos_agr[i]}`);

      info_msg.innerHTML += Warn;
      Warn = `<br>`;
      info_msg.innerHTML += Warn;
    }
    Warn = `Datos de productos hoy:<br>`;
    info_msg.innerHTML += Warn;

    for (let i = 0; i < datos_agr_2.length; i++) {
      info_msg = document.querySelector('.scrsl');
      Warn = datos_agr_2[i];
      info_msg.innerHTML += Warn;

      peticionInfo(`Parámetros ingresados: ${datos_agr_2[i]}`);

      Warn = `<br>`;
      info_msg.innerHTML += Warn;
    }
  } else {
    peticionError('hubo un error desconocido');
  }
}
window.onload = async () => {
  let FinProceso = document.getElementById('Datos_Adicionales');
  FinProceso.addEventListener('click', function () {
    Despliegue();
  });
};
