// Guarda botones y crea diccionario curso → requisitos
const courses = [...document.querySelectorAll(".course")];
const reqMap = {};
courses.forEach(btn => {
  const code = btn.dataset.code;
  const reqs = btn.dataset.req ? btn.dataset.req.split(",") : [];
  reqMap[code] = reqs;
  // Deshabilita inicialmente si tiene requisitos
  if (reqs.length) btn.disabled = true;
});

// Maneja clic: aprobar ramo y revisar desbloqueos
courses.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;                  // Seguridad
    btn.classList.toggle("approved");          // Marca / desmarca
    checkUnlocks();                            // Recalcula elegibilidad
  });
});

// Función que revisa cada ramo bloqueado: ¿sus requisitos están aprobados?
function checkUnlocks() {
  courses.forEach(btn => {
    const code = btn.dataset.code;
    const reqs = reqMap[code];
    if (!reqs.length) return;                  // Sin requisitos
    const allMet = reqs.every(r => {
      const reqBtn = courses.find(b => b.dataset.code === r);
      return reqBtn && reqBtn.classList.contains("approved");
    });
    btn.disabled = !allMet;
  });
}

// Al cargar, asegúrate de actualizar (por si hay prerequisitos sin aprobar)
checkUnlocks();
