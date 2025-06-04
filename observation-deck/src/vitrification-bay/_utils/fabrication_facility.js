function html(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);

    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'style' && typeof v === 'object') {
            Object.assign(node.style, v);
        } else {
            node.setAttribute(k, v);
        }
    }

    for (const child of children.flat()) {
        node.append(child instanceof Node ? child : document.createTextNode(child));
    }

    return node;
}


function htmlList(tag, items, renderItem) {
    const container = document.createElement(tag);
    for (const item of items) {
        container.appendChild(renderItem(item));
    }
    return container;
}

export { html, htmlList }
