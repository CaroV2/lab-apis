import { getImage, getJoke } from "./data/dataFetch";
import "./components/Card/Card";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const randomImage = await getImage();
    const randomJoke = await getJoke();
    this.render(randomImage, randomJoke);
  }

  render(randomImage: any[], joke:string) {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/style.css">
        <div class="card-container">
          ${randomImage
            .map(
              (image) => `
            <my-card
              url="${image.url}"
              joke="${joke}"
            ></my-card>
          `
            )
            .join("")}
        </div>
      `;
    }
  }
}

customElements.define("app-container", AppContainer);