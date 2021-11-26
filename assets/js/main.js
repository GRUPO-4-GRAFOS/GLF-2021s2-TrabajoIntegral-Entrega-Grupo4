let var_c_p = []; //Arreglo de variables C y P
let cant_c_p = []; //Arreglo para utilizar numeros asignados a C y P
let var_coord = []; //Arreglo para las coordenadas
let datos_agr = []; //Agrupación de los datos
let datos_agr_2 = []; //Arreglo para agrupar las variables C, P y N
let dist_center = []; //Arreglo de centros de distribución
let local_e = []; //Arreglo Locales de entrega
var id_center = []; //Identificador para Centros de distribución
var id_local_e = []; //Identificador para Locales de entrega
var cantidad = []; //Arreglo para las variables de cantidad
let AUX_lenght; //Auxiliar designado para almacenar tamaños de forma temporal
let Warn; // Variable designada para los mensajes de log

let agr_text;
let agr_text_2; 

let insertarTerminal = document.querySelector(".terminal");

//var aux=0;
//var auy=0;

import {operator} from '../assets/js/camiones.js'

