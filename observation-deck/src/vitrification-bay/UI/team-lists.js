import { html, htmlList } from '../_utils/fabrication-facility';
import { styled } from '../_utils/synthetic-sheen';

const teamOrange = ['Laurens', 'Benny', 'Mathias', 'Michael'];
const teamBlue = ['Alex', 'Milad', 'Abigail', 'Naomi'];

const container =
    html('div', { style: { display: 'flex', 'justify-content': 'center', 'gap': '1rem' } },
        html('div',
            html('h2', '🔸Team Orange'),
            htmlList('ul', teamOrange, name => html('li', { style: { 'margin-left': '3rem' } }, name))),
        html('div',
            html('h2', '🔹Team Blue'),
            htmlList('ul', teamBlue, name => html('li', { style: { 'margin-left': '3rem' } }, name)))
    );

export function renderTeamLists(parent) {
    parent.appendChild(container);
}