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
            display:flex;
            flex-direction:column;
            align-items:center;
            width:70vw;
            height:80vh;
            /* background-color:red; */
            min-height:400px;
        }

        #containerfields{
            display:flex;
            flex-direction:column;
            margin-top:10vh;
        }

        input{
            margin-top:5vh;            
            width:40vw;
            font-size:1rem;
            padding: 1.2rem;
            border-radius:5px;
            font-family: 'BentonSans thin';
        }

        #containerbtn{
            margin-top:20vh;
        }

        button{
            font-size:1.5rem;
            padding:1rem;
            background-color: white;
            color:var(--gral-bg-color, blue);
            border-radius:7px;   
            font-family: 'BentonSans Regular';        
        }

        button:hover{
            background-color:var(--sky-blue-light-color, black);
        }
    `;

    loadUsers() {
        fetch('http://localhost:3000/users')
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
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario">
                    <input type="password" name="pwd" id="pwd" placeholder="Contraseña">
                </div>
                <div id="containerbtn">
                    <button id="btnlogin" @click="${this._getLogin}">Iniciar sesión</button>
                </div>
            </div>  
        `;
    }

    _getLogin(){
        const usuario =this.shadowRoot.querySelector('#usuario').value.trim();
        const pwd =this.shadowRoot.querySelector('#pwd').value.trim();
        
        if (!usuario || !pwd) {
            console.error("Los campos no pueden estar vacíos");
            return;            
        }
        
        this.loadUsers();

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
