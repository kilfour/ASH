import { html } from '../_utils/fabrication-facility';
import { styled } from '../_utils/sanitation-sheen';

const flexRow = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
}, html);

const listItem = styled('li', {
    marginLeft: '3rem'
}, html);

export const css = {
    flexRow, listItem
}