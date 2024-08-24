//@ts-check

// Función principal que muestra el menú
function mostrarMenu() {
    let opcion = prompt(`Bienvenido al asistente virtual de Metel, Eva.
    Selecciona una opción:
    1. Boletas y pagos
    2. Señal y llamada
    3. Oferta comercial
    4. Otras consultas`);

    switch (opcion) {
        case '1':
            boletasYPagos();
            break;
        case '2':
            senalYLlamada();
            break;
        case '3':
            ofertaComercial();
            break;
        case '4':
            otrasConsultas();
            break;
        default:
            alert('La opción ingresada no es válida. Gracias por preferir nuestros servicios.');
            mostrarMenu(); // Volver a mostrar el menú si la opción es inválida
            break;
    }
}

// Función opción 1: Boletas y pagos
function boletasYPagos() {
    let subopcion = prompt(`Has seleccionado 'Boletas y pagos'.
    Selecciona una opción:
    1. Ver Boleta
    2. Pagar cuenta`);

    switch (subopcion) {
        case '1':
            alert('Haga clic aquí para descargar su boleta.');
            break;
        case '2':
            alert('Usted está siendo transferido. Espere por favor');
            break;
        default:
            alert('La opción ingresada no es válida. Gracias por preferir nuestros servicios.');
            mostrarMenu();
            break;
    }
}

// Función para la opción 2: Señal y llamada
function senalYLlamada() {
    let subopcion = prompt(`Has seleccionado 'Señal y Llamadas'.
    Selecciona una opción:
    1. Problemas con la señal
    2. Problemas con las llamadas`);

    if (subopcion === '1' || subopcion === '2') {
        let solicitud = prompt('A continuación, escriba su solicitud');
        alert(`Estimado usuario, su solicitud: "${solicitud}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
    } else {
        alert('La opción ingresada no es válida. Gracias por preferir nuestros servicios.');
        mostrarMenu();
    }
}




// Función para la opción 3: Oferta comercial
function ofertaComercial() {
    let respuesta = prompt('¡Mentel tiene una oferta comercial acorde a tus necesidades! Para conocer más información y ser asesorado personalmente por un ejecutivo escribe `SI´ y un ejecutivo te llamará. De lo contrario ingrese `NO´.');

    if (respuesta != null && respuesta.toUpperCase() === 'SI') {
        alert('Un ejecutivo contactará con usted.');
    } else if (respuesta != null && respuesta.toUpperCase() === 'NO') {
        alert('Gracias por preferir nuestros servicios.');
    } else {
        alert('La opción ingresada no es válida. Gracias por preferir nuestros servicios.');
        mostrarMenu();
    }
}

// Función para la opción 4: Otras consultas
function otrasConsultas() {
    let solicitud = prompt('A continuación, escriba su consulta');
    alert(`Estimado usuario, su consulta: "${solicitud}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
    mostrarMenu();
}

mostrarMenu();
