// I. Acceder a elementos

// 1. Capturar elemento por su ID -> getElementById
const titulo = document.getElementById('titulo');
console.log(titulo); // muestra el elemento html completo
console.log('Contenido de texto del elemento:', titulo.textContent); // muestra contenido de texto del titulo

titulo.textContent = 'Título cambiado desde JS';

// 2. Capturar elementos por su clase -> getElementsByClassName
const parrafos = document.getElementsByClassName('descripcion');
console.log(parrafos); // devuelve coleccion de elementos (parecido a un array)
console.log(
  parrafos[3]
    ? 'Existe 4to parrafo con clase .descripcion'
    : 'No existe 4to parrafo con clase .descripcion',
);
console.log(parrafos[parrafos.length - 1]); // devuelve último elemento parrafo
console.log(parrafos[0]);
const arrParrafos = [...parrafos]; // Crea un array de parrafos (para tener acceso a metodos de array)
console.log(arrParrafos);

const seccionParrafos = document.getElementById('seccion-parrafos');
console.log(seccionParrafos.lastElementChild); // devuelve último hijo de seccionParrafos
console.log(seccionParrafos.firstElementChild); // devuelve primer hijo de seccionParrafos

const primerParrafo = seccionParrafos.firstElementChild;
console.log(primerParrafo.nextElementSibling); // devuelve al siguiente hermano (sibling node)

// 3. Capturar elemento por un selector sintaxis CSS
const parrafoClase = document.querySelector('.descripcion');
console.log(parrafoClase); // solo devuelve primera coincidencia

const cuartoParrafo = document.querySelector('.descripcion:nth-child(4)');
console.log(cuartoParrafo);

// 4. querySelectorAll
const parrafosClase = document.querySelectorAll('.descripcion');
parrafosClase.forEach((p) => console.log('Con querySelectorAll', p));

// 5. getElementsByTagName -> devuelve coleccion de elementos html
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// ----------------------------------------------------------------

// II. Modificar elementos
// 1. Modificar contenido de un elemento -> textContent
cuartoParrafo.textContent = 'Párrafo modificado desde JS';

// 2. Modificar con innerHTML
const divResultado = document.getElementById('resultado');
divResultado.innerHTML = `
  <h2>Usando innerHTML</h2>
  <ol>
    <li>Uno</li>
    <li>Dos</li>
    <li>Tres</li>
  </ol>
`;

// III. Modificar Atributos
titulo.style.backgroundColor = 'black';
titulo.style.color = 'white';
titulo.style.borderRadius = '5px';
titulo.style.padding = '8px';

const modificarAttr = document.getElementById('modificar-atributos');
modificarAttr.classList.add('bg-dark', 'text-white');
cuartoParrafo.classList.remove('text-muted');
titulo.classList.toggle('display-1');

const enlace = document.querySelector('a');
// enlace.href = 'http://www.latercera.cl'

console.log(enlace.getAttribute('href'));
enlace.setAttribute('href', 'https://www.google.com');

enlace.setAttribute('target', '_blank');

// IV. Crear elementos
const nuevoDiv = document.createElement('div');
nuevoDiv.classList.add('bg-secondary', 'm-5');
nuevoDiv.style.height = '50px';
nuevoDiv.style.width = '50px';

const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoDiv);

const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Párrafo nieto de contenedor';
nuevoDiv.appendChild(nuevoParrafo);

// Eliminar elemento
nuevoParrafo.remove();
contenedor.removeChild(nuevoDiv);
