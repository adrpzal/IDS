import { LitElement, html, css } from "lit";

export class ImageCarousel extends LitElement{
    constructor(){
        super();
        this.images = []; //inicializar valor por defecto de las propiedades
        this.componentName =''
    }

    static properties = {
        // aqui se setean, lo que este aqui v aa ser observada por lit
        images:{
            type: Array
        },
        componentName:{
            type: String
        }
    }

    //custom properties
    static styles = css`
        button{
            background-color: var(--btn-bg-color, black);
        }
    `;


    clickButton(){
        this.componentName = 'images';
        this.dispatchEvent(new CustomEvent('click-btn-shadow',
            {
               bubbles: true,
               composed: true,
               detail:0 
            }));
        this.images = [...this.images, 'URL']
    }

    // metodo ciclo de vida del componente
    render(){
        return html`
            <h1>${this.componentName}</h1>
            <button @click=${this.clickButton}>BOTON</button>
            <ul>
                ${this.images.map(image =>{
                    return html`<li>${image}</li>`
                })}
            </ul>
        `;
    }

}