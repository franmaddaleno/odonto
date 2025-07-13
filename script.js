const ramos = [
  {
    id: 'DD1',
    nombre: 'DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I',
    requisitos: [],
  },
  {
    id: 'PF1',
    nombre: 'PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I',
    requisitos: [],
  },
  {
    id: 'PQ1',
    nombre: 'PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I',
    requisitos: [],
  },
  {
    id: 'BCG',
    nombre: 'BIOLOGÍA CELULAR Y GENÉTICA',
    requisitos: [],
  },
  {
    id: 'HG',
    nombre: 'HISTOLOGÍA GENERAL',
    requisitos: [],
  },
  {
    id: 'BA',
    nombre: 'BASES ANATÓMICAS',
    requisitos: [],
  },
  {
    id: 'DD2',
    nombre: 'DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II',
    requisitos: ['DD1'],
  },
  {
    id: 'PF2',
    nombre: 'PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II',
    requisitos: ['PF1'],
  },
  {
    id: 'PQ2',
    nombre: 'PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II',
    requisitos: ['PQ1'],
  },
  {
    id: 'HO',
    nombre: 'HISTOLOGIA ORAL',
    requisitos: ['HG', 'BCG', 'BA'],
  },
  {
    id: 'ACC',
    nombre: 'ANATOMÍA DE CARA Y CUELLO',
    requisitos: ['BA', 'BCG'],
  },
  // ⚠️ Continúa agregando todos los ramos restantes en el mismo formato con sus respectivas dependencias
];

const estadoRamos = {};

function crearMalla() {
  const contenedor = document.getElementById('malla');
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo bloqueado';
    div.innerText = ramo.nombre;
    div.id = ramo.id;
    div.onclick = () => toggleRamo(ramo.id);
    contenedor.appendChild(div);
    estadoRamos[ramo.id] = { aprobado: false };
  });

  actualizarEstadoInicial();
}

function actualizarEstadoInicial() {
  ramos.forEach(ramo => {
    if (ramo.requisitos.length === 0) {
      desbloquearRamo(ramo.id);
    }
  });
}

function toggleRamo(id) {
  const div = document.getElementById(id);
  const estado = estadoRamos[id];
  estado.aprobado = !estado.aprobado;

  if (estado.aprobado) {
    div.classList.add('aprobado');
  } else {
    div.classList.remove('aprobado');
  }

  actualizarDesbloqueos();
}

function actualizarDesbloqueos() {
  ramos.forEach(ramo => {
    const requisitos = ramo.requisitos;
    const div = document.getElementById(ramo.id);
    if (requisitos.every(req => estadoRamos[req]?.aprobado)) {
      desbloquearRamo(ramo.id);
    } else if (!estadoRamos[ramo.id].aprobado) {
      bloquearRamo(ramo.id);
    }
  });
}

function desbloquearRamo(id) {
  const div = document.getElementById(id);
  div.classList.remove('bloqueado');
}

function bloquearRamo(id) {
  const div = document.getElementById(id);
  div.classList.add('bloqueado');
}

document.addEventListener('DOMContentLoaded', crearMalla);

