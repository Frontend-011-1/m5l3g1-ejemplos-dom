// 1. Seleccionar elementos del DOM
const tareaInput = document.getElementById('tarea');
const formTarea = document.getElementById('formTarea');
const listaTareas = document.getElementById('listaTareas');
const botonAgregar = document.getElementById('botonAgregar');

// Función para agregar nueva tarea a la lista desde el input
const crearTarea = (event) => {
  if (tareaInput.value.trim() !== '') {
    // crear nuevo elemento <li>
    const nuevaTarea = document.createElement('li');

    // Asignar texto que fue capturado desde el input del form
    nuevaTarea.textContent = tareaInput.value;
    nuevaTarea.classList.add('list-group-item');

    // Inyectar elemento al DOM (dentro de la <ul> con id listaTareas)
    listaTareas.appendChild(nuevaTarea);

    // Limpiar input para la siguiente tarea
    // tareaInput.value = '';
    event.target.reset();
  } else {
    alert('Debes escribir una tarea válida');
  }
};

// // OPCION 1: Funcionalidad de agregar Tarea: Click en el boton, sin formulario
// botonAgregar.addEventListener('click', () => {
//   crearTarea();
// });

// // Al hacer enter estando en el input tambien se genera una nueva tarea
// tareaInput.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     crearTarea();
//   }
// });

// OPCION 2: Funcionalidad de agregar Tarea: Submit Form
formTarea.addEventListener('submit', (event) => {
  event.preventDefault();
  crearTarea(event);
});

// Eliminar tarea al hacer click en el <li>
// Delegación de eventos
listaTareas.addEventListener('click', (event) => {
  // Solo escucharemos el click sobre los <li>
  console.log(event);
  if (event.target.tagName === 'LI') {
    // Si es un LI, eliminamos el elemento del DOM
    event.target.remove();
  }
});
