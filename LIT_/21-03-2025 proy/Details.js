import { LitElement, html, css } from "lit";

export class Details extends LitElement{
    constructor(){
        super();
        this.dataprod = {};  
    }

    static properties = {
       dataprod: {type: Object},
    };


    static styles = css` 
        *{margin:0;padding:0;}
        #containerprod{
            width:80vw;
            height:80vh;
            display:flex;
            flex-direction:column;            
            align-items:center;
            background-color:snow;
        }

        #close{
            width:100%;
            padding-top:2vh;
            padding-right:10vw;
            display:flex;
            flex-direction:row;
            justify-content:end;
        }  

        #close img{width:5vw;height: auto;}
       
        #namecard{text-align:center;}

        #imgcard{
            height:17vh;
            margin-top: 4vh;
            width:80vw;
            display:flex;
            flex-direction:column;
            align-items:center;
            position:relative;
        }

        #imgcard img{ height:100%;width:auto;}

        #numbercard {
            position: absolute; 
            top: 40%; 
            left: 40%; 
            color: white; 
            font-size: 0.80rem; 
            padding: 5px; 
        }
        #vence {
            position: absolute; 
            top: 55%; 
            left: 40%; 
            color: white; 
            font-size: 0.70rem; 
            padding: 5px; 
        }

        #saldocard{
        margin-top:1.5vh;
        display:flex;
        flex-direction:row;
        text-align:center;
        justify-content:center;
        }

        #infocard{
            margin-top: 5vh;
            width:65vw;
            display:flex;
            flex-direction:column;
            align-items:start;
            font-size:1rem;
            font-family: 'BentonSans Regular';
            text-align:justify;
        }

        ul{ margin-bottom:3vh;}

        li{ margin-top:1.5vh;margin-left:5vw;}

    `;

    render() {
        console.log(this.dataprod)
        return html`
            <div id="containerprod">
                <div id="close">
                    <span @click=${this.backToGral}>X</span>
                </div>
                <div id="card">                    
                    <div id="namecard">
                        <h2>${this.dataprod.producto}</h2>
                    </div>  
                    <div id="imgcard">
                        <img src="${this.dataprod.imagen}">
                        <p id="numbercard">${this.dataprod.numero}</p>
                        <p id="vence">${this.dataprod.vencimiento}</p>
                    </div>              
                    <div id="saldocard">
                        <p>Saldo: $${this.dataprod.saldo}</p>
                        <p>&nbsp/ Deuda: $${this.dataprod.deuda}</p>
                    </div>              
                </div>           
                <div id="infocard">
                    <h3>Beneficios:</h3>
                    <ul>
                        ${this.dataprod.beneficios.map(beneficio => html`<li>${beneficio}.</li>`)}
                    </ul>
                </div>                           
            </div>
        `;
    }

    backToGral(){
        this.dispatchEvent(new CustomEvent('toGral', {
            detail:"",
            bubbles: true,
            composed:true
        }))
    };

}

window.customElements.define('app-details', Details);