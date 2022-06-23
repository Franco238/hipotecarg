class Clientes{
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre
        this. edad = edad
        this.nacionalidad = nacionalidad
    }
}

const cliente = [
    new Clientes ("Carlos Perez", 40, "español"),
    new Clientes ("Mariela Thompson", 52, "venezolana"),
    new Clientes ("Miguel Losa", 18,  "uruguayo")
]

function agregarUsuario () {
    let nombre = prompt("Ingrese su nombre completo")
    let edad = Number(prompt("Ingrese su edad"))
    let nacionalidad = prompt("Ingrese su nacionalidad")

    cliente.push(new Clientes(nombre, edad, nacionalidad))

}

agregarUsuario()

console.log(cliente);


const filtro = cliente.filter ((el) => el.edad < 30)

console.log(filtro)

const buscar = cliente.find ((nac) => nac.nacionalidad === "español")

console.log(buscar)

function nombre() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario")

    alert("Bienvenido " + nombreUsuario)

    let bienvenida = document.getElementById("bienvenida")


    bienvenida.innerHTML = "<h1>Bienvenido!</h1> <p>Bienvenido " + nombreUsuario + " a Hipotecarg! Lo asistiremos a lo largo de todo el proceso para conseguir su prestamo con garantia hipotecaria!</p>"


}

nombre();

let contraseña = prompt("Ingrese su contraseña")

while (contraseña !== "password") { 
    alert("Su contraseña es incorrecta")

    contraseña = prompt("Ingrese su contraseña")
}



let inmueble = prompt("Su inmueble se ubica en CABA?")

while (inmueble !== "si") { 
    alert("No podemos otorgarle una hipoteca")

    inmueble = prompt("Su inmueble se ubica en CABA?")

}

const localidad = prompt("Ingrese el barrio donde se encuentra su inmueble")

const valor = Number(prompt("Ingrese el valor de su propiedad en dolares")) 
const cuotas = Number(prompt("Ingrese en cuantas cuotas desea abonar"))

let prestamo


switch (localidad.toLowerCase()) {

    case "palermo":
        prestamo = 0.2
        break;

    case "recoleta":
        prestamo = 0.24
        break;

    case "belgrano":
        prestamo = 0.30
        break;
    
    case "nuñez":
        prestamo = 0.18
        break;

    case "microcentro":
        prestamo = 0.15
        break;

    default:
        alert("Su propiedad no aplica para otorgarle un prestamo")
        break;
}
alert("Usted puede acceder a un prestamo de U$S" + valor * prestamo + " y el valor de sus cuotas sera de u$d" + valor * prestamo * (Math.pow(1.01, cuotas)))

// class Barrios {
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
const campoWhatsapp = document.querySelector("#campoWhatsapp")



campoNombre.addEventListener("input", () => {
    console.log(campoNombre.value)

    if(campoNombre.value.length < 3){
        campoNombre.classList.add("border-danger")
        campoNombre.classList.remove("border-success")
    }
    else{
        campoNombre.classList.remove("border-danger")
        campoNombre.classList.add("border-success")
    }
})

campoLocalidad.addEventListener("input", () => {
    conole.log(campoLocalidad.value)
    if(campoLocalidad.value.length < 5){
        campoLocalidad.classList.add("border-danger")
    campoLocalidad.classList.remove("border-success")
    }    else{
        campoLocalidad.classList.remove("border-danger")
    campoLocalidad.classList.add("border-success")
    }
})

campoEmail.addEventListener("input", () => {
    console.log(campoEmail.value)

    if(campoEmail.value.length < 10){
        campoEmail.classList.add("border-danger")
        campoEmail.classList.remove("border-success")
    }
    else{
        campoEmail.classList.remove("border-danger")
        campoEmail.classList.add("border-success")
    }
})

campoWhatsapp.addEventListener("input", () => {
    console.log(campoWhatsapp.value)

    if(campoWhatsapp.value.length < 9){
        campoWhatsapp.classList.add("border-danger")
        campoWhatsapp.classList.remove("border-success")
    }
    else{
        campoWhatsapp.classList.remove("border-danger")
        campoWhatsapp.classList.add("border-success")
    }
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault

        console.log("Informacion formulario")
        console.log(campoNombre.value)
        console.log(campoLocalidad.value)
        console.log(campoEmail.value)
        console.log(campoWhatsapp.value)
    
})