import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DigitalHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
        .header {
          position: fixed;
          top: 0px;
          width: 100%;
          z-index: 1000;
        }
        .content {
          width: 100%;
          padding: 20px;
          background-color: green;
        }
        span {
          font-size: 20px;
        }
      </style>

      <header class="header">
        <div class="content">
          <span>Page Header</span>
        </div>
      </header>
    `;
  }
}

window.customElements.define('digital-header', DigitalHeader);
