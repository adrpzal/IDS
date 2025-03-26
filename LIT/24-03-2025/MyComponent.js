
import {LitElement, html, css} from 'lit'

export class MyComponent extends LitElement{
    constructor(){
        super(); //instanciar la parte del objeto que representa el padre       
        this.texto = '';
    }

    static properties = {
        texto:{
            Type: String,
            attribute: 'my-component-text'
        }
    }

    static styles = css`
        h1{
        color:greenyellow;
        }
    `

    render(){
        return html `
            <!-- shadow DOM -->
            <h1>jsjsjsjsj${this.texto}</h1>
        `
    }



}