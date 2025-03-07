let lblStep1 = document.getElementById("step1");
let lblStep2 = document.getElementById("step2");
let lblStep3 = document.getElementById("step3");
let lblStep4 = document.getElementById("step4");



let toStep2 = document.getElementById("btnStep2");
let viewStep1 = document.getElementById("formstep1");
let viewStep2 = document.getElementById("formstep2");
toStep2.addEventListener("click", function () {
    lblStep1.classList.toggle("active");
    lblStep2.classList.toggle("active");

    viewStep1.style.display = "none";
    viewStep2.style.display = "block";

    
})

let toStep1 = document.getElementById("btnStep1");
toStep1.addEventListener("click", function () {
    lblStep2.classList.toggle("active");
    lblStep1.classList.toggle("active");

    viewStep2.style.display = "none";
    viewStep1.style.display = "block";
    
})