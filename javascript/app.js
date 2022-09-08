const calcularHipoteca = (valorDeLaPropiedad, numeroDeCuotas) => {
    const valorDelPrestamo = valorDeLaPropiedad / 4;

    const valorDeCuota = (valorDelPrestamo / numeroDeCuotas) * 1.03;

    return {
        valorDelPrestamo,
        valorDeCuota,
    };
}

/**
 * Cargar localiades en el select del formulario
 */
let localidades = [];

(async () => {
    const localidadesSelect = document.getElementById('campoLocalidad');

    const result = await fetch('../barrios.json');
    localidades = await result.json();

    const options = localidades.map(localidad => {
        const option = document.createElement('option');
        option.value = localidad.id;
        option.textContent = localidad.nombre;

        return option;
    });

    localidadesSelect.append(...options);

    renderizasBarrios(localidades);
})();

const listado = document.querySelector("#listado")

const renderizasBarrios = (barrios) => {
    barrios.forEach((barrio) => {
        const div = document.createElement('div')
        div.classList.add('estiloBarrios')
        div.innerHTML = `
            <h3>${barrio.nombre}</h3>
            <p>${barrio.descr}</p>
            <img src=${barrio.img} alt="">
            ${barrio.comision === false ? '<p>Sin comision inmobilaria!</p>' : ''}
        `;


        listado.append(div)
    })
}

let info = document.getElementById("infoHipotecarg")
info.innerHTML = `
                <h3>Quienes somos</h3>
                <p>Somos una empresa encargada de unir inversores que busquen una buena rentabilidad en USD con clientes que busquen financiamiento para cualquier proyecto con las tasas mas bajas del mercado.</p>
                <img class="fotoDom" src="https://www.economiasimple.net/wp-content/uploads/2018/11/prestamo-hipotecario.jpg" alt="hipoteca">
                `

let mision = document.getElementById("misionHipotecarg")
mision.innerHTML = `<h3>Mision</h3>
                    <p>Nuestro objetivo principal es ser una organizacion que colabora con los sueños de las parejas jovenes, sus primeras viviendas, remodelar o expandir la suya, invertir en su negocio y cualquiera con un gran Proyecto.</p>"
                    <img class="fotoDom" src="https://epicainmobiliaria.com/wp-content/uploads/2021/08/firmando-levantamiento-de-hipoteca.jpg" alt ="hipoteca2">
                    `

//Events

const formulario = document.querySelector("#my-form")
const campoNombre = document.querySelector("#campoNombre")
const campoLocalidad = document.querySelector("#campoLocalidad")
const campoEmail = document.querySelector("#campoEmail")
const campoNumero = document.querySelector("#campoNumero")
const campoValor = document.querySelector("#campoValor")
const campoCuotas = document.querySelector("#campoCuotas")
const errores = new Map();

const mostrarError = (elementoInput, mensajeDeError) => {
    const error = document.createElement('small');
    error.textContent = mensajeDeError;
    error.classList.add('error');

    elementoInput.classList.add("border-danger")
    elementoInput.classList.remove("border-success")

    if (elementoInput.nextElementSibling) {
        elementoInput.nextElementSibling.remove();
    }
    elementoInput.after(error)
    errores.set(elementoInput.name, mensajeDeError);
}

const quitarError = (elementoInput) => {
    elementoInput.classList.remove("border-danger")
    elementoInput.classList.add("border-success")

    if (elementoInput.nextElementSibling) {
        elementoInput.nextElementSibling.remove();
    }

    errores.delete(elementoInput.name);
}

const validar = (esValido, mensajeDeError) => (e) => {
    const input = e.target;

    if (esValido(input.value)) {
        return quitarError(input);
    }

    mostrarError(input, mensajeDeError);
}

campoNombre.addEventListener(
    "input",
    validar((valor) => valor.length >= 3, 'El nombre debe tener al menos 3 caracteres')
)

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

campoEmail.addEventListener(
    "input",
    validar((valor) => EMAIL_REGEX.test(valor), 'Debe ingresar un formato de email válido')
)

campoNumero.addEventListener(
    "input",
    validar((valor) => valor.length > 12, 'El número de teléfono debe tener al menos 12 caracteres')
)

