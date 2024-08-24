// Definimos los usuarios con su RUT, contraseñas y saldo inicial
const usuarios = [
    { nombre: 'Juan Pérez', rut: '11222333-4', contraseña: 'Juan1234', saldo: 20000 },
    { nombre: 'María González', rut: '11333444-5', contraseña: 'Maria1234', saldo: 2000 },
    { nombre: 'Rosa Martínez', rut: '11444555-6', contraseña: 'Rosa1234', saldo: 3000 }
];

// Función para autenticar al usuario
function autenticarUsuario() {
    alert('¡Bienvenido a Banca en línea!');

    const rutIngresado = prompt('Ingrese su RUT (Ejemplo: 11222333-4)');
    const contraseñaIngresada = prompt('Ingrese su contraseña');
    
    // Buscar el usuario que coincida con el RUT ingresado
    const usuarioEncontrado = usuarios.find(usuario => usuario.rut === rutIngresado);
    
    // Verificar si el usuario existe y si la contraseña es correcta
    const autenticado = usuarioEncontrado && usuarioEncontrado.contraseña === contraseñaIngresada;
    
    if (autenticado) {
        alert(`¡Bienvenido/a, ${usuarioEncontrado.nombre}!`);
        mostrarMenu(usuarioEncontrado);
    } else {
        alert('RUT o contraseña incorrectos. Inténtelo de nuevo.');
        autenticarUsuario(); // Volver a intentar autenticación
    }
}

// Función para mostrar el menú de operaciones
function mostrarMenu(usuario) {
    let opcion;
    let continuar = true;
    while (continuar) {
        opcion = parseInt(prompt(`
        Seleccione una opción:
        1. Ver saldo
        2. Realizar giro
        3. Realizar depósito
        4. Salir
        `));

        switch (opcion) {
            case 1:
                verSaldo(usuario);
                break;
            case 2:
                continuar = realizarGiro(usuario);
                break;
            case 3:
                continuar = realizarDeposito(usuario);
                break;
            case 4:
                alert('Sesión terminada');
                continuar = false; 
                break;
            default:
                alert('Opción no válida. Intente nuevamente.');
        }
    }
}

// Función para ver el saldo
function verSaldo(usuario) {
    alert(`Su saldo actual es: $${usuario.saldo}`);
}

// Función para realizar un giro (retiro)
function realizarGiro(usuario) {
    let monto;
    let valido = false;

    while (!valido) {
        verSaldo(usuario); 
        monto = parseFloat(prompt('Ingrese el monto a retirar:'));
        valido = monto > 0 && monto <= usuario.saldo;
        
        if (valido) {
            usuario.saldo -= monto;
            alert(`Ha retirado $${monto}. Su nuevo saldo es: $${usuario.saldo}`);
        } else {
            alert('Monto no válido o insuficiente. Intente nuevamente.');
        }
    }

    return true; 
}

// Función para realizar un depósito
function realizarDeposito(usuario) {
    const monto = parseFloat(prompt('Ingrese el monto a depositar:'));
    const valido = monto > 0;
    
    if (valido) {
        usuario.saldo += monto;
        alert(`Ha depositado $${monto}. Su nuevo saldo es: $${usuario.saldo}`);
    } else {
        alert('Monto no válido.');
    }
    
    return valido; 
}

autenticarUsuario();
