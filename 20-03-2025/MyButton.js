export class MyButton extends HTMLElement{
    constructor(){
        super(); //llama al constructor de la clase padre
        this.attachShadow({mode: 'open'}) //generar un sub arbol del DOM
        // this.shadowRoot
        // this.shadowRoot.querySelector
        const template = document.querySelector('#tpl');
        const clone = template.content.cloneNode(true)
        document.body.appendChild(clone)

        this.shadowRoot.innerHTML = '<button> CLICK ME</button>'
        
    }

    connectedCallback(){
        console.log('cargado')
    }

    disconnectedCallback(){
        console.log('desconectado')
    }


}