const ramos = [
  { nombre: "DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I", semestre: "1-1", requisitos: [] },
  { nombre: "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I", semestre: "1-1", requisitos: [] },
  { nombre: "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I", semestre: "1-1", requisitos: [] },
  { nombre: "BIOLOGÍA CELULAR Y GENÉTICA", semestre: "1-1", requisitos: [] },
  { nombre: "HISTOLOGÍA GENERAL", semestre: "1-1", requisitos: [] },
  { nombre: "BASES ANATÓMICAS", semestre: "1-1", requisitos: [] },
  { nombre: "DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II", semestre: "1-2", requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL I"] },
  { nombre: "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", semestre: "1-2", requisitos: ["PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS I"] },
  { nombre: "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II", semestre: "1-2", requisitos: ["PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS I"] },
  { nombre: "HISTOLOGIA ORAL", semestre: "1-2", requisitos: ["HISTOLOGÍA GENERAL", "BIOLOGÍA CELULAR Y GENÉTICA", "BASES ANATÓMICAS"] },
  { nombre: "ANATOMÍA DE CARA Y CUELLO", semestre: "1-2", requisitos: ["BASES ANATÓMICAS", "BIOLOGÍA CELULAR Y GENÉTICA"] },
  { nombre: "SIMULACIONES PARA EL EJERCICIO PROFESIONAL I", semestre: "2-1", requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II", "PROCESOS QUÍMICOS PARA INTERVENCIONES CLÍNICAS II"] },
  { nombre: "BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA", semestre: "2-1", requisitos: ["HISTOLOGIA ORAL", "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", "ANATOMÍA DE CARA Y CUELLO"] },
  { nombre: "BASES BIOQUÍMICAS Y FISIOLÓGICAS I", semestre: "2-1", requisitos: ["HISTOLOGIA ORAL", "PROCESOS FÍSICOS PARA INTERVENCIONES CLÍNICAS II", "ANATOMÍA DE CARA Y CUELLO"] },
  { nombre: "PROMOCIÓN Y EDUCACIÓN EN SALUD I", semestre: "2-1", requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I", semestre: "2-1", requisitos: ["DESARROLLO DE DESTREZAS Y AUTOCUIDADO PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II", semestre: "2-2", requisitos: ["SIMULACIONES PARA EL EJERCICIO PROFESIONAL I"] },
  { nombre: "BASES SEMIOLÓGICAS", semestre: "2-2", requisitos: ["BASES BIOQUÍMICAS Y FISIOLÓGICAS I", "BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA"] },
  { nombre: "BASES BIOQUÍMICAS Y FISIOLÓGICAS II", semestre: "2-2", requisitos: ["BASES CIENTIFICAS DE PATOLOGÍA Y MICROBIOLOGÍA", "BASES BIOQUÍMICAS Y FISIOLÓGICAS I"] },
  { nombre: "PROMOCIÓN Y EDUCACIÓN EN SALUD II", semestre: "2-2", requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I", "PROMOCIÓN Y EDUCACIÓN EN SALUD I"] },
  { nombre: "BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD II", semestre: "2-2", requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD I"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE I", semestre: "3-1", requisitos: ["SIMULACIONES PARA EL EJERCICIO PROFESIONAL II", "BASES SEMIOLÓGICAS"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL ADULTO I", semestre: "3-1", requisitos: ["BASES SEMIOLÓGICAS", "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "CLÍNICA ODONTOLÓGICA DEL ADULTO MAYOR I", semestre: "3-1", requisitos: ["BASES SEMIOLÓGICAS", "SIMULACIONES PARA EL EJERCICIO PROFESIONAL II"] },
  { nombre: "FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS PARA EL CONTROL DE LA ENFERMEDAD I", semestre: "3-1", requisitos: ["BASES BIOQUÍMICAS Y FISIOLÓGICAS II"] },
  { nombre: "GESTIÓN Y ADMINISTRACIÓN PARA EL EJERCICIO PROFESIONAL", semestre: "3-1", requisitos: ["PROMOCIÓN Y EDUCACIÓN EN SALUD I", "PROMOCIÓN Y EDUCACIÓN EN SALUD II"] },
  { nombre: "INTERVENCIÓN FAMILIAR Y COMUNITARIA I", semestre: "3-1", requisitos: ["BASES PSICOSOCIALES Y ANTROPOLÓGICAS DE LA SALUD II", "PROMOCIÓN Y EDUCACIÓN EN SALUD II"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente II", semestre: "3-2", requisitos: ["CLÍNICA ODONTOLÓGICA DEL NIÑO Y ADOLESCENTE I"] },
  { nombre: "Fundamentos científicos y clínicos para el control de la Enfermedad II", semestre: "3-2", requisitos: ["FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS PARA EL CONTROL DE LA ENFERMEDAD I"] },
  { nombre: "Clínica Odontológica del Adulto II", semestre: "3-2", requisitos: [] },
  { nombre: "Clínica Odontológica del Adulto Mayor II", semestre: "3-2", requisitos: [] },
  { nombre: "Farmacología", semestre: "3-2", requisitos: ["FUNDAMENTOS CIENTÍFICOS Y CLÍNICOS PARA EL CONTROL DE LA ENFERMEDAD I"] },
  { nombre: "INTERVENCIÓN FAMILIAR Y COMUNITARIA II", semestre: "3-2", requisitos: [] },
  { nombre: "Clínica Odontológica del Niño y Adolescente III", semestre: "4-1", requisitos: ["Clínica Odontológica del Niño y Adolescente II"] },
  { nombre: "Clínica Odontológica del Adulto III", semestre: "4-1", requisitos: ["Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Fundamentos científicos y clínicos para el control de la Enfermedad II"] },
  { nombre: "Clínica Odontológica del Adulto Mayor III", semestre: "4-1", requisitos: ["Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Fundamentos científicos y clínicos para el control de la Enfermedad II"] },
  { nombre: "Urgencias Odontológicas I", semestre: "4-1", requisitos: ["Clínica Odontológica del Niño y Adolescente II", "Clínica Odontológica del Adulto II", "Clínica Odontológica del Adulto Mayor II", "Farmacología"] },
  { nombre: "Mantención del Estado de Salud I", semestre: "4-1", requisitos: ["INTERVENCIÓN FAMILIAR Y COMUNITARIA II"] },
  { nombre: "proyecto de investigación", semestre: "4-1", requisitos: [] },
  { nombre: "Clínica Odontológica del Niño y Adolescente III 2", semestre: "4-2", requisitos: ["Clínica Odontológica del Niño y Adolescente III"] },
  { nombre: "Clínica Odontológica del Adulto III 2", semestre: "4-2", requisitos: ["Clínica Odontológica del Adulto III"] },
  { nombre: "Clínica Odontológica del Adulto Mayor III 2", semestre: "4-2", requisitos: ["Clínica Odontológica del Adulto Mayor III"] },
  { nombre: "Urgencias Odontológicas II", semestre: "4-2", requisitos: ["Urgencias Odontológicas I"] },
  { nombre: "Mantención del Estado de Salud II", semestre: "4-2", requisitos: ["Mantención del Estado de Salud I"] },
  { nombre: "Proyecto de Investigación II", semestre: "4-2", requisitos: ["proyecto de investigación"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente IV", semestre: "5-1", requisitos: ["Clínica Odontológica del Niño y Adolescente III 2"] },
  { nombre: "Clínica Odontológica del Adulto IV", semestre: "5-1", requisitos: ["Clínica Odontológica del Adulto III 2", "Clínica Odontológica del Adulto Mayor III 2"] },
  { nombre: "Clínica Odontológica del Adulto Mayor IV", semestre: "5-1", requisitos: ["Clínica Odontológica del Adulto III 2", "Clínica Odontológica del Adulto Mayor III 2"] },
  { nombre: "Clínica Integral del Paciente con Necesidades Especiales I", semestre: "5-1", requisitos: ["Clínica Odontológica del Niño y Adolescente III 2", "Clínica Odontológica del Adulto Mayor III 2", "Urgencias Odontológicas II"] },
  { nombre: "Urgencias Odontológicas Multidisciplinarias", semestre: "5-1", requisitos: ["Urgencias Odontológicas II", "Clínica Odontológica del Adulto III 2"] },
  { nombre: "Mantención del Estado de Salud III", semestre: "5-1", requisitos: ["Mantención del Estado de Salud II", "Clínica Odontológica del Adulto III 2"] },
  { nombre: "proyecto de investigación III", semestre: "5-1", requisitos: ["Proyecto de Investigación II"] },
  { nombre: "Clínica Odontológica del Niño y Adolescente IV 2", semestre: "5-2", requisitos: ["Clínica Odontológica del Niño y Adolescente IV"] },
  { nombre: "Clínica Odontológica del Adulto IV 2", semestre: "5-2", requisitos: ["Clínica Odontológica del Adulto IV"] },
  { nombre: "Clínica Odontológica del Adulto Mayor IV 2", semestre: "5-2", requisitos: ["Clínica Odontológica del Adulto Mayor IV"] },
  { nombre: "Clínica Integral del Paciente con Necesidades Especiales II", semestre: "5-2", requisitos: ["Clínica Integral del Paciente con Necesidades Especiales I"] },
  { nombre: "Urgencias Medicas", semestre: "5-2", requisitos: ["Urgencias Odontológicas II"] },
  { nombre: "Mantención del Estado de Salud IV", semestre: "5-2", requisitos: ["Mantención del Estado de Salud III"] },
  { nombre: "Ejecución proyecto de Investigación IV", semestre: "5-2", requisitos: ["proyecto de investigación III"] },
];

// Código base igual al anterior (agrupamiento, renderizado, etc.)
const container = document.getElementById("malla-container");

function agruparPorSemestre(lista) {
  const semestres = {};
  lista.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });
  return semestres;
}

function crearRamo(ramo, mapa) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.dataset.nombre = ramo.nombre;
  div.onclick = () => {
    if (div.classList.contains("bloqueado")) return;
    div.classList.toggle("aprobado");
    actualizarEstado(mapa);
  };
  return div;
}

function actualizarEstado(mapa) {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const ramo = mapa[nombre];
    const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
      .map(d => d.dataset.nombre);
    const requisitosCumplidos = ramo.requisitos.every(req => aprobados.includes(req));
    if (requisitosCumplidos || ramo.requisitos.length === 0) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

function renderMalla() {
  const mapa = {};
  ramos.forEach(r => mapa[r.nombre] = r);
  const agrupados = agruparPorSemestre(ramos);
  const ordenSemestres = Object.keys(agrupados).sort();
  ordenSemestres.forEach(sem => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    bloque.appendChild(titulo);
    const lista = document.createElement("div");
    lista.className = "ramos";
    agrupados[sem].forEach(r => {
      const el = crearRamo(r, mapa);
      lista.appendChild(el);
    });
    bloque.appendChild(lista);
    container.appendChild(bloque);
  });
  actualizarEstado(mapa);
}

renderMalla();
