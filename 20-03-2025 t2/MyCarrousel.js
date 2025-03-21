import {LitElement, html, css} from './lit-core.min.js';

export class MyCarrousel extends LitElement{
    static properties = {
        images : {},
        sizeh : 0,
        sizev : 0,
        _src : "",
        prevDisabled : {},
        nextDisabled : {},
    };

    static styles = css`
        #containerbtns{
            display:flex;
            margin-top:4vh;
            margin-bottom:7vh;
            height:5vh;
            align-content:center;
            justify-content: space-around;
        }

        button{font-size:0.7rem}

        .meter{
            margin-top:2vh;
            display:flex;
            justify-content: start;
            align-content:center;
            align-items:center;
            height:1vh;
            opacity:0.6;
            position:absolute;
            left:2vw;
        }
        
        .meter:hover{
        opacity:1;
        }
        
        #meter1{bottom:2vh}
        #meter2{bottom:6vh}
        
        #containercarr{
            margin-top:5vh;
            display:flex;
            border: solid 1px;
            justify-content:center;
            background-color:snow;
        }
        label{
            margin-right:10px;
            font-size:0.8rem;
        }
    `;


    constructor(){
        super();
        this.imagesArr = [];
        this.contador = 1;
        this._src = 'default.jpg';
        this.prevDisabled = false;
        this.nextDisabled = false;
    }

    render(){
        return html`
            <div id="containerbtns" >
                <button id="prev" @click=${this.prevImg} ?disabled=${this.prevDisabled}>ANTERIOR</button>
                <button id="next" @click=${this.nextImg} ?disabled=${this.nextDisabled}>SIGUIENTE</button>
            </div>
            <div class="meter" id="meter1">        
                <label for="rh">H:</label>
                <input type="range" id="rh" min="100" max="600" step="10" @input="${this.setSize}" value="${parseInt(this.sizeh)}">
            </div>
            <div class="meter" id="meter2">      
                <label for="rv">V:</label>
                <input type="range" id="rv" min="100" max="600" step="10" @input="${this.setSize}" value="${parseInt(this.sizev)}">
            </div>
            <div id="containercarr">
                <img src="${this._src}" width="${parseInt(this.sizeh)}px" height="${parseInt(this.sizev)}">
            </div>
            `;
    }

    /**
     * obtiene arreglo de imagenes
     */
    getImages(){
        this.imagesArr = JSON.parse(this.images);
        console.log(this.imagesArr);
    }

    /**
     * imagen anterior
     */
    prevImg(){
        this.getImages();
        if (this.contador > 0) {            
            this.contador--;
            this.handleButtons();
        }
        this._src = this.imagesArr[this.contador];        
    }
    
    /**
     * siguiente imagen
     */
    nextImg(){
        this.getImages();
        if (this.contador < this.imagesArr.length-1) {            
            this.contador++;
            this.handleButtons();
        }
        this._src = this.imagesArr[this.contador];
    }

    /**
     * Evalua el contador para manejar el disabled de los botones
     */
    handleButtons(){
        if (this.contador === 0) {
            this.prevDisabled = true; 
            this.nextDisabled = false
        }
        if (this.contador === this.imagesArr.length-1) {
            this.prevDisabled = false; 
            this.nextDisabled = true
        }        
    }

    /**
     * Ajusta el tamaño de la imagen segun el valor de meters
     * @param {*} event 
     */
    setSize(event){
        const valor = event.target;
        if (valor.id === "rv") {this.sizev = parseInt(valor.value)}
        if (valor.id === "rh") { this.sizeh = parseInt(valor.value)}        
    }

}