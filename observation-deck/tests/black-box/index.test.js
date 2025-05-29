import { describe, it, expect } from 'vitest';
import { blackBoxFunction } from '../../src/black-box';

it('black-box can be tested', () => {
    expect(blackBoxFunction()).toBe(true);
});