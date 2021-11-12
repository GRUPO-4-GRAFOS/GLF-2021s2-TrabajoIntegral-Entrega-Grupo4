import {
  validacionesTransiciones,
  validarionesFormularioAfd,
  isEmptyObject,
} from './validacionesForm.js';
import {
  peticionInfo
} from './logs.js';

const div = document.querySelector('#form');
let automataAFD;
let automataP1;
let automataP2;
let conecAfd = [];
let conecAp1 = [];
let conecAp2 = [];
/** Funciones para crear formularios **/
export const crearFormularioAfd = () => {
  const html = `
        <div class="col-6">
          <h1 class="text-center">Afd</h1>
          <!--Inicio Formularios AFD-->
          <form id="form-afd">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-afd-form" />
          </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form id="form-afd-conecciones">
            <input
              placeholder="Estado inicio: q0, q1..."
              type="text"
              class="form-control"
              id="estadoInicio-afd"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
              id="simbolo-afd"
            />
            <input
              placeholder="Estados Llegada: qf"
              type="text"
              class="form-control mt-3"
              id="estadoLlegada-afd"
            />
            <input value="Crear Conexión" class="btn bt-lg btn-dark mt-3" type="submit" />
          </form>

          <a 
          href = "./afd.php" 
          class = "btn btn-dark my-3"
          type = "button">
          Pasar a "ER" 
          </a>

          <!--fin Formularios transiciones-->
        </div>`;

  div.innerHTML = html;
};

export const crearFormularioPl = () => {
  const html = `
    <div class="col-sm-6">
    <h1 class="text-center mt-3">1AP</h1>
          <!--Inicio Formularios AFD-->
          <form id="form-ap-1">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario-ap-1"
            />
            <input
              placeholder="Estado inicial: r0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial-ap-1"
            />
            <input
              placeholder="Estados Automatas: r1, r2, r3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata-ap-1"
            />
            <input
              placeholder="Estados finales: rf, rf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales-ap-1"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-ap1-form" />
          </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form id="form-conecciones-ap-1">
            <input
              placeholder="Estado inicio: r0, r1..."
              type="text"
              class="form-control"
              id="estadoInicio-ap-1"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
              id="simbolo-ap-1"
            />
            <input
              placeholder="Estados Llegada: rf"
              type="text"
              class="form-control mt-3"
              id="estadoFinal-ap-1"
            />
            <input value="Crear Conexión" class="btn bt-lg btn-dark mt-3" type="submit" />
          </form>
  </div>
  <div class="col-sm-6">
    <h1 class="text-center mt-3">2AP</h1>
          <!--Inicio Formularios AFD-->
          <form id="form-ap2">
            <input
              placeholder="Ingrese abecedario: A, B"
              type="text"
              class="form-control"
              id="abecedario-ap-2"
            />
            <input
              placeholder="Estado inicial: q0"
              type="text"
              class="form-control mt-3"
              id="estadoInicial-ap-2"
            />
            <input
              placeholder="Estados Automatas: q1, q2, q3"
              type="text"
              class="form-control mt-3"
              id="estadosAutomata-ap-2"
            />
            <input
              placeholder="Estados finales: qf, qf1"
              type="text"
              class="form-control mt-3"
              id="estadosFinales-ap-2"
            />
            <input value="Crear automata" class="btn bt-lg btn-dark mt-3" type="submit" id="btn-afd-form" />
            </form>
          <!--fin Formularios AFD-->
          <!--Inicio Formularios transiciones-->
          <h1 class="text-center mt-3">Transiciones</h1>
          <form id="form-conecciones-ap-2">
            <input
              placeholder="Estado inicio: q0, q1..."
              type="text"
              class="form-control"
              id="estadoInicio-ap-2"
            />
            <input
              placeholder="simbolo(del abecedario):"
              type="text"
              class="form-control mt-3"
              id="simbolo-ap-2"
            />
            <input
              placeholder="Estados Llegada: qf"
              type="text"
              class="form-control mt-3"
              id="estadoFinal-ap-2"
            />
            <input value="Crear Conexión" class="btn bt-lg btn-dark mt-3" type="submit" />
          </form>
          <a href = "./ap.php" class = "btn btn-dark my-3"> Ver Automatas AP </a>
  </div>`;

  div.innerHTML = html;
};

