import { useState } from "react";
import { api } from "../lib/api";

export default function Search() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState(null);
  const [err, setErr] = useState("");

  const go = () =>
    api(`/api/search?q=${encodeURIComponent(q)}`)
      .then(setRes).catch(e => setErr(e.message));

  return (
    <div className="card">
      <h2>Search</h2>
      <div className="row">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="try: python / react / forensic" />
        <button onClick={go}>Search</button>
      </div>
      {err && <pre>{err}</pre>}
      {res && <pre>{JSON.stringify(res, null, 2)}</pre>}
    </div>
  );
}
