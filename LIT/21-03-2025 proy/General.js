import { LitElement, html, css } from "lit";
import {choose} from 'lit/directives/choose.js';
import {when} from 'lit/directives/when.js';
import { Details } from "./Details";
export class General extends LitElement{
    constructor(){
        super();
        this.datausr = {
            username: '',
            password: '',
            nombre: '',
            productos: [],
        };
        this.hidescroll = true;
        this.hidemoretag = false;
        this.showDetail = false;
        this.cardselected = null;
    }
    
    static properties = {
        datausr: { type: Object},
        hidescroll : { type: Boolean },
        hidemoretag : {type: Boolean },
        productos : {type: Object },
        showDetail: {type: Boolean},
        cardselected:{type:Number}
    };


    static styles = css` 
        #containergral{
            width:80vw;
            height:80vh;
            display:flex;
            flex-direction:column;            
            align-items:center;
            background-color:white;
        }
        
        #close{
            width:100%;
            padding-top:2vh;
            padding-right:10vw;
            display:flex;
            flex-direction:row;
            justify-content:end; 
        }  
        
        #close span{
         font-size:0.9rem;
            text-align:end;
            color:black;
        }

        #welcome{
            height:4vh;
            display:flex;
            justify-content: center;
            color: black;
            font-family: 'BentonSans Regular';        
            text-align-center;
        }  


        #containerproducts{
            margin-top: 3vh;
            padding-top:2vh
            height:70vh;
            width:80vw;
            display:flex;
            flex-direction:column;
            align-items:center;
            max-height:73vh;
            font-family: 'BentonSans Regular';
            
        }

        .product{
            display:flex;
            justify-items:center;
            margin-top: 3vh;
            margin-left:8vw;
            margin-right:8vw;
            font-size:1.5rem;
            background-color: snow;
            border-radius:10px;   
            font-family: 'BentonSans Regular';   
            position:relative;   
            border:solid 1px gray;  
        }
        
        .product img{
            border-radius:10px;
            width:100%;
            height:auto;
            opacity:0.9;
        }
        
        .more{
            height:3vh;
            padding-top:1vh;
            text-align:center;
            color:var(--gral-bg-color, blue);
            border-top:solid 1px;
            font-size: 1rem;
        }

        .more:hover{ color:var(--sky-blue-light-color, black); }

        span{
        text-align:center;
        width:100%
        }

        #numbercard {
            position: absolute; 
            bottom: 30%; 
            left: 37%; 
            color: white; 
            font-size: 0.85rem; 
            background-color: rgba(0, 0, 0, 0.31); 
            padding: 5px; 
        }

        .vencimiento{font-size:0.9rem;}

        .product img:hover{opacity: 1;}
        
        ::-webkit-scrollbar{width:2px;}
        ::-webkit-scrollbar-track{background:var(--sky-blue-light-color, black);}
        ::-webkit-scrollbar-thumb{background:var(--gral-bg-color, blue);}
        ::-webkit-scrollbar-thumb:hover{background:var(--navi-blue-color, red);}

    `;


    render() {
        return html`
            
            
            ${choose(this.showDetail,[
                [true, ()=> html` <app-details .dataprod=${this.datausr.productos[this.cardselected]} @toGral=${this.goToGral}></app-details>`],
                [false, ()=>  html`
                    <div id="containergral">
                        <div id="close"><span @click=${this.salte}>X</span></div>
                        <div id="welcome">
                            <h3>Bienvenido(a) ${this.datausr.nombre}</h3>
                        </div>
                        <div id="containerproducts" style="overflow-y: ${this.hidescroll ? "hidden" : "scroll"}">  
                            ${this.datausr.productos.map((product, index) =>{
                                return html`
                                        <div class="product">
                                            <img src="${product.imagen}" @click=${this.clickProduct} id="${index}" loading="lazy">
                                            <p id="numbercard">${product.numero}</p>
                                        </div>
                                `
                            })}
                        </div>              
                        <p class="more" @click="${this.showMore}" ?hidden=${this.hidemoretag}>ver más..</p>
                    </div>
                `],
            ],
            () => html `<h1>Error</h1>`
            )}  
        `;
    }

    showMore(){
        this.hidemoretag = true;
        this.hidescroll =false;
    }

    clickProduct(event){
        console.log('picaste en un producto');        
        this.cardselected = parseInt(event.target.id);
        this.showDetail = true;
        // const idcard = event.target.id;
        // this.dispatchEvent(new CustomEvent('prodSelected', {
        //     detail:{idcard},
        //     bubbles:true,
        //     composed:true
        // }))

    }

    goToGral(){
        console.log('te regresate bro');
        this.showDetail = false;
        this.prodactual = {};
    }  

    salte(){
        console.log('te saliste bro');
        this.dispatchEvent(new CustomEvent('salir', {
            detail:"",
            bubbles:true,
            composed:true
        }))
    }
}

window.customElements.define('app-gralview',General);

