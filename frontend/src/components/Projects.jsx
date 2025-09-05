import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [skill, setSkill] = useState("");
  const [err, setErr] = useState("");

  const load = (q = "") =>
    api(`/api/projects${q ? `?skill=${encodeURIComponent(q)}` : ""}`)
      .then(setProjects).catch(e => setErr(e.message));

  useEffect(() => { load(""); }, []);

  return (
    <div className="card">
      <h2>Projects</h2>
      <div className="row">
        <input placeholder="filter by skill (e.g., React)"
               value={skill} onChange={e => setSkill(e.target.value)} />
        <button onClick={() => load(skill)}>Search</button>
        <button onClick={() => { setSkill(""); load(""); }}>Reset</button>
      </div>
      {err && <pre>{err}</pre>}
      <ul>
        {projects.map(p => (
          <li key={p._id}>
            <b>{p.title}</b>
            <div className="muted">{p.description}</div>
            {p.skills?.length > 0 && (
              <div className="tags">
                {p.skills.map(s => <span key={s._id} className="tag">{s.name}</span>)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
