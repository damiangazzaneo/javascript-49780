let ingresoNombre = prompt ("Ingresa tu nombre");
let ingresoApellido = prompt ("Ingresa tu apellido");
let saludoCordial = "Bienvenido"
let nombreConcesionaria = "a Harley Bikes"
let nombreCompleto = saludoCordial + " " + ingresoNombre + " " + ingresoApellido + " " + nombreConcesionaria
alert (nombreCompleto);

let hondaTornado = 7100000
let yamahaR1 = 9100000
let superDuke = 8500000

let edadPermitida= 18;

const login = () => {
    let ingresar = false;
    for (let i = 2; i > 0; i--) {
        let edadIngresada = prompt("Ingresa tu edad expresado en números. Tienes " + i +  " intentos");
        if (edadIngresada >= edadPermitida) {
            alert("El inicio de sesión fue exitoso!");
            ingresar = true;
            break; 
        } else {
            alert("Contraseña inválida.");
        }
    }
    return ingresar;
}

if (login()) {

let cantidadDeMotos = parseInt(prompt("Ingrese cantidad de Vehiculos Automotor que desea comprar, expresado en número del 1 al 7"));
    if (isNaN(cantidadDeMotos)) {
        alert("Error, debes ingresar números.");
    }
    switch (cantidadDeMotos) {
        case 1:
            alert("Usted eligió 1");
            break;
            case 2:
            alert("Usted eligió 2");
                    break;
                    case 3:
                        alert("Usted eligió 3");
                        break;
                        case 4:
                            alert("Usted eligió 4");
                            break;
                            case 5:
                                alert("Usted eligió 5");
                                break;
                                case 6:
                                    alert("Usted eligió 6");
                                    break;
                                    case 7:
                                        alert("Usted eligió 7");
                                        break;
                                    default: 
                                    alert ("Ya enviamos a un agente de la Afip a tu domicilio");
                                        break;
}


alert("Si usted desea continuar con la compra deberá elegir el vehiculo a adquirir");
alert("Por Favor seleccione la moto escribiendo 1,2 o 3 según la que prefiera:");

let tipoDeMoto = parseInt(prompt("(1) Honda Tornado valor $7.100.000 , (2) Yamaha R1 valor $9.100.000, (3) SuperDuke 1200 valor $8.500.000, por favor escriba el nùmero de la que desee."));
if (tipoDeMoto === 1) {
alert("Tu elección fue Honda Tornado 250, se aproxima una nueva aventura");
} else if (tipoDeMoto === 2) {
alert("Tu elección fue Yamaha R1, las calles son tuyas ");
} else if (tipoDeMoto === 3) {
alert("Tu elección fue SuperDuke 1200, lo unico que verán de tu moto son las luces traseras ");
} else {
alert("No elegiste ninguna");

function preguntarDescuento() {
    let respuesta = prompt("¿Quieres acceder al descuento adheriendote al Club SocialBank? (responde si o no)");

    while (respuesta !== "si" && respuesta !== "no") {
    respuesta = prompt("Por favor, responde si o no: ¿Usted quiere acceder al descuento de su motovehiculo?");
    }

    if (respuesta === "si") {
      let descuento = 0.3; // Descuento del 30%
    let total;

    if (tipoDeMoto === 1) {
        total = hondaTornado - (hondaTornado * descuento);
    } else if (tipoDeMoto === 2) {
        total = yamahaR1 - (yamahaR1 * descuento);
    } else if (tipoDeMoto === 3) {
        total = superDuke - (superDuke * descuento);
    } else {
        alert("No te decidiste, volvé a elegir!");
    }

    alert("El costo total del vehículo con descuento es: $" + total);
    } else {
    alert("Entendido, no accederás al descuento.");
    }
}

preguntarDescuento();
alert("gracias por comprar tu proxima moto en Harley Bikes");
}
}


