
// Lista de tareas pendientes: pagina funcional en donde tienes 2 botones "agregar tarea" y "finalizar"
// agregar tarea despliega formulario y un botón para enviar aquel formulario que será agregado a lista general
// el boton finalzar elimina la tarea, es decir, se apreta ese botón cuando se termina la actividad


//Investigar metodos: 
//InnerText: se refiere al contenido del texto de un elemento html, teniendo en cuenta la visualización, aplicando así, los estilos del css del elemento en cuestion
//InnerHtml: se refiere al contenido del HTML completo de un elemento, pudiendo así, acceder o modificar el contenido html del elemento, incluyendo estructura y estilo
//refactorizar: tomar una porcion de codigo de equis y mejorarlo.

let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

let cuerpoTabla = document.querySelector('#cuerpo-tabla')


// Trabajar con botón "agregar tarea"
// Desplegar formulario al hacer click al botón

const agregarTarea = document.querySelector('#btn1')
const forms = document.querySelector('#formulario')

agregarTarea.addEventListener('click', function () {

    if (forms.style.display == 'block') {
        forms.style.display = 'none'
    } else {
        forms.style.display = 'block'
    }

})

//agregar tareas base a la lista

mostrarDatos()

function mostrarDatos() {

    tareas.forEach(function (actividad, indice) {
        tr = document.createElement("tr") //se crea TR
        cuerpoTabla.appendChild(tr) //appendchild sumar un hijo a cierto nodo html
        tr.innerHTML = `<td>${actividad.tarea}</td><td><button type="button" class="btn btn-danger" id="${indice}" onclick = "finalizarTarea(${indice})">Finalizar</button></td>`
    })
}

function finalizarTarea(indice) {
    tareas = tareas.filter(function (actividad, index) { //filter, devuelve un arreglo nuevo
        return indice != index  //return = retornar, corta la ejecucion del codigo
    })
    cuerpoTabla.innerHTML = " " //aqui sobreescribí la "tarea" con nada, para despues llamar al arreglo nuevo
    mostrarDatos()
}

//con el formulario desplegado, se le despliega otro boton
//Ese botón debe agregar la tarea a la lista.
//create read update delete 

let agregar = document.querySelector('#btn2')
let tareaNueva = document.querySelector('.form-control')

agregar.addEventListener('click', function () {

    if (tareaNueva.value == "") {
        alert('Completa el campo, porfavor')
    } else {
        tareas.push({ tarea: tareaNueva.value })
        cuerpoTabla.innerHTML = " "
        mostrarDatos()
    }

})


