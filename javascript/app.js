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

// function agregarUsuario () {
//     let nombre = prompt("Ingrese su nombre completo")
//     let edad = Number (prompt("Ingrese su edad"))
//     let nacionalidad = prompt("Ingrese su nacionalidad")

//     cliente.push(new Clientes(nombre, edad, nacionalidad))

// }

// agregarUsuario()

// console.log(cliente);


const filtro = cliente.filter ((el) => el.edad < 30)

console.log(filtro)

const buscar = cliente.find ((nac) => nac.nacionalidad === "español")

console.log(buscar)

// function nombre() {
//     let nombreUsuario = prompt("Ingrese su nombre de usuario")

//     alert("Bienvenido " + nombreUsuario)

//     let bienvenida = document.getElementById("bienvenida")


//     bienvenida.innerHTML = "<h1>Bienvenido!</h1> <p>Bienvenido " + nombreUsuario + " a Hipotecarg! Lo asistiremos a lo largo de todo el proceso para conseguir su prestamo con garantia hipotecaria!</p>"


// }

// nombre();

// let contraseña = prompt("Ingrese su contraseña")

// while (contraseña !== "password") { 
//     alert("Su contraseña es incorrecta")

//     contraseña = prompt("Ingrese su contraseña")
// }


// let inmueble = prompt("Su inmueble se ubica en CABA?")

// while (inmueble !== "si") { 
//     alert("No podemos otorgarle una hipoteca")

//     inmueble = prompt("Su inmueble se ubica en CABA?")

// }

// const localidad = prompt("Ingrese el barrio donde se encuentra su inmueble")

// const valor = Number(prompt("Ingrese el valor de su propiedad en dolares")) 
// const cuotas = Number(prompt("Ingrese en cuantas cuotas desea abonar"))

// let prestamo


// switch (localidad) {

//     case "palermo":
//         prestamo = 0.2
//         break;

//     case "recoleta":
//         prestamo = 0.24
//         break;

//     case "belgrano":
//         prestamo = 0.30
//         break;
    
//     case "nuñez":
//         prestamo = 0.18
//         break;

//     case "microcentro":
//         prestamo = 0.15
//         break;

//     default:
//         alert("Su propiedad no aplica para otorgarle un prestamo")
//         break;
// }
// alert("Usted puede acceder a un prestamo de U$S" + valor * prestamo + " y el valor de sus cuotas sera de u$d" + valor * prestamo * (Math.round(Math.pow(1.01, cuotas))))

// let prestamoPer = document.getElementById("prestamoPer")
// prestamoPer.innerHTML = "<h3>Acerca de su prestamo personalizado</h3><p>Gracias a su inmueble ubicado en " + localidad +", usted puede acceder a un prestamo de U$S" + valor * prestamo + " y el valor de sus cuotas sera de u$d " + (valor/cuotas)
// class Barrios 
//     constructor(ubicacion, porcentaje){
//         this.ubicacion = ubicacion;
//         this.porcentaje = porcentaje;
//     }
// }

// const departemento = [];
// departemento.push(new departemento("microcentro", 0.15));
// departemento.push(new departemento("nuñez", 0.18));
// departemento.push(new departemento("belgrano", 0.30));
// departemento.push(new departemento("recoleta", 0.24));
// departemento.push(new departemento("palermo", 0.20));

/* dom */

let info = document.getElementById("infoHipotecarg")
info.innerHTML = "<h3>Quienes somos</h3><p>Somos una empresa encargada de unir inversores que busquen una buena rentabilidad en USD con clientes que busquen financiamiento para cualquier proyecto con las tasas mas bajas del mercado.</p>" 

let mision = document.getElementById("misionHipotecarg")
mision.innerHTML = "<h3>Mision</h3><p>Nuestro objetivo principal es ser una organizacion que colabora con los sueños de las parejas jovenes, sus primeras viviendas, remodelar o expandir la suya, invertir en su negocio y cualquiera con un gran Proyecto.</p>"


//Events

const formulario = document.querySelector("#my-form")
const campoNombre = document.querySelector("#campoNombre")
const campoLocalidad = document.querySelector("#campoLocalidad")
const campoEmail = document.querySelector("#campoEmail")
const campoNumero = document.querySelector("#campoNumero")



campoNombre.addEventListener("input", () => {
    console.log(campoNombre.value)

    campoNombre.value.length < 3 ? campoNombre.classList.add("border-danger") && campoNombre.classList.remove("border-success") : campoNombre.classList.remove("border-danger") && campoNombre.classList.add("border-success")

})

campoLocalidad.addEventListener("input", () => {
    conole.log(campoLocalidad.value)

    campoLocalidad.value.length < 5 ? campoLocalidad.classList.add("border-danger") && campoLocalidad.classList.remove("border-success") : campoLocalidad.classList.remove("border-danger") && campoLocalidad.classList.add("border-success")
})

campoEmail.addEventListener("input", () => {
    console.log(campoEmail.value)

    campoEmail.value.length < 10 ? campoLocalidad.classList.add("border-danger") && campoLocalidad.classList.remove("border-success") : campoLocalidad.classList.remove("border-danger") && campoLocalidad.classList.add("border-success")

})

campoNumero.addEventListener("input", () => {
    console.log(campoNumero.value)
    campoEmail.value.length < 10 ? campoLocalidad.classList.add("border-danger") && campoLocalidad.classList.remove("border-success") : campoLocalidad.classList.remove("border-danger") && campoLocalidad.classList.add("border-success")

})

formulario.addEventListener("submit", (event) => {
    event.preventDefault

        console.log("Informacion formulario")
        
        const infoUsuario = {
            nombre: campoNombre.value,
            localidad: campoLocalidad.value,
            email: campoEmail.value,
            whatsapp: campoNumero.value
        }
        
        console.log(infoUsuario)


})

//Tarjeta por cada barrio que otorgan prestamos (DOM)
const divBarrios = document.querySelector("#barriosAceptados")


barriosPrestamos.forEach((barrioJS) => {
const div = document.createElement('div')
div.classList.add('estiloBarrios')
div.innerHTML = 
                    `
                    <h2>"Barrios en los que trabajamos"</h2>
                    <h3>${barrioJS.NOMBRE}</h3>
                    <p>${barrioJS.descr}</p>
                    ${ barrioJS.comision === false ? '<p>Sin comision inmobilaria!</p>' : "" } 
                    `


divBarrios.append(div)
})


//JSON

const localidadesPrestamos = localStorage.getItem("barrios prestamos")

console.log(localidadesPrestamos)

//Sweet Alert
const btnSwall = document.querySelector("#botonEnviar")

btnSwall.addEventListener('click', () => {
    Swal.fire({
    icon: 'success',
    title: 'Su formulario ha sido enviado!',
    showConfirmButton: false,
    timer: 3000
    })
})

//Toastify
const btnToastify = document.querySelector("#botonNews")

btnToastify.addEventListener("click", () => {

Toastify({
    text: "Se ha suscripto de forma exitosa!",
    duration: 2500,
    className: botonToast
}).showToast()

})

//LUXON
//se puede usar para hacer un calendario con los pagos de los prestamos (con el duration y el intervalo)

const DateTime = luxon.DateTime

const ahora = DateTime.now()

console.log(ahora.toLocaleString(DateTime.DATETIME_SHORT));

const agregar = ahora.plus({hours: 10, minutes: 20})

console.log(agregar.toLocaleString(DateTime.DATETIME_SHORT));

//averiguar de la libreria YUP