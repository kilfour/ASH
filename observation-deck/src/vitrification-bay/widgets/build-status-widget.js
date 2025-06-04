import { fetchLatestBuildStatus } from "../git-api/git-actions-api.js"

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
    const hrefOpen = `<a href="${url}" class="notification build-${status}" target="_blank">`;
    const msg = `Build: <b>${status}</b>. <small>${message}: ${author} at ${updated}.</small>`;
    const hrefClose = `</a>`;
    return hrefOpen + msg + hrefClose;
}

export const __only_for_test = { buildHtml, responseToObject };