import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { TestComponent } from "./test/test.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    constructor() {
        super(html, css);
        this.addComponent(new TestComponent());
    }
}
