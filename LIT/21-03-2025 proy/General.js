import { LitElement, html, css } from "lit";

export class General extends LitElement{
    constructor(){
        super();
        this.datausr = {
            username: 'mariana.lopez',
            password: 'qwerty789',
            nombre: 'Mariana',
            productos: [
              { id: 1, nombre: 'Producto A', precio: 100 },
              { id: 2, nombre: 'Producto B', precio: 200 },
              { id: 3, nombre: 'Producto C', precio: 300 }
            ]
        };
        this.hidescroll = true;
        this.hidemoretag = false;
    }
    
    static properties = {
        datausr: { type: Object},
        hidescroll : { type: Boolean },
        hidemoretag : {type: Boolean },
        productos : {type: Object },
    };


    static styles = css` 
        #welcome{
            // background-color:red;
            margin-top:2vh;
            display:flex;
            justify-content: center;
            color: snow;
            font-family: 'BentonSans Regular';        
            text-align-center;
        }  


        #containerproducts{
            margin-top:  3vh;
            display:flex;
            flex-direction:column;
            align-items:space-between;
            gap: 5vh;
            width:70vw;
            height:65vh;
            /* background-color:red; */
            min-height:400px;
            max-height:600px;
            font-family: 'BentonSans Regular';
        }

        .product{
            margin-left: 30px;
            margin-right: 30px;
            font-size:1.5rem;
            padding:1rem;
            background-color: snow;
            color:var(--gral-bg-color, blue);
            border-radius:7px;   
            font-family: 'BentonSans Regular';        
        }

        .product:hover{
            background-color:var(--sky-blue-light-color, black);
        }
        .more{
            text-align:center;
            color:snow;
            font-size: 1rem;
        }
        .more:hover{
            color:var(--sky-blue-light-color, black);
        }

        span{
        text-align:center;
        width:100%
        }

        .numbercard{
        font-size:0.8rem;
        text-aling:center;
        width:100%;
        }

        .vencimiento{
        font-size:0.9rem;
        }

        
        ::-webkit-scrollbar{
         width:2px;
        }
        ::-webkit-scrollbar-track{
            background:var(--sky-blue-light-color, black);;
        }
        ::-webkit-scrollbar-thumb{
            background:var(--gral-bg-color, blue);
        }
        ::-webkit-scrollbar-thumb:hover{
            background:var(--navi-blue-color, red);
        }

    `;


    render() {
        return html`
            <div id="welcome">
                <h2>Bienvenido(a) ${this.datausr.nombre}</h2>
            </div>
            <div id="containerproducts" style="overflow-y: ${this.hidescroll ? "hidden" : "scroll"}">  
            ${this.datausr.productos.map((product) =>{
                return html`
                <div class="product">
                    <p>${product.producto}</p>
                    <p>${product.saldo}</p>
                </div>
                `
            }

            )}
            <p class="more" @click="${this.showMore}" ?hidden=${this.hidemoretag}><a>ver más..</a></p>
        `;
    }

    showMore(){
        this.hidemoretag = true;
        this.hidescroll =false;
    }

    // connectedCallback(){
    //     super.connectedCallback();
    //     console.log("desde update");
    //     console.log(this.datausr);
    //     console.log(this.datausr.productos);
    //     this.requestUpdate();
    // }

    // update(){
    //     console.log("desde update");
    //     console.log(this.datausr);
    //     this.datausr = {...this.datausr};
    //     console.log(this.datausr.productos);
    // }


  
}

window.customElements.define('app-gralview',General);

