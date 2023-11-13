export enum Attribute {
  "url" = "url",
  "joke" = "joke"
  }
  
  class Card extends HTMLElement {
    url?: string;
    joke?:string
  
    static get observedAttributes() {
      const attrs: Record<Attribute, null> = {
        url: null,
        joke:null
      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: Attribute,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case Attribute.url:
          this.url = newValue;
          break;
      }

      switch (propName) {
        case Attribute.joke:
          this.joke = newValue;
          break;
      }

      this.render();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <link href="/src/components/card/Card.css" rel="stylesheet">
        <div class="card">
        <img src="${this.url}"/>
        <div class="joke">${this.joke}</div>
        </div>
        `;
      }
    }
  }

customElements.define("my-card",Card);
export default Card;