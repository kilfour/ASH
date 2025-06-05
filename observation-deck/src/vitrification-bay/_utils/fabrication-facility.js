const insertedStyles = new Set();

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

export function styled(tag, styleObj, htmlFn) {
    const html = htmlFn ?? globalThis.html;
    if (!html) throw new Error("No html() available in styled()");

    const className = generateReadableClassName(styleObj);

    if (!insertedStyles.has(className)) {
        const cssRule = `.${className} { ${styleObjToCss(styleObj)} }`;
        const styleTag = document.getElementById("__fabrication_styles") ||
            Object.assign(document.head.appendChild(document.createElement("style")), { id: "__fabrication_styles" });
        styleTag.sheet.insertRule(cssRule);
        insertedStyles.add(className);
    }

    return function (...args) {
        const { attrs, children } = parseArguments(args);
        const existing = attrs.class || "";
        return html(tag, { ...attrs, class: `${existing} ${className}`.trim() }, ...children);
    };
}

function generateReadableClassName(styleObj) {
    const parts = Object.entries(styleObj)
        .slice(0, 2) // just a couple keys to keep it short
        .map(([k, v]) =>
            k.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace(/[^a-z]/gi, "") + "-" + v.toString().replace(/[^a-z0-9]/gi, "")
        );
    const hash = hashStyleObj(styleObj);
    return `ff-${parts.join("-").slice(0, 32)}-${hash}`;
}

function hashStyleObj(styleObj) {
    const str = JSON.stringify(styleObj);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash).toString(36).slice(0, 6); // Shorter but still unique-ish
}

function styleObjToCss(styleObj) {
    return Object.entries(styleObj)
        .map(([k, v]) => `${k.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}: ${v};`)
        .join(" ");
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

export const __only_for_test = { parseArguments, applyAttributes, styleObjToCss, insertedStyles };
