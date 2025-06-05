import { describe, it, expect } from 'vitest';
import { parseArguments } from "../../../src/vitrification-bay/_utils/parse-arguments"

describe("parseArguments", () => {
    it('returns the first argument as attribute object', () => {
        const { attrs, _ } = parseArguments([{ attr: 'i am an attribute' }]);
        expect(attrs).toStrictEqual({ attr: 'i am an attribute' });
    });

    it('returns the rest as array', () => {
        const { _, children } = parseArguments([{}, 'child one', 'child two']);
        expect(children).toStrictEqual(['child one', 'child two']);
    });

    it('returns all as array if no attr specified', () => {
        const { _, children } = parseArguments(['child one', 'child two']);
        expect(children).toStrictEqual(['child one', 'child two']);
    });
});