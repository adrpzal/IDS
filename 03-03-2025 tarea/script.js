const usr = "adrian";
const pwd = "123456";

let buttonLogin = document.getElementById("loginButton");
buttonLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const userTyped = document.getElementById("inputUser");
    const pwdTped = document.getElementById("inputPwd");
    console.log("sdfgfh")
    if (userTyped.value === "" || pwdTped.value === "" ) {
        console("Los campos no deben estar vacìos");
        return
    }

    if (userTyped.value !== usr || pwdTped.value !== pwd ) {
        alert("Usuario o contraseña incorrectos")
        return
    }
    else{
        // window.open("principal.html")
        window.location.href = "principal.html"
    }

    
})