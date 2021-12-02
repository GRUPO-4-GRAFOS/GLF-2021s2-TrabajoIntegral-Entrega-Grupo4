import { formCoordenadas, formProductos } from './leerForm.js';

const coordenada = document.querySelector('#coordenadas');
const productos = document.querySelector('#productos');

coordenada.addEventListener('submit', formCoordenadas);
productos.addEventListener('submit', formProductos);
