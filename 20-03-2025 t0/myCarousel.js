export class MyCarousel extends HTMLElement{

    constructor(){
        super();
        this.arrayimg = [];
        this.contador = 0;
        this.sizeh = null;
        this.sizev = null;
    }
        
    static observedAttributes = ['images', 'sizeh', 'sizev']

    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'}) 
        
        // añadir css
        // const linkElem = document.createElement("link");
        // linkElem.setAttribute("rel", "stylesheet");
        // linkElem.setAttribute("href", "style.css");

        const plantilla = document.querySelector('#plantilla');
        const clone = plantilla.content.cloneNode(true);    
        console.log(plantilla);
        
        // shadow.appendChild(linkElem);
        shadow.appendChild(clone);

        // Obtener elementos del shadow DOM
        const img = shadow.querySelector('#image');

        //////////////////
        ////listeners/////
        shadow.querySelector('#prev').addEventListener('click', () =>{   
            if (this.contador===0) {
                btn2.removeAttribute('disabled')
                btn1.setAttribute('disabled', 'true')
            }
            if (this.contador > 0 ) {                 
                img.src = this.arrayimg[this.contador-1]
                this.contador --;
            }
        })  
    
        shadow.querySelector('#next').addEventListener('click', () =>{
            if (this.contador===this.arrayimg.length-1) {
                btn2.setAttribute('disabled', 'true')
                btn1.removeAttribute('disabled')
            }
            if (this.contador< this.arrayimg.length-1) {           
                img.src = this.arrayimg[this.contador+1]
                this.contador ++
            }
        })
         
    }

    disconnectedCallback(){}
    adoptedCallback(){ }

    attributeChangedCallback(name, odlValue, newValue){
        if(name === 'images'){
            this.arrayimg = JSON.parse(newValue);
            console.log('parseado')
            console.log(this.arrayimg)
        }
        if (name === 'sizeh') { this.sizeh = parseInt(newValue) }
        if (name === 'sizev') { this.sizev= parseInt(newValue)  }
    }
}