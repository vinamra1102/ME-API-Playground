import { useState } from "react";
import { api } from "../lib/api";

export default function Search() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState(null);

  const go = () => api(`/api/search?q=${encodeURIComponent(q)}`)
    .then(setRes).catch(console.error);

  return (
    <div className="card">
      <h2>Search</h2>
      <input
        placeholder="try: python / react / forensic"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <button onClick={go}>Search</button>
      {res && <pre>{JSON.stringify(res, null, 2)}</pre>}
    </div>
  );
}
