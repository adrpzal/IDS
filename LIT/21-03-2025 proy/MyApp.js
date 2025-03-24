import { LitElement, html, css} from "lit";
import {choose} from 'lit/directives/choose.js';

import { Login } from "./Login";
import { General } from "./General";
import { Loader } from "./Loader";

export class MyApp extends LitElement{
    constructor(){
        super();
        this.loader = false;
        this.logged =false;
        this.datosusr = {};
        this.vistaActual = 'login';
    }

    static properties = { 
        loader:{type:Boolean},
        logged:{type:Boolean},
        datosusr:{type:Object},
        vistaActual:{type:String}
    };

    static styles = css`
        *{  
            font-family: 'BentonSans regular';
            box-sizing: border-box;
            user-select: none;            
        }
            
        #containergral{
            background-color: var(--gral-bg-color, blue);
            display: flex;
            flex-direction: column;
            padding:0 9vw 5vh 9vw;
            width:100vw;
            height:100vh;
            overflow:hidden;
            position:relative;
        }

        #logocontainer{
            display:flex;
            justify-content:center;
            width:80vw;
            height:15vh;
            padding:1%;
        }

        #logocontainer img{height:100%}
        
        #compcontainer{
            display:flex;
            flex-direction:column;
            width:80vw;
            height:80vh;
            background-color:var(--component-bg-color, red);
            box-shadow: 5px 5px 10px 5px var(--navi-blueh-color, red);
        }

        app-loader{
        position:absolute;
        top:0;
        }

    `;

    render() {
        return html`
            <div id="containergral">
                <div id="logocontainer">
                    <img src="img/logo.jpeg" id="logoprinc">  
                </div>
                <div id="compcontainer">
                        ${choose(this.vistaActual,[
                            ['loader', ()=> html` <app-loader></app-loader>`],
                            ['login', ()=>  html`<login-component @signed=${this.showUser}></login-component>`],
                            ['general', ()=> html` <app-gralview .datausr=${this.datosusr} @salir=${this.getOut}></app-gralview>`],
                        ],
                        () => html `<h1>Error</h1>`
                        )}  
                </div>
            </div>
        `;
    }

    /**
     * Si el login es exitoso, se reciben datos de usuario para cargar componente con detalles
     * @param {Object} event 
     */
    showUser(event){
        this.logged = true;
        this.loader = true;
        this.datosusr = event.detail.datausr;
        this.handleView('general');
    }

    /**
     * Llamada para cerrar sesion
     */
    getOut(){        
        this.logged = false;
        this.datosusr = {};
        this.handleView();
    }

    handleView(location){
        if (this.logged && location) {            
            setTimeout(() => {this.vistaActual = location}, 2500);
            this.vistaActual = 'loader';
        }
        else {            
            setTimeout(() => {this.vistaActual = 'login'}, 2000);
            this.vistaActual = 'loader';
        }
    }

}
