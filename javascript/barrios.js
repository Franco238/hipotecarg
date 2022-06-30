let barriosPrestamos = [
    {id: 1, nombre: "recoleta", procentaje: 0.24},
    {id: 2, nombre: "belgrano", procentaje: 0.30},
    {id: 3, nombre: "palermo", procentaje: 0.20},
    {id: 4, nombre: "nuñez", procentaje: 0.18},
    {id: 5, nombre: "microcentro", procentaje: 0.15}, 
]

console.log(barriosPrestamos)

const barriosJSON = JSON.stringify(barriosPrestamos)

console.log(barriosJSON)

localStorage.setItem("barrios prestamos", barriosJSON)