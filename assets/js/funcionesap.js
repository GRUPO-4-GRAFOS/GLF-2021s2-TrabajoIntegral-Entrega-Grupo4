//?=================================Automatas de Pilas============================================
const ap1 = JSON.parse(localStorage.getItem('ap1'));
const ap2 = JSON.parse(localStorage.getItem('ap2'));

//?=================================Transiciones============================================
const transAp1 = JSON.parse(localStorage.getItem('transAp1'));
const transAp2 = JSON.parse(localStorage.getItem('transAp2'));

//?=============================opciones de vis.js=========================================
const options = {
  'nodes': {
    'font': {
      'size': 20,
    },
  },
  'edges': {
    'arrows': {
      'to': {
        'enabled': true,
      },
    },
    'font': {
      'size': 20,
    },
  },
};

//?====================Primer Automata=====================================
const automata1 = () => {
  let estados = ap1.estadosAutomata;
  let transiciones = transAp1;
  let nodos = [];
  let edges = [];

  estados.map((e, i) => {
    const nodo = {
      id: i,
      label: e,
    };
    nodos.push(nodo);
  });

  transiciones.map(({ estadoInicial, simbolo, estadoLlegada }) => {
    const arista = {};
    nodos.map(nodo => {
      if (nodo.label === estadoInicial) {
        arista.from = nodo.id;
      } else if (nodo.label === estadoLlegada) {
        arista.to = nodo.id;
        arista.label = simbolo;
      }
    });

    edges.push(arista);
  });

  const nodosAp1 = new vis.DataSet(nodos);
  const aristasAp1 = new vis.DataSet(edges);
  const divAp1 = document.querySelector('#ap1');

  const data = {
    nodes: nodosAp1,
    edges: aristasAp1,
  };

  new vis.Network(divAp1, data, options);
};
automata1();

//?====================Segundo Automata=====================================
const automata2 = () => {
  let estados = ap2.estadosAutomata;
  let transiciones = transAp2;
  let nodos = [];
  let edges = [];

  estados.map((e, i) => {
    const nodo = {
      id: i,
      label: e,
    };
    nodos.push(nodo);
  });

  transiciones.map(({ estadoInicial, simbolo, estadoLlegada }) => {
    const arista = {};
    nodos.map(nodo => {
      if (nodo.label === estadoInicial) {
        arista.from = nodo.id;
      } else if (nodo.label === estadoLlegada) {
        arista.to = nodo.id;
        arista.label = simbolo;
      }
    });
    edges.push(arista);
  });

  const nodosAp2 = new vis.DataSet(nodos);
  const aristasAp2 = new vis.DataSet(edges);
  const divAp2 = document.querySelector('#ap2');

  const data = {
    nodes: nodosAp2,
    edges: aristasAp2,
  };

  new vis.Network(divAp2, data, options);
};
automata2();

//?================================Union==========================
const union = () => {
  const nodes = [
    { id: '0', label: 'ε' },
    ...ap1.estadosAutomata,
    ...ap2.estadosAutomata,
  ];
  const aristas = [...transAp1, ...transAp2];
  const edges = [];

  //!Ordernar los nodos
  nodes.forEach((e, i) => {
    nodes[i] = {
      id: i,
      label: e,
    };
  });

  nodes[0].label = 'ε';

  //!Ordernar Las aristas
  aristas.forEach((e, i) => {
    let arista = {
      from: e.estadoInicial,
      label: e.simbolo,
      to: e.estadoLlegada,
    };
    edges.push(arista);
  });

  edges.forEach(edge => {
    nodes.forEach(nodo => {
      if (nodo.label === edge.from) {
        edge.from = nodo.id;
      } else if (nodo.label === edge.to) {
        edge.to = nodo.id;
      }
    });
  });

  edges.push({
    from: 0,
    to: 1,
    label: '/ε/ε/ε  ',
  });

  edges.push({
    from: 0,
    to: ap1.estadosAutomata.length + 1,
    label: '/ε/ε/ε',
  });

  console.log(edges);

  const divUnion = document.querySelector('#union');
  const nodosUnion = new vis.DataSet(nodes);
  const edgesUnion = new vis.DataSet(edges);

  const data = {
    nodes: nodosUnion,
    edges: edgesUnion,
  };

  new vis.Network(divUnion, data, options);
};
union();

//?========================Concatenacion============================
const concatenacion = () => {
  const nodes = [...ap1.estadosAutomata, ...ap2.estadosAutomata];
  const aristas = [...transAp1, ...transAp2];
  const edges = [];

  //!Ordernar los nodos
  nodes.forEach((e, i) => {
    return (nodes[i] = {
      id: i,
      label: e,
    });
  });

  //!Ordernar Las aristas
  aristas.forEach((e, i) => {
    let arista = {
      from: e.estadoInicial,
      label: e.simbolo,
      to: e.estadoLlegada,
    };
    edges.push(arista);
  });

  edges.forEach(edge => {
    nodes.forEach(nodo => {
      if (nodo.label === edge.from) {
        edge.from = nodo.id;
      } else if (nodo.label === edge.to) {
        edge.to = nodo.id;
      }
    });
  });

  edges.push({
    from: 0,
    to: ap1.estadosAutomata.length,
    label: '/ε/ε/ε',
  });

  console.log(edges);

  const divUnion = document.querySelector('#concatenacion');
  const nodosUnion = new vis.DataSet(nodes);
  const edgesUnion = new vis.DataSet(edges);

  const data = {
    nodes: nodosUnion,
    edges: edgesUnion,
  };

  new vis.Network(divUnion, data, options);
};
concatenacion();
