import { html, htmlList } from '../_utils/fabrication-facility';
import { css } from './team-lists.styles';


const teamOrange = ['Laurens', 'Benny', 'Mathias', 'Michael'];
const teamBlue = ['Alex', 'Milad', 'Abigail', 'Naomi'];

const container =
    css.flexRow(
        html('div',
            html('h2', '🔸Team Orange'),
            htmlList('ul', teamOrange, name => css.listItem(name))),
        html('div',
            html('h2', '🔹Team Blue'),
            htmlList('ul', teamBlue, name => css.listItem(name)))
    );

export function renderTeamLists(parent) {
    parent.appendChild(container);
}