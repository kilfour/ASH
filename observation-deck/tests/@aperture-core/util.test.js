import { describe, it, expect } from 'vitest';
import { utilFunction } from '../../src/@aperture-core/util';

it('aperture can be tested', () => {
    expect(utilFunction()).toBe(true);
});