import { html, htmlList, styled } from '../_utils/fabrication-facility';
// why ?: we need this for `styled`
globalThis.html = html;

const teamOrange = ['Laurens', 'Benny', 'Mathias', 'Michael'];
const teamBlue = ['Alex', 'Milad', 'Abigail', 'Naomi'];

const flexRow = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
}, html);

const container =
    flexRow(
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