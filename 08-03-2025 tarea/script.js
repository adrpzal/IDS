
// leemos todas las cards y escuchamos
let cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('dragstart', function (e) {       
        // guardamos id de card
        const cardData = {cardId: card.id};

        // guardamos datos de tarjeta en el evento de arrastre
        e.dataTransfer.setData('application/json', JSON.stringify(cardData));  
    }); 
});

// leemos todas las columnas y escuchamos sus eventos de soltado
const columns = document.querySelectorAll('div');
columns.forEach(function (column) {

    column.addEventListener('dragover', function (e) {e.preventDefault()});

    column.addEventListener('drop', function (e) {
        e.preventDefault();

        // obtenemos datos de la tarjeta arrastrada e identificamos
        const cardData = JSON.parse(e.dataTransfer.getData('application/json'));
        const card = document.getElementById(cardData.cardId);

        // si la card no està en la columna entonces se añade
        if (card.parentNode !== column) {column.appendChild(card)}
        else {console.error("Error", card)}

        reCount();
    });
});

// realizamos conteo de cards x columna
function reCount() {
    let cardsCount = 0;
    
    let todoDiv = document.getElementById("todo");
    cardsCount = todoDiv.getElementsByClassName("card").length;
    let toDosTxt = document.getElementById("todocount");
    toDosTxt.textContent = cardsCount;

    let inprogressDiv = document.getElementById("inprogress")
    cardsCount = inprogressDiv.getElementsByClassName("card").length;
    let inProgressTxt = document.getElementById("inprogcount");
    inProgressTxt.textContent = cardsCount;

    let coderevDiv = document.getElementById("codereview")
    cardsCount = coderevDiv.getElementsByClassName("card").length;
    let codeReviewTxt = document.getElementById("codrevcount");
    codeReviewTxt.textContent = cardsCount;

    let donesDiv = document.getElementById("done");
    cardsCount = donesDiv.getElementsByClassName("card").length;
    let doneTxt = document.getElementById("donecount");
    doneTxt.textContent = cardsCount;     
}


let inputTxt = document.getElementById("inputFilter");
// filtramos cards segun el input
inputTxt.addEventListener("input", function (event) {

    let txtToFilter = event.target.value.toLowerCase();

    cards.forEach(function (card) {
        // leemos tarea de cada card
        let cardTask = card.querySelector(".task").textContent.toLowerCase();        
        
        if (!cardTask.includes(txtToFilter)) {card.style.display = "none"}
        else {card.style.display = "block"}
    })

})

// document.addEventListener("load", function () {reCount()})
window.addEventListener("load", function () {reCount()})