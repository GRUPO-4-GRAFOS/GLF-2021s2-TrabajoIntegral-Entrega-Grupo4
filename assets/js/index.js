import { formCordenadas, formProductos } from './leerForm.js';

const cordenada = document.querySelector('#cordenadas');
const productos = document.querySelector('#productos');

cordenada.addEventListener('submit', formCordenadas(e, cordenada));
productos.addEventListener('submit', formProductos);
