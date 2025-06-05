import { fetchLatestBuildStatus } from "./git-actions-api.js"
import { html } from '../_utils/fabrication-facility';

export async function getBuildStatusWidget() {
    try {
        const run = await fetchLatestBuildStatus();
        if (!run) {
            return `<strong>Error: No Builds Found</strong>`;
        }
        const obj = responseToObject(run);
        return buildHtml(obj);
    } catch (err) {
        return `<strong>Error: ${err.message}</strong>`;
    }
}

function responseToObject(run) {
    return {
        url: run.html_url,
        status: run.conclusion ?? run.status, // Why?: build might be running so no conclusion yet.
        message: run.display_title,
        author: run.actor.login,
        updated: run.updated_at
    }
}

function buildHtml({ url, status, message, author, updated }) {
    const className = `notification build-${status}`;
    return html('a', { href: url, class: className, target: "_blank" },
        'Build: ', html('b', status), '. ',
        html('small', `${message}: ${author} at ${updated}.`));
}

export const __only_for_test = { buildHtml, responseToObject };