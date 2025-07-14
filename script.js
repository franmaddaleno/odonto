const ramos = {};

// Inicializa los ramos: si no tienen requisitos están desbloqueados, si tienen requisitos bloqueados
document.querySelectorAll('.ramo').forEach(div => {
  const id = div.dataset.id;
  const requisitos = div.dataset.requisitos ? div.dataset.requisitos.split(',').filter(x => x) : [];
  ramos[id] = {
    element: div,
    requisitos: requisitos,
    abre: div.dataset.abre ? div.dataset.abre.split(',').filter(x => x) : [],
    estado: requisitos.length === 0 ? 'unlocked' : 'locked',
  };

  if (ramos[id].estado === 'unlocked') {
    div.classList.remove('locked');
  } else {
    div.classList.add('locked');
  }
});

function puedeAprobar(ramoId) {
  return ramos[ramoId].estado === 'unlocked';
}

function aprobarRamo(ramoId) {
  if (!puedeAprobar(ramoId)) return;

  // Marcar aprobado
  ramos[ramoId].estado = 'aprobado';
  const el = ramos[ramoId].element;
  el.classList.add('aprobado');
  el.classList.remove('locked');
  el.style.cursor = 'default';

  // Desbloquear los que dependen de este ramo
  ramos[ramoId].abre.forEach(depId => {
    if (!ramos[depId]) return;
    const requisitos = ramos[depId].requisitos;
    const todosAprobados = requisitos.every(reqId => ramos[reqId]?.estado === 'aprobado');
    if (todosAprobados && ramos[depId].estado !== 'aprobado') {
      ramos[depId].estado = 'unlocked';
      ramos[depId].element.classList.remove('locked');
      ramos[depId].element.style.cursor = 'pointer';
    }
  });
}

Object.values(ramos).forEach(ramo => {
  ramo.element.addEventListener('click', () => {
    aprobarRamo(ramo.element.dataset.id);
  });
});
