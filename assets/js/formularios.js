import {
  crearFormularioAfd,
  crearFormularioPl,
  ejecutarFormularioAfd,
  ejecutarFormularioAP1,
  ejecutarFormularioAP2,
  ejecutarFormularioTransicionesAfd,
  ejecutarFormularioTransicionesAP1,
  ejecutarFormularioTransicionesAP2,
} from './funcionesFormularios.js';

export const Formularios = () => {
  /*Obtener botones para crear formularios*/
  const btnAfd = document.querySelector('#afd');
  const btn2pl = document.querySelector('#pl');

  /**Evento automata tipo afd*/
  btnAfd.addEventListener('click', event => {
    event.preventDefault();
    crearFormularioAfd();

    /**==========================================================Formulario AFD========================================================================**/
    const afdForm = document.querySelector('#form-afd');
    const afdFormConecc = document.querySelector('#form-afd-conecciones');

    afdForm.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioAfd();
    });

    afdFormConecc.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioTransicionesAfd();
    });
  });

  /**=======================================================Formularios de pilas=====================================================================**/
  btn2pl.addEventListener('click', event => {
    event.preventDefault();
    crearFormularioPl();

    /**=============================================Formulario ap1=====================================================================**/
    const ap1Form = document.querySelector('#form-ap-1');
    const ap1FormConnect = document.querySelector('#form-conecciones-ap-1');

    ap1Form.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioAP1();
    });

    ap1FormConnect.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioTransicionesAP1();
    });

    /**=============================================Formulario ap2=====================================================================**/
    const ap2Form = document.querySelector('#form-ap2');
    const ap2FormConnect = document.querySelector('#form-conecciones-ap-2');

    ap2Form.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioAP2();
    });

    ap2FormConnect.addEventListener('submit', e => {
      e.preventDefault();
      ejecutarFormularioTransicionesAP2();
    });
  });
};
