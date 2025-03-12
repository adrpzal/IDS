//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// 
function ejercicio1() {
    const productos = [
        {nombre: 'producto1', precio:'$3456.0', stock: 9},
        {nombre: 'producto2', precio:'$964.0', stock: 0},
        {nombre: 'producto3', precio:'$2045.0', stock: 54},
        {nombre: 'producto4', precio:'$56.0', stock: 0},
        {nombre: 'producto5', precio:'$4556.0', stock: 20},
        {nombre: 'producto6', precio:'$26.0', stock: 12},
        {nombre: 'producto7', precio:'$3456.0', stock: 0},
        {nombre: 'producto8', precio:'$45656.0', stock: 7},
    ]

    console.log(`La lista de productos es: ${productos.length}`);
    console.log(productos);
    
    let disponibles = [];

    productos.forEach(function (producto) {
        if (producto.stock !== 0) {
            disponibles.push(producto)        
        }
    })
        
    console.log(`La lista de productos disponibles es: ${disponibles.length}`);
    console.log(disponibles);
    
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio2() {
    const estudiantes = [
        {nombre: 'juan', materia1: 4, materia2: 5, materia3: 5, materia4: 4, materia5: 7},
        {nombre: 'luis', materia1: 9, materia2: 5, materia3: 9, materia4: 10, materia5: 5},
        {nombre: 'adrian', materia1: 6, materia2: 8, materia3: 9, materia4: 10, materia5: 7},
        {nombre: 'alan', materia1: 9, materia2: 6, materia3: 9, materia4: 10, materia5: 7},
        {nombre: 'edith', materia1: 6, materia2: 9, materia3: 9, materia4: 9, materia5: 7},
        {nombre: 'sarai', materia1: 8, materia2: 8, materia3: 9, materia4: 8, materia5: 7},
        {nombre: 'monserrat', materia1: 5, materia2: 5, materia3: 5, materia4: 5, materia5: 7}
    ]

    
    let promedios = new Map();

    estudiantes.forEach(function (estudiante) {
        let suma = estudiante.materia1 + estudiante.materia2 + estudiante.materia3 + estudiante.materia4 + estudiante.materia5
        const promedio = suma / 5
        let aprobado = (promedio < 6) ? `${promedio} (reprobado)` : `${promedio} (aprobado)`;

        promedios.set(estudiante, aprobado);
    })
  
    console.log(`Los promedios son:`);
    console.log(promedios.entries());
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio3() {
    const citas = [
        {doctor: "doctor1", paciente: 'paciente3', fecha: '2025-03-12'},
        {doctor: "doctor2", paciente: 'paciente5', fecha: '2025-03-12'},
        {doctor: "doctor3", paciente: 'paciente5', fecha: '2025-03-15'},
        {doctor: "doctor4", paciente: 'paciente6', fecha: '2025-03-12'},
        {doctor: "doctor1", paciente: 'paciente1', fecha: '2025-03-13'},
        {doctor: "doctor2", paciente: 'paciente2', fecha: '2025-03-12'},        
    ];


    let inputpaciente = document.getElementById('paciente');
    let inputdoctor = document.getElementById('doctors');
    let inputfecha = document.getElementById('fechaconsulta');
    let btnagregar = document.getElementById('addCita')
    showEjercicio('ejercicio3');

    btnagregar.addEventListener('click', function () {
        let existCita = false;

        citas.forEach(function (cita) {
            if (cita.fecha === inputfecha.value && cita.doctor === inputdoctor.value) {
                console.log('Ya existe una cita en esta fecha con el doctor seleccionado');
                alert('Ya existe una cita en esta fecha con el doctor seleccionado');
                existCita = true;
            }
        })

        if (!existCita) {
            citas.push({doctor: inputdoctor.value, paciente: inputpaciente.value, fecha: inputfecha.value})            
            showCItas();
        }
    })

    function showCItas() {
        let tabla = document.getElementById('tablacitas');
        tabla.innerHTML = '';

        citas.forEach(function (cita) {
            let fila = document.createElement('tr');
            let doctortd = document.createElement('td');
            let pacientetd = document.createElement('td');
            let fechatd = document.createElement('td');

            doctortd.textContent = cita.doctor;
            pacientetd.textContent = cita.paciente;
            fechatd.textContent = cita.fecha;

            fila.appendChild(doctortd);
            fila.appendChild(fechatd);
            fila.appendChild(pacientetd);

            tabla.appendChild(fila);
        })

    }

     

}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio4() {
   const peliculas = new Map()
    peliculas.set('pelicula1', 'accion')
    peliculas.set('pelicula2', 'drama')
    peliculas.set('pelicula3', 'accion')
    peliculas.set('pelicula4', 'suspenso')
    peliculas.set('pelicula5', 'comedia')
    peliculas.set('pelicula6', 'accion')
    peliculas.set('pelicula7', 'drama')
    peliculas.set('pelicula8', 'accion')
    peliculas.set('pelicula9', 'suspenso')
    peliculas.set('pelicula10', 'comedia')
    peliculas.set('pelicula11', 'accion')
    peliculas.set('pelicula12', 'drama')
    peliculas.set('pelicula13', 'accion')

    console.log('Las peliculas son: ');
    console.log(peliculas.entries());

    const filtradas = new Set();

    peliculas.forEach(function (genero, pelicula) {
        if (genero === "accion") {filtradas.add(pelicula)}
    })

    console.log('Las peliculas de accion son: ');
    filtradas.forEach( pelicula => console.log(pelicula))

}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio5() {
   const coleccion = [
        {titulo: "libro1", autor: 'esautor', estado: 'disponible'},
        {titulo: "libro2", autor: 'esautor', estado: 'prestado'},
        {titulo: "libro3", autor: 'esautor', estado: 'disponible'},
        {titulo: "libro4", autor: 'esautor', estado: 'prestado'},
        {titulo: "libro5", autor: 'esautor', estado: 'disponible'}
   ]

   console.log('LISTA INICIAL')
   console.log(coleccion)
   
   
   let addBook = window.prompt("Ingresa datos de libro separados por comas (titulo,autor,estado)", "libro6,otro autor,disponible")
   let bookToAdd = addBook.split(",");
   
   let libros = new Set();
   coleccion.forEach( libro => libros.add(libro.titulo))

   if (!libros.has(bookToAdd[0])) {
        let libroToAdd = {
            titulo: bookToAdd[0],
            autor: bookToAdd[1],
            estado: bookToAdd[2]
        }
        coleccion.push(libroToAdd)
   }
   else{
    console.log('Este libro ya existe en la colecciòn')
    alert('Este libro ya existe en la colecciòn')
   }
     
   console.log('LISTA FINAL')
   console.log(coleccion)

   console.log('Los libros disponibles son: ')
   coleccion.forEach(function(book) {
    if(book.estado === "disponible"){console.log(book)} 
   })


}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio6() {
   const empleados = [
    {empleado: 'empelado1', sueldo: 100},
    {empleado: 'empelado2', sueldo: 200},
    {empleado: 'empelado3', sueldo: 300},
    {empleado: 'empelado4', sueldo: 400},
    {empleado: 'empelado5', sueldo: 500},
   ]

   
   let totalNomina = empleados.reduce((acumulador, empleado) =>  acumulador + empleado.sueldo, 0)

   console.log(`La empresa debe pagar un total de $${totalNomina}`)
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio7() {
    const catalogo = new Map([
        ['producto1' , 'descripcion1 producto lorem'],
        ['producto2' , 'descripcion2 producto lorem'],
        ['producto3' , 'descripcion3 producto lorem'],
        ['producto4' , 'descripcion4 producto lorem'],
        ['producto5' , 'descripcion5 producto lorem'],
        ['producto6' , 'descripcion6 producto lorem'],
        ['producto7' , 'descripcion7 producto lorem'],
        ['producto8' , 'descripcion8 producto lorem'],
    ])

    let inputProduct = window.prompt("Ingresa producto :", "producto1")

    let existe = catalogo.has(inputProduct);
    if (!existe) {console.log(`El producto ${inputProduct} no se encuentra en el catalogo.`)}
    else{console.log(`${inputProduct} encontrado: ${catalogo.get(inputProduct)}`)}

}



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio8() {
   const usuarios = [
    {nombre: 'usario1', rol: 'administrador'},
    {nombre: 'usario2', rol: 'cliente'},
    {nombre: 'usario3', rol: 'administrador'},
    {nombre: 'usario4', rol: 'cliente'},
    {nombre: 'usario5', rol: 'cliente'},
    {nombre: 'usario6', rol: 'administrador'},
    {nombre: 'usario7', rol: 'cliente'}
   ]

   console.log('Los usuarios son: ')
   usuarios.forEach(user => console.log(user.nombre));

   
//    const admins = new Set()
   
//    usuarios.forEach(usuario => {
//        if(usuario.rol === 'administrador'){admins.add(usuario.nombre)}
//     })


    let admins = usuarios.filter(usuario => usuario.rol === "aministrador")

   console.log('Los usuarios  administradores son:')
   admins.forEach(admin => console.log(admin))
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio9() {
   const ventas = [
    {plato: 'plato1', monto: 100},
    {plato: 'plato2', monto: 100},
    {plato: 'plato3', monto: 100},
    {plato: 'plato4', monto: 100},
    {plato: 'plato5', monto: 100},
    {plato: 'plato6', monto: 100},
    {plato: 'plato7', monto: 100},
    {plato: 'plato8', monto: 100},
   ]

   let totalVendido = ventas.reduce((acumulador, venta) => acumulador + venta.monto, 0)

   console.log(`El total de ventas fue de $${totalVendido} pesos`)
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
function ejercicio10() {
    let alumnos = [
        {nombre: 'alumno1', asiste: 'si'},
        {nombre: 'alumno2', asiste: 'no'},
        {nombre: 'alumno3', asiste: 'si'},
        {nombre: 'alumno4', asiste: 'si'},
        {nombre: 'alumno5', asiste: 'no'},
    ]

    
    alumnos.forEach(alumno => {        
        let asistencia = window.prompt(`Asistiò ${alumno.nombre} ?`,"si")
        asistencia === "si" ? alumno.asiste = 'si' : alumno.asiste = 'no'
    })

    let asistieron = alumnos.filter(alumno => alumno.asiste === "si")
    console.log(`En total asisiteron ${asistieron.length} de ${alumnos.length} alumnos`)    
}




function showEjercicio(exercise) {
    let ejercicios = document.querySelectorAll('.toHide');
    ejercicios.forEach( ejercicio => ejercicio.style.display = "none");

    let divEjercicio = document.getElementById(exercise);
    divEjercicio.style.display = "flex";

}