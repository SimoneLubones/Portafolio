//@ts-check
let numero1 = 0;
do {
    numero1 = mostrarMenu();
    opcion(numero1);

    function opcion(numero1) {
        if (!isNaN(numero1)) {
            switch (numero1) {
                case 1:
                    cerveceria(); 
                    break;
                case 2:
                    destilados();
                    break;
                case 3:
                    gaseosas();
                    break;
                case 4:
                    vinos();
                    break;
                case 5:
                    salir();
                    break;
                default:
                    alert('Ingrese un número válido');
                    break;
            }
        } else {
            alert("Debe escribir un número válido.");
        }
    }

    function cerveceria() {
        alert('¡Ha comprado una cerveza!');
    }

    function destilados() {
        alert('¡Ha comprado una botella de destilado!');
    }

    function gaseosas() {
        alert('¡Ha comprado una gaseosa!');
    }

    function vinos() {
        alert('¡Ha comprado un vino!');
    }

    function salir() {
        alert('Gracias por su compra');
    }

    function mostrarMenu() {
        const numero1 = parseInt(prompt(`Bienvenido a la Licorería SKYNET.
        Selecciona una opción:
        1. Cervecería
        2. Destilados
        3. Gaseosas
        4. Vinos
        5. Salir`) ?? "0");
        return numero1;
    }

} while (numero1 !== 5);

console.log('Programa finalizado');
