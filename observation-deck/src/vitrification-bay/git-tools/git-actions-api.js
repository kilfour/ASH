export async function fetchLatestBuildStatus() {
    const url = `https://api.github.com/repos/kilfour/ASH/actions/runs`;
    const headers = { Accept: "application/vnd.github+json" };
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error("GitHub API error");
    const json = await res.json();
    return json.workflow_runs?.[0] ?? null;
}