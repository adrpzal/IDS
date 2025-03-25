import { LitElement, html, css } from "lit";

export class Login extends LitElement{
    constructor(){
        super();
        this.users = [];
        this.colorRand = '';
        this.errorLog = false;
    }

    static properties = {
        users: { type: Array },
        usuario: {type: Array},
        pwd: {type: Array},
        colorRand:{type:String, reflect:true},
        errorLog:{type:Boolean, reflect:true}
    };

    static styles = css`
      
        #containerlogin{
            width:80vw;
            height:80vh;
            display:flex;
            flex-direction:column;            
            align-items:center;
        }       

        #containerfields{
            display:flex;
            flex-direction:column;
            height:50%;
            width:100%;
            justify-content:center;
            align-items:center;
        }

        input{ 
            width:55vw;
            margin-top:4vh;
            height:4.5vh;
            font-size:1.3rem;
            padding: 2%;
            font-family: 'BentonSans thin';
            background-color:var(--component-bg-color, red);
            border:none;
            border-bottom:3px solid white; 
            color:white;            
        }

        input:focus{
        traslado: 
        font-size:1.1rem;
        outline:none;
        }
        
        input::placeholder{
        font-size:0.9rem;
        color:white;
        transition: font-size 0.2s ease;
        }

        input:focus::placeholder{
        font-size:1.1rem;
        }

        #logerror{
        color:red;
        margin-top:3vh;
        font-size:0.75rem;
        text-align:center;
        display:none;
        }

        #containerbtn{
            display:flex;
            height:50%;
            align-items:center;
        }

        button{
            font-size:1rem;
            width:40vw;
            height:6vh;
            background-color: var(--medium-blue-light, blue);
            color:snow;
            font-family: 'BentonSans Regular';        
            border:none;
        }

        button:hover{
            background-color:var(--sky-blue-light-color, black);
        }

        #containerfaq{
            display:flex;
            margin-bottom:3vh;
            height:2.5vh;
            align-items:center;
            
        }
        #containerfaq img{
        height:100%;
        width:auto;
        opacity: 0.6;
        }

        #containerfaq img:hover{
        opacity:085;
        }
    `;

    async loadUsers() {
        const usuarios = await fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(resp => {
            this.users = resp;
            // console.log(this.users)
        })
        .catch(error => console.log(error));
    }
    
    render() {
        return html`
            <div id="containerlogin">
                <div id="containerfields">                    
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario" autocomplete="off">
                    <input type="password" name="pwd" id="pwd" placeholder="Contraseña" autocomplete="off">
                    <span id="logerror">Usuario o contraseña incorrectos</span>
                </div>
                <div id="containerbtn">
                    <button id="btnlogin" @click="${this._getLogin}">Iniciar sesión</button>
                </div>
                <div id="containerfaq">
                    <img src="img/pregunta.png" @click="${this.changeAttr}"></button>
                </div>
            </div>  
        `;
    }

    async _getLogin(){
        const usuario =this.shadowRoot.querySelector('#usuario');
        const pwd =this.shadowRoot.querySelector('#pwd');
        
        if (!usuario.value.trim() || !pwd.value.trim()) {            
            console.error("Los campos no pueden estar vacíos");
            return;            
        }
        
        await this.loadUsers();
        const userFound = this.users.find(user => user.username === usuario.value.trim() && user.password === pwd.value.trim());

        if (userFound) {
            // console.log("entraste");
            this.dispatchEvent(new CustomEvent('signed', {
                detail: {datausr: userFound},
                bubbles: true,
                composed: true
            }))
        } else { this.errorLog = true;this.onLogError(usuario,pwd)};
    }

    /**
     * Cambiamos el color del botón
     */
    changeAttr(){
        const colores = ['#07214669','black','#1464A5','#043263']
        const rand = Math.floor(Math.random()*4);
        this.colorRand = colores[rand];
        console.log(this.colorRand);
        const boton = this.shadowRoot.getElementById('btnlogin');
        boton.style.backgroundColor = `${this.colorRand}`;
    }

    onLogError(user,pass){
        const showmsj = this.shadowRoot.getElementById('logerror');
       if (this.errorLog) {
        showmsj.style.display = 'block';
        user.value = '';
        user.style.backgroundColor = 'red';
        pass.value = '';
        pass.style.backgroundColor = 'red';
       }
    }

}

customElements.define("login-component", Login);
