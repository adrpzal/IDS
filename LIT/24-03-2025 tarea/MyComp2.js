import { LitElement, html, css } from 'lit';

export class MyComp2 extends LitElement {
    static properties = {
      data: { type: Object }
    };
  
    render() {
      return html`<p>${this.data.mensaje}</p>`;
    }
  }
  
  customElements.define('my-subcomponent', MyComp2);