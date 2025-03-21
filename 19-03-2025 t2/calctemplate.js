import {operaciones as operar} from './calc.js'

/**
 * Web component calculadora
 */
export class CalculadoraElement extends HTMLElement{
    constructor(){
        super();       

        this.operando1 = [];
        this.operando2 = [];
        this.resultado = null;
        this.valoperador = null;
        this.operandoactual = 1; 
        this.screenTXT = null;       
    }


    connectedCallback(){  

        // shadow root
        const shadow = this.attachShadow({ mode: "open" });

         // añadir css
         const linkElem = document.createElement("link");
         linkElem.setAttribute("rel", "stylesheet");
         linkElem.setAttribute("href", "calcstyle.css");
 
         // contenedor
         const contenedor = document.createElement("div");
         contenedor.id="calcbox";
 
         // logo
         const logo = document.createElement("div");
         logo.id = "logo";
         logo.textContent = "Calculadora Básica";
 
         // pantalla
         const outerScreen = document.createElement("div");
         outerScreen.id = "outerscreen";
 
         const screen = document.createElement("div");
         screen.id = "screen";
         outerScreen.appendChild(screen);
 
         // botones
         const buttonsContainer = document.createElement("div");
         buttonsContainer.id = "buttons";
 
        const botones = [
            { id: "btnClr", class: "boton", value:"limpia", text: "CLR" },
            { id: "btnDel", class: "boton", value:"borrar", text: "DEL" },
            { id: "btnResiduo", class: "operador", value: "residuo", text: "%" },
            { id: "btnDiv", class: "operador", value: "division", text: "/" },
            { id: "btn7", class: "numero", value: "7", text: "7" },
            { id: "btn8", class: "numero", value: "8", text: "8" },
            { id: "btn9", class: "numero", value: "9", text: "9" },
            { id: "btnX", class: "operador", value: "producto", text: "X" },
            { id: "btn4", class: "numero", value: "4", text: "4" },
            { id: "btn5", class: "numero", value: "5", text: "5" },
            { id: "btn6", class: "numero", value: "6", text: "6" },
            { id: "btnResta", class: "operador", value: "resta", text: "-" },
            { id: "btn1", class: "numero", value: "1", text: "1" },
            { id: "btn2", class: "numero", value: "2", text: "2" },
            { id: "btn3", class: "numero", value: "3", text: "3" },
            { id: "btnSuma", class: "operador", value: "suma", text: "+" },
            { id: "btn0", class: "numero", value: "0", text: "0" },
            { id: "btnDot", class:"boton", value: "punto", text: "." },
            { id: "btnResultado", class: "boton", value:"resultado", text: "=" },
        ];

        botones.forEach((boton) => {
            const button = document.createElement("button");
            button.id = boton.id;
            button.classList.add(boton.class);
            button.value = boton.value;
            button.textContent = boton.text;
            buttonsContainer.appendChild(button);
        });
  

        // sumar todo al contenedor
        shadow.appendChild(linkElem);
        contenedor.appendChild(logo);
        contenedor.appendChild(outerScreen);
        contenedor.appendChild(buttonsContainer);

        // añadir shadow
        shadow.appendChild(contenedor);



        /////////////////////////////////
        ////// añadimos listeners //////
        ////////////////////////////////


        // Botones de números
        contenedor.querySelectorAll(".numero").forEach((button) => {
            button.addEventListener("click", (event) => {
                this.getOperando(event);
                screen.textContent = this.screenTXT;
            });
        });

        // Botones de operadores
        contenedor.querySelectorAll(".operador").forEach((button) => {
            button.addEventListener("click", (event) => {
                this.getOperador(event);
                screen.textContent = this.screenTXT;
            });
        });

        // Botón de punto
        contenedor.querySelector("#btnDot").addEventListener("click", () => {
            this.getDot();
            screen.textContent = this.screenTXT;
        });

        // Botón de borrar
        contenedor.querySelector("#btnDel").addEventListener("click", () => {
            this.delChar();
            screen.textContent = this.screenTXT;
        });

        // Botón de igual
        contenedor.querySelector("#btnResultado").addEventListener("click", () => {
           this.makeOperation();
           screen.textContent = this.screenTXT;
        });

        // Botón de limpiar
        contenedor.querySelector("#btnClr").addEventListener("click", () => {
            this.clearScreen();
            screen.textContent = this.screenTXT;
        });


    }

    //////////////////////////////////
    ///////////FUNCIONESSS///////////
    /////////////////////////////////

    getOperando(event){
        const actual = this.operandoactual === 2 ? this.operando2 : this.operando1;
        if (actual.length < 8) { 
            actual.push(event.target.value);
            this.screenTXT = parseFloat(actual.join(""));
            screen.textContent = this.screenTXT;
        }
    }

    /**
     * Obtenemos el operador pulsado y limpiamos pantalla
     * @param {*} event 
     */
    getOperador(event){        
        // si ya hay una operacion previa con resultado
        if (this.resultado) {
            console.log('ya hay resultado')
            this.valoperador = event.target.value;
            this.operando1.push(this.resultado);
            this.operando2 = [];
            return
        }
        // primera operacion
        if (this.operando1.length > 0 && !this.valoperador) {
            console.log('todavia no hay resultado')
            this.operandoactual = 2;
            this.valoperador = event.target.value;
        }
        console.log(`operador ${this.valoperador} presionado`)
        this.screenTXT = null;
    }

    /**
     * Agrega el punto decimal
     */
    getDot(){
        if (this.operandoactual === 1) {
            this.operando1.length === 0 ? this.operando1.push('0.') : this.operando1.push('.');
            this.screenTXT = parseFloat(this.operando1.join(''));
        }
        if (this.operandoactual === 2) {
            this.operando2.length === 0 ? this.operando2.push('0.') : this.operando2.push('.');
            this.screenTXT = parseFloat(this.operando2.join(''));
        }
    }

    /**
     * Elimina el ùltimo caracter pulsado
     */
    delChar(){
        let act = this.operandoactual === 1 ? this.operando1 : operando2;
        if (act.length>0) {        
            act.pop();
            this.screenTXT = parseFloat(act.join(''));
        }
    }

    /**
     * Realiza la operacion matematica y si ya hay un resultado, utiliza el resultado para seguir operando
     */
    makeOperation(){
        if (this.operando1.length<1 || !this.valoperador || this.operando2.length<1) {
            console.log("Debes ingresar ambos operandos y el operador")
            return
        } 

        let valor1 = parseFloat(this.operando1.join(''));
        let valor2 = parseFloat(this.operando2.join(''));

        if (!!this.resultado) {
            this.resultado = operar(this.valoperador,this.resultado,valor2);  
        }
        else{ 
            this.resultado = operar(this.valoperador,valor1,valor2)
        }
        console.log(this.resultado)        
        this.screenTXT = this.resultado
    }

    /**
    * Limpia pantalla y vacìa todas las variables
    */
    clearScreen() {
        this.operando1 = [];
        this.operando2 = [];
        this.resultado = null;
        this.valoperador = null;
        this.screenTXT = null;
        this.operandoactual = 1;
    };


    disconnectedCallback(){}

    adoptedCallback(){}

    attributeChangedCallback(){}

}
