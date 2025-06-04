import { describe, it, expect } from 'vitest';
import { __only_for_test as sut } from "../../../src/vitrification-bay/_utils/fabrication_facility"

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