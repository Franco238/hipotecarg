class Clientes{
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }
}

const cliente = [
    new Clientes ("Carlos Perez", 40, "español"),
    new Clientes ("Mariela Thompson", 52, "venezolana"),
    new Clientes ("Miguel Losa", 18,  "uruguayo")
]


const filtro = cliente.filter ((el) => el.edad < 30)

console.log(filtro)

const buscar = cliente.find ((nac) => nac.nacionalidad === "español")

console.log(buscar)


let info = document.getElementById("infoHipotecarg")
info.innerHTML = `
                <h3>Quienes somos</h3>
                <p>Somos una empresa encargada de unir inversores que busquen una buena rentabilidad en USD con clientes que busquen financiamiento para cualquier proyecto con las tasas mas bajas del mercado.</p>
                <img src="https://img.caminofinancial.com/wp-content/uploads/2019/01/18022543/Mortgage1-1024x683.jpg" alt="hipoteca">
                ` 

let mision = document.getElementById("misionHipotecarg")
mision.innerHTML = "<h3>Mision</h3><p>Nuestro objetivo principal es ser una organizacion que colabora con los sueños de las parejas jovenes, sus primeras viviendas, remodelar o expandir la suya, invertir en su negocio y cualquiera con un gran Proyecto.</p>"


//Events

const formulario = document.querySelector("#my-form")
const campoNombre = document.querySelector("#campoNombre")
const campoLocalidad = document.querySelector("#campoLocalidad")
const campoEmail = document.querySelector("#campoEmail")
const campoNumero = document.querySelector("#campoNumero")
const campoValor = document.querySelector("#campoValor")
const campoCuotas = document.querySelector("#campoCuotas")


//  let arrayDatos = []
// let simulador = document.querySelector("#simulador")
//  const simuladorHipo = () => {
//     if (campoNombre == "" || campoLocalidad == "" || campoEmail == "" || campoNumero == "" || campoValor == "" || campoCuotas == "") {
//         swal ({
//             text: "Faltan datos",
//             icon: "error"
//         })

//     }
//     else{
//         arrayDatos.push(campoCuotas, campoEmail, campoLocalidad, campoNombre, campoNumero, campoValor)
//         console.log(campoCuotas.value, campoEmail.value, campoLocalidad.value, campoNombre.value, campoNumero.value, campoValor.value)
//         console.log(localStorage)
//         campoCuotas.value = ""
//         campoEmail.value = ""
//         campoLocalidad.value = ""
//         campoNombre.value = ""
//         campoNumero.value = ""
//         campoValor.value = ""
//         setTimeout(() => {
//             simulador.innerHTML = `Gracias`
//         })
//     }
//  }


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

    if (campoEmail.value.length < 10){
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
    if(campoEmail.value.length < 10){
        campoLocalidad.classList.add("border-danger")
        campoLocalidad.classList.remove("border-success")
    }
    else{
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
//Esto estaba arriba del console log anterior



//Sweet Alert
const btnSwall = document.querySelector(".botonEnviar")

btnSwall.addEventListener('click', () => {
    
    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias!',
        text: 'Su formulario ha sido enviado',
    })
    
let simulador = document.querySelector("#simulador")
simulador.innerHTML =   `
                        <h3>"Muchas gracias ${campoNombre.value} por simular tu hipoteca con Hipotecarg!"</h3>
                        <p>"El valor del prestamo que podemos otorgarte es de U$D"${campoValor.value / 4} " y el valor de cada cuota es de U$D" ${campoValor.value / 4 / campoCuotas.value * 1,02}</p>
                        `
})



//Toastify
const btnToastify = document.querySelector("#botonNews")

btnToastify.addEventListener("click", () => {

Toastify({
    text: "Se ha suscripto de forma exitosa!",
    duration: 4000,
    className: botonToast
})
.showToast()

})

//LUXON
//se puede usar para hacer un calendario con los pagos de los prestamos (con el duration y el intervalo)

// const DateTime = luxon.DateTime

// const ahora = DateTime.now()

// console.log(ahora.toLocaleString(DateTime.DATETIME_SHORT));

// const agregar = ahora.plus({hours: 10, minutes: 20})

// console.log(agregar.toLocaleString(DateTime.DATETIME_SHORT));

//averiguar de la libreria YUP

//FETCH

let barriosFetch = []

const listado = document.querySelector("#listado")

fetch('./barrios.json')
    .then( (resp) => resp.json() )
    .then( (info) => {
        barriosFetch = info
        barriosFetch.forEach((barrioJS) => {
            const div = document.createElement('div')
            div.classList.add('estiloBarrios')
            div.innerHTML = 
                                `
                                <h3>${barrioJS.nombre}</h3>
                                <p>${barrioJS.descr}</p>
                                <img src=${barrioJS.img} alt="">
                                ${ barrioJS.comision === false ? '<p>Sin comision inmobilaria!</p>' : '' } 
                                `
            
            
            listado.append(div)
            })  
        } )


    .catch( (error) => {
        console.log(error)
    })