let barriosPrestamos = [
    {id: 1, nombre: "recoleta", procentaje: 0.24, comision: true, descr: "Recoleta es un área próspera, conocida por sus townhouses estilo París, antiguos palacios opulentos y boutiques de lujo"},
    {id: 2, nombre: "belgrano", procentaje: 0.30, comision: true, descr: "Belgrano cuenta con diversos enclaves residenciales lujosos alrededor de la Avenida Cabildo, una concurrida calle de compras conocida por sus marcas de moda argentinas."},
    {id: 3, nombre: "palermo", procentaje: 0.20, comision: false, descr: "Palermo es un área extensa que abarca enclaves pequeños, como los concurridos Palermo Soho y Palermo Hollywood, que albergan restaurantes eclécticos, coctelerías y tiendas de moda."},
    {id: 4, nombre: "nuñez", procentaje: 0.18, comision: false, descr:"La zona residencial y arbolada de Núñez es el hogar del Estadio Monumental Antonio Vespucio Liberti, un estadio de fútbol gigante conocido como el “El Monumental”"},
    {id: 5, nombre: "microcentro", procentaje: 0.15, comision: false, descr: "Se denomina informalmente Microcentro a una zona de la Ciudad de Buenos Aires caracterizada por la concentración de edificios administrativos y de oficinas, coincidente grosso modo con el área alrededor del centro histórico de la Plaza de Mayo."}, 
]

console.log(barriosPrestamos)

const barriosJSON = JSON.stringify(barriosPrestamos)

console.log(barriosJSON)

localStorage.setItem("barrios prestamos", barriosJSON)