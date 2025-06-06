import { html, htmlList } from '../../_utils/fabrication-facility';
import { excercises, toggleStatus, isDone } from './storage';

export function renderExercises(parent) {
    const container =
        htmlList('ul', excercises,
            excercise => html('li',
                excercise,
                html('input', { onclick: () => toggleStatus(excercise), checked: isDone(excercise), type: 'checkbox' }))
        );
    parent.appendChild(container);
}
