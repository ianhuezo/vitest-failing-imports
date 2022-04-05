import {html, fixture} from "@open-wc/testing";
import {describe, it} from "vitest";
import "./my-element"

describe("Test imports", () => {
    it("Import fails with version 4.3.4", () => {
        const el = fixture(html`<my-element></my-element>`)
    })
})
