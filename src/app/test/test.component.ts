import { EzComponent } from "@gsilber/webez";
import html from "./test.component.html";
import css from "./test.component.css";

declare const window: Window;

class DebugComponent extends EzComponent {
    /**
     * @description Creates an instance of EzComponent.
     * @param {string} [html=""] The html as a string to be used as the body of this component
     * @param {string} [css=""] The css as a string to be used as the style of this component
     * @memberof EzComponent
     * @public
     * @constructor
     */
    constructor(html: string, css: string) {
        super(html, css);
        for (let style of window.document.styleSheets) {
            /* Jest does not populate the ownerNode member, so this can't be tested*/
            console.log(style, style.ownerNode, !!style.ownerNode);
            if (style.ownerNode)
                this["shadow"].appendChild(style.ownerNode.cloneNode(true));
        }
        this["styles"] = window.document.createElement("style");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this["styles"].innerHTML = this["css"];
        this["shadow"].appendChild(this["styles"]);
    }
}

export class TestComponent extends DebugComponent {
    constructor() {
        super(html, css);
    }
}
