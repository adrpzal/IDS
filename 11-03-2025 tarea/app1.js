//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// 
//Eliminar duplicados de una lista de productos(set)
function ejercicio1() {
    const productos = ['producto1','producto2','producto3','producto4','producto5','producto1','producto7','producto8','producto9','producto1']

    console.log(`La lista de productos es: ${productos.length}`);
    console.log(productos);
    
    const sinduplicados = new Set(productos);
    
    console.log(`La lista de productos depurada es: ${sinduplicados.size}`);
    console.log(sinduplicados);
    
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Contar palabras unicas en un texto(set)
function ejercicio2() {
    let parrafo = "Lorem ipsum error sit amet error adipisicing elit. Eos error sit error cupiditate voluptates veniam laudantium error quam."
    let palabras = parrafo.split(' ');

    const unicas = new Set(palabras);
    console.log(`El parrafo contiene ${unicas.size} palabras unicas.`);
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Verificar si un usuario ya ha iniciado sesion(set)
function ejercicio3() {
    const logedUsers = ['user1','user2','user3','user4','user5'];

    const loginAttemp = 'user3';
    console.log(`El usuario ${loginAttemp} està intentando loggearse, revisando...`);
    
    const checkLogin = new Set(logedUsers);
    const logeado = checkLogin.has(loginAttemp);
    console.log(`El usuario ${loginAttemp} ${logeado ? "ya" : "no"} está logeado.`); 

}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Lista de invitado unico en evento(set)
function ejercicio4() {
    const guestsRegistered = ['adrian','juan','edith','pedro','ana','luis','veronica','sarai'];
    const listGuests = new Set(guestsRegistered);
    
    let ingreso = window.prompt("Ingresa tu nombre",'adrian');
    let checkGuest = listGuests.has(ingreso);

    console.log(`El invitado ${ingreso} ${checkGuest ? "ya" : "no"} està registrado en la lista de invitados.`);
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Rgistro de placas de autos en un estacionamiento(set)
function ejercicio5() {
    const vehiculos = new Set(['23AKJ5', '54KJ5', '786KMN4', '234KLJH6', '324KJB8', 'SDF453']);
    let vehicleToIn = window.prompt("Ingresa tu placa", '23AKJ5').toUpperCase();

    let isRegistered = vehiculos.has(vehicleToIn);

    console.log(`El vehiculo ${vehicleToIn} ${isRegistered ? "ya" : "no"} se encuentra registrado en el estacionamiento, ${isRegistered ? "no" : "ya"} puede ingresar.`)
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Contar la frecuencia de plaabras de un texto(map)
function ejercicio6() {
    let texto = "Lorem ipsum error sit amet error adipisicing elit. Eos error sit error cupiditate voluptates veniam laudantium error quam.";
    let palabras = texto.split(' ');

    const mapeado = new Map();

    palabras.forEach(function (palabra) {
        if(!mapeado.has(palabra)){
            mapeado.set(palabra, 1)
        }
        else{
            let count = mapeado.get(palabra)
            mapeado.set(palabra, count+1)
        }        
    })

    console.log(mapeado.entries());

}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Almacenar precios de productos(map)
function ejercicio7() {
    const productos = new Map();
    productos.set("producto1", '$7000')
    productos.set("producto2", '$8000')
    productos.set("producto3", '$7000')
    productos.set("producto4", '$10000')

    let addProduct = window.prompt("Añade un producto", 'producto5');

    if (!productos.has(addProduct)) {
        let precio = window.prompt("Dame el precio", "$800");
        productos.set(addProduct, precio);
        alert(`El producto ${addProduct} se agregado con èxito.`)
    }
    else{
        console.log(`El producto ${addProduct} ya existe y su precio es ${productos.get(addProduct)}`);
        alert(`El producto ${addProduct} ya existe y su precio es ${productos.get(addProduct)}`);
    }

    console.log(productos.entries())
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Agenda telefonica copn busqueda rapida(map)
function ejercicio8() {
    const agenda = new Map();
    agenda.set("adrian", "5236587458")
    agenda.set("pedro", "5236587458")
    agenda.set("luis", "5236587458")
    agenda.set("alfonso", "5236587458")
    agenda.set("diego", "5236587458")
    agenda.set("sarai", "5236587458")
    agenda.set("alan", "5236587458")

    let nombre = window.prompt("Ingresa nùmero a buscar", 'adrian');
    let isOnAgenda = agenda.has(nombre);

    if (isOnAgenda) {alert(`El numero de ${nombre} es ${agenda.get(nombre)}`);}
    else{alert(`${nombre} no se encuentra en la agenda ):`)}
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Rgistro de votos en una eleccion(map)
function ejercicio9() {
    let votos = ['peñanieto','sheinbaum','peñanieto','sheinbaum','xochitl','sheinbaum','xochitl','obrador','peñanieto','sheinbaum','peñanieto','sheinbaum','xochitl','obrador','sheinbaum','xochitl','obrador','peñanieto','sheinbaum','xochitl','obrador','peñanieto','sheinbaum','xochitl','obrador','xochitl']

    const conteo = new Map();

    votos.forEach(function (voto) {
        if(!conteo.has(voto)){
            conteo.set(voto, 1);
        }
        else{
            let numero = conteo.get(voto);
            conteo.set(voto, numero+1)
        }
    })
    
    console.log(`Los resultados fueron:`);
    console.log(conteo.entries());
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Historial de compras de un cliente(map)
function ejercicio10() {
    const clientes = new Map();
    clientes.set("cliente1", ['compra451','compra2','compra3','compra4','compra4425','compra6']);
    clientes.set("cliente2", ['compra1','compra222','compra3','compra4','compra5','compra456']);
    clientes.set("cliente3", ['compra1','compra452','compra3','compra4','compra6']);
    clientes.set("cliente4", ['compra451','compra2','compra545','compra6545']);
    clientes.set("cliente5", ['compra2','compra4523','compra4','compra6']);

    let consulta = window.prompt("¿De quièn quieres saber el historial de compras?",'cliente2');
    if (clientes.has(consulta)) {
        let compras = clientes.get(consulta);
        console.log(`El historial de compras de ${consulta} es:`)
        compras.forEach(function (compra) {console.log(compra)})
    }
}
