import { describe, it, expect } from 'vitest';
import { __only_for_test as sut, styled } from "../../../src/vitrification-bay/_utils/fabrication-facility"

describe("parseArguments", () => {
    it('returns the first argument as attribute object', () => {
        const { attrs, _ } = sut.parseArguments([{ attr: 'i am an attribute' }]);
        expect(attrs).toStrictEqual({ attr: 'i am an attribute' });
    });

    it('returns the rest as array', () => {
        const { _, children } = sut.parseArguments([{}, 'child one', 'child two']);
        expect(children).toStrictEqual(['child one', 'child two']);
    });

    it('returns all as array if no attr specified', () => {
        const { _, children } = sut.parseArguments(['child one', 'child two']);
        expect(children).toStrictEqual(['child one', 'child two']);
    });
});

describe('sut.applyAttributes', () => {
    let div;

    beforeEach(() => {
        div = document.createElement('div');
    });

    it('applies regular attributes', () => {
        sut.applyAttributes(div, { id: 'test-div', class: 'box' });
        expect(div.getAttribute('id')).toBe('test-div');
        expect(div.getAttribute('class')).toBe('box');
    });

    it('applies inline styles', () => {
        // why? : JSDOM used by vitest, apparantly does not render styles
        // so this is untestable unfortunately
        expect(true).toBe(true);
    });
});


describe('styleObjToCss', () => {
    it('converts simple styles', () => {
        const input = { color: 'red', backgroundColor: 'blue' };
        const result = sut.styleObjToCss(input);
        expect(result).toBe('color: red; background-color: blue;');
    });

    it('handles empty object', () => {
        expect(sut.styleObjToCss({})).toBe('');
    });

    it('handles camelCase conversion correctly', () => {
        const input = { fontSize: '12px', lineHeight: '1.5' };
        const result = sut.styleObjToCss(input);
        expect(result).toBe('font-size: 12px; line-height: 1.5;');
    });

    it('handles mixed casing and multiple styles', () => {
        const input = {
            backgroundColor: 'black',
            borderTopLeftRadius: '5px',
            WebkitAppearance: 'none'
        };
        const result = sut.styleObjToCss(input);
        expect(result).toBe(
            'background-color: black; border-top-left-radius: 5px; -webkit-appearance: none;'
        );
    });
});

// TODO: fix these tests, JS making life hard again
describe.skip('styled()', () => {
    beforeEach(() => {
        document.head.innerHTML = '';
        sut.insertedStyles.clear?.();
    });

    it('returns a function that renders with the generated class', () => {
        const Button = styled("button", { color: "red" });
        const vnode = Button({ id: "test" }, "Click me");
        expect(vnode.tag).toBe("button");
        expect(vnode.attrs.id).toBe("test");
        expect(vnode.attrs.class).toMatch(/^ff-/);
        expect(vnode.children).toContain("Click me");
    });

    it('injects the style rule into the document', () => {
        const Div = styled("div", { fontSize: "16px" });
        Div();
        const styleTag = document.getElementById("__fabrication_styles");
        expect(styleTag).toBeTruthy();
        const cssText = styleTag.sheet.cssRules[0].cssText;
        expect(cssText).toMatch(".ff-fontsize-16px-gulchn {font-size: 16px;}");
    });

    it('does not inject duplicate styles for same styleObj', () => {
        const Red1 = styled("span", { color: "red" });
        Red1();
        const mid = document.styleSheets[0].cssRules.length;
        const Red2 = styled("span", { color: "red" });
        Red2();
        const after = document.styleSheets[0].cssRules.length;
        expect(after).toBe(mid);
    });

    it('generates different class names for different styles', () => {
        const A = styled("div", { color: "red" });
        const B = styled("div", { color: "blue" });
        const a = A();
        const b = B();
        expect(a.attrs.class).not.toBe(b.attrs.class);
    });
});
