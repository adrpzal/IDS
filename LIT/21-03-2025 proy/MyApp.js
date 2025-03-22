import { LitElement, html, css } from "lit";
import { Login } from "./Login";
import { General } from "./General";
import { Details } from "./Details";
import { Loader } from "./Loader";

export class MyApp extends LitElement{
    constructor(){
        super();
        this.loader = false;
        this.logged =false;
        this.datosusr = {};
    }

    static properties = { 
        loader:{type:Boolean},
        logged:{type:Boolean},
        datosusr:{type:Object}
    };

    static styles = css`
        *{  
            font-family: 'BentonSans regular';
            box-sizing: border-box;
            user-select: none;
        }
        #containergral{
            background-color: var(--gral-bg-color, blue);
            width:100vw;
            height:100vh;
            display: flex;
            flex-direction: column;
            padding-left:12vw;
            padding-right:12vw;
            padding-bottom:7vh;
            min-height:800px;
            min-width:600px;
        }
        #logocontainer{
            display:flex;
            justify-content:center;
            width:100%;
            height:12%;
            padding:2%;
        }
        #logocontainer img{height:100%}
        #compcontainer{
            display:flex;
            flex-direction:column;
            align-items:center;
            align-content:center;
            justify-content:center;
            justify-items:center;
            width:100%;
            height:100%;
            background-color:var(--component-bg-color, red);
            box-shadow: 5px 5px 10px 5px var(--navi-blueh-color, red);
        }

    `;

    render() {
        return html`
            <div id="containergral">
                <div id="logocontainer">
                    <img src="img/logo.jpeg" id="logoprinc">  
                </div>
                <div id="compcontainer">      
                    ${this.logged
                    ? html` <app-gralview .datausr=${this.datosusr}></app-gralview>`
                    : html`<login-component @signed=${this.showUser}></login-component>`
                    }

                </div>
            </div>
        `;
    }

    showUser(event){
        // console.log(event.detail);
        this.logged = true;
        this.datosusr = event.detail.datausr;
        this.loader = true;
    }

}

{/* <app-loader></app-loader> */}