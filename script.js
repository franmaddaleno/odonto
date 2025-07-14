const ramos = 
  { nombre: "DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I", semestre: 1, requisitos: [] },
  { nombre: "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I", semestre: 1, requisitos: [] },
  { nombre: "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I", semestre: 1, requisitos: [] },
  { nombre: "BIOLOGÍA CELULAR Y GENÉTICA", semestre: 1, requisitos: [] },
  { nombre: "HISTOLOGÍA GENERAL", semestre: 1, requisitos: [] },
  { nombre: "BASES ANATÓMICAS", semestre: 1, requisitos: [] },
  { nombre: "DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II", semestre: 2, requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I"] },
  { nombre: "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", semestre: 2, requisitos: ["PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I"] },
  { nombre: "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II", semestre: 2, requisitos: ["PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I"] },
  { nombre: "HISTOLOGIA ORAL", semestre: 2, requisitos: ["HISTOLOGÍA GENERAL", "BIOLOGÍA CELULAR Y GENÉTICA", "BASES ANATÓMICAS"] },
  { nombre: "ANATOMÍA DE CARA Y CUELLO", semestre: 2, requisitos: ["BASES ANATÓMICAS", "BIOLOGÍA CELULAR Y GENÉTICA"] },
  { nombre: "SIMULACIONES PARA EL EJERCICIO PROFESIONAL I", semestre: 3, requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II", "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II"] },
  { nombre: "BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA", semestre: 3, requisitos: ["HISTOLOGIA ORAL", "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", "ANATOMÍA DE CARA Y CUELLO"] },
  { nombre: "BASES BIOQUÍMICAS Y FISIOLÓGICAS I", semestre: 3, requisitos: ["HISTOLOGIA ORAL", "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", "ANATOMÍA DE CARA Y CUELLO"] },
  { nombre: "PROMOCIÓN Y EDUCACIÓN EN SALUD I", semestre: 3, requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I", semestre: 3, requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II", semestre: 4, requisitos: ["SIMULACIONES PARA EL EJERCICIO PROFESIONAL I"] },
  { nombre: "BASES SEMIOLÓGICAS", semestre: 4, requisitos: ["BASES BIOQUÍMICAS Y FISIOLÓGICAS I", "BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA"] },
  { nombre: "BASES BIOQUÍMICAS Y FISIOLÓGICAS II", semestre: 4, requisitos: ["BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA", "BASES BIOQUÍMICAS Y FISIOLÓGICAS I"] },
  { nombre: "PROMOCIÓN Y EDUCACIÓN EN SALUD II", semestre: 4, requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I", "PROMOCIÓN Y EDUCACIÓN EN SALUD I"] },
  { nombre: "BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD II", semestre: 4, requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE I", semestre: 5, requisitos: ["SIMULACIONES PARA EL EJERCICIO PROFESIONAL II", "BASES SEMIOLÓGICAS"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL ADULTO I", semestre: 5, requisitos: ["BASES SEMIOLÓGICAS", "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR I", semestre: 5, requisitos: ["BASES SEMIOLÓGICAS", "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS  PARA EL CONTROL DE LA ENFERMEDAD I", semestre: 5, requisitos: ["BASES BIOQUÍMICAS Y FISIOLÓGICAS II"] },
  { nombre: "GESTIÓN Y ADMINISTRACIÓN PARA EL EJERCICIO PROFESIONAL", semestre: 5, requisitos: ["PROMOCIÓN Y EDUCACIÓN EN SALUD I", "PROMOCIÓN Y EDUCACIÓN EN SALUD II"] },
  { nombre: "INTERVENCIÓN FAMILIAR Y COMUNITARIA  I", semestre: 5, requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD II", "PROMOCIÓN Y EDUCACIÓN EN SALUD II"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente II", semestre: 6, requisitos: ["CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE I"] },
  { nombre: "Fundamentos científicos y clínicos para el control de la Enfermedad II", semestre: 6, requisitos: ["FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS  PARA EL CONTROL DE LA ENFERMEDAD I"] },
  { nombre: "Clínica Odontológica del Adulto II", semestre: 6, requisitos: [] },
  { nombre: "Clínica Odontológica del Adulto Mayor II", semestre: 6, requisitos: [] },
  { nombre: "Farmacología", semestre: 6, requisitos: ["FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS  PARA EL CONTROL DE LA ENFERMEDAD I"] },
  { nombre: "INTERVENCIÓN FAMILIAR Y COMUNITARIA  II", semestre: 6, requisitos: [] },
  { nombre: "Clínica Odontológica del Niño y Adolescente III", semestre: 7, requisitos: ["Clínica Odontológica del Niño y Adolescente II"] },
  { nombre: "Clínica Odontológica del Adulto III", semestre: 7, requisitos: ["Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Fundamentos científicos y clínicos para el control de la Enfermedad II"] },
  { nombre: "Clínica Odontológica del Adulto Mayor III", semestre: 7, requisitos: ["Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Fundamentos científicos y clínicos para el control de la Enfermedad II"] },
  { nombre: "Urgencias Odontológicas  I", semestre: 7, requisitos: ["Clínica Odontológica del Niño y Adolescente II", "Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Farmacología"] },
  { nombre: "Mantención del Estado de Salud I", semestre: 7, requisitos: ["INTERVENCIÓN FAMILIAR Y COMUNITARIA  II"] },
  { nombre: "proyecto de investigación", semestre: 7, requisitos: [] },
  { nombre: "Clínica Odontológica del Niño y Adolescente III 2", semestre: 8, requisitos: ["Clínica Odontológica del Niño y Adolescente III"] },
  { nombre: "Clínica Odontológica del Adulto III 2", semestre: 8, requisitos: ["Clínica Odontológica del Adulto III"] },
  { nombre: "Clínica Odontológica del Adulto Mayor III 2", semestre: 8, requisitos: ["Clínica Odontológica del Adulto Mayor III"] },
  { nombre: "Urgencias Odontológicas II", semestre: 8, requisitos: ["Urgencias Odontológicas  I"] },
  { nombre: "Mantención del Estado de Salud II", semestre: 8, requisitos: ["Mantención del Estado de Salud I"] },
  { nombre: "Proyecto de Investigación II", semestre: 8, requisitos: ["proyecto de investigación"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente IV", semestre: 9, requisitos: ["Clínica Odontológica del Niño y Adolescente III 2"] },
  { nombre: "Clínica Odontológica del Adulto IV", semestre: 9, requisitos: ["Clínica Odontológica del Adulto III 2", "Clínica Odontológica del Adulto Mayor III 2"] },
  { nombre: "Clínica Odontológica del Adulto Mayor IV", semestre: 9, requisitos: ["Clínica Odontológica del Adulto III 2", "Clínica Odontológica del Adulto Mayor III 2"] },
  { nombre: "Clínica Integral del Paciente con Necesidades Especiales I", semestre: 9, requisitos: ["Clínica Odontológica del Niño y Adolescente III 2", "Clínica Odontológica del Adulto Mayor III 2", "Urgencias Odontológicas II"] },
  { nombre: "Urgencias Odontológicas Multidisciplinarias", semestre: 9, requisitos: ["Urgencias Odontológicas II", "Clínica Odontológica del Adulto III 2"] },
  { nombre: "Mantención del Estado de Salud III", semestre: 9, requisitos: ["Mantención del Estado de Salud II", "Clínica Odontológica del Adulto III 2"] },
  { nombre: "proyecto de investigación III", semestre: 9, requisitos: ["Proyecto de Investigación II"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente IV 2", semestre: 10, requisitos: ["Clínica Odontológica del Niño y Adolescente IV"] },
  { nombre: "Clínica Odontológica  del Adulto IV 2", semestre: 10, requisitos: ["Clínica Odontológica del Adulto IV"] },
  { nombre: "Clínica Odontológica del Adulto Mayor IV 2", semestre: 10, requisitos: ["Clínica Odontológica del Adulto Mayor IV"] },
  { nombre: "Clínica Integral del Paciente con Necesidades Especiales II", semestre: 10, requisitos: ["Clínica Integral del Paciente con Necesidades Especiales I"] },
  { nombre: "Urgencias Medicas", semestre: 10, requisitos: ["Urgencias Odontológicas II"] },
  { nombre: "Mantención del Estado de Salud IV", semestre: 10, requisitos: ["Mantención del Estado de Salud III"] },
  { nombre: "Ejecución proyecto de Investigación IV", semestre: 10, requisitos: ["proyecto de investigación III"] }
];
];

// Crear contenedor por semestre
function crearMalla() {
  const mallaGrid = document.getElementById("malla");
  const semestres = {};

  // Agrupar por semestre
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      semestres[ramo.semestre] = [];
    }
    semestres[ramo.semestre].push(ramo);
  });

  for (const [num, ramosSemestre] of Object.entries(semestres)) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.innerText = `Semestre ${num}`;
    columna.appendChild(titulo);

    ramosSemestre.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.innerText = ramo.nombre;
      div.dataset.nombre = ramo.nombre;
      columna.appendChild(div);
    });

    mallaGrid.appendChild(columna);
  }
}

// Cargar estado desde localStorage
function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};
  for (const nombre in estado) {
    const div = document.querySelector(`.ramo[data-nombre="${nombre}"]`);
    if (div) {
      div.classList.remove("bloqueado");
      div.classList.add(estado[nombre]);
    }
  }
}

// Guardar estado en localStorage
function guardarEstado() {
  const estado = {};
  document.querySelectorAll(".ramo").forEach(div => {
    if (div.classList.contains("aprobado")) {
      estado[div.dataset.nombre] = "aprobado";
    }
  });
  localStorage.setItem("estadoRamos", JSON.stringify(estado));
}

// Revisar si un ramo ya se puede desbloquear
function actualizarBloqueos() {
  ramos.forEach(ramo => {
    const div = document.querySelector(`.ramo[data-nombre="${ramo.nombre}"]`);
    if (div && !div.classList.contains("aprobado")) {
      const completados = ramo.requisitos.every(req => {
        const divReq = document.querySelector(`.ramo[data-nombre="${req}"]`);
        return divReq && divReq.classList.contains("aprobado");
      });
      if (completados) {
        div.classList.remove("bloqueado");
      }
    }
  });
}

// Manejar clics para aprobar ramos
function manejarClicks() {
  document.querySelectorAll(".ramo").forEach(div => {
    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;
      div.classList.toggle("aprobado");
      guardarEstado();
      actualizarBloqueos();
    });
  });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  crearMalla();
  cargarEstado();
  actualizarBloqueos();
  manejarClicks();
});
