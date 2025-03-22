import { LitElement, html, css } from "lit";

export class Loader extends LitElement{
    constructor(){
        super();
        this.users = []
    }
    static properties = {
        users: { type: Array }
    };


    render() {
        return html`
            <img src="img/Lightstream-2x.webp" width="700px" height="900px" style="position:absolute; top:0;left:0" >
        `;
    }

}

window.customElements.define('app-loader',Loader);