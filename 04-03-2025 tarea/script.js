
document.getElementById("btnAgregar").addEventListener("click", function() {
    let inputTxt = document.getElementById("inputTxt");
    let pais = inputTxt.value;
    
    if (pais === "") return;

    let tablaCuerpo = document.getElementById("tablaCuerpo");
    let template = document.getElementById("filaTemplate");
    
    let nuevaFila = template.content.cloneNode(true);
    nuevaFila.querySelector(".pais").textContent = pais;

    tablaCuerpo.appendChild(nuevaFila);
 
    inputTxt.value = "";
});