//?==========================================================Formulario AFD=================================================================================??/

export const ejecutarFormularioAfd = () => {
  /**Recoger datos del automata**/
  const abecedario = document.querySelector('#abecedario');
  const estadoInicial = document.querySelector('#estadoInicial');
  const estadosAutomata = document.querySelector('#estadosAutomata');
  const estadosFinales = document.querySelector('#estadosFinales');

  /**Comprobar validaciones**/
  const validaciones = validarionesFormularioAfd(
    abecedario.value,
    estadoInicial.value,
    estadosAutomata.value.split(','),
    estadosFinales.value.split(',')
  );

  const todosLosEstados = estadosAutomata.value.split(',');

  if (!validaciones) {
    return;
  }

  todosLosEstados.push(...estadosFinales.value.split(','));
  todosLosEstados.unshift(estadoInicial.value);

  automataAFD = {
    abecedario: abecedario.value.split(','),
    estadoInicial: estadoInicial.value,
    estadosAutomata: todosLosEstados,
    estadosFinales: estadosFinales.value.split(','),
    afd: true,
  };

  peticionInfo(automataAFD);
  localStorage.setItem('AFD', JSON.stringify(automataAFD));

  abecedario.value = '';
  estadoInicial.value = '';
  estadosAutomata.value = '';
  estadosFinales.value = '';

  alert('Automata Agregado');
};

export const ejecutarFormularioTransicionesAfd = () => {
  if (isEmptyObject(automataAFD)) {
    alert('ingrese el automata primero');
    return;
  }

  const estadoInicial = document.querySelector('#estadoInicio-afd');
  const simbolo = document.querySelector('#simbolo-afd');
  const estadoLlegada = document.querySelector('#estadoLlegada-afd');

  const validaciones = validacionesTransiciones(
    estadoInicial.value,
    simbolo.value,
    estadoLlegada.value,
    automataAFD.abecedario,
    automataAFD.estadosAutomata
  );

  if (!validaciones) {
    return;
  }

  let conec = {
    estadoInicial: estadoInicial.value,
    simbolo: simbolo.value,
    estadoLlegada: estadoLlegada.value,
    automata: 'AFD',
  };
  conecAfd.push(conec);

  peticionInfo(conec);
  localStorage.setItem('transAfd', JSON.stringify(conecAfd));

  estadoInicial.value = '';
  simbolo.value = '';
  estadoLlegada.value = '';

  alert('Transicion Agregada');
};

//? =====================================================Formulario Automata Pilas 1===========================================================================?//

export const ejecutarFormularioAP1 = () => {
  /**Recoger datos del automata**/
  const abecedario = document.querySelector('#abecedario-ap-1');
  const estadoInicial = document.querySelector('#estadoInicial-ap-1');
  let estadosAutomata = document.querySelector('#estadosAutomata-ap-1');
  const estadosFinales = document.querySelector('#estadosFinales-ap-1');

  /**Comprobar validaciones**/
  const validaciones = validarionesFormularioAfd(
    abecedario.value,
    estadoInicial.value,
    estadosAutomata.value.split(','),
    estadosFinales.value.split(',')
  );

  const todosLosEstados = estadosAutomata.value.split(',');

  if (!validaciones) {
    return;
  }

  todosLosEstados.push(...estadosFinales.value.split(','));
  todosLosEstados.unshift(estadoInicial.value);

  automataP1 = {
    abecedario: abecedario.value.split(','),
    estadoInicial: estadoInicial.value,
    estadosAutomata: todosLosEstados,
    estadosFinales: estadosFinales.value.split(','),
    pl: true,
  };

  peticionInfo(automataP1);
  localStorage.setItem('ap1', JSON.stringify(automataP1));

  abecedario.value = '';
  estadoInicial.value = '';
  estadosAutomata.value = '';
  estadosFinales.value = '';

  alert('Automata Agregado');
};