campoCuotas.addEventListener(
    "input",
    validar((valor) => Number(valor) >= 1 && Number.isInteger(+valor), 'El número de cuotas debe ser un número entero mayor a cero')
)

campoValor.addEventListener(
    "input",
    validar((valor) => Number(valor) >= 1, 'El valor de la propiedad debe ser un número mayor a cero')
)

campoLocalidad.addEventListener(
    "change",
    validar((valor) => !!localidades.find(localidad => localidad.id == valor), 'La localidad debe tener al menos 5 caracteres')
)

const hipotecas = [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = [...event.target];

    const inputElements = formElements.filter(el => el.tagName === 'INPUT');

    const selectElements = formElements.filter(el => el.tagName === 'SELECT');

    // Disparar evento input/change para correr validaciones
    inputElements.forEach(input => input.dispatchEvent(new Event('input', { bubbles: true })));

    selectElements.forEach(input => input.dispatchEvent(new Event('change', { bubbles: true })));

    const hayErrores = errores.size > 0;

    if (hayErrores) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Debe corregir los errores en los camos indicados',
        });

        return;
    }

    const { valorDelPrestamo, valorDeCuota } = calcularHipoteca(campoValor.value, campoCuotas.value);

    const infoUsuario = {
        nombre: campoNombre.value,
        localidad: campoLocalidad.value,
        email: campoEmail.value,
        whatsapp: campoNumero.value,
        valor: campoValor.value,
        cuotas: campoCuotas.value,
        valorDelPrestamo,
        valorDeCuota,
    }

    hipotecas.push(infoUsuario);

    const simulador = document.querySelector("#simulador")

    simulador.innerHTML = `
        <h3>Muchas gracias ${campoNombre.value} por simular tu hipoteca con Hipotecarg!</h3>
        <p>El valor del prestamo que podemos otorgarte es de U$D${valorDelPrestamo}  y el valor de cada cuota es de U$D ${valorDeCuota}</p>
        <button class="btn btn-primary" onclick="mostrarModal()">Lista de Calculos de Hipotecas</button>
    `;

    renderizasHipotecas(hipotecas);

    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias!',
        text: 'Su formulario ha sido enviado',
    });

    formulario.reset();
})

const hipotecasContainerDiv = document.getElementById('hipotecas');

const renderizasHipotecas = (hipotecas) => {
    hipotecasContainerDiv.innerHTML = '';

    hipotecas.forEach((hipoteca) => {
        const hipotecaDiv = document.createElement('div');

        hipotecaDiv.classList.add('hipoteca');


        hipotecaDiv.innerHTML = `
            <div class="row">
                <div class="col-md-6">Cliente: ${hipoteca.nombre}</div>
                <div class="col-md-6">Email: ${hipoteca.email}</div>
                <div class="col-md-6">Teléfono: ${hipoteca.whatsapp}</div>
                <div class="col-md-6">Valor de la propiedad: ${hipoteca.valor} USD</div>
                <div class="col-md-6">Número de cuotas: ${hipoteca.cuotas}</div>
                <div class="col-md-6">Localidad: ${localidades.find(localidad => localidad.id == hipoteca.localidad)?.nombre}</div>
            </div>
            <div class="row">
                <div class="col-md-6"><b>Monto del préstamo</b>: ${hipoteca.valorDelPrestamo} USD</div>
                <div class="col-md-6"><b>Monto de las cuotas</b>: ${hipoteca.valorDeCuota} USD</div>
            </div>
        `;

        hipotecasContainerDiv.appendChild(hipotecaDiv);
    });
}

const btnCloseModal = document.querySelector('.my-modal-close-btn');
const modal = document.getElementById('modal-hipotecas');

const cerrarModal = () => {
    modal.classList.remove('show');
}

const mostrarModal = () => {
    modal.classList.add('show')
}

btnCloseModal.addEventListener('click', cerrarModal);

modal.addEventListener('click', (e) => {
    if (e.target.matches('.my-modal')) {
        cerrarModal();
    }
})

//Toastify
const btnToastify = document.querySelector("#botonNews");

btnToastify.addEventListener("click", (e) => {
    e.preventDefault();
    Toastify({
        text: "Se ha suscripto de forma exitosa!",
        duration: 4000,
        className: 'botonToast'
    })
        .showToast()

})
