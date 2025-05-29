import { describe, it, expect } from 'vitest';
import { missionControl } from '../../src/mission-control';

it('mission-control can be tested', () => {
    expect(missionControl()).toBe(true);
});