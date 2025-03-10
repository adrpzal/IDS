

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('dragstart', function(e) {
        const offsetX = e.clientX - card.getBoundingClientRect().left;
        const offsetY = e.clientY - card.getBoundingClientRect().top;

        e.dataTransfer.setData('text/plain', JSON.stringify({ offsetX, offsetY}));
    })


    document.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    
    document.addEventListener('drop', function (e) {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    
        const newX = e.clientX - data.offsetX;
        const newY = e.clientY - data.offsetY;
    
        card.style.left = `${newX}px`;
        card.style.top = `${newY}px`;
    })
    
    
})

// const card = document.querySelector('.card');
// card.addEventListener('dragstart', function(e) {
//     console.log(e);
//     const offsetX = e.clientX - card.getBoundingClientRect().left;
//     const offsetY = e.clientY - card.getBoundingClientRect().top;

//     e.dataTransfer.setData('text/plain', JSON.stringify({ offsetX, offsetY}));
// })


// document.addEventListener('dragover', function (e) {
//     e.preventDefault();
// })

// document.addEventListener('drop', function (e) {
//     const data = JSON.parse(e.dataTransfer.getData('text/plain'));

//     const newX = e.clientX - data.offsetX;
//     const newY = e.clientY - data.offsetY;

//     card.style.left = `${newX}px`;
//     card.style.top = `${newY}px`;
// })
