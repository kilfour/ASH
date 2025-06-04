import { describe, it, expect, beforeEach } from 'vitest';
import { __only_for_test as sut } from "../../src/vitrification-bay/widgets/build-status-widget.js"

describe("responseToObject", () => {
    it('transforms response to object', () => {
        const partialResponse = {
            html_url: 'the url',
            display_title: 'the commit message',
            conclusion: 'success',
            actor: { login: 'the author' },
            updated_at: 'the date time'
        };
        const obj = sut.responseToObject(partialResponse)
        expect(obj.url).toBe('the url');
        expect(obj.status).toBe('success');
        expect(obj.message).toBe('the commit message');
        expect(obj.author).toBe('the author');
        expect(obj.updated).toBe('the date time');
    });
});