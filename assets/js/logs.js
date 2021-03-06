let resp;

//* Peticion para crear un log de tipo warning  cuando el usuario, no ingrese un valor
export const peticionWarning = async msg => {
  const data = {
    msg,
  };

  resp = await fetch('./peticiones/warningLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const peticionInfo = async data => {
  let aux = {
    msg: data,
  };
  //? peticion fetch para mandar los datos ingresados a traves del fomulario del usuario(programacion asincrona)
  resp = await fetch('./peticiones/infoLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(aux),
  });
};

export const peticionError = async error => {
  const data = {
    error,
  };
  resp = await fetch('./peticiones/errorLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
