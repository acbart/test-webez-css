import { describe, expect, test, beforeAll } from "@jest/globals";
import { TestComponent } from "./test.component";
import { bootstrap } from "@gsilber/webez";

describe("TestComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<TestComponent>(TestComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(TestComponent);
        });
    });
});
