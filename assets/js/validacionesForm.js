import { peticionWarning } from './logs.js';

/**Validaciones formulario automata**/
export const validarionesFormularioAfd = (
  abecedario,
  estadoInicial,
  estadosAutomata,
  estadosFinales
) => {
  if (abecedario === '') {
    peticionWarning(msg, 'abecedario');
    alert('El campo abecedario es requerido');
    return false;
  }
  if (abecedario.length > 1) {
    if (!abecedario.includes(',')) {
      peticionWarning('EL usuario olvido una coma en el campo:', 'abecedario');
      alert('poner una coma para separa el abecedario');
      return false;
    }
  }

  if (estadoInicial === '') {
    peticionWarning(msg, 'Estado Inicial');
    alert('El campo Estado Inicial es requerido');
    return false;
  }

  if (estadosAutomata === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estados automata es requerido');
    return false;
  }

  if (estadosFinales === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estado Final es requerido');
    return false;
  }

  return true;
};

export const validacionesTransiciones = (
  estadoBase,
  simbolo,
  estadoFinal,
  alfabeto,
  estados
) => {
  /* Validar que los cmapos no esten vacios */
  if (estadoBase === '') {
    peticionWarning(msg, 'Estado base');
    alert('EL campo Estado Base es requerido');
    return false;
  }

  if (estadoFinal === '') {
    peticionWarning(msg, 'Estado final');
    alert('EL campo Estado Base es requerido');
    return false;
  }
  if (simbolo === '') {
    peticionWarning(msg, 'Simbolo');
    alert('EL campo Simbolo es requerido');
    return false;
  }

  //* Validar que el simbolo ingresado exista en el alfabeto
  for (let cont = 0; cont <= alfabeto.length; cont++) {
    if (alfabeto[cont] === simbolo) {
      break;
    } else if (cont === alfabeto.length) {
      alert(`El simbolo ${simbolo} no pertenece al alfabeto`);
      peticionWarning(
        'El usuario ah agregado un simbolo que no existe en el alfabeto:',
        'alfabeto'
      );

      return false;
    }
  }

  //* Validar que los estados base y final existan en el automata
  for (let e1 = 0; e1 <= estados.length; e1++) {
    if (estadoBase === estados[e1]) {
      break;
    } else if (e1 === estados.length) {
      alert('El estado de base del usuario no pertenece al automata');
      peticionWarning(
        'El usuario ah agregado un estado que no exista en el automota',
        estadoBase
      );
      return false;
    }
  }

  for (let e2 = 0; e2 <= estados.length; e2++) {
    if (estadoFinal === estados[e2]) {
      break;
    } else if (e2 === estados.length) {
      alert('El estado de llegada del usuario no pertenece al automata');
      peticionWarning(
        'El usuario ah agregado un estado que no exista en el automota',
        estadoBase
      );
      return false;
    }
  }

  return true;
};

//Verificar que un json no este vacio
export const isEmptyObject = obj => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      return false;
    }
  }
  return true;
};
