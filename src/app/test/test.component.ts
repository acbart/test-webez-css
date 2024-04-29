import { EzComponent } from "@gsilber/webez";
import html from "./test.component.html";
import css from "./test.component.css";

export class TestComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
