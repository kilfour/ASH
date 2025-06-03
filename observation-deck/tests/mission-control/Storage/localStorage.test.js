import { describe, it, expect, beforeEach } from 'vitest';
import { storeUserStory } from '../../../src/mission-control/Storage/localStorage'


describe("storeUserStory", () => {
    it('puts the story in local storage', () => {
        localStorage.removeItem('stories');
        storeUserStory({ title: 'title', description: 'description' })
        const stories = JSON.parse(localStorage.getItem('stories'));
        expect(stories.length).toBe(1);
        expect(stories[0].title).toBe('title');
        expect(stories[0].description).toBe('description');
    });
});

