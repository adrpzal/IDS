import { LitElement, html, css } from 'lit';

export class MyClass extends LitElement {
  static properties = {
    nombre: { type: String },
    activo: { type: Boolean },
    imagen: { type: String },
    items: { type: Array },
    info: { type: Object }
  };

  constructor() {
    super();
    this.nombre = "Usuario";
    this.activo = true;
    this.imagen = "https://via.placeholder.com/150";
    this.items = ["Elemento 1", "Elemento 2", "Elemento 3"];
    this.info = { mensaje: "Este es un mensaje" };
  }

  toggleActivo() {
    this.activo = !this.activo;
  }

  render() {
    return html`
      <div>
        <h1>Hola, ${this.nombre}</h1>
        
        <!-- Atributo dinámico -->
        <img src="${this.imagen}" alt="Imagen de prueba" />
        
        <!-- Atributo booleano -->
        <input type="checkbox" ?checked="${this.activo}" />
        
        <!-- Propiedad dinámica -->
        <my-subcomponent .data="${this.info}"></my-subcomponent>
        
        <!-- Evento dinámico -->
        <button @click="${this.toggleActivo}">Toggle</button>
        
        <!-- Renderizado condicional -->
        ${this.activo ? html`<p>El usuario está activo</p>` : html`<p>El usuario está inactivo</p>`}
        
        <!-- Repetición de elementos -->
        <ul>
          ${this.items.map(item => html`<li>${item}</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('mi-componente', MyClass);

// Subcomponente de ejemplo para demostrar la asignación de propiedades dinámicas
class MySubComponent extends LitElement {
  static properties = {
    data: { type: Object }
  };

  render() {
    return html`<p>Mensaje: ${this.data.mensaje}</p>`;
  }
}

customElements.define('my-subcomponent', MySubComponent);

