export function operator(distc, locale, info_agr2) {
  let info_msgs;
  let Warn;
  let dist_cntr, local_entg;
  let agr_data,
    agr_data2 = [],
    pdata = [];
  let coord = [],
    coordf = [],
    coordx = [],
    coordy = [],
    local_coord = [],
    Aux_Coord = 0;
  let lngth = [],
    lngth_dne = [];
  let n_operativos = 1;
  let cont = 0;
  let x, y, x_1, y_1;
  let Aux_Lngth;
  let Aux = 0;
  let contx = 0;
  let conty = 0;

  info_msgs = document.querySelector('.scrsl');
  dist_cntr = distc;
  local_entg = locale;
  agr_data = info_agr2;
  Aux_Lngth = Object.keys(agr_data[0]).length;

  for (let i = 0; i <= Object.keys(agr_data).length; i++) {
    lngth_dne[i] = 0;
    local_coord[i] = 0;
    agr_data2[i] = [];

    for (let j = 0; j < Aux_Lngth; j++) {
      agr_data2[i][j] = 0;
    }
  }

  for (let i = 0; i < Object.keys(agr_data).length; i++) {
    for (let j = 0; j < Aux_Lngth; j++) {
      agr_data2[i][j] = agr_data[i][j];

      if (i == Object.keys(agr_data).length) {
        agr_data2[i + 1][j] = 0;
      }
    }
  }

  console.log('Entro a la funcion');

  let conti = 0,
    conti1 = 0,
    conti2 = 0;

  for (let i = 0; i < Object.keys(agr_data).length; i++) {
    for (let j = 0; j < Object.keys(agr_data[i]).length; j++) {
      if (j == 0) {
        for (let k = 0; k < Object.keys(dist_cntr).length; k++) {
          for (let q = 0; q < Object.keys(dist_cntr[k]).length; q++) {
            if (agr_data[i][j] == dist_cntr[k][q]) {
              console.log(dist_cntr[k][q + 1]);
              coord[conti] = dist_cntr[k][q + 1];
              conti++;
            }
          }
        }
      } else if (j == 1) {
        for (let k = 0; k < Object.keys(local_entg).length; k++) {
          for (let g = 0; g < Object.keys(local_entg[k]).length; g++) {
            if (agr_data[i][j] == local_entg[k][g]) {
              console.log(local_entg[k][g + 1]);
              coordf[conti1] = local_entg[k][g + 1];
              local_coord[conti1] = local_entg[k][g + 1];
              conti1++;
            }
          }
        }
      } else if (j == 2) {
        pdata[conti2] = agr_data[i][j];
        conti2++;
      }
    }
  }

  console.log(coord);
  console.log(coordf);
  console.log(pdata);
  console.log(local_coord);

  for (let i = 0; i < Object.keys(coord).length; i++) {
    for (let j = 0; j < Object.keys(coord[i]).length; j++) {
      console.log(Object.keys(coord).length);
      if (j == 0) {
        console.log(coord[i][j]);
        coordy[conty] = coordf[i][j] - coord[i][j];
        conty++;
      } else if (j == 1) {
        console.log(coord[i][j]);
        coordx[contx] = coordf[i][j] - coord[i][j];
        contx++;
      }
    }
  }
  console.log(coordx);
  console.log(coordy);

  for (let i = 0; i < Object.keys(coordx).length; i++) {
    lngth[i] = Math.sqrt(coordx[i] * coordx[i] + coordy[i] * coordy[i]);
  }

  console.log(lngth);
  console.log(agr_data2);
  lngth_dne[0] = lngth[0];

  Warn = ` Despliegue de datos: <br>`;
  info_msgs.innerHTML += Warn;

  Warn = `Sale el primer camión del centro de distribución <br>`;
  console.log('Sale el primer camión del centro de distribución');

  info_msgs.innerHTML += Warn;
  Warn = `<br>`;

  info_msgs.innerHTML += Warn;

  for (let i = 0; i < Object.keys(agr_data2).length; i++) {
    if (i == Object.keys(agr_data).length) {
      break;
    }
    for (let j = 0; j < Object.keys(agr_data2[i]).length; j++) {
      console.log(agr_data2);

      if (i == Object.keys(agr_data2).length) {
        break;
      }
      if (j == 0) {
        if (Aux == 0) {
          Warn = `sale del centro de distribución nº${agr_data2[i][j]} <br>`;
          console.log(`Saldra del centro ${agr_data2[i][j]}`);
          info_msgs.innerHTML += Warn;
        } else if (Aux != 0) {
          Warn = `Se va del local nº${agr_data2[i - 1][j + 1]} <br>`;
          console.log(`Se va del local nº${agr_data2[i - 1][j + 1]}`);
          info_msgs.innerHTML += Warn;
        }
      } else if (j == 1) {
        Warn = `Toma dirección al local nº${agr_data2[i][j]} <br>`;
        info_msgs.innerHTML += Warn;
        console.log(`Toma dirección al local nº${agr_data2[i][j]}`);
      } else if (j == 2) {
        Warn = `Carga con ${agr_data2[i][j]} unidades de productos <br>`;
        info_msgs.innerHTML += Warn;
        console.log(`Carga con ${agr_data2[i][j]} unidades de productos`);

        Warn = `La distancia recorrida por el camión nº${n_operativos} es de ${lngth_dne[i]} <br>`;
        info_msgs.innerHTML += Warn;
        console.log(
          `La distancia recorrida por el camión nº${n_operativos} es de ${lngth_dne[i]}`
        );

        Aux = agr_data2[i][j];

        if (
          agr_data2[i + 1][j] == 0 ||
          agr_data2[i][j + 1] == 0 ||
          agr_data2[i + 1][j + 1] == 0
        ) {
          break;
        } else if (Aux <= 1000 && agr_data2[i + 1][j] + Aux <= 1000) {
          Warn = `El siguiente camión con espacio disponible para envíos es el nº${n_operativos} <br>`;
          info_msgs.innerHTML += Warn;
          console.log(
            `El siguiente camión con espacio disponible para envíos es el nº${n_operativos}`
          );

          Warn = `<br>`;
          info_msgs.innerHTML += Warn;

          x = local_coord[i][cont];
          y = local_coord[i][cont + 1];
          x_1 = local_coord[i + 1][cont];
          y_1 = local_coord[i + 1][cont + 1];

          Aux_Coord = distancia_x_y(x, y, x_1, y_1);
          lngth_dne[i + 1] = lngth[i] + Aux_Coord;
          Aux = Aux + agr_data2[i][j];
        } else {
          n_operativos++;
          Warn = `No hay espacio en este camión para el proximo envío, <br> El envío será tomado por el camión nº${n_operativos} <br>`;
          info_msgs.innerHTML += Warn;

          Warn = `<br>`;
          info_msgs.innerHTML += Warn;

          console.log(
            `No hay espacio en este camión para el proximo envío, <br> El envío será tomado por el camión nº${n_operativos}`
          );
          lngth_dne[i + 1] = lngth[i + 1];
          Aux = 0;
        }
      }
    }
  }
  Warn = `<br>`;
  info_msgs.innerHTML += Warn;

  Warn = `Con todos los envíos completados, se cierra la jornada <br>`;
  info_msgs.innerHTML += Warn;

  console.log('Con todos los envíos completados, se cierra la jornada');
}

function distancia_x_y(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  let resultado;
  resultado = Math.sqrt(x * x + y * y);
  return resultado;
}
