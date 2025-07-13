
// script.js

const ramos = [
  // Primer Año
  { id: 'DD1', nombre: 'DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I', requisitos: [] },
  { id: 'PF1', nombre: 'PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I', requisitos: [] },
  { id: 'PQ1', nombre: 'PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I', requisitos: [] },
  { id: 'BCG', nombre: 'BIOLOGÍA CELULAR Y GENÉTICA', requisitos: [] },
  { id: 'HG', nombre: 'HISTOLOGÍA GENERAL', requisitos: [] },
  { id: 'BA', nombre: 'BASES ANATÓMICAS', requisitos: [] },
  { id: 'DD2', nombre: 'DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II', requisitos: ['DD1'] },
  { id: 'PF2', nombre: 'PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II', requisitos: ['PF1'] },
  { id: 'PQ2', nombre: 'PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II', requisitos: ['PQ1'] },
  { id: 'HO', nombre: 'HISTOLOGIA ORAL', requisitos: ['HG', 'BCG', 'BA'] },
  { id: 'ACC', nombre: 'ANATOMÍA DE CARA Y CUELLO', requisitos: ['BA', 'BCG'] },

  // Segundo Año
  { id: 'SIM1', nombre: 'SIMULACIONES PARA EL EJERCICIO PROFESIONAL I', requisitos: ['DD2', 'PQ2'] },
  { id: 'PATMIC', nombre: 'BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA', requisitos: ['HO', 'PF2', 'ACC'] },
  { id: 'FISIO1', nombre: 'BASES BIOQUÍMICAS Y FISIOLÓGICAS I', requisitos: ['HO', 'PF2', 'ACC'] },
  { id: 'PES1', nombre: 'PROMOCIÓN Y EDUCACIÓN EN SALUD I', requisitos: ['DD2'] },
  { id: 'PSICO1', nombre: 'BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I', requisitos: ['DD2'] },

  { id: 'SIM2', nombre: 'SIMULACIONES PARA EL EJERCICIO PROFESIONAL II', requisitos: ['SIM1'] },
  { id: 'SEMIO', nombre: 'BASES SEMIOLÓGICAS', requisitos: ['FISIO1', 'PATMIC'] },
  { id: 'FISIO2', nombre: 'BASES BIOQUÍMICAS Y FISIOLÓGICAS II', requisitos: ['FISIO1', 'PATMIC'] },
  { id: 'PES2', nombre: 'PROMOCIÓN Y EDUCACIÓN EN SALUD II', requisitos: ['PES1', 'PSICO1'] },
  { id: 'PSICO2', nombre: 'BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD II', requisitos: ['PSICO1'] },

  // Tercer Año
  { id: 'CNNA1', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE I', requisitos: ['SIM2', 'SEMIO'] },
  { id: 'CA1', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO I', requisitos: ['SIM2', 'SEMIO'] },
  { id: 'CAM1', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR I', requisitos: ['SIM2', 'SEMIO'] },
  { id: 'CONTROL1', nombre: 'FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS PARA EL CONTROL DE LA ENFERMEDAD I', requisitos: ['FISIO2'] },
  { id: 'GEPRO', nombre: 'GESTIÓN Y ADMINISTRACIÓN PARA EL EJERCICIO PROFESIONAL', requisitos: ['PES1', 'PES2'] },
  { id: 'IFC1', nombre: 'INTERVENCIÓN FAMILIAR Y COMUNITARIA I', requisitos: ['PSICO2', 'PES2'] },

  { id: 'CNNA2', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE II', requisitos: ['CNNA1'] },
  { id: 'CONTROL2', nombre: 'FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS PARA EL CONTROL DE LA ENFERMEDAD II', requisitos: ['CONTROL1'] },
  { id: 'CA2', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO II', requisitos: [] },
  { id: 'CAM2', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR II', requisitos: [] },
  { id: 'FARMACO', nombre: 'FARMACOLOGÍA', requisitos: ['CONTROL1'] },
  { id: 'IFC2', nombre: 'INTERVENCIÓN FAMILIAR Y COMUNITARIA II', requisitos: [] },

  // Cuarto Año
  { id: 'CNNA3', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE III', requisitos: ['CNNA2'] },
  { id: 'CA3', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO III', requisitos: ['CA2', 'CAM2', 'CONTROL2'] },
  { id: 'CAM3', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR III', requisitos: ['CA2', 'CAM2', 'CONTROL2'] },
  { id: 'URG1', nombre: 'URGENCIAS ODONTOLÓGICAS I', requisitos: ['CNNA2', 'CA2', 'CAM2', 'FARMACO'] },
  { id: 'MANT1', nombre: 'MANTENCIÓN DEL ESTADO DE SALUD I', requisitos: ['IFC2'] },
  { id: 'PROY1', nombre: 'PROYECTO DE INVESTIGACIÓN I', requisitos: [] },

  { id: 'CNNA4', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE III 2', requisitos: ['CNNA3'] },
  { id: 'CA4', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO III 2', requisitos: ['CA3'] },
  { id: 'CAM4', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR III 2', requisitos: ['CAM3'] },
  { id: 'URG2', nombre: 'URGENCIAS ODONTOLÓGICAS II', requisitos: ['URG1'] },
  { id: 'MANT2', nombre: 'MANTENCIÓN DEL ESTADO DE SALUD II', requisitos: ['MANT1'] },
  { id: 'PROY2', nombre: 'PROYECTO DE INVESTIGACIÓN II', requisitos: ['PROY1'] },

  // Quinto Año
  { id: 'CNNA5', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE IV', requisitos: ['CNNA4'] },
  { id: 'CA5', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO IV', requisitos: ['CA4', 'CAM4'] },
  { id: 'CAM5', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR IV', requisitos: ['CA4', 'CAM4'] },
  { id: 'CINE1', nombre: 'CLÍNICA INTEGRAL DEL PACIENTE CON NECESIDADES ESPECIALES I', requisitos: ['CNNA4', 'CAM4', 'URG2'] },
  { id: 'URG3', nombre: 'URGENCIAS ODONTOLÓGICAS MULTIDISCIPLINARIAS', requisitos: ['URG2', 'CA4'] },
  { id: 'MANT3', nombre: 'MANTENCIÓN DEL ESTADO DE SALUD III', requisitos: ['MANT2', 'CA4'] },
  { id: 'PROY3', nombre: 'PROYECTO DE INVESTIGACIÓN III', requisitos: ['PROY2'] },

  { id: 'CNNA6', nombre: 'CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE IV 2', requisitos: ['CNNA5'] },
  { id: 'CA6', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO IV 2', requisitos: ['CA5'] },
  { id: 'CAM6', nombre: 'CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR IV 2', requisitos: ['CAM5'] },
  { id: 'CINE2', nombre: 'CLÍNICA INTEGRAL DEL PACIENTE CON NECESIDADES ESPECIALES II', requisitos: ['CINE1'] },
  { id: 'URG4', nombre: 'URGENCIAS MÉDICAS', requisitos: ['URG2'] },
  { id: 'MANT4', nombre: 'MANTENCIÓN DEL ESTADO DE SALUD IV', requisitos: ['MANT3'] },
  { id: 'PROY4', nombre: 'EJECUCIÓN PROYECTO DE INVESTIGACIÓN IV', requisitos: ['PROY3'] },
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
  div.classList.toggle('aprobado', estado.aprobado);
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
  document.getElementById(id).classList.remove('bloqueado');
}

function bloquearRamo(id) {
  document.getElementById(id).classList.add('bloqueado');
}

document.addEventListener('DOMContentLoaded', crearMalla);
