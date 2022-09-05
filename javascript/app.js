class Clientes {
    constructor(nombre, whatsapp, email) {
        this.nombre = nombre
        this.edad = whatsapp
        this.nacionalidad = email
    }
}

const cliente = [
    new Clientes("Carlos Perez", 190294830, "cperez@gmail.com"),
    new Clientes("Mariela Thompson", 10203303, "mthompson@gmail.com"),
    new Clientes("Miguel Losa", 10349202, "mlosa@gmail.com")
]


const filtro = cliente.filter((el) => el.edad < 30)

console.log(filtro)

const buscar = cliente.find((nac) => nac.nacionalidad === "español")

console.log(buscar)


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




campoNombre.addEventListener("input", () => {
    console.log(campoNombre.value)
    if (campoNombre.value.length < 3) {
        campoNombre.classList.add("border-danger")
        campoNombre.classList.remove("border-success")

    }
    else {
        campoNombre.classList.remove("border-danger")
        campoNombre.classList.add("border-success")
    }
})

campoLocalidad.addEventListener("input", () => {
    conole.log(campoLocalidad.value)
    if (campoLocalidad.value.length < 5) {
        campoLocalidad.classList.add("border-danger")
        campoLocalidad.classList.remove("border-success")
    }
    else {
        campoLocalidad.classList.remove("border-danger")
        campoLocalidad.classList.add("border-success")
    }

})

campoEmail.addEventListener("input", () => {
    console.log(campoEmail.value)

    if (campoEmail.value.length < 10) {
        +        campoLocalidad.classList.add("border-danger")
        campoLocalidad.classList.remove("border-success")
    }
    else {
        campoLocalidad.classList.remove("border-danger")
        campoLocalidad.classList.add("border-success")
    }

})

campoNumero.addEventListener("input", () => {
    console.log(campoNumero.value)
    if (campoEmail.value.length < 10) {
        campoLocalidad.classList.add("border-danger")
        campoLocalidad.classList.remove("border-success")
    }
    else {
        campoLocalidad.classList.remove("border-danger")
        campoLocalidad.classList.add("border-success")
    }

})

formulario.addEventListener("submit", (event) => {
    event.preventDefault

    console.log("Informacion formulario")
    const infoUsuario = {
        nombre: campoNombre.value,
        localidad: campoLocalidad.value,
        email: campoEmail.value,
        whatsapp: campoNumero.value,
        valor: campoValor.value,
        cuotas: campoCuotas.value
    }

    console.log(infoUsuario)


})



//Sweet Alert
const formHipoteca = document.querySelector('#my-form');

formHipoteca.addEventListener('submit', (e) => {
    e.preventDefault();

    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias!',
        text: 'Su formulario ha sido enviado',
    });

    let simulador = document.querySelector("#simulador")
    simulador.innerHTML = `
        <h3>Muchas gracias ${campoNombre.value} por simular tu hipoteca con Hipotecarg!</h3>
        <p>El valor del prestamo que podemos otorgarte es de U$D${campoValor.value / 4}  y el valor de cada cuota es de U$D ${(campoValor.value / 4 / campoCuotas.value) * 1.03 }</p>
    `;
});



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


//FETCH

let barriosFetch = []

const listado = document.querySelector("#listado")

fetch('./barrios.json')
    .then((resp) => resp.json())
    .then((info) => {
        barriosFetch = info
        barriosFetch.forEach((barrioJS) => {
            const div = document.createElement('div')
            div.classList.add('estiloBarrios')
            div.innerHTML = `
                <h3>${barrioJS.nombre}</h3>
                <p>${barrioJS.descr}</p>
                <img src=${barrioJS.img} alt="">
                ${barrioJS.comision === false ? '<p>Sin comision inmobilaria!</p>' : ''} 
            `;


            listado.append(div)
        })
    })


    .catch((error) => {
        console.log(error)
    })