export const ejecutarFormularioTransicionesAP1 = () => {
  if (isEmptyObject(automataP1)) {
    alert('ingrese el automata primero');
    return;
  }

  const estadoInicial = document.querySelector('#estadoInicio-ap-1');
  const simbolo = document.querySelector('#simbolo-ap-1');
  const estadoLlegada = document.querySelector('#estadoFinal-ap-1');

  const validaciones = validacionesTransiciones(
    estadoInicial.value,
    simbolo.value,
    estadoLlegada.value,
    automataP1.abecedario,
    automataP1.estadosAutomata
  );

  if (!validaciones) {
    return;
  }

  let conec = {
    estadoInicial: estadoInicial.value,
    simbolo: simbolo.value,
    estadoLlegada: estadoLlegada.value,
    automata: 'PL1',
  };
  conecAp1.push(conec);

  peticionInfo(conec);
  localStorage.setItem('transAp1', JSON.stringify(conecAp1));

  estadoInicial.value = '';
  simbolo.value = '';
  estadoLlegada.value = '';

  alert('Transicion Agregada');
};

//?====================================================Formulario Automata Pilas 2============================================================================?//
export const ejecutarFormularioAP2 = () => {
  /**Recoger datos del automata**/
  const abecedario = document.querySelector('#abecedario-ap-2');
  const estadoInicial = document.querySelector('#estadoInicial-ap-2');
  let estadosAutomata = document.querySelector('#estadosAutomata-ap-2');
  const estadosFinales = document.querySelector('#estadosFinales-ap-2');

  /**Comprobar validaciones**/
  const validaciones = validarionesFormularioAfd(
    abecedario.value,
    estadoInicial.value,
    estadosAutomata.value.split(','),
    estadosFinales.value.split(',')
  );

  const todosLosEstados = estadosAutomata.value.split(',');

  if (!validaciones) {
    return;
  }

  todosLosEstados.push(...estadosFinales.value.split(','));
  todosLosEstados.unshift(estadoInicial.value);

  automataP2 = {
    abecedario: abecedario.value.split(','),
    estadoInicial: estadoInicial.value,
    estadosAutomata: todosLosEstados,
    estadosFinales: estadosFinales.value.split(','),
    pl: true,
  };

  peticionInfo(automataP2);
  localStorage.setItem('ap2', JSON.stringify(automataP2));

  abecedario.value = '';
  estadoInicial.value = '';
  estadosAutomata.value = '';
  estadosFinales.value = '';

  alert('Automata Agregado');
};

export const ejecutarFormularioTransicionesAP2 = () => {
  if (isEmptyObject(automataP2)) {
    alert('ingrese el automata primero');
    return;
  }

  const estadoInicial = document.querySelector('#estadoInicio-ap-2');
  const simbolo = document.querySelector('#simbolo-ap-2');
  const estadoLlegada = document.querySelector('#estadoFinal-ap-2');

  const validaciones = validacionesTransiciones(
    estadoInicial.value,
    simbolo.value,
    estadoLlegada.value,
    automataP2.abecedario,
    automataP2.estadosAutomata
  );

  if (!validaciones) {
    return;
  }

  let conec = {
    estadoInicial: estadoInicial.value,
    simbolo: simbolo.value,
    estadoLlegada: estadoLlegada.value,
    automata: 'PL2',
  };
  conecAp2.push(conec);

  peticionInfo(conec);
  localStorage.setItem('transAp2', JSON.stringify(conecAp2));

  estadoInicial.value = '';
  simbolo.value = '';
  estadoLlegada.value = '';

  alert('Transicion Agregada');
};

export const LimpiarLocalStorage = () => localStorage.clear();
