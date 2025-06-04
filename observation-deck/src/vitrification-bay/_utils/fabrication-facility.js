export function htmlList(tag, items, renderItem) {
    const container = document.createElement(tag);
    for (const item of items) {
        container.appendChild(renderItem(item));
    }
    return container;
}

export function html(tag, ...args) {
    const { attrs, children } = parseArguments(args);
    const node = document.createElement(tag);
    applyAttributes(node, attrs);
    appendChildren(node, children);
    return node;
}

function parseArguments(args) {
    let [first, ...rest] = args;
    if (isAttributesObject(first)) {
        return { attrs: first, children: rest };
    }
    return { attrs: {}, children: args };
}

function isAttributesObject(arg) {
    if (!arg) return false;
    if (typeof arg !== 'object') return false;
    if (Array.isArray(arg)) return false;
    if (arg instanceof Node) return false;
    return true;
}

function applyAttributes(node, attrs) {
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'style' && typeof v === 'object') {
            Object.assign(node.style, v);
        } else {
            node.setAttribute(k, v);
        }
    }
}

function appendChildren(node, children) {
    for (const child of children.flat()) {
        node.append(child instanceof Node ? child : document.createTextNode(child));
    }
}

export const __only_for_test = { parseArguments, applyAttributes };
