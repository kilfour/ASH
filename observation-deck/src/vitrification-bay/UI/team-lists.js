import { html, htmlList } from '../_utils/fabrication-facility';
import { styled } from '../_utils/sanitation-sheen';


const teamOrange = ['Laurens', 'Benny', 'Mathias', 'Michael'];
const teamBlue = ['Alex', 'Milad', 'Abigail', 'Naomi'];

const flexRow = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
}, html);

const listItem = styled('li', {
    marginLeft: '3rem'
}, html);

const container =
    flexRow(
        html('div',
            html('h2', '🔸Team Orange'),
            htmlList('ul', teamOrange, name => listItem(name))),
        html('div',
            html('h2', '🔹Team Blue'),
            htmlList('ul', teamBlue, name => listItem(name)))
    );

export function renderTeamLists(parent) {
    parent.appendChild(container);
}