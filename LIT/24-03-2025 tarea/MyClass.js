import { LitElement, html, css } from 'lit';
import { MyComp2 } from './MyComp2';

export class MyClass extends LitElement {
  static properties = {
    nombre: { type: String },
    activo: { type: Boolean },
    imgcard: { type: String },
    items: { type: Array },
    info: { type: Object }
  };

  constructor() {
    super();
    this.nombre = "text text";
    this.activo = true;
    this.imgcard = "azul.jpg";
    this.items = ["elem1", "elem2", "elem3"];
    this.info = { mensaje: "Mensaje" };
  }

  static styles = css`
    img{
    width:20vw;
    height:auto;
    }
  `

  toggleAct() {
    this.activo = !this.activo;
  }

  render() {
    return html`
      <div>
        <h1>Hola, ${this.nombre}</h1>
        <img src="${this.imgcard}"/>       
        <input type="checkbox" ?checked="${this.activo}" />
        <my-subcomponent .data="${this.info}"></my-subcomponent>
        <button @click="${this.toggleAct}">Toggle</button>     
        ${this.activo ? html`<p>El usuario está activo</p>` : html`<p>El usuario está inactivo</p>`}        
        <ul>
          ${this.items.map(item => html`<li>${item}</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('mi-componente', MyClass);


