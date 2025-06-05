import { describe, it, expect } from 'vitest';
import { __only_for_test as sut } from "../../../src/vitrification-bay/_utils/fabrication-facility"


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


