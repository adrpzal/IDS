
let posicionv = 0;
let posicionh = 0;
let tope = 300
document.addEventListener("keydown", function (event) {
   
    let pelota = document.getElementById("ball");
    let posFromStyle = pelota.style.bottom;

    if (event.code === "Space") {
        console.log(`La posicion desde style es ${posFromStyle}`)

        pelota.style.bottom = `${posicionv}px`;
        pelota.style.left = `${posicionh}px`;
        

        if (posicionv > tope) {
            tope -=20;
            posicionv -=10;          
        }
        else{
            posicionv +=10;
            posicionh +=2;
        }    

        // if (posicion < tope) {
        //     tope+=10;
        //     posicionv +=10;
        // }
    }
    
})  







