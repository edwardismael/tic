document.write('<h1>AGENDA</h1>')
const options = [];

let active = true;

while (active) {
    let option = parseInt(prompt('Escribe un número del 1 al 3\n1: Agregar\n2: Enlistar\n3: Salir'))

    switch (option) {
        case 1:
            const value = prompt('¿Qué deseas agregar?')
            options.push(value);
            break;
        case 2:
            alert(options.join('\n'))
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

options.forEach((option) => {
    document.write(`<li>${option}</li>`)
})