import { LitElement, html, css } from "lit";

export class Loader extends LitElement{
    constructor(){
        super();
        this.users = []
    }
    static properties = {
        users: { type: Array }
    };

    static styles = css`
        *{
        margin:0;
        padding:0;
        }
        #loadercontainer{
            width:100vw;
            height:100vh;
            display:flex;
            flex-direction:column;            
            align-items:center;
            justify-items:center;
            overflow:hidden;
        }

        img{   
            position:absolute; 
            top:0;
            height:100%;   
            object-position:center;
            object-fit:contain;     
        }
    `


    render() {
        return html`
            <div id="loadercontainer">
                <img src="img/Lightstream-2x.webp">
            </div>
        `;
    }

}

window.customElements.define('app-loader',Loader);