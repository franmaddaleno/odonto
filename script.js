const semestres = {
  "1° Semestre": [
    { id: "autocuidado1", nombre: "Desarrollo de destrezas y autocuidado I" },
    { id: "fisica1", nombre: "Procesos físicos para intervenciones clínicas I" },
    { id: "quimica1", nombre: "Procesos químicos para intervenciones clínicas I" },
    { id: "biologia", nombre: "Biología célular y genética" },
    { id: "histologia", nombre: "Histología general" },
    { id: "anatomia", nombre: "Bases anatómicas" }
  ],
  "2° Semestre": [
    { id: "autocuidado2", nombre: "Desarrollo de destrezas y autocuidado II", prereq: "autocuidado1" },
    { id: "fisica2", nombre: "Procesos físicos para intervenciones clínicas II", prereq: "fisica1" },
    { id: "quimica2", nombre: "Procesos químicos para intervenciones clínicas II", prereq: "quimica1" },
    { id: "histologia_oral", nombre: "Histología oral", prereq: "histologia" },
    { id: "anatomia_cc", nombre: "Anatomía de cabeza y cuello", prereq: "anatomia" }
  ],
  "3° Semestre": [
    { id: "simulaciones1", nombre: "Simulaciones para el ejercicio profesional I", prereq: "autocuidado2" },
    { id: "patologia_micro", nombre: "Bases científicas de patología y microbiología", prereq: "histologia_oral" },
    { id: "bioquimica1", nombre: "Bases bioquímicas y fisiológicas I", prereq: "histologia_oral" },
    { id: "promocion1", nombre: "Promoción y educación en salud I", prereq: "autocuidado2" },
    { id: "psicosocial1", nombre: "Bases psicosociales y antropológicas de la salud I", prereq: "autocuidado2" }
  ],
  "4° Semestre": [
    { id: "simulaciones2", nombre: "Simulaciones para el ejercicio profesional II", prereq: "autocuidado2" },
    { id: "semiologicas", nombre: "Bases semiológicas", prereq: "patologia_micro" },
    { id: "bioquimica2", nombre: "Bases bioquímicas y fisiológicas II", prereq: "bioquimica1" },
    { id: "promocion2", nombre: "Promoción y educación en salud II", prereq: "promocion1" },
    { id: "psicosocial2", nombre: "Bases psicosociales y antropológicas de la salud II", prereq: "psicosocial1" }
  ],
  "5° Semestre": [
    { id: "clinica_nino1", nombre: "Clínica Odontológica del Niño y Adolescente I", prereq: "simulaciones2" },
    { id: "clinica_adulto1", nombre: "Clínica Odontológica del adulto I", prereq: "simulaciones2" },
    { id: "clinica_mayor1", nombre: "Clínica Odontológica del adulto mayor I", prereq: "simulaciones2" },
    { id: "fundamentos1", nombre: "Fundamentos científicos y clínicos I", prereq: "bioquimica2" },
    { id: "gestion", nombre: "Gestión y administración profesional", prereq: "promocion1" },
    { id: "intervencion1", nombre: "Intervención familiar y comunitaria I", prereq: "psicosocial2" }
  ],
  "6° Semestre": [
    { id: "clinica_nino2", nombre: "Clínica Odontológica del Niño y Adolescente II", prereq: "clinica_nino1" },
    { id: "clinica_adulto2", nombre: "Clínica Odontológica del adulto II", prereq: "clinica_adulto1" },
    { id: "clinica_mayor2", nombre: "Clínica Odontológica del adulto mayor II", prereq: "clinica_mayor1" },
    { id: "fundamentos2", nombre: "Fundamentos científicos y clínicos II", prereq: "fundamentos1" },
    { id: "farmacologia", nombre: "Farmacología", prereq: "fundamentos1" },
    { id: "intervencion2", nombre: "Intervención familiar y comunitaria II", prereq: "intervencion1" }
  ],
  "7° Semestre": [
    { id: "clinica_nino3", nombre: "Clínica Odontológica del Niño y Adolescente III", prereq: "clinica_nino2" },
    { id: "clinica_adulto3", nombre: "Clínica Odontológica del adulto III", prereq: "clinica_adulto2" },
    { id: "clinica_mayor3", nombre: "Clínica Odontológica del adulto mayor III", prereq: "clinica_mayor2" },
    { id: "urgencias1", nombre: "Urgencias Odontológicas I", prereq: "clinica_nino2" },
    { id: "mantencion1", nombre: "Mantención del Estado de Salud I", prereq: "intervencion2" },
    { id: "investigacion1", nombre: "Proyecto de investigación I" }
  ],
  "8° Semestre": [
    { id: "clinica_nino4", nombre: "Clínica Odontológica del Niño y Adolescente III-2", prereq: "clinica_nino3" },
    { id: "clinica_adulto4", nombre: "Clínica Odontológica del adulto III-2", prereq: "clinica_adulto3" },
    { id: "clinica_mayor4", nombre: "Clínica Odontológica del adulto mayor III-2", prereq: "clinica_mayor3" },
    { id: "urgencias2", nombre: "Urgencias Odontológicas II", prereq: "urgencias1" },
    { id: "mantencion2", nombre: "Mantención del Estado de Salud II", prereq: "mantencion1" },
    { id: "investigacion2", nombre: "Proyecto de investigación II", prereq: "investigacion1" }
  ],
  "9° Semestre": [
    { id: "clinica_nino5", nombre: "Clínica Odontológica del Niño y Adolescente IV", prereq: "clinica_nino4" },
    { id: "clinica_adulto5", nombre: "Clínica Odontológica del adulto IV", prereq: "clinica_adulto4" },
    { id: "clinica_mayor5", nombre: "Clínica Odontológica del adulto mayor IV", prereq: "clinica_mayor4" },
    { id: "integral1", nombre: "Clínica Integral de Pacientes Especiales I", prereq: "urgencias2" },
    { id: "urgencias_multi", nombre: "Urgencias Odontológicas Multidisciplinarias", prereq: "urgencias2" },
    { id: "mantencion3", nombre: "Mantención del Estado de Salud III", prereq: "mantencion2" },
    { id: "investigacion3", nombre: "Proyecto de investigación III", prereq: "investigacion2" }
  ],
  "10° Semestre": [
    { id: "clinica_nino6", nombre: "Clínica Odontológica del Niño y Adolescente IV-2", prereq: "clinica_nino5" },
    { id: "clinica_adulto6", nombre: "Clínica Odontológica del adulto IV-2", prereq: "clinica_adulto5" },
    { id: "clinica_mayor6", nombre: "Clínica Odontológica del adulto mayor IV-2", prereq: "clinica_mayor5" },
    { id: "integral2", nombre: "Clínica Integral de Pacientes Especiales II", prereq: "integral1" },
    { id: "urgencias_medicas", nombre: "Urgencias médicas", prereq: "urgencias2" },
    { id: "mantencion4", nombre: "Mantención del Estado de Salud IV", prereq: "mantencion3" },
    { id: "investigacion4", nombre: "Proyecto de investigación IV", prereq: "investigacion3" }
  ]
};

