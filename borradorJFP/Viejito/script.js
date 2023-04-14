$(document).ready(function() {
    $('.nav-item').hover(function() {
      $(this).addClass('hover');
    }, function() {
      $(this).removeClass('hover');
    });
  
    $('a.nav-link[href="' + this.location.pathname + '"]').addClass('active');
  });
  

  $(document).ready(function() {
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});


// Variables
const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('fieldset');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resumen = document.getElementById('resumen');

let currentFieldset = 0;

// Funciones
function mostrarFieldset(index) {
  fieldsets[currentFieldset].style.display = 'none';
  fieldsets[index].style.display = 'block';
  currentFieldset = index;
}

function mostrarPrevFieldset() {
  mostrarFieldset(currentFieldset - 1);
}

function mostrarNextFieldset() {
  mostrarFieldset(currentFieldset + 1);
}

function actualizarResumen() {
  const nombre = document.getElementById('nombre').value;
  const empresa = document.getElementById('empresa').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const dias = [];
  const diasCheckboxes = document.querySelectorAll('#dias input[type="checkbox"]');
  diasCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      dias.push(checkbox.value);
    }
  });
  const tipoVianda = document.getElementById('tipo-vianda').value;
  const cantidadViandas = document.getElementById('cantidad-viandas').value;
  const otrasOpciones = document.getElementById('otras-opciones').value;
  resumen.innerHTML = `
    <p><strong>Nombre y apellido:</strong> ${nombre}</p>
    <p><strong>Empresa:</strong> ${empresa}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Correo electrónico:</strong> ${email}</p>
    <p><strong>Días que quieren la vianda por semana:</strong> ${dias.join(', ')}</p>
    <p><strong>Tipo de vianda:</strong> ${tipoVianda}</p>
    <p><strong>Cantidad de viandas:</strong> ${cantidadViandas}</p>
    <p><strong>Otras opciones:</strong> ${otrasOpciones}</p>
  `;
}

function validarCampo(campo) {
  if (campo.value.trim() === '') {
    campo.classList.add('error');
    return false;
  } else {
    campo.classList.remove('error');
    return true;
  }
}

function validarFormulario() {
  let esValido = true;
  const campos = fieldsets[currentFieldset].querySelectorAll('input, select, textarea');
  campos.forEach(campo => {
    if (!validarCampo(campo)) {
      esValido = false;
    }
  });
  return esValido;
}

// Eventos
prevBtn.addEventListener('click', () => {
  mostrarPrevFieldset();
});

nextBtn.addEventListener('click', () => {
  if (validarFormulario()) {
    mostrarNextFieldset();
    if (currentFieldset === fieldsets.length - 1) {
      actualizarResumen();
      submitBtn.style.display = 'block';
      nextBtn.style.display = 'none';
    }
  }
});

submitBtn.addEventListener('click', () => {
  const pdf = generarPDF(resumen.innerHTML);
  descargarPDF(pdf);
});

// Funciones para generar y descargar el PDF
function generarPDF(html) {
  // Código para generar el PDF
}

function descargarPDF(pdf) {
  // Código para descargar el PDF
}
