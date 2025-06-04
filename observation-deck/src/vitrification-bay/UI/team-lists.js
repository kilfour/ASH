import { html, htmlList } from '../_utils/fabrication_facility';

const teamOrange = ['Laurens', 'Benny', 'Mathias', 'Michael'];
const teamBlue = ['Alex', 'Milad', 'Abigail', 'Naomi'];

const container =
    html('div',
        html('div',
            html('div',
                html('h2', '🔸Team Orange'),
                htmlList('ul', teamOrange, name => html('li', name))),
            html('div',
                html('h2', '🔹Team Blue'),
                htmlList('ul', teamBlue, name => html('li', name)))
        ));

export function renderTeamLists(parent) {
    parent.appendChild(container);
}