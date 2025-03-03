let botonSend = document.getElementById("sendbutton")

botonSend.addEventListener("click", function (event) {
    event.preventDefault();
    const pass = document.getElementById("pass");
    const nombre = document.getElementById("nombre");
    const acept = document.getElementById("acept");
    const option = document.getElementById("option");
    const pais = document.getElementById("pais");
    const textarea = document.getElementById("pass");

    console.log(nombre.value);
})