function crearMalla() {
  const grid = document.querySelector('.grid');
  for (const [semestre, ramos] of Object.entries(semestres)) {
    const box = document.createElement('div');
    box.classList.add('semestre');
    box.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      div.dataset.id = ramo.id;
      div.textContent = ramo.nombre;
      if (ramo.prereq) {
        div.dataset.prerq = ramo.prereq;
        div.classList.add('locked');
      }
      box.appendChild(div);
    });
    grid.appendChild(box);
  }
}

function marcarDesmarcar(ramo) {
  if (ramo.classList.contains('aprobado')) {
    ramo.classList.remove('aprobado');
    localStorage.removeItem(ramo.dataset.id);
  } else {
    ramo.classList.add('aprobado');
    localStorage.setItem(ramo.dataset.id, 'aprobado');
  }
}

function desbloquearRamos() {
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereq = ramo.dataset.prerq;
    if (localStorage.getItem(prereq) === 'aprobado') {
      ramo.classList.remove('locked');
      ramo.style.background = '#f8bbd0';
      ramo.style.cursor = 'pointer';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  crearMalla();
  document.querySelectorAll('.ramo').forEach(ramo => {
    if (localStorage.getItem(ramo.dataset.id) === 'aprobado') {
      ramo.classList.add('aprobado');
    }
    ramo.addEventListener('click', () => {
      if (!ramo.classList.contains('locked')) {
        marcarDesmarcar(ramo);
        desbloquearRamos();
      }
    });
  });
  desbloquearRamos();
});

