import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DigitalFooter extends PolymerElement {
  static get template() {
    return html`
      <style>
        .footer {
          position: fixed;
          bottom: 0px;
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

      <footer class="footer">
        <div class="content">
          <span>Page Footer</span>
        </div>
      </footer>
    `;
  }
}

window.customElements.define('digital-footer', DigitalFooter);
