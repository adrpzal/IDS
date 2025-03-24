import { LitElement, html, css } from "lit";

export class Login extends LitElement{
    constructor(){
        super();
        this.users = []
    }

    static properties = {
        users: { type: Array },
        usuario: {type: Array},
        pwd: {type: Array},
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
        width:50vw;
            margin-top:3vh;
            height:4vh;
            font-size:1rem;
            padding: 4%;
            border-radius:5px;
            font-family: 'BentonSans thin';
        }

        #containerbtn{
            display:flex;
            height:50%;
            align-items:center;
        }

        button{
            font-size:1.2rem;
            width:40vw;
            height:6vh;
            background-color: white;
            color:var(--gral-bg-color, blue);
            font-family: 'BentonSans Regular';        
        }

        button:hover{
            background-color:var(--sky-blue-light-color, black);
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
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario"/>
                    <input type="password" name="pwd" id="pwd" placeholder="Contraseña"/>
                </div>
                <div id="containerbtn">
                    <button id="btnlogin" @click="${this._getLogin}">Iniciar sesión</button>
                </div>
            </div>  
        `;
    }

    async _getLogin(){
        const usuario =this.shadowRoot.querySelector('#usuario').value.trim();
        const pwd =this.shadowRoot.querySelector('#pwd').value.trim();
        
        if (!usuario || !pwd) {            
            console.error("Los campos no pueden estar vacíos");
            return;            
        }
        
        await this.loadUsers();
        const userFound = this.users.find(user => user.username === usuario && user.password === pwd);

        if (userFound) {
            // console.log("entraste");
            // console.log(userFound);
            this.dispatchEvent(new CustomEvent('signed', {
                detail: {datausr: userFound},
                bubbles: true,
                composed: true
            }))
        } else {alert("no se encuentra")}
    }

}

customElements.define("login-component", Login);
