const BASE =
    import.meta.env.VITE_API_BASE || "http://localhost:5000";

export async function api(path, opts = {}) {
    const res = await fetch(BASE + path, {
        headers: { "Content-Type": "application/json" },
        ...opts,
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
}