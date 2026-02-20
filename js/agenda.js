document.write('<h1>AGENDA</h1>')
const options = [];

let active = true;

while (active) {
    let option = parseInt(prompt('Escribe un número del 1 al 3\n1: Agregar\n2: Enlistar\n3: Salir'))

    switch (option) {
        case 1:
            const value = prompt('¿Qué deseas agregar?')
            const age = prompt('¿Qué edad tiene?')
            options.push({
                id: options.length + 1,
                name: value,
                age: age,
            });
            break;
        case 2:
            alert(options.map((user)=> user.name).join(`\n`))
            break;
        case 3:
            active = false;
            alert('Adiós')
            break;
        case NaN:
            alert('El input debe ser un número')
            break;
        default:
            alert('Ese número no está en las opciones')
            break;
    }
}

options.forEach((optione) => {
    document.write(`<li>Usuario: ${optione.id} - ${optione.name} de ${optione.age} años</li>`